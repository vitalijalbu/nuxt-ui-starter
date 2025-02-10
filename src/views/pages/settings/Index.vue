<template>
    <div v-for="(section, sectionIndex) in sections" :key="sectionIndex" class="mb-6">
      <PageHeader :title="section.title"/>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-4">
         <UCard 
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
         </UCard>
       </div>
     </div>
 </template>
 
 <script setup>
 import { ref } from "vue";
 import { useRouter } from "vue-router";
 import { IconUserCircle, IconCircleKey, IconTag } from "@tabler/icons-vue";
import { t } from "@/services/i18n";
 
 const router = useRouter();
 
 const sections = ref([
   {
     title: "Profilo",
     pages: [
       {
         url: "/settings/profile",
         icon: IconUserCircle,
         label: "Il mio Profilo",
       },
     ],
   },
   {
     title: "Impostazioni Generali",
     pages: [
       {
         url: "/settings/roles",
         icon: IconCircleKey,
         label: t('types.permissions.title'),
       },
       {
         url: "/settings/tags",
         icon: IconTag,
         label: t('types.tags.title'),
       }
     ],
   },
 ]);
 </script>