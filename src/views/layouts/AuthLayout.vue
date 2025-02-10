<template>
   <div className="bg-gray-200 flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
    <div className="w-full md:max-w-lg">
    <UCard class="mx-auto p-2">
      <div class="flex items-center justify-between gap-6 mb-4">
        <Logo />
        <!-- <LocaleSwitch /> -->
      </div>
      <RouterView />
    </UCard>
  </div>
  </div>
</template>
<script setup lang="ts">
import Logo from "@/components/Logo.vue";
//import LocaleSwitch from "@/components/LocaleSwitch.vue";
</script>