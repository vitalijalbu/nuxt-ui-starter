export default interface Breadcrumb {
    name: string
    route?: {
        name: string
        params?: {
            [key: string]: string | number | []
        }
    }
}
