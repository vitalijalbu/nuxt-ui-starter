<template>
    <div class="container flex justify-between items-center">
      <div><el-button>apri</el-button></div>
      <div class="right flex gap-2">
        <LocaleSwitch />
        <el-divider direction="vertical" class="h-full"/>
        <el-dropdown placement="top-start">
          <el-button link><el-avatar size="small" />User</el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><RouterLink to="/settings">Impostazioni</RouterLink></el-dropdown-item>
              <el-dropdown-item><RouterLink to="/settings/profile">Il mio profilo</RouterLink></el-dropdown-item>
              <el-dropdown-item divided>Esci</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { h } from "vue";
import { IconUsers, IconUserCircle, IconLogout } from "@tabler/icons-vue";
import LocaleSwitch from "../LocaleSwitch.vue";

</script>
