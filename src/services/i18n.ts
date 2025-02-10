import { createI18n } from 'vue-i18n'
import en from '@/lang/en.json'
import it from '@/lang/it.json'

const i18n = createI18n({
    allowComposition: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        it,
        en
    }
})

const t = i18n.global.t

export { i18n, t }
