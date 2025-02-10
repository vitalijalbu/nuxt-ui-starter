<template>
    <UApp :locale="config.locale" :toaster="config.toaster">
        <RouterView />
    </UApp>
    <VueQueryDevtools />
</template>

<script setup>
import { it } from '@nuxt/ui/locale'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';

const config = {
    locale: {
        code: 'it',
        name: 'Italiano',
    },
    toaster: {
        position: 'top-right',
        duration: 1500,
        swipeThreshold: 10,
        expand: false,
        progress: false,
    },
}
</script>
