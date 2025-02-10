<template>
  <PageHeader title="Bentornato User!" />
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-4">
    <UCard> 22 </UCard>
    <UCard> 22 </UCard>
    <UCard> 22 </UCard>
    <UCard> ee </UCard>
    <UCard label="Active Users"> 1,234,123 </UCard>
    <UButton label="Open" color="neutral" variant="subtle" @click="open" />
  </div>
  <div v-if="isPending">Carico..</div>
  <ul v-for="item in data" :key="item.id">
    <li>{{ item.title }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { t } from "@/services/i18n";
import { ref } from 'vue';
import AlertModal from "@/components/common/AlertModal.vue";
import { useList } from "@/services/query/useList";
import { useDeleteOne } from "@/services/query/useDeleteOne";
const { data, isPending, isError } = useList({
  resource: 'posts'
});

console.log('tanstack-query-here', data, isPending, isError)

const toast = useToast()
const modal = useModal()

function open() {
  modal.open(AlertModal, {
    onSuccess() {
      toast.add({ title: 'Success!', id: 'modal-success', color: 'success' })
      modal.close()
    },
    onCancel() { // ✅ Change to "cancel"
      toast.add({ title: 'Canceled!', id: 'modal-canceled', color: 'error' })
    }
  })
}

</script>
