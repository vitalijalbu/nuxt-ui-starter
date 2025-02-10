import { h } from 'vue';
import { t } from '@/services/i18n';
import { RouterLink } from 'vue-router';

export const sidebarMenuLinks = [
  {
    key: '/dashboard',
    to: '/dashboard',
    exact: true,
    icon: 'i-lucide-home',
    type: 'link',
    label: t('menu.dashboard'),
  },
  {
    label: 'Demo',
    type: 'link',
    icon: 'i-lucide-home',
    key: '/demo',
    to: '/demo',
    exact: true,
    children: [
      {
        label: 'Rat',
        key: 'rat',
        to: '/demo',
        exact: true,
      },
    ],
  },
  {
    key: '/users',
    to: '/users',
    exact: true,
    icon: 'i-lucide-users',
    label: t('menu.users'),
  },
  {
    key: '/settings',
    to: '/settings',
    exact: true,
    icon: 'i-lucide-settings',
    label: t('menu.settings'),
  },
];
