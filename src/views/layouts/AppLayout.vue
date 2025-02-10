<template>
  <el-container class="app-layout h-lvh w-full">
    <el-aside width="240px" class="bg-white border-r border-gray-200" :collapsed="collapsed" :collapse="collapsed">
      <el-scrollbar>
        <Sidebar />
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header class="border-b border-gray-200">
          <Toolbar />
        </el-header>
        <el-main class="bg-gray-100">
          <el-scrollbar>
            <div class="container p-4">
              <RouterView />
            </div>
          </el-scrollbar>
        </el-main>
  </el-container>
  </el-container>

</template>

<script lang="ts" setup>
import Sidebar from "@/components/partials/Sidebar.vue";
import Toolbar from "@/components/partials/Toolbar.vue";
import { useAuthStore } from "@/stores/auth";
import { computed, onMounted, ref } from "vue";

const authStore = useAuthStore();
const loading = ref<boolean>(true);

const collapsed = ref<boolean>(false);


onMounted(async () => {
  try {
    //await authStore.me()
    loading.value = false;
  } catch (error) {
    console.error("Error during onMounted:", error);
  }
});
</script>
