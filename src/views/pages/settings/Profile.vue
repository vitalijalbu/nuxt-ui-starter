<template>
    <el-page-header :title="'Modifica profilo'">
      <template #extra>
        <div class="flex items-center">
          <el-button type="primary">Aggiungi</el-button>
        </div>
      </template>

    </el-page-header>
  <el-divider/>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-position="top"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="ruleForm.email" type="email" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="w-full" @click="submitForm(ruleFormRef)">
        Accedi
      </el-button>
    </el-form-item>
  </el-form>
  <RouterLink to="/forgot-password" class="text-center block mt-4">Password dimenticata?</RouterLink>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { RouterLink } from 'vue-router'

const ruleFormRef = ref<FormInstance>()

const validateEmail = (rule: any, value: string, callback: (error?: Error) => void) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!value) {
    callback(new Error('Inserisci l’email'))
  } else if (!emailRegex.test(value)) {
    callback(new Error('Inserisci un’email valida'))
  } else {
    callback()
  }
}

const validatePassword = (rule: any, value: string, callback: (error?: Error) => void) => {
  if (!value) {
    callback(new Error('Inserisci la password'))
  } else if (value.length < 6) {
    callback(new Error('La password deve contenere almeno 6 caratteri'))
  } else {
    callback()
  }
}


const ruleForm = reactive({
  email: '',
  password: '',
  checkPass: '',
})

const rules: FormRules<typeof ruleForm> = {
  email: [{ validator: validateEmail, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('Form inviato con successo!')
    } else {
      console.log('Errore nella validazione del form')
    }
  })
}
</script>
