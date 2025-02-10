import { defineStore } from 'pinia'
import User, { AuthMetaData, UserMetaData } from '@/types/user'
import { AuthCsrfTokenResponse, AuthResponse, GlobalResponse, RequestError } from '@/types/response'
import axios from 'axios'
import { cloneDeep } from '@/services/utils/generalUtils'

interface AuthState {
    route: string
    user: Partial<User>
    userCopy: Partial<User>
    token?: string
    csrfToken?: string
    meta: AuthMetaData
    isAuthenticated: boolean
    loading: boolean
    requestErrors?: RequestError['errors']
}

export const useAuthStore = defineStore('auth-store', {
    state: (): AuthState => ({
        route: 'auth',
        user: {},
        meta: {
            languages: []
        },
        userCopy: {},
        isAuthenticated: false,
        loading: false
    }),
    actions: {
        async fetchCsrfToken() {
            this.loading = true
            try {
                const response = await axios.get<AuthCsrfTokenResponse<User>>(
                    `${this.route}/csrf-token`,
                    {
                        baseURL: `${import.meta.env.VITE_API_URL}` // Overriding baseURL for this request, it doesn't need "/api/v1"
                    }
                )
                this.csrfToken = response.data.token
            } finally {
                this.loading = false
            }
        },

        async login() {
            this.loading = true
            try {
                const response = await axios.post<AuthResponse<User>>(
                    `${this.route}/login`,
                    {
                        email: this.user.email,
                        password: this.user.password
                    },
                    {
                        baseURL: `${import.meta.env.VITE_API_URL}` // Overriding baseURL for this request, it doesn't need "/api/v1"
                    }
                )
                this.isAuthenticated = true
            } finally {
                this.loading = false
            }
        },

        async register() {
            this.loading = true
            try {
                const response = await axios.post<AuthResponse<User>>(
                    `${this.route}/register`,
                    {
                        name: this.user.name,
                        surname: this.user.surname,
                        email: this.user.email,
                        password: this.user.password,
                        passwordConfirmation: this.user.passwordConfirmation,
                    }
                )
                this.user = response.data.data
                this.isAuthenticated = true
            } finally {
                this.loading = false
            }
        },

        async logout() {
            this.loading = true
            try {
                await axios.post<AuthResponse<User>>(`${this.route}/logout`)
            } finally {
                this.loading = false
            }
        },

        async me() {
            this.loading = true
            try {
                const response = await axios.get<User>(
                    `${this.route}/user`
                )
                this.user = response.data
                this.userCopy = cloneDeep(this.user)

                return response
            } finally {
                this.loading = false
            }
        },

        async updateLanguage() {
            this.loading = true
            try {
                const response = await axios.post<GlobalResponse<User>>(
                    `${this.route}/update-language`,
                    {
                        languageId: this.userCopy.languageId
                    }
                )
                this.user = response.data.data

                return response
            } finally {
                this.loading = false
            }
        },

        async updateUser() {
            this.loading = true
            try {
                const params = (this.userCopy, {
                    indices: true
                })

                const response = await axios.post<GlobalResponse<User>>(
                    `${this.route}/update-basic-info`,
                    params
                )
                this.user = response.data.data
                this.userCopy = cloneDeep(this.user)

                return response
            } finally {
                this.loading = false
            }
        },

        async changePassword() {
            this.loading = true
            try {
                const response = await axios.post<GlobalResponse<User>>(
                    `${this.route}/update-password`,
                    this.userCopy
                )
                this.user = response.data.data

                return response
            } finally {
                this.loading = false
            }
        },

        async getMetaData() {
            const response = await axios.get<GlobalResponse<UserMetaData>>(
                `${this.route}/get-meta-data`
            )

            this.meta = response.data.data

            return response
        },

        resetState() {
            this.$reset()
        }
    }
})
