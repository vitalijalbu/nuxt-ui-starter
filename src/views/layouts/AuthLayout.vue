<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import LocaleSwitch from "@/components/LocaleSwitch.vue";
</script>

<template>
  <div
    class="bg-gray-100 h-lvh flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0"
  >
    <el-card class="w-full md:w-96" shadow="none">
      <div class="flex items-center justify-between gap-6 mb-4">
        <Logo />
        <LocaleSwitch />
      </div>
      <RouterView />
    </el-card>
  </div>
</template>
