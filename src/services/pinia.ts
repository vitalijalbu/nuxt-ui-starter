import { i18n } from '@/services/i18n'
import router from '@/router'
import { createPinia } from 'pinia'
import { markRaw } from 'vue'
import { VueI18nTranslation } from 'vue-i18n'
import type { Router } from 'vue-router'

declare module 'pinia' {
    export interface PiniaCustomProperties {
        router: Router
        t: VueI18nTranslation
    }
}

export const piniaInstall = (app: any) => {
    const pinia = createPinia()
    const t = i18n.global.t
    pinia.use(({ store }) => {
        store.router = markRaw(router)
        store.t = markRaw(t)
    })
    app.use(pinia)
}
