<template>
    <el-page-header :back="goBack">
      <template #content>
        <span class="text-large font-600 mr-3"> {{ title }} </span>
      </template>
    </el-page-header>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  

  const props = defineProps({
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  })
  

  const goBack = () => {
    router.push(props.url)
  }
  </script>
  