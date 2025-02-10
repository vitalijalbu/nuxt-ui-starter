import { NotificationType } from '@/enums/notifications/notificationType'

export default interface Notification {
    id?: string | number
    title: string
    description?: string
    type: NotificationType
    visibleTimer?: number
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}
