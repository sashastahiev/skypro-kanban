<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <section class="top">
    <div class="form-in">
      <div class="form-in_title">Вход</div>
      <input placeholder="Эл. почта" class="form-in_mail">
      <input placeholder="Пароль" class="form-in_password">
      <button class="form-in_btn">Войти</button>
      <div class="form-in_footer">
        <p class="margin0">Нужно зарегистрироваться?</p>
        <RouterLink to="/sign-up" class="margin0">Регистрируйтесь здесь</RouterLink>
      </div>
    </div>
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
  background: #EAEEF6;
  width: 100vw;
  height: 100vh;
}
.form-in{
  width: 368px;
  height: 329px;
  padding: 50px 60px;
  box-sizing: border-box;
  border: 0.7px solid rgba(212, 219, 229, 1);
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
}

.form-in_title{
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
.form-in_mail{
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
.form-in_password{
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
.form-in_btn{
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10;
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
.form-in_footer{
  display: flex;
  flex-direction: column;
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
.margin0{
  margin: 0;
}
</style>
