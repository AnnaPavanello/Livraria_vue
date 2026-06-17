<script setup>
defineProps({
  product: Object
})

const emit = defineEmits(['add'])
</script>

<template>
  <div class="card">

    <img :src="product.image">

    <h3>{{ product.title }}</h3>

    <p>{{ product.author }}</p>

    <p>R$ {{ product.price }}</p>

    <button @click="emit('add', product)">
      Adicionar
    </button>

  </div>
</template>

<style scoped>
.card{
  border:1px solid #ccc;
  padding:15px;
  border-radius:10px;
}
</style>