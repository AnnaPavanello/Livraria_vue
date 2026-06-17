<script setup>
defineProps({
  item: Object
})

const emit = defineEmits([
  'increase',
  'decrease',
  'remove'
])
</script>

<template>

  <div>

    <h4>{{ item.title }}</h4>

    <button @click="emit('decrease', item.id)">
      -
    </button>

    {{ item.quantity }}

    <button @click="emit('increase', item.id)">
      +
    </button>

    <button @click="emit('remove', item.id)">
      Remover
    </button>

  </div>

</template>