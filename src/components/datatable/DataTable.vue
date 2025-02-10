<script setup lang="ts">
import { defineProps, useTemplateRef, computed } from 'vue'
import { getPaginationRowModel } from '@tanstack/vue-table'
import type { TableColumn } from '@nuxt/ui'
import { useList } from '@/services/query/useList'
import { t } from "@/services/i18n"

const props = defineProps({
  resource: {
    type: String,
    required: true
  },
  columns: {
    type: Array as () => TableColumn<any>[],
    required: true
  },
  pagination: {
    type: Object as () => { pageIndex: number; pageSize: number },
    required: false
  }
})

const table = useTemplateRef('table')

// Computed for pagination, sorting, and filtering
const pagination = computed(() => props.pagination || { pageIndex: 0, pageSize: 10 })

// Extract the sort and filters from the table
const sortAndFilters = computed(() => {
  const { tableApi } = table?.value ?? {}
  const { sorting, columnFilters } = tableApi?.getState() ?? {}

  // Sort parameters
  const sortBy = sorting?.[0]?.id ?? ''
  const sortOrder = sorting?.[0]?.desc ? 'desc' : 'asc'

  // Ensure columnFilters is defined and not empty
  const filters = columnFilters ? columnFilters.reduce((acc, filter) => {
    acc[filter.id] = filter.value
    return acc
  }, {}) : {}

  return { sortBy, sortOrder, filters }
})

// Fetch data with pagination, sort, and filter params
const { data: items, isPending, isError } = useList({
  resource: props.resource,
  pagination: pagination.value,
  sort: sortAndFilters.value.sortBy,
  order: sortAndFilters.value.sortOrder,
  filters: sortAndFilters.value.filters
})

console.log('tanstack-query-here', items, isPending, isError)
console.dir('columns', props.columns)
</script>

<template>
  <div class="bg-white rounded-lg shadow pb-2 relative w-full">
    <!-- Error Handling -->
    <div v-if="isError">
      <Result
        backUrl="/dashboard"
        :title="t('pages.404.title')"
        :description="t('pages.404.subTitle')"
        icon="i-lucide-home"
      />
    </div> 

    <!-- Empty State -->
    <div v-if="items?.length === 0">
      <Result
        backUrl="/dashboard"
        :title="t('pages.404.title')"
        :description="t('pages.404.subTitle')"
        icon="i-lucide-home"
      />
    </div>

    <!-- Data Table Wrapper for Horizontal Scroll -->
    <div class="w-full overflow-x-auto">
      <div class="min-w-full">
        <UTable 
          class="w-full"
          :loading="isPending"
          ref="table"
          v-model:pagination="pagination"
          :data="items"
          :row-selection="true"
          :columns="columns(t)"
          :pagination-options="{
            getPaginationRowModel: getPaginationRowModel()
          }" 
        />
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-center border-t border-(--ui-border) pt-4">
      <UPagination 
        :default-page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1"
        :items-per-page="table?.tableApi?.getState().pagination.pageSize"
        :total="table?.tableApi?.getFilteredRowModel().rows.length"
        @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)" 
      />
    </div>
  </div>
</template>


