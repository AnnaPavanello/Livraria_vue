<script setup>
defineProps({
  total: Number
})
</script>

<template>
  <h3>Total: R$ {{ total.toFixed(2) }}</h3>
</template>