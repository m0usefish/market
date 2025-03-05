<template>
   <PageContainer>
    <div class="products"> 
        <Product 
        v-for="product in products"
            :product="product" 
            :key="product.id"/>

        </div>
   </PageContainer>
</template>


<script setup lang="ts">
  import { computed } from 'vue';
import useProductsStore from '../store/products';
import Product from '../components/product.vue';
import PageContainer from '../components/PageContainer.vue';
  
  const store = useProductsStore()
  const products = computed(() => store.products)

</script>

<style>

   @import '../assets/styles/products.css'
</style>