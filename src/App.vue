<template>
  <ToastUI />
  <div class="container">
    <span class="p-float-label">
      <InputTextUI id="txt" type="text" v-model="text" />
      <label for="txt">Text</label>
    </span>
    <ButtonUI 
      label="Greet" @click="greet()"
      icon="pi pi-user"
    >
    </ButtonUI>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";

const toast = useToast();

const text = ref('');
const greet = () => {
  toast.add({
    // severity: 'success',
    summary: 'PrimeTime',
    detail: text.value,
  });
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
