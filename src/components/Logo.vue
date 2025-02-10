<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['dark', 'primary', 'white', 'big'].includes(value)
  }
});

const logoSrc = computed(() => {
  const logos = {
    primary: '/images/logo.svg',
    dark: '/images/logo-black.svg',
    white: '/images/logo-white.svg',
    big: '/images/logo-big.png'
  };
  return logos[props.variant] || logos.medium;
});


</script>

<template>
  <img :src="logoSrc" alt="Logo Eras" class="max-w-[200px]" />
</template>
