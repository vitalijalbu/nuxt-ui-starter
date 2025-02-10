import { ActiveRouteNames } from '@/enums/generals/routerNames'
import { Icons } from './styles'

interface SidebarElementBase {
    icon?: Icons
    label: string
    separator: boolean
    routeName?: string
    sidebarStoreKey?: string
    permission: boolean
    activeRoute?: ActiveRouteNames
}

export default interface SidebarElementType extends SidebarElementBase {
    children?: SidebarElementBase[]
}
