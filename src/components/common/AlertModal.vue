<template>
  <UModal v-model="model" :title="title" icon="i-heroicons-exclamation-circle">
    <template #body>
      <div class="text-center">
        <p>{{ description }}</p>
      </div>
    </template>
    <template #footer>
      <div class="flex gap-2">
        <UButton color="neutral" variant="outline" :label="cancelButton" @click="onCancel" />
        <UButton :label="confirmButton" @click="onSuccess" />
      </div>
    </template>
  </UModal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const model = ref(false)

const modal = useModal()

const props = defineProps({
  title: { type: String, default: "Confirm Action" },       
  description: { type: String, default: "Are you sure?" }, 
  confirmButton: { type: String, default: "Confirm" },      
  cancelButton: { type: String, default: "Cancel" }        
});

const emit = defineEmits(['success', 'cancel'])

function onSuccess() {
  emit('success')
}
function onCancel() {
  emit('cancel')
  modal.close()
}
</script>