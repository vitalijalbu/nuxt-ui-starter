import { h } from "vue";
import { RouterLink } from "vue-router";
import { 
  IconSettings, IconUsers, IconMessage, 
  IconMenu, IconHome 
} from "@tabler/icons-vue";
import { t } from "@/services/i18n";

export const sidebarMenuLinks = [
  {
    key: "/dashboard",
    to: "/dashboard",
    label: "Dashboard",
    icon: () => h(IconHome),
  },  
  {
    key: "/users",
    to: "/users",
    label: t("types.users.title"),
    icon: () => h(IconUsers),
  }, 
  {
    key: "/settings",
    to: "/settings",
    label: t("global.settings"),
    icon: () => h(IconSettings),
  },
  {
    key: "1",
    label: "Navigator One",
    icon: () => h(IconMessage),
    children: [
      {
        label: "Group 1",
        key: "1-group-1",
        children: [
          { label: "Option 1", key: "1-1" },
          { label: "Option 2", key: "1-2" },
        ],
      },
      {
        label: "Deep Nested",
        key: "1-group-3",
        children: [
          {
            label: "Level 2",
            key: "1-2",
            children: [
              {
                label: "Level 3",
                key: "1-2-1",
                children: [
                  { label: "Level 4 - Final", key: "1-2-1-1" },
                ],
              },
            ],
          },
        ],
      },
    ],
  }
];
