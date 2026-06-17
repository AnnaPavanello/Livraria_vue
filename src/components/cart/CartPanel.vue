<script setup>
import CartItem from './CartItem.vue'
import CartSummary from './CartSummary.vue'

defineProps({
  cart: Array,
  total: Number
})

const emit = defineEmits([
  'increase',
  'decrease',
  'remove'
])
</script>

<template>

  <div class="cart">

    <h2>Carrinho</h2>

    <div v-if="cart.length === 0">
      Seu carrinho está vazio.
    </div>

    <div v-else>

      <CartItem
        v-for="item in cart"
        :key="item.id"
        :item="item"
        @increase="emit('increase', $event)"
        @decrease="emit('decrease', $event)"
        @remove="emit('remove', $event)"
      />

      <CartSummary :total="total" />

    </div>

  </div>

</template>

<style scoped>
.cart{
  border-left:1px solid #ccc;
  padding:20px;
}
</style>