<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  title: String,
  subtitle: String,
  backUrl: String,
});
const router = useRouter();

const goBack = () => {
  if (props.backUrl) {
    router.push(props.backUrl);
  } else {
    router.back();
  }
};
</script>

<template>
  <div class="flex items-center justify-between mb-2">
    <div class="flex items-center gap-4">
      <!-- Pulsante Back -->
      <UButton @click="goBack" class="cursor-pointer" variant="soft" color="neutral" v-if="props.backUrl" icon="i-lucide-arrow-left"/>

      <!-- Titolo & Sottotitolo -->
      <div>
        <h1 class="text-xl font-bold text-gray-900 dark:text-white">{{ title }}</h1>
        <p v-if="subtitle" class="text-sm text-gray-500 dark:text-gray-400">{{ subtitle }}</p>
      </div>
    </div>

    <!-- Azioni extra -->
    <div v-if="$slots.extra" class="flex items-center space-x-2">
      <slot name="extra" />
    </div>
  </div>
</template>
