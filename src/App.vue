<template>
  <div class="container">
    <span class="p-float-label">
        <InputText id="txt" type="text" v-model="text" />
        <label for="txt">Text</label>
    </span>
  </div>
</template>

<script setup>
import { ref } from "vue";
const text = ref();
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
</style>
