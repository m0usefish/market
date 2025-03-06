<template>
    <section class="pagination-container">
        <PaginationButton>
            Назад
        </PaginationButton>
        <PaginationButton 
            @click="onPageSelected(page)"
            v-for="page in paginationStore.getPages">
            {{ page }}  
        </PaginationButton>
        <PaginationButton>
            Вперед
        </PaginationButton>
    </section>
</template>

<script setup lang="ts">
import usePaginationStore from '../store/pagination';
import PaginationButton from './PaginationButton.vue';
import { useRoute, useRouter } from 'vue-router/dist/vue-router';
const route = useRoute()

const paginationStore = usePaginationStore()
const router = useRouter()
function onPageSelected(pageNumber: number): void {
    router.push({ 
        name: 'search',
        query: { 
            // page: pageNumber,
            // query: route.query?.query ?? '' 
            ...route.query,
            page: pageNumber
        
        }
    })
}
</script>

<style>
    .pagination-container {
        display: flex;
        justify-content: space-between;
    }
</style>