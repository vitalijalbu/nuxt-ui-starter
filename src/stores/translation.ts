import { defineStore } from 'pinia'
import { i18n } from '@/services/i18n'
import axios from 'axios'
import moment from 'moment'
import 'moment/dist/locale/it'
import Language from '@/types/language'
import Translation from '@/types/translation'
import { GlobalResponse } from '@/types/response'

const route = 'translations'
const defaultLocale = 'en'

interface translationStore {
    languages: Language[]
    loading: boolean
}

export const useTranslationStore = defineStore('translation-store', {
    state: (): translationStore => ({
        languages: [],
        loading: false
    }),
    actions: {
        async getLanguages() {
            this.loading = true
            try {
                const response = await this.getAvailableLanguages()

                await this.handleTranslations(response.data.data.locale)

                return response
            } finally {
                this.loading = false
            }
        },

        async getAvailableLanguages() {
            this.loading = true
            try {
                const response = await axios.get<GlobalResponse<Translation>>(
                    `${route}/get-available-languages`
                )

                this.languages = response.data.data.languages

                return response
            } catch (error) {
                // Default language
                const response = {
                    data: {
                        data: {
                            languages: [
                                {
                                    id: 1,
                                    name: defaultLocale,
                                    code: defaultLocale.toUpperCase(),
                                    flag: `/images/flag-${defaultLocale}.svg`
                                }
                            ],
                            locale: defaultLocale
                        }
                    }
                }
                this.languages = response.data.data.languages
                return response
            } finally {
                this.loading = false
            }
        },

        async handleTranslations(locale: string) {
            this.loading = true

            try {
                if (
                    this.languages.findIndex((language) => {
                        return language.code == locale.toUpperCase()
                    }) == -1
                ) {
                    return Promise.resolve()
                }

                i18n.global.locale = locale as 'it' | 'en'

                moment.updateLocale(locale, { week: { dow: 1 } })
            } finally {
                this.loading = false
            }
        }
    }
})
