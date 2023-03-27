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
    <div class="container__inter">
      container__inter
    </div>
    <div class="abc--bule">abc--bule</div>
  </div>
  <div class="card">
    <div class="card-container blue-container flex align-items-center justify-content-start">
      <div class="hidden w-4rem h-4rem bg-blue-500 text-white font-bold p-4 border-round mr-3">1</div>
      <div class="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round mr-3">2</div>
      <div class="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round">3</div>
    </div>
  </div>
  <div class="grid">
    <div class="col-12 md:col-6 lg:col-3 sm:flex-nowrap">A</div>
    <div class="col-12 md:col-6 lg:col-3">B</div>
    <div class="col-12 md:col-6 lg:col-3">C</div>
    <div class="col-12 md:col-6 lg:col-3">D</div>
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

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  // min-height: 100vh;
  &__inter {
    background-color: red;
  }
}
</style>
