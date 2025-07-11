<template>
  <div v-if="loading" class="preloader">
    <div class="loader"></div>
  </div>
  <div v-else v-html="content" class="main__content"></div>
</template>

<script>
import { carts } from '@/mocks.js/task'
import { GetHtmlCardsByStatus } from '@/js/GetHtmlCardsByStatus'
export default {
  data() {
    return {
      loading: true,
      content: ''
    }
  },
  mounted() {
    setTimeout(() => {
      const statusMas = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово']
      const desk = statusMas.map((status) => {
        const cardsByStatus = carts.filter(x => x.status == status)
        return GetHtmlCardsByStatus(cardsByStatus, status)
      }).join("")
      this.content = desk
      this.loading = false
    }, 1000)
  }
}
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeOut 0.5s ease forwards;
}

.loader {
  width: 80px;
  height: 80px;
  border: 10px solid #fff;
  border-top: 10px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Анимация вращения */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Анимация исчезновения */
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; visibility: hidden; }
}
</style>
