<template>
    <el-form
      ref="registerFormRef"
      style="max-width: 600px"
      :model="registerForm"
      status-icon
      :rules="registerRules"
      label-position="top"
    >
      <el-form-item label="Nome" prop="name">
        <el-input v-model="registerForm.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="registerForm.email" type="email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="registerForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Conferma Password" prop="checkPass">
        <el-input v-model="registerForm.checkPass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="w-full" @click="submitRegister(registerFormRef)">
          Registrati
        </el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  
  const registerFormRef = ref<FormInstance>()
  
  const validateName = (rule: any, value: string, callback: (error?: Error) => void) => {
    if (!value) {
      callback(new Error('Inserisci il tuo nome'))
    } else if (value.length < 3) {
      callback(new Error('Il nome deve contenere almeno 3 caratteri'))
    } else {
      callback()
    }
  }
  
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
  
  const validateConfirmPassword = (rule: any, value: string, callback: (error?: Error) => void) => {
    if (!value) {
      callback(new Error('Conferma la password'))
    } else if (value !== registerForm.password) {
      callback(new Error('Le password non corrispondono'))
    } else {
      callback()
    }
  }
  
  const registerForm = reactive({
    name: '',
    email: '',
    password: '',
    checkPass: '',
  })
  
  const registerRules: FormRules<typeof registerForm> = {
    name: [{ validator: validateName, trigger: 'blur' }],
    email: [{ validator: validateEmail, trigger: 'blur' }],
    password: [{ validator: validatePassword, trigger: 'blur' }],
    checkPass: [{ validator: validateConfirmPassword, trigger: 'blur' }],
  }
  
  const submitRegister = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        console.log('Registrazione completata!')
      } else {
        console.log('Errore nella validazione')
      }
    })
  }
  </script>
  