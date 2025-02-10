import { RequestError } from '@/types/response'
import { defineStore } from 'pinia'

interface ErrorState {
    globalErrors: { [key: string]: string }
    specificErrors: { [key: string]: string }
    requestErrors: { [key: string]: RequestError['errors'] }
}

export const useErrorStore = defineStore('error-store', {
    state: (): ErrorState => ({
        globalErrors: {},
        specificErrors: {},
        requestErrors: {}
    }),
    actions: {
        resetState() {
            this.$reset()
        }
    }
})
