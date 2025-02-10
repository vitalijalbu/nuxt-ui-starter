<template>
  <el-form
    ref="resetPasswordFormRef"
    style="max-width: 600px"
    :model="resetPasswordForm"
    status-icon
    :rules="resetPasswordRules"
    label-position="top"
  >
    <el-form-item label="Nuova Password" prop="password">
      <el-input v-model="resetPasswordForm.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Conferma Password" prop="checkPass">
      <el-input v-model="resetPasswordForm.checkPass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="w-full" @click="submitResetPassword(resetPasswordFormRef)">
        Reimposta Password
      </el-button>
    </el-form-item>
  </el-form>
  <RouterLink to="/login" class="text-center block mt-4">Torna al login</RouterLink>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const resetPasswordFormRef = ref<FormInstance>()

const validatePassword = (rule: any, value: string, callback: (error?: Error) => void) => {
  if (!value) {
    callback(new Error('Inserisci la password'))
  } else if (value.length < 6) {
    callback(new Error('La password deve contenere almeno 6 caratteri'))
  } else {
    callback()
  }
}

const validateConfirmPassword = (rule: any, value: string, callback: (error?: Error) => void) => {
  if (!value) {
    callback(new Error('Conferma la password'))
  } else if (value !== resetPasswordForm.password) {
    callback(new Error('Le password non corrispondono'))
  } else {
    callback()
  }
}

const resetPasswordForm = reactive({
  password: '',
  checkPass: '',
})

const resetPasswordRules: FormRules<typeof resetPasswordForm> = {
  password: [{ validator: validatePassword, trigger: 'blur' }],
  checkPass: [{ validator: validateConfirmPassword, trigger: 'blur' }],
}

const submitResetPassword = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('Password reimpostata con successo!')
    } else {
      console.log('Errore nella validazione')
    }
  })
}
</script>
