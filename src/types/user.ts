import Language from './language'
import Role from './role'
import { UserStatus } from '@/enums/users/userStatus'

export default interface User {
    id: number
    slug: string
    name: string
    fullName: string
    surname: string
    email: string
    newEmail: string
    emailConfirmation: string
    password?: string
    newPassword?: string
    passwordConfirmation?: string
    token: string
    status: UserStatus
    roleIds?: Role['id'][]
    roleId?: Role['id']
    roles?: Role[]
    languageId: Language['id']
    language?: Language
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
    actions?: string
}

export interface UserMetaData {
    roles: Role[]
    languages: Language[]
}

export interface AuthMetaData {
    languages: Language[]
}
