<template>
  <el-card shadow="never">
  <el-table :data="data" class="w-full">
    <el-table-column v-if="selectable" type="selection" width="55" />
    <el-table-column
      v-for="col in columns"
      :key="col.prop"
      :prop="col.prop"
      :label="col.label"
      :width="col.width"
      :show-overflow-tooltip="col.tooltip"
    />
  </el-table>
  <el-pagination layout="prev, pager, next" :total="50" />
</el-card>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface Column {
  prop: string;
  label: string;
  width?: number;
  tooltip?: boolean;
}

defineProps<{ 
  columns: Column[], 
  data: Record<string, any>[]
  selectable?: boolean;
}>();
</script>
