<template>
  <el-select v-model="currentLocale" placeholder="Select" class="w-[120px]">
    <el-option v-for="item in locales" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
</template>

<script lang="ts" setup>
const currentLocale = 'it'

const locales = [
  {
    label: '🇮🇹 Italiano',
    value: 'it'
  },
  {
    label: '🇬🇧 English',
    value: 'en'
  }
]
</script>
