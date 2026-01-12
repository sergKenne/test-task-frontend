<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__left">
          <div class="header__left-inner">
            <Product v-for="product in store.productsSelected" :key="product.id" :product="product"/>
            <h4 class="header__text" v-if="!store.counter">Empty</h4>
          </div>
         
          <div class="header__counter">Selected: {{store.counter}}/6</div>
        </div>
        <div class="header__right">
          <Product v-if="store.uniqueProduct" :product="store.uniqueProduct"/>
          <h4 v-if="!store.uniqueProduct">Empty</h4>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Product from './Product.vue';
import { useProductStore } from '@/stores/product';

const { store } = useProductStore()

</script>

<style lang="scss" scoped>
  
  .header {
    margin-bottom: 20px;
    margin-top: 30px;
    &__content {
      display: flex;
      justify-content: space-between;
    }
    &__left {
      display: flex;
      flex-direction: column;
      
      min-height: 160px;
      padding: 16px;
      border: 2px solid #ddd;
      min-width: 200px;
      max-width: 300px;
    }
    &__left-inner {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: auto;
    }
    &__counter {
      font-size: 18px;
      font-weight: 500;
      text-align: center;
      margin-top: 20px;
    }
    &__right {
      padding: 16px;
      border: 2px solid #ddd;
      width: 160px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 200px;
      max-width: 300px;
      
    }
    &__text {
      width: 100%;
      text-align: center;
     margin-top: 40px;
    }
    
  }
</style>