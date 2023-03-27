<template>
  <ToastUI />
  <div class="container">
    <span class="p-float-label">
      <InputTextUI id="txt" type="text" v-model="text" />
      <label for="txt">Text</label>
    </span>
    <ButtonUI label="Greet" @click="greet()" icon="pi pi-user"></ButtonUI>
    <div class="container__inter">container__inter</div>
    <div class="abc--bule">abc--bule</div>
  </div>

  <div class="card">
    <DataViewUI :value="products">
      <template #list="slotProps">
        <div class="col-12">
          <div
            class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
          >
            <img
              class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
              :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
              :alt="slotProps.data.name"
            />
            <div
              class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
            >
              <div
                class="flex flex-column align-items-center sm:align-items-start gap-3"
              >
                <div class="text-2xl font-bold text-900">
                  {{ slotProps.data.name }}
                </div>
                <RatingUI
                  :modelValue="slotProps.data.rating"
                  readonly
                  :cancel="false"
                ></RatingUI>
                <div class="flex align-items-center gap-3">
                  <span class="flex align-items-center gap-2">
                    <i class="pi pi-tag"></i>
                    <span class="font-semibold">
                      {{ slotProps.data.category }}
                    </span>
                  </span>
                  <TagUI
                    :value="slotProps.data.inventoryStatus"
                    :severity="getSeverity(slotProps.data)"
                  ></TagUI>
                </div>
              </div>
              <div
                class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"
              >
                <span class="text-2xl font-semibold">
                  ${{ slotProps.data.price }}
                </span>
                <ButtonUI
                  icon="pi pi-shopping-cart"
                  rounded
                  :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
                ></ButtonUI>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataViewUI>
  </div>

  <div class="card">
    <div
      class="card-container blue-container flex align-items-center justify-content-start"
    >
      <div
        class="hidden w-4rem h-4rem bg-blue-500 text-white font-bold p-4 border-round mr-3"
      >
        1
      </div>
      <div
        class="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round mr-3"
      >
        2
      </div>
      <div
        class="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round"
      >
        3
      </div>
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
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
  ProductService.getProductsSmall().then(
    (data) => (products.value = data.slice(0, 5))
  );
});

const toast = useToast();
const text = ref('');
const products = ref('');
const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case 'INSTOCK':
      return 'success';
    case 'LOWSTOCK':
      return 'warning';
    case 'OUTOFSTOCK':
      return 'danger';
    default:
      return null;
  }
};

const greet = () => {
  toast.add({
    severity: 'success',
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

.card {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}
</style>
