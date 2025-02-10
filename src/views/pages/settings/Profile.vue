<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import { reactive } from 'vue'
import PageHeader from '@/components/PageHeader.vue'

// ✅ Define schema
const schema = z.object({
  email: z.string().email('Email non valida'),
  password: z.string()
})

type Schema = z.output<typeof schema>

// ✅ Use reactive() for state
const state = reactive<Partial<Schema>>({
  email: '',
  password: ''
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log('🚀 Form Submitted:', { email: state.email, password: state.password })

  toast.add({
    title: 'Successo!',
    description: 'Il modulo è stato inviato correttamente.',
    color: 'success',
    progress: false
  })
}
</script>

<template>
  <PageHeader title="Modifica profilo" backUrl="/settings" />

  <UCard>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit" id="formProfile">
      <div class="grid grid-cols-2 gap-4">
        <UFormField label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormField>
      </div>
    </UForm>

    <!-- External Button -->
    <template #footer>
      <UButton type="submit" color="primary" :disabled="!state.email || !state.password" form="formProfile">
        Salva
      </UButton>
    </template>
  </UCard>

</template>
