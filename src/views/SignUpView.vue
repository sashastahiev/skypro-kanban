<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import BaseInput from '@/components/BaseInput.vue';
import { signUp } from '@/services/auth';

const router = useRouter()
const formData = ref({
 name: '',
 login: '',
 password: '',
})
const errors = ref({
 name: false,
 login: false,
 password: false,
})
const error = ref('')
function validateForm() {
 let isValid = true
 error.value = ''
 // Сбросим все ошибки
 errors.value.name = false
 errors.value.login = false
 errors.value.password = false
 // Проверка имени (только для регистрации)
 if (!formData.value.name.trim()) {
    errors.value.name = true
    isValid = false
 }
 // Проверка логина (эл. почты)
 if (!formData.value.login.trim()) {
    errors.value.login = true
    isValid = false
 }
 // Проверка пароля
 if (!formData.value.password.trim()) {
    errors.value.password = true
    isValid = false
 }
 // Если есть ошибки, установим общее сообщение
 if (!isValid) {
     error.value = 'Пожалуйста, заполните все обязательные поля'
 }
 return isValid
}
async function handleSubmit(event) {
  event.preventDefault()
 // Валидация формы перед отправкой
 if (!validateForm()) {
   return
 }
 try {
    const data = await signUp(formData.value)
    console.log(data)
 if (data) {
    localStorage.setItem('userInfo', JSON.stringify(data))
    router.push('/')
 }
 } catch (err) {
 error.value = err.message
 }
}
</script>

<template>
  <section class="top">
    <form @submit="handleSubmit" class="form-up">
      <div class="form-up_title">Регистрация</div>
      <BaseInput
              name="name"
              id="formname"
              placeholder="Имя"
              v-model="formData.name"
              class="form-up_name" />
      <BaseInput
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
              v-model="formData.login"
              class="form-up_mail" />
      <BaseInput
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              v-model="formData.password"
              class="form-up_password" />
      <p v-show="error" class="error-text"> {{ error }} </p>
      <button class="form-up_btn">Зарегистрироваться</button>
      <div class="form-up_footer">
        <p class="margin0">Уже есть аккаунт?</p>
        <RouterLink to="/sign-in" class="margin0">Войдите здесь</RouterLink>
      </div>
    </form>
  </section>
</template>

<style scoped>
a {
  text-decoration: underline;
  cursor: pointer;
  color: rgba(148, 166, 190, 0.4);
}
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eaeef6;
  width: 100vw;
  height: 100vh;
}
.form-up {
  width: 368px;
  height: 329px;
  padding: 50px 60px;
  box-sizing: border-box;
  border: 0.7px solid rgba(212, 219, 229, 1);
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
}

.form-up_title {
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  text-align: center;
  margin-bottom: 20px;
}
.form-up_name{
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10;
  padding: 8px 10px 8px 10px;
  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  margin-bottom: 7px;
}
.form-up_mail {
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 10px 8px 10px;
  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -2%;
  text-align: left;
  margin-bottom: 7px;
}
.form-up_password {
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 10px 8px 10px;
  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  margin-bottom: 20px;
}
.form-up_btn {
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px 8px 10px;
  border-radius: 4px;
  background: rgba(86, 94, 239, 1);
  color: rgba(255, 255, 255, 1);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -1%;
  text-align: center;
  margin-bottom: 20px;
}
.form-up_footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 7px;
  width: 100%;
  height: 42px;
  color: rgba(148, 166, 190, 0.4);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -1%;
  text-align: center;
}
.margin0 {
  margin: 0;
}
</style>
