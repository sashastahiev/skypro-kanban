<template>
  <div v-if="loading">Загрузка ...</div>
  <div v-else v-html="content" class="main__content"></div>
</template>

<script>
import { cns } from '@/js/renderCarts.js'
export default {
  data() {
    return {
      loading: true,
      content: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.content = cns()
      this.loading = false
    }, 2000)
  }
}
</script>
