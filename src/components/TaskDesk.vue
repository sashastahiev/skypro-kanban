<script setup lang="ts">
import TaskColumn from './TaskColumn.vue';

</script>
<template>
    <main class="main">
        <div class="container">
            <div class="main__block">
              <TaskColumn />
            </div>
        </div>
    </main>
</template>

<style scoped>
.main {
  width: 100%;
  background-color: #EAEEF6;
}
.main__block {
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
}
.container {
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}
.main {
  width: 100%;
  background-color: #EAEEF6;
}
.main__block {
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
}
@media screen and (max-width: 495px) {
  .container {
    width: 100%;
    padding: 0 16px;
  }
}
@media screen and (max-width: 1200px) {
  .main__block {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
}
</style>
