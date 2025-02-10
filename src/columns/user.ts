import Column from '@/types/column'
import User from '@/types/user'
import { VueI18nTranslation } from 'vue-i18n'

export const userColumns = (t: VueI18nTranslation): Column<User>[] => [
    {
        label: t('types.users.fields.name'),
        key: 'name',
        sortable: true,
        filterable: true
    },
    {
        label: t('types.users.fields.surname'),
        key: 'surname',
        sortable: true,
        filterable: true
    },
    {
        label: t('types.users.fields.email'),
        key: 'email',
        sortable: true,
        filterable: true
    },
    {
        label: t('types.users.fields.status'),
        key: 'status',
        sortable: true,
        filterable: true
    }
]
