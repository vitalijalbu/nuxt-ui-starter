import { defineStore } from 'pinia'
import type User from '@/types/user'
import { UserMetaData } from '@/types/user'
import { GlobalResponse } from '@/types/response'
import AdvancedFilter from '@/types/advancedFilter'
import Pagination from '@/types/pagination'
import axios from 'axios'


interface UserState {
    route: string
    user: Partial<User>
    users: User[]
    loadingIndex: boolean
    loadingSingle: boolean
    meta: UserMetaData
    advancedFilter: AdvancedFilter
    pagination: Pagination<User>
    selectedUserSlug?: User['slug']
}

export const useUserStore = defineStore('user-store', {
    state: (): UserState => ({
        route: 'users',
        user: {},
        users: [],
        meta: {
            roles: [],
            languages: []
        },
        advancedFilter: {
            perPage: 10,
            search: '',
            sortDirection: 'desc',
            sortElement: 'id'
        },
        pagination: {
            total: 0,
            links: [],
            data: []
        },
        loadingIndex: false,
        loadingSingle: false,
        selectedUserSlug: undefined
    }),

    actions: {
        async index() {
            if (this.advancedFilter.search === '') {
                this.loadingIndex = true
            }

            try {
                const response = await axios.get<
                    GlobalResponse<Pagination<User>>
                >(`${this.route}`, {
                    params: {
                        ...this.advancedFilter
                    }
                })

                this.users = response.data.data.data
                this.pagination.total = response.data.data.total
                this.pagination.links = response.data.data.links

                return response
            } finally {
                this.loadingIndex = false
            }
        },

        async store() {
            this.loadingSingle = true
            try {
                const response = await axios.post<GlobalResponse<User>>(
                    this.route,
                    this.user
                )

                this.user = response.data.data

                return response
            } finally {
                this.loadingSingle = false
            }
        },

        async show() {
            this.loadingSingle = true
            try {
                const response = await axios.get<GlobalResponse<User>>(
                    `${this.route}/${this.user?.slug}`
                )

                this.user = response.data.data

                return response
            } finally {
                this.loadingSingle = false
            }
        },

        async edit() {
            const response = await axios.get<GlobalResponse<User>>(
                `${this.route}/${this.user?.slug}/edit`
            )

            this.user = response.data.data

            return response
        },

        async update() {
            this.loadingSingle = true
            try {
                const params = (this.user, {
                    indices: true
                })
                params.set('_method', 'PUT')

                const response = await axios.post<GlobalResponse<User>>(
                    `${this.route}/${this.user?.slug}`,
                    params
                )

                this.user = response.data.data

                return response
            } finally {
                this.loadingSingle = false
            }
        },

        async destroy() {
            this.loadingSingle = true
            try {
                return await axios.delete<GlobalResponse>(
                    `${this.route}/${this.user?.slug}`
                )
            } finally {
                this.loadingSingle = false
            }
        },

        async block() {
            this.loadingSingle = true
            try {
                return await axios.post<GlobalResponse<User>>(
                    `${this.route}/${this.user?.slug}/block`
                )
            } finally {
                this.loadingSingle = false
            }
        },

        async unblock() {
            this.loadingSingle = true
            try {
                return await axios.post<GlobalResponse<User>>(
                    `${this.route}/${this.user?.slug}/unblock`
                )
            } finally {
                this.loadingSingle = false
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
        },

        resetSingleState() {
            this.user = {}
            this.loadingSingle = false
            this.selectedUserSlug = undefined
        },

        resetIndexState() {
            this.users = []
            this.meta = {
                roles: [],
                languages: []
            }
            this.advancedFilter = {
                perPage: 10,
                search: '',
                sortDirection: 'desc',
                sortElement: 'id'
            }
            this.pagination = {
                total: 0,
                links: [],
                data: []
            }
            this.loadingIndex = false
        }
    }
})
