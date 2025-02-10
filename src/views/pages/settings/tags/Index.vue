<template>
  <PageHeader title="Tags" backUrl="/settings">
    <template #extra>
      <UButton color="primary" icon="lucide:plus" @click="toggleDrawer" :label="t('global.add')"/>
    </template>
  </PageHeader>
  <DrawerUser v-model="drawerOpen" />
  <DataTable :resource="'users'" :columns="userColumns" />
</template>


<script setup lang="ts">
import DataTable from "@/components/datatable/DataTable.vue";
import PageHeader from "@/components/PageHeader.vue";
import SlideoverContent from './content.vue';
import { t } from "@/services/i18n";
import { ref } from "vue";
import { userColumns } from "@/columns/user";

interface User {
  id: number;
  name: string;
  position: string;
  email: string;
  role: string;
}

const toast = useToast();


const drawerOpen = ref(false)

// Toggle drawer
const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value
}



const slideover = useSlideover()

const openSlideover = () => {
  slideover.open(SlideoverContent, 
    { 
      title: 'Welcome to the Slideover', // Titolo
      description: 'This is a description for the slideover', // Descrizione
    }
  )
}

const closeSlideover = async () => {
  await slideover.close()
}

const updateSlideoverTitle = () => {
  slideover.patch({ title: 'Updated Welcome' })
}

</script>