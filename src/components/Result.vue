<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  backUrl: String,
  title: String,
  description: String,
  image: String,
  icon: String,
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
  <div class="flex flex-col items-center text-center max-w-lg mx-auto">

    <div v-if="image || icon" class="mb-4">
      <img v-if="image" :src="image" class="w-24 h-24 object-cover rounded-full mx-auto" alt="Result Image" />
      <Icon v-else-if="icon" :name="`lucide:${icon}`" class="w-16 h-16 text-gray-500 dark:text-gray-400" />
    </div>

    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ title }}</h2>
    <p v-if="description" class="text-gray-500 dark:text-gray-400 mt-2">{{ description }}</p>

    <div v-if="$slots.content" class="mt-4 w-full">
      <slot name="content" />
    </div>
    <UButton @click="goBack" label="Go back" class="cursor-pointer" variant="soft" color="neutral" v-if="props.backUrl" icon="i-lucide-arrow-left"/>
  </div>
</template>
