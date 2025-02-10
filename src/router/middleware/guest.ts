import { RouterNames } from '@/enums/generals/routerNames'
import { useAuthStore } from '@/stores/auth'

export default function guest() {
    const authStore = useAuthStore()

    if (authStore.isAuthenticated) {
        return { name: RouterNames.DASHBOARD }
    }
}
