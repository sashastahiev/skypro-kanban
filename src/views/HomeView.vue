<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { fetchWords } from '@/services/api'
import { inject, onMounted, provide, ref } from 'vue'

const loading = ref(false)
const tasks = ref([])
const error = ref('')
// Здесь нам потребуется токен из коробки auth
const { userInfo } = inject('auth')

// Передаём всем потомкам главной страницы данные о словах, загрузке и ошибке
provide('wordsData', { tasks, loading, error })

const getTasks = async () => {
   console.log(userInfo)
   try {
      loading.value = true
      const data = await fetchWords({ token: userInfo.value.token })
      console.log(data)
      if (data) tasks.value = data
   } catch (err) {
      error.value = err
   } finally {
      loading.value = false
   }
}
onMounted(getTasks)
</script>

<template>
  <main>
    <TheWelcome />
    <RouterView />
  </main>
</template>
