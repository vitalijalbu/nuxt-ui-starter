import { useAuthStore } from '@/stores/auth'
import { useErrorStore } from '@/stores/error'
import { RequestError } from '@/types/response'
import axios, { AxiosError } from 'axios'
import { NotificationType } from '@/enums/notifications/notificationType'
import { useNotificationStore } from '@/stores/notification'
import { t } from './i18n'

export const axiosSetupDefaults = () => {
    axios.defaults.withCredentials = true
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}/api/v1`
}

export const axiosSetupInterceptors = () => {
    const authStore = useAuthStore()
    const errorStore = useErrorStore()
    const notificationStore = useNotificationStore()

    axios.interceptors.request.use((request) => {
        const csrfToken = authStore.csrfToken

        if(request.headers && csrfToken) {
            request.headers['X-CSRF-TOKEN'] = csrfToken
        }

        if (request.url) {
            delete errorStore.requestErrors[request.url]
            delete errorStore.globalErrors[request.url]
        }

        return request
    })

    axios.interceptors.response.use(
        (response) => {
            return response
        },
        (error: AxiosError<RequestError>) => {
            const url = error.config?.url as string

            if (axios.isCancel(error as AxiosError<RequestError>)) {
                return Promise.reject(error)
            }

            if (error.response?.status === 401) {
                authStore.isAuthenticated = false
                location.reload()
            } else if (error.response?.status === 422) {
                errorStore.requestErrors[url] = error.response.data.errors
            } else if (
                error.response?.status === 412 ||
                error.response?.status === 403
            ) {
                errorStore.specificErrors[url] = error.response.data.message!
            } else if (error.response?.status === 406) {
                notificationStore.addNotificationToQueue({
                    type: NotificationType.ERROR,
                    title: t('global.operationNotPermitted')
                })
            } else {
                errorStore.globalErrors[url] =
                    error.response?.data.messages || error.message

                notificationStore.addNotificationToQueue({
                    type: NotificationType.ERROR,
                    title: t('global.serverError')
                })
            }

            return Promise.reject(error)
        }
    )
}
