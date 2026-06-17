<script setup>
defineProps({
  product: Object
})

const emit = defineEmits(['add'])
</script>

<template>
  <div class="card">
    <img :src="product.capa" alt="Capa do livro">
    <h3>{{ product.titulo }}</h3>
    <p class="autor">{{ product.autor }}</p>
    <p class="preco">R$ {{ product.preco.toFixed(2) }}</p>
    <button @click="emit('add', product)">
      Adicionar
    </button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #333;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  background-color: #242424;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}

img {
  max-width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 10px;
}

h3 {
  font-size: 1rem;
  margin: 10px 0 5px 0;
  color: #fff;
}

.autor {
  color: #aaa;
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.preco {
  font-weight: bold;
  color: #fff;
  margin-bottom: 12px;
}

button {
  background-color: #e0509f; /* Mesmo tom de rosa do seu cabeçalho */
  color: white;
  border: none;
  padding: 8px 15px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;
}

button:hover {
  background-color: #c43b85;
}
</style>