export default interface Permission {
    id: number
    title:
        | 'dashboard_access'
        | 'settings_access'
        | 'settings_basic'
        | 'user_access'
        | 'user_show'
        | 'user_create'
        | 'user_edit'
        | 'user_delete'
        | 'user_block'
        | 'user_unblock'
    dependencies: Permission[]
    dependent: Permission[]
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}
