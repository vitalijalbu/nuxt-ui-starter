<template>
  <div class="flex text-center py-2 mb-4" v-if="showLogo">
    <Logo />
  </div>
  <UNavigationMenu
    orientation="vertical"
    :items="sidebarMenuLinks"
    class="data-[orientation=vertical]:w-full"
    @click="handleItemClick"
  />
</template>


<script setup lang="ts">
import { sidebarMenuLinks } from "./menu";
defineProps({
  showLogo: { type: Boolean, default: true },
});

// Emit event when clicking on a menu item
const emit = defineEmits(["closeDrawer"]);

const handleItemClick = () => {
  emit("closeDrawer");
  console.log('closeee')
};
</script>
