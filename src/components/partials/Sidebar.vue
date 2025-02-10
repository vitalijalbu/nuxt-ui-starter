<template>
	<div class="px-4 items-center py-2">
		<Logo />
	</div>
	<el-menu router default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
		<template v-for="item in sidebarMenuLinks" :key="item.key">
			<MenuItem :item="item" />
		</template>
	</el-menu>
</template>

<script lang="ts" setup>
import { sidebarMenuLinks } from "./menu";
import Logo from "@/components/Logo.vue";
import MenuItem from "./MenuItem.vue";

// const isCollapse = ref(true)
function handleOpen(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
</script>