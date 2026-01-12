<template>
  <div class="main__item">
    <Product 
      v-for="product in products" 
      :key="product.id" 
      :isActive="store.counter === 6"
      :product="product" 
      @click="selectProduct(product)"/>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Product from './Product.vue';
import db from '../../data';
import { useProductStore } from '@/stores/product';

const products = ref([]);

const { addProductToTop, store } = useProductStore();

const selectProduct = (prod) => {
  if (store.counter <= 5) {
    products.value =  products.value.filter(el => el.id != prod.id);
    addProductToTop(prod);
  }
}

onMounted(() => {
  products.value = db.leftProducts;
});

</script>

<style lang="scss" scoped>
  
</style>