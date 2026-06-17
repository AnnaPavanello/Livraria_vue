<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  products: Array
})

const emit = defineEmits(['add'])
</script>

<template>
  <div class="list">

    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add="emit('add', $event)"
    />

  </div>
</template>

<style scoped>
.list{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}
</style>