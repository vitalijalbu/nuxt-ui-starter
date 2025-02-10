import Permission from './permission'
import PermissionCategory from './permissionCategory'

export default interface Role {
    id: number
    slug: string
    title: string
    defaultFg: boolean
    permissionIds: Permission['id'][]
    permissions?: Permission[]
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}

export interface RoleMetaData {
    permissionCategories: PermissionCategory[]
}
