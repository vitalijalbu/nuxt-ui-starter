<template>
  <el-form
    ref="forgotPasswordFormRef"
    style="max-width: 600px"
    :model="forgotPasswordForm"
    status-icon
    :rules="forgotPasswordRules"
    label-position="top"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="forgotPasswordForm.email" type="email" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="w-full" @click="submitForgotPassword(forgotPasswordFormRef)">
        Invia link di reset
      </el-button>
    </el-form-item>
  </el-form>
  <RouterLink to="/login" class="text-center block mt-4">Torna al login</RouterLink>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const forgotPasswordFormRef = ref<FormInstance>()

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

const forgotPasswordForm = reactive({
  email: '',
})

const forgotPasswordRules: FormRules<typeof forgotPasswordForm> = {
  email: [{ validator: validateEmail, trigger: 'blur' }],
}

const submitForgotPassword = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('Email di reset inviata!')
    } else {
      console.log('Errore nella validazione')
    }
  })
}
</script>
