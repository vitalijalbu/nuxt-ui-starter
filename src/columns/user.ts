import Column from '@/types/column'
import { VueI18nTranslation } from 'vue-i18n'
import User from '@/types/user'
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import type { Row } from '@tanstack/vue-table'
import EBadge from './EBadge.vue'
import EDropdown from './EDropdown.vue'

const toast = useToast()

export const getUserColumns = (openDrawer, openDeleteModal) => (t: VueI18nTranslation): Column<User>[] => [
    {
        header: t('pages.users.fields.name'),
        accessorKey: 'name',
        sortable: true,
        filterable: true
    },
    {
        header: t('pages.users.fields.surname'),
        accessorKey: 'surname',
        sortable: true,
        filterable: true,
        cell: ({ row }) => row.getValue('surname') // Fix della cella
    },
    {
        accessorKey: 'email',
        header: t('pages.users.fields.email'),
        cell: ({ row }) => {
            return h(EBadge, { color: 'neutral' }, row.getValue('email'))
        }
    },
    {
        accessorKey: 'actions',
        align: 'right',
        header: t('global.actions'),
        cell: ({ row }) => {
            return h(EDropdown, { items: getUserActions(row, openDrawer, openDeleteModal) });
        }
    }
];

const getUserActions = (row: Row<User>, openDrawer, openDeleteModal) => [
    {
        type: 'label',
        label: 'Actions'
    },
    {
        label: 'Copy payment ID',
        onSelect() {
            navigator.clipboard.writeText(row.original.id);
            toast.add({
                title: 'Payment ID copied to clipboard!',
                color: 'success',
                icon: 'i-lucide-circle-check'
            });
        }
    },
    {
        type: 'separator'
    },
    {
        label: "Edit",
        icon: "i-lucide-pencil",
        onSelect() {
            openDrawer(row.original);
        }
    },
    {
        type: "separator"
    },
    {
        label: "Delete",
        icon: "i-lucide-trash",
        class: "text-red-500",
        onSelect() {
            openDeleteModal(row.original);
        }
    }
];
