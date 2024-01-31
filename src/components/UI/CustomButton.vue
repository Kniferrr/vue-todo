<template>
  <button class="custombutton"><slot /></button>
</template>

<style scoped>
.custombutton {
  background-color: transparent;
  border: 2px solid var(--color-border);
  color: var(--vt-c-text-dark-1);
  height: 100%;
  padding: 5px;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3); /* Прозрачный белый цвет при наведении */
  }
}
</style>
