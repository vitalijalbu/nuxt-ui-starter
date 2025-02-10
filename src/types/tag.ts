export default interface Tag {
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
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
    actions?: string
}