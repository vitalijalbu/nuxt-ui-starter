export default interface Pagination<T = void> {
    data: T[]
    total: number
    currentPage?: number
    firstPageUrl?: string
    from?: number
    lastPage?: number
    lastPageUrl?: string
    links: {
        active: boolean
        url: string | null
        label: string
    }[]
    nextPageUrl?: string | null
    path?: string
    perPage?: number
    prevPageUrl?: string | null
    to?: number
}
