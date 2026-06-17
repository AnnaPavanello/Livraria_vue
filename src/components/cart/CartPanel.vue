<script setup>
// Definindo o que o carrinho recebe do componente pai
const props = defineProps({
  cart: Array,
  total: Number
})

// Definindo os eventos que o carrinho consegue disparar
const emit = defineEmits(['increase', 'decrease', 'remove', 'limparCarrinho'])

// Função para finalizar a compra com a mensagem personalizada
function finalizarCompra() {
  if (props.cart.length === 0) {
    alert('Seu carrinho está vazio! Adicione algum livro antes de finalizar.')
    return
  }
  
  // Mensagem de sucesso solicitada
  alert('🎉 A compra foi finalizada, parabéns pela compra!')
  
  // Avisa o HomeView para limpar o carrinho
  emit('limparCarrinho') 
}
</script>

<template>
  <div class="cart-panel">
    <h2>Carrinho</h2>

    <!-- Mensagem caso o carrinho não tenha produtos -->
    <div v-if="cart.length === 0" class="empty-cart">
      Seu carrinho está vazio.
    </div>

    <!-- Lista de produtos adicionados -->
    <div v-else>
      <div class="cart-items">
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <div class="item-info">
            <h4>{{ item.titulo }}</h4>
            <p>R$ {{ item.preco.toFixed(2) }}</p>
          </div>
          
          <div class="item-actions">
            <button @click="emit('decrease', item.id)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="emit('increase', item.id)">+</button>
            <button class="btn-remove" @click="emit('remove', item.id)">🗑️</button>
          </div>
        </div>
      </div>

      <!-- Exibição do valor total -->
      <div class="cart-total">
        <h3>Total: <span>R$ {{ total.toFixed(2) }}</span></h3>
      </div>

      <!-- Botão para concluir o pedido -->
      <button class="btn-checkout" @click="finalizarCompra">
        Finalizar Compra
      </button>
    </div>
  </div>
</template>

<style scoped>
.cart-panel {
  background-color: #242424;
  border: 1px solid #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  height: fit-content;
}

h2 {
  color: #fff;
  margin-bottom: 15px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
}

.empty-cart {
  color: #aaa;
  font-style: italic;
}

.cart-items {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #333;
}

.item-info h4 {
  font-size: 0.95rem;
  color: #fff;
  margin-bottom: 4px;
}

.item-info p {
  color: #e0509f;
  font-weight: bold;
  font-size: 0.9rem;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.item-actions button {
  background-color: #333;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
}

.item-actions button:hover {
  background-color: #444;
}

.item-actions .btn-remove {
  background-color: transparent;
  font-size: 1.1rem;
  padding: 5px;
}

.cart-total {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #333;
  margin-bottom: 15px;
}

.cart-total h3 {
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 1.2rem;
}

.btn-checkout {
  background-color: #e0509f; /* Rosa idêntico ao cabeçalho */
  color: white;
  border: none;
  padding: 12px;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;
}

.btn-checkout:hover {
  background-color: #c43b85;
}
</style>