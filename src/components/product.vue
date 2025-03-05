<template>
    <div class="product">
        <img :src="product.image" :alt="product.name">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}₴</p>
    </div>

</template>
<script setup lang="ts">
import { IProduct } from 'interfaces/IProduct';

    interface IProps {
        product: IProduct
    }

    const props = defineProps<IProps>()

</script>

<style>
    @import '../assets/styles/product.css'
</style>