<template>
  <div v-if="loading">Загрузка ...</div>
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
    }, 2000)
  }
}
</script>
