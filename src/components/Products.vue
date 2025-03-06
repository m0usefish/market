<template>
    <div class="products">
            <Product 
            v-for="product in products"
                :product="product" 
                :key="product.id"/>
            <
        </div>
</template>

<script setup lang="ts">
import Product from './product.vue';
import { IProduct } from '../interfaces/IProduct'
interface IProps {
    products: IProduct[]
}
const props = defineProps<IProps>()
</script>

<style>
@import '../assets/styles/products.css'
</style>