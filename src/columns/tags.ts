import type { TableColumn } from '@nuxt/ui'
import User from '@/types/user'

export const tagColumns: TableColumn<Tag>[] = [
    { title: 'pages.users.fields.name', accessorKey: 'name' },
    { title: 'pages.users.fields.surname', accessorKey: 'surname', cell: () => `demo custom` },
    { title: 'pages.users.fields.email', accessorKey: 'email' },
    { title: 'pages.users.fields.status', accessorKey: 'status' },
    { title: 'azioni', accessorKey: 'actions' }
];
