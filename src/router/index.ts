import {
    ActiveRouteNames,
    AuthRoutesNames,
    RouterNames,
    UserRoutesNames
} from '@/enums/generals/routerNames'
import { createRouter, createWebHistory } from 'vue-router'
import guest from './middleware/guest'
import auth from './middleware/auth'
import gate from './middleware/gate'
import { can } from '@/services/ability'

declare module 'vue-router' {
    interface RouteMeta {
        activeRoute?: ActiveRouteNames
        permissions?: boolean
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@layouts/RedirectHomePage.vue'),
            children: [
                // Auth routes
                {
                    path: '',
                    component: () => import('@layouts/AuthLayout.vue'),
                    children: [
                        {
                            path: '/login',
                            name: AuthRoutesNames.LOGIN,
                            component: () =>
                                import('@/views/pages/auth/Login.vue'),
                            beforeEnter: [guest]
                        },
                        {
                            path: '/register',
                            name: AuthRoutesNames.REGISTER,
                            component: () =>
                                import('@/views/pages/auth/Register.vue'),
                            beforeEnter: [guest]
                        },
                        {
                            path: '/forgot-password',
                            name: AuthRoutesNames.FORGOT_PASSWORD,
                            component: () =>
                                import('@/views/pages/auth/ForgotPassword.vue'),
                            beforeEnter: [guest]
                        },
                        {
                            path: '/reset-password',
                            name: AuthRoutesNames.RESET_PASSWORD,
                            component: () =>
                                import('@/views/pages/auth/ResetPassword.vue'),
                            beforeEnter: [guest]
                        }
                    ]
                },

                // App routes
                {
                    path: '',
                    component: () => import('@layouts/AppLayout.vue'),
                    children: [
                        {
                            path: 'dashboard',
                            redirect: { name: RouterNames.DASHBOARD },
                            meta: {
                                activeRoute: ActiveRouteNames.DASHBOARD
                            },
                            children: [
                                {
                                    path: '',
                                    name: RouterNames.DASHBOARD,
                                    component: () =>
                                        import(
                                            '@/views/pages/dashboard/Index.vue'
                                        ),
                                    //beforeEnter: [auth, gate],
                                    meta: {
                                        //permissions: can('dashboard_access')
                                    }
                                }
                            ]
                        },

                        //settings
                        {
                            path: 'settings',
                            redirect: { name: RouterNames.SETTINGS },
                            meta: {
                                activeRoute: ActiveRouteNames.SETTINGS
                            },
                            children: [
                                {
                                    path: '',
                                    name: RouterNames.SETTINGS,
                                    component: () =>
                                        import(
                                            '@/views/pages/settings/Index.vue'
                                        ),
                                    //beforeEnter: [auth, gate],
                                    meta: {
                                        //permissions: can('dashboard_access')
                                    }
                                },
                                {
                                    path: 'profile',
                                    name: RouterNames.SETTINGS_PROFILE,
                                    component: () =>
                                        import(
                                            '@/views/pages/settings/Profile.vue'
                                        ),
                                    //beforeEnter: [auth, gate],
                                    meta: {
                                        //permissions: can('dashboard_access')
                                    }
                                },
                                {
                                    path: 'roles',
                                    name: RouterNames.USERS_ROLES,
                                    component: () =>
                                        import(
                                            '@/views/pages/settings/roles/Index.vue'
                                        ),
                                    //beforeEnter: [auth, gate],
                                    meta: {
                                        //permissions: can('dashboard_access')
                                    }
                                }
                            ]
                        },

                        //Users
                        {
                            path: 'users',
                            redirect: { name: UserRoutesNames.INDEX },
                            meta: {
                                activeRoute: ActiveRouteNames.USERS
                            },
                            children: [
                                {
                                    path: '',
                                    name: UserRoutesNames.INDEX,
                                    component: () =>
                                        import('@/views/pages/users/Index.vue'),
                                    //beforeEnter: [auth, gate],
                                    meta: {
                                        //permissions: can('user_access')
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    path: '/:catchAll(.*)',
                    component: () =>
                        import('@/views/layouts/NotFoundLayout.vue')
                },
                {
                    path: '/404',
                    name: RouterNames.NOT_FOUND,
                    component: () =>
                        import('@/views/layouts/NotFoundLayout.vue')
                }
            ]
        }
    ]
})

export default router
