<template>
  <RouterView />
</template>

<style>
/* Reset global para limpar qualquer layout herdado */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #1a1a1a;
  color: #fff;
  
  /* ESTA LINHA É O SEGREDO: impede que o AppHeader e o Container fiquem lado a lado */
  display: block !important; 
}
</style>