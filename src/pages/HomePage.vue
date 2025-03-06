<template>
   <PageContainer>
    <Products
            :products="products"
        />
   </PageContainer>
</template>


<script setup lang="ts">
  import { computed } from 'vue';
import useProductsStore from '../store/products';
import Products from '../components/Products.vue';
import PageContainer from '../components/PageContainer.vue';
  
  const store = useProductsStore()
  const products = computed(() => store.products)

</script>

<style>

   @import '../assets/styles/products.css'
</style>