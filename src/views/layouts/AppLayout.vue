<template>
  <div class="app-layout h-screen w-full flex flex-col">
    <!-- Mobile Drawer for small screens (contains the sidebar/menu) -->
    <USlideover v-model:open="drawerVisible" side="left" title="Menu" class="z-10">
      <template #body>
        <Sidebar :showLogo="false" @closeDrawer="drawerVisible = false"/>
      </template>
    </USlideover>

    <div class="flex-1 flex">
      <!-- Sidebar for larger screens (visible on large devices) -->
      <div
        class="z-10 p-2 hidden lg:block bg-white w-64 border-r border-gray-200 fixed top-0 left-0 bottom-0"
      >
        <Sidebar />
      </div>

      <!-- Content Area -->
      <div class="flex-1 flex flex-col lg:ml-64 lg:mr-0">
        <!-- Header with a toggle button for the drawer on mobile -->
        <div class="border-b border-gray-200 p-2 flex items-center fixed top-0 left-0 w-full bg-white z-0">
          <!-- Button to toggle the drawer visibility on mobile -->
          <UButton
            color="neutral" 
            variant="ghost"
            icon="i-lucide-menu"
            @click="toggleDrawer"
            class="lg:hidden"
          />

          <!-- Toolbar aligned to the right -->
          <Toolbar />
        </div>

        <!-- Main Content (scrollable area) -->
        <div class="bg-gray-200 flex-1 overflow-y-auto py-16">
          <UContainer>
            <RouterView />
          </UContainer>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Sidebar from "@/components/partials/Sidebar.vue";
import Toolbar from "@/components/partials/Toolbar.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const loading = ref<boolean>(true);
const drawerVisible = ref<boolean>(false);

// Toggle drawer visibility
const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value; 
};

onMounted(async () => {
  try {
    // await authStore.me()
    loading.value = false;
  } catch (error) {
    console.error("Error during onMounted:", error);
  }
});
</script>
