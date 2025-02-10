<template>
  <USelectMenu
    v-model="currentLocale"
    :avatar="currentLocale?.avatar"
    :items="locales"
    :searchInput="false"
    class="w-40"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const locales = ref([
  {
    label: 'Italiano',
    value: 'it',
    avatar: {
      src: '/images/flag-it.svg',
      alt: 'Italiano'
    },
  },
  {
    label: 'English',
    value: 'en',
    avatar: {
      src: '/images/flag-en.svg',
      label: 'English',
    },
  },
]);

const currentLocale = ref(locales.value[0]);
</script>
