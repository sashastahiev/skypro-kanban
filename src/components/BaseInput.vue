<template>
<input
  :type="type"
  :name="name"
  :id="id"
  :placeholder="placeholder"
  v-model="model">
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
      type: String,
      default: 'text',
  },
})
const model = defineModel()
</script>
