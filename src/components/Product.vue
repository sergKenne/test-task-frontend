<template>
  <div :class="`product ${isActive ? 'disable':''} `" >
    <h3 class="product__id">ID: {{ product?.id }}</h3>
    <p class="product__name">{{ product?.name }}</p>
  </div>
</template>

<script setup>
defineProps(['product', 'isActive'])
</script>

<style lang="scss" scoped>
  .product {
    display: inline-flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-self: flex-start;
    gap: 5px;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow:  0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    background-color: #fff;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 400;
    font-size: 0.975rem;
    letter-spacing: 0.01071em;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
  
  }

  .disable {
    cursor: not-allowed;
    opacity: .6;
  }
</style>