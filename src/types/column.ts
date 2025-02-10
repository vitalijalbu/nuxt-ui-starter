export default interface Column<t = any> {
    accessorKey: keyof t
    sortable?: boolean
    filterable?: boolean
    id?: string
    align?: string
    header?: any
    helper?: string
    cell?: any
    relation?: 'single' | 'multiple'
    translationElement?: string
    reduce?: string
}
