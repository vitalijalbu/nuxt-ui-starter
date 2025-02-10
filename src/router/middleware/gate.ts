import { RouterNames } from '@/enums/generals/routerNames'
import { RouteLocationNormalized } from 'vue-router'

export default function gate(t: RouteLocationNormalized) {
    if (t.meta.permissions) {
        return { name: RouterNames.NOT_FOUND }
    }
}
