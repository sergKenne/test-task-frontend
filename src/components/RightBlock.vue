<template>
  <div class="main__item">
    <Product v-for="product in products" :key="product.id" :product="product" @click="showOnProduct(product)"/>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Product from './Product.vue';
import db from '../../data';
import { useProductStore } from '@/stores/product';

const products = ref([])
let tempProducts = ref([])
const {toggleProduct } = useProductStore()

const showOnProduct = (prod) => {
  products.value = [...tempProducts.value.filter(item => item.id != prod.id)]
  toggleProduct(prod)
}

onMounted(() => {
  products.value = db.rightProducts
  tempProducts.value = db.rightProducts
});

</script>

<style lang="scss" scoped>

</style>