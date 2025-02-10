<template>
  <div
    class="bg-gray-200 h-lvh flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
  >
    <Result
      backUrl="/dashboard"
      :title="t('pages.404.title')"
      :description="t('pages.404.subTitle')"
      icon="i-lucide-home"
    />
  </div>
</template>

<script lang="ts" setup>
import { t } from "@/services/i18n";
</script>
