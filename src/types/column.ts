export default interface Column<t = any> {
    key: keyof t
    sortable?: boolean
    filterable?: boolean
    label?: string
    helper?: string
    relation?: 'single' | 'multiple'
    translationElement?: string
    reduce?: string
}
