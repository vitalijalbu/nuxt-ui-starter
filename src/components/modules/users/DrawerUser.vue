<template>
  <USlideover
    v-model:open="isOpen"
    title="Crea nuovo utente"
    description="This is useful when you want a form in a Slideover."
  >
    <template #body>
      <pre>{{ props.selectedUser.value }}</pre>

      <UForm
        class="space-y-4"
        :schema="schema"
        :state="state"
        @submit="onSubmit"
      >
        <UFormField label="Email" name="email" required>
          <UInput v-model="state.email" />
        </UFormField> 

        <UFormField label="Ruolo" name="role" required>
          <USelect v-model="state.role" :items="userRoles" />
        </UFormField>
      </UForm>
    </template>

    <template #footer>
      <div class="flex justify-end space-x-4">
        <UButton
          block
          :disabled="!state.email"
          type="submit"
          :label="t('global.save')"
          color="primary"
        />
        <UButton
          block
          :label="t('global.cancel')"
          color="neutral"
          variant="outline"
          @click="closeSlideover"
        />
      </div>
    </template>
  </USlideover>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, reactive, ref } from "vue";
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { t } from "@/services/i18n";

// Props & emits per gestire lo stato del Slideover
const props = defineProps({
  modelValue: { type: Boolean, required: true },
  selectedUser: { type: Object, default: () => ({}) } // Default a oggetto vuoto
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});

const closeSlideover = () => {
  isOpen.value = false;
};

// Opzioni per il select (Ruoli Utente)
const userRoles = ref([
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "User", value: "user" }
]);

// Schema di validazione
const schema = z.object({
  email: z.string().email("Invalid email"),
  role: z.string(),
});

type Schema = z.output<typeof schema>;

// Mostra l'utente come stringa JSON
const formattedUser = computed(() => JSON.stringify(props.selectedUser.value, null, 2));

const state = reactive<Partial<Schema>>({
  email: "",
  role: "",
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}
</script>
