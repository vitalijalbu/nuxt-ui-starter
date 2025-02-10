<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import { reactive, ref } from 'vue'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4 mb-4" @submit="onSubmit">
    <UFormField label="Email" name="email" required>
      <UInput v-model="state.email" class="w-full"/>
    </UFormField>

    <UFormField label="Password" name="password" required>
      <UInput v-model="state.password" type="password" class="w-full"/>
    </UFormField>

    <UButton type="submit" block>
      Accedi
    </UButton>
  </UForm>
  <UButton to="/login" color="neutral" variant="ghost" block>
    Password dimenticata?
  </UButton>
</template>

