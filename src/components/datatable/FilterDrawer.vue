<template>
    <el-drawer
      v-model:visible="visible"
      title="Filtri"
      :before-close="resetFilters"
      size="400px"
    >
      <el-form :model="filters">
        <el-form-item v-for="column in filterableColumns" :key="column.key" :label="column.label">
          <el-input v-model="filters[column.key]" placeholder="Filtro per {{ column.label }}" />
        </el-form-item>
        <el-button @click="applyFilters" type="primary">Applica</el-button>
        <el-button @click="resetFilters" type="default">Resetta</el-button>
      </el-form>
    </el-drawer>
  </template>
  
  <script lang="ts" setup>
  import { ref, defineProps, defineEmits } from 'vue';
  import { ElDrawer, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
  
  defineProps<{
    filters: Record<string, string>;
    filterableColumns: Array<{ key: string; label: string; prop: string }>;
    visible: boolean;
  }>();
  
  const emit = defineEmits<{
    (event: 'apply-filters', newFilters: Record<string, string>): void;
    (event: 'reset-filters'): void;
  }>();
  
  const filters = ref<Record<string, string>>({});
  const visible = ref(false);
  
  const applyFilters = () => {
    emit('apply-filters', filters.value);
  };
  
  const resetFilters = () => {
    filters.value = {};
    emit('reset-filters');
  };
  
  watch(() => props.visible, (newVal) => {
    if (newVal) {
      filters.value = { ...props.filters }; // Pre-carica i filtri dal genitore
    }
  });
  </script>
  