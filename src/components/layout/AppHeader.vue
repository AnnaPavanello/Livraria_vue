<script setup>
defineProps({
  quantity: Number
})
</script>

<template>
  <header>
    <h1>Livraria Online</h1>

    <div>
      🛒 {{ quantity }}
    </div>
  </header>
</template>

<style scoped>
header{
  background:#2c3e50;
  color:white;
  padding:20px;

  display:flex;
  justify-content:space-between;
}
</style>
