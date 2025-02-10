<template>
  <PageHeader :title="t('pages.users.title')">
    <template #extra>
      <UButton color="primary" icon="lucide:plus" @click="openDrawer()" :label="t('global.add')"/>
    </template>
  </PageHeader>

  <!-- Drawer per Creazione/Modifica -->
  <DrawerUser v-model="drawerOpen" :selectedUser="selectedUser" />

  <!-- DataTable con colonne dinamiche -->
  <DataTable :resource="'users'" :columns="userColumns" />


</template>

<script setup lang="ts">
import DataTable from "@/components/datatable/DataTable.vue";
import PageHeader from "@/components/PageHeader.vue";
import DrawerUser from "@/components/modules/users/DrawerUser.vue";
import { ref } from "vue";
import { t } from "@/services/i18n";
import { getUserColumns } from "@/columns/user";




interface User {
  id: number;
  name: string;
  position: string;
  email: string;
  role: string;
}

const drawerOpen = ref(false);
const selectedUser = ref<User | null>(null);
const isDeleteModalOpen = ref(false);

// Apri il drawer per creare o modificare un utente
const openDrawer = (user: User | null = null) => {
  selectedUser.value = user;
  console.log('selected user', selectedUser.value)
  drawerOpen.value = true;
};

// Apri la modale di eliminazione
const openDeleteModal = (user: User) => {
  selectedUser.value = user;
  isDeleteModalOpen.value = true;
};

// Conferma eliminazione
const confirmDelete = () => {
  console.log(`Deleting user: ${selectedUser.value?.id}`);
  isDeleteModalOpen.value = false;
};

// Passiamo le funzioni alle colonne
const userColumns = getUserColumns(openDrawer, openDeleteModal);
</script>
