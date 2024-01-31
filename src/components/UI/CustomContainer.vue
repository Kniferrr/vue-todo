<template>
  <div class="customcontainer">
    <slot></slot>
  </div>
</template>

<style scoped>
.customcontainer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 10px;
  border-radius: 8px;
  background-color: var(--vt-c-black-mute);
}
</style>
