import { defineStore } from 'pinia'
import Role from '@/types/role'
import axios from 'axios'
import { GlobalResponse } from '@/types/response'
import ability from '@/services/ability'
import { AbilityBuilder, PureAbility } from '@casl/ability'

interface AbilityStore {
    roles: Role['title'][]
    route: string
    loading: boolean
}

export const useAbilityStore = defineStore('ability-store', {
    state: (): AbilityStore => ({
        roles: [],
        route: 'abilities',
        loading: false
    }),

    actions: {
        async fetchAbilities() {
            this.loading = true

            try {
                // TODO: Fix with the actual call
                /* const response = await axios.get<
                    GlobalResponse<Role['title'][]>
                >(this.route) */

                // TODO: restore reading from response rather than the hardcoded list of abilities
                //this.roles = response.data.data
                this.roles = [
                    'dashboard_access'
                    , 'settings_access'
                    , 'settings_basic'
                    , 'user_access'
                    , 'user_show'
                    , 'user_create'
                    , 'user_edit'
                    , 'user_delete'
                    , 'user_block'
                    , 'user_unblock'
                ];

                const { can, rules } = new AbilityBuilder(PureAbility)
                can(this.roles)
                ability.update(rules as any)
            } finally {
                this.loading = false
            }
        }
    }
})
