<template>
  <el-sub-menu v-if="item.children" :index="item.key">
    <template #title>
      <el-icon v-if="item.icon"><component :is="item.icon" /></el-icon>
      {{ item.label }}
    </template>
    <template v-for="subItem in item.children" :key="subItem.key">
      <MenuItem :item="subItem" />
    </template>
  </el-sub-menu>

  <el-menu-item v-else :index="item.key">
    <el-icon v-if="item.icon"><component :is="item.icon" /></el-icon>
    <RouterLink to={{item.to}}>{{ item.label }}</RouterLink>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

import { PropType } from "vue";

interface MenuItem {
  key: string;
  label: string;
  icon?: string;
  children?: MenuItem[];
}

defineProps({
  item: {
    type: Object as PropType<MenuItem>,
    required: true,
  },
});
</script>
