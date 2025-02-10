import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { i18n } from '@/services/i18n'
import { piniaInstall } from '@/services/pinia'
import { abilitiesPlugin } from '@casl/vue'
import ability from './services/ability'
import { useAuthStore } from './stores/auth'
import { AuthRoutesNames, RouterNames } from '@/enums/generals/routerNames'
import { useTranslationStore } from './stores/translation'
import { axiosSetupDefaults, axiosSetupInterceptors } from './services/axios'
import { useAbilityStore } from './stores/ability'
import VueSafeHTML from 'vue-safe-html'
import 'element-plus/dist/index.css'
import '@/assets/styles/app.css'
import ElementPlus from 'element-plus'



const app = createApp(App)

piniaInstall(app)

const authStore = useAuthStore()
const translationStore = useTranslationStore()
const abilityStore = useAbilityStore()

axiosSetupDefaults()
await authStore.fetchCsrfToken()
axiosSetupInterceptors()

if (authStore.isAuthenticated) {
    await abilityStore.fetchAbilities()

    if (/^(\/login|\/register).*$/.test(location.pathname)) {
        if (location.pathname === '/') {
            router.push({
                name: RouterNames.DASHBOARD
            })
        }
    }
} else {
    if (!/^(\/login|\/register).*$/.test(location.pathname)) {
        if (location.pathname !== '/') {
            router.push({
                name: AuthRoutesNames.LOGIN
            })
        }
    }
}

//await translationStore.getLanguages()

app.use(i18n)
app.use(ElementPlus)
app.use(abilitiesPlugin, ability, { useGlobalProperties: true })
app.use(router)
app.use(VueSafeHTML, {
    allowedTags: [
        'div',
        'p',
        'ul',
        'ol',
        'li',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'br',
        'strong',
        'em',
        'a',
        'span',
        'img',
        'i'
    ]
})

app.mount('#app')
