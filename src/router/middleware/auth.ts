import { AuthRoutesNames } from '@/enums/generals/routerNames'
import { useAuthStore } from '@/stores/auth'

export default function auth() {
    const authStore = useAuthStore()

    if (!authStore.isAuthenticated) {
        return { name: AuthRoutesNames.LOGIN }
    }
}
