<template>
    <UDropdownMenu
      :items="items"
    >
      <UButton icon="i-lucide-ellipsis" color="neutral" variant="outline" />
    </UDropdownMenu>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    items: Array<any>
  }>();
  </script>
  