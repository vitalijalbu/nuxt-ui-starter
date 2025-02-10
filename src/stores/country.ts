import { defineStore } from 'pinia'
import axios from 'axios'
import { GlobalResponse } from '@/types/response'
import Country from '@/types/country'

interface CountryStore {
    countries: Country[]
    route: string
    loading: boolean
}

export const useCountryStore = defineStore('country-store', {
    state: (): CountryStore => ({
        countries: [],
        loading: false,
        route: 'countries'
    }),

    actions: {
        async index() {
            this.loading = true

            try {
                const response = await axios.get<GlobalResponse<Country[]>>(
                    this.route
                )

                this.countries = response.data.data

                return response
            } finally {
                this.loading = false
            }
        }
    }
})
