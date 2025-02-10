import { defineStore } from 'pinia'
import type Notification from '@/types/notification'
import { NotificationType } from '@/enums/notifications/notificationType'
import { GeneralSettings } from '@/enums/settings/generalSettings'
import Pagination from '@/types/pagination'
import AdvancedFilter from '@/types/advancedFilter'
import { generateCasualString } from '@/services/utils/generalUtils'

interface NotificationStore {
    notificationsQueue: Array<Notification>
    advancedFilter: AdvancedFilter
    pagination: Pagination<Notification>
    loading: boolean
    route: string
}

export const useNotificationStore = defineStore('notification-store', {
    state: (): NotificationStore => ({
        advancedFilter: {
            page: 1,
            perPage: 10,
            search: '',
            sortDirection: 'desc',
            sortElement: 'id'
        },
        notificationsQueue: [],
        loading: false,
        pagination: {
            total: 0,
            links: [],
            data: []
        }
    }),
    actions: {
        addNotificationToQueue(notification: Notification) {
            if (!notification.id) {
                notification.id = generateCasualString()
            }

            this.notificationsQueue.push({
                ...notification,
                visibleTimer:
                    GeneralSettings.VISIBILE_NOTIFICATION_TIME as number
            })
        },

        removeNotificationFromQueue(notificationId: Notification['id']) {
            const foundIndex = this.notificationsQueue.findIndex(
                (notification) => {
                    return notification.id == notificationId
                }
            )

            this.notificationsQueue.splice(foundIndex, 1)
        },

        updateNotificationTimer(
            notification_id: number | string,
            newTime: number
        ) {
            const foundIndex = this.notificationsQueue.findIndex(
                (notification) => {
                    return notification.id == notification_id
                }
            )

            if (newTime <= 0) {
                this.removeNotificationFromQueue(notification_id)
                return
            }

            this.notificationsQueue[foundIndex].visibleTimer = newTime

            this.notificationsQueue = [...this.notificationsQueue]
        }
    }
})
