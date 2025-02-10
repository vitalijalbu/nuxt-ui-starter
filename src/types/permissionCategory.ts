import Permission from './permission'

export default interface PermissionCategory {
    id: number
    name: string
    permissions: Permission[]
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}
