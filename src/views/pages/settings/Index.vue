<template>
   <div v-for="(section, sectionIndex) in sections" :key="sectionIndex" class="mb-6">
      <h3 class="text-xl font-bold mb-4">{{ section.title }}</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ElCard 
          v-for="(item, i) in section.pages" 
          :key="`${sectionIndex}-${i}`" 
          shadow="hover"
          class="cursor-pointer hover:shadow-lg transition"
          @click="router.push(item.url)"
        >
          <div class="flex items-center space-x-4">
            <component :is="item.icon" class="text-primary text-3xl" />
            <span class="font-medium">{{ item.label }}</span>
          </div>
        </ElCard>
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { ElCard } from "element-plus";
import { useRouter } from "vue-router";
import { IconApps } from "@tabler/icons-vue";

const router = useRouter();

const sections = ref([
  {
    title: "Profilo",
    pages: [
      {
        url: "/settings/profile",
        icon: IconApps,
        label: "Il mio Profilo",
      },
    ],
  },
  {
    title: "Impostazioni Generali",
    pages: [
      {
        url: "/settings/roles",
        icon: IconApps,
        label: "Ruoli e permessi",
      }
    ],
  },
]);
</script>