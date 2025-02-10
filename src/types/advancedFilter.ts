export default interface AdvancedFilter {
    sortDirection: 'asc' | 'desc'
    sortElement: string | number | symbol
    perPage: number
    page?: number
    search?: string
    filters?: Record<string, string | number | boolean>
}
