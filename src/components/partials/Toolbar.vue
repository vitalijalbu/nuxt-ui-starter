<template>
  <header class="toolbar bg-white ml-auto">
    <div class="flex items-center gap-2">
      <!-- <LocaleSwitch /> -->
      <UDropdownMenu :items="items">
        <UButton
          label="Il mio profilo"
          color="neutral"
          variant="ghost"
          :avatar="{ src: 'https://github.com/nuxt.png' }"
          trailing-icon="i-lucide-chevron-down"
          :ui="{
            trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
          }"
        />
      </UDropdownMenu>
    </div>
  </header>
</template>


<script lang="ts" setup>
//import LocaleSwitch from "@/components/LocaleSwitch.vue";
import AlertModal from "@/components/common/AlertModal.vue";
import { IconHome, IconUserCircle, IconLogout } from "@tabler/icons-vue";
import { t } from "@/services/i18n";
import { h } from "vue";

const toast = useToast()
const modal = useModal()

const items = [
  [
    {
      label: "Impostazioni",
      key: "/settings",
      exact: true,
      to: "/settings",
      icon: "i-lucide-settings",
    },
    {
      label: "Il mio profilo",
      key: "/settings/profile",
      exact: true,
      to: "/settings/profile",
      icon: "i-lucide-settings",
    },
  ],
  [
    {
      label: "Esci",
      type: "button",
      color: "error" as const,
      icon: "i-lucide-log-out",
      onSelect() {
        handleLogout()
      }
    },
  ],
];


function handleLogout (){
  modal.open(AlertModal, {
    title: "Logout",
    confirmButton: "Logout",
    cancelButton: "Cancel",
    description: "Are you sure you want to logout?",
    onSuccess() {
      toast.add({ title: 'Success!', id: 'modal-success', color: 'success' })
      modal.close()
    },
    onCancel() { // ✅ Change to "cancel"
      toast.add({ title: 'Canceled!', id: 'modal-canceled', color: 'error' })
    }
  })
}

</script>
