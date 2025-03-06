<template>
    <PageContainer>
        <h1>Search results</h1>
        <Products
            :products="products"
        />
        <Pagination/>
     
    </PageContainer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router/dist/vue-router';
import PageContainer from '../components/PageContainer.vue';
import { computed, onMounted, watch } from 'vue';
import useProductsStore from '../store/products';
import Products from '../components/Products.vue';
import Pagination from '../components/Pagination.vue';
import usePaginationStore from '../store/pagination';
const route = useRoute()
const paginationStore = usePaginationStore()
const productsStore = useProductsStore()
const products = computed(() => {
    const query = route.query?.query?.toString() ?? ''
   return productsStore.getProductsBySearch(query)
})
watch(products, ()=> {
    paginationStore.saveProductsPerPage(3)
    paginationStore.saveTotalPages(products.value.length)
},{immediate:true})
</script>