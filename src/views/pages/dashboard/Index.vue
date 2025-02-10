<template>
   <el-page-header title="Bentornato" subtitle="A podcast to improve designs"/>
   <el-row :gutter="16">
    <el-col :span="6">
      <el-card>
      <el-statistic label="Statistic" :value="99">
        <template #prefix>
          <el-icon>
            <MdSave />
          </el-icon>
        </template>
        <template #suffix>
          / 100
        </template>
      </el-statistic>
   </el-card>
    </el-col> 
    <el-col :span="6">
      <el-statistic label="Statistic" :value="99">
        <template #prefix>
          <el-icon>
            <MdSave />
          </el-icon>
        </template>
        <template #suffix>
          / 100
        </template>
      </el-statistic>
    </el-col>
    <el-col :span="6">
      <el-statistic label="Statistic" :value="99">
        <template #prefix>
          <el-icon>
            <MdSave />
          </el-icon>
        </template>
        <template #suffix>
          / 100
        </template>
      </el-statistic>
    </el-col>
    <el-col :span="6">
      <el-statistic label="Active Users">
        1,234,123
      </el-statistic>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { t } from '@/services/i18n'
</script>
