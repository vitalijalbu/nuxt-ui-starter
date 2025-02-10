<template>
    <RouterView />
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { RouterNames } from '@/enums/generals/routerNames'
import router from '@/router'

onMounted(async () => {
    if (location.pathname === '/') {
        router.push({
            name: RouterNames.DASHBOARD
        })
    }
})
</script>
