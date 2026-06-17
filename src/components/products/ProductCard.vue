<script setup>
defineProps({
  product: Object
})

const emit = defineEmits(['add'])
</script>

<template>
  <div class="card">

    <!-- Mudamos de product.image para product.capa -->
    <img :src="product.capa" alt="Capa do livro" style="max-width: 100%; height: auto;">

    <!-- Mudamos de product.title para product.titulo -->
    <h3>{{ product.titulo }}</h3>

    <!-- Mudamos de product.author para product.autor -->
    <p>{{ product.autor }}</p>

    <!-- Mudamos de product.price para product.preco -->
    <p>R$ {{ product.preco.toFixed(2) }}</p>

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
  text-align: center;
}
</style>