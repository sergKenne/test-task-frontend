import { defineStore } from "pinia"
import { reactive } from "vue"

export const useProductStore = defineStore('product', () => {
  const store = reactive({
    productsSelected: [],
    uniqueProduct: null,
    counter: 0,
  })
  const addProductToTop = (product) => {
      store.productsSelected.push(product);
      store.counter += 1;
  }

  const toggleProduct = (product) => {
    store.uniqueProduct = product;
  }

 
  return {
    store,
    addProductToTop,
    toggleProduct,
  }
})