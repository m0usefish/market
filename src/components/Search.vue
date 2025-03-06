<template>
    <div class="search-container">
        <div class="search-wrapper">
            <img class="search-icon" :src="SearchIcon">
            <input 
                v-model="inputModel" 
                placeholder="Search..." 
                class="search" 
                type="text">
            <button class="search-btn">Search</button>
            <!-- <button class="clear-btn">x</button> -->
        </div>
        <div class="search-results">
            <ul>
                <li 
                    @click="onResultSelected(searchResult.name)" 
                    v-for="searchResult in searchResults" 
                    :key="searchResult.id">
                    {{ searchResult.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import useProductsStore from '../store/products'
import SearchIcon from '../assets/images/search.svg'
import {computed, ref} from 'vue'
import { IProduct } from 'interfaces/IProduct'
import { useRouter } from 'vue-router/dist/vue-router'
const router = useRouter()

const inputModel = ref('')
const productsStore = useProductsStore()
const searchResults = computed<IProduct[]>(() => {
    if(inputModel.value == ''){
        return[]
    }
    return productsStore.getProductsBySearch(inputModel.value)
})

function onResultSelected(resultName: string): void {
    router.push({ name: 'search', query: { query: resultName }})
}

</script>

<style scoped>
    .search-container {
        width: max-content;
        margin: auto;

    }
    .search {
        background-color: #F9FAFB;
        padding:  8px 30px;
        padding-left: 10px;
        color: black;
        width: 100%;
        border-radius: 7px;
        font-size: 15px;
        outline: none;
        border: 0 ;
        width: 100%;
        display: block;

    }
    .search-wrapper {
        background-color: #F9FAFB;
        display: flex;
        width: max-content;
        padding: 6px 8px;
        border-radius: 9px;
        border: solid #D9DDE2 1px;
        max-width: 400px;
        width: 100%;
        align-items: center;
    }
    .clear-btn {
        position: absolute;
        right:0;
        top:50%;
        transform: translateY(-60%);
        color: grey;
        background-color: transparent;
        border: none;
        padding: 0;
        text-align: center;
        vertical-align: middle;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .search-btn {
        background-color: #1C4ED8;
        padding: 8px 16px;
        font-size: 13px;
        letter-spacing: 0.5px;
        border-radius: 9px;
    }
    .search-icon {
        height: 20px;
        width: 20px;

    }
    .search-results {
        background-color: white;
        width: fit-content;
        margin: auto;
        color: #9CA0AA;

    }
    .search-results ul {
        list-style-type: none;
    }
    .search-results ul, li {
        cursor: pointer;
    }
</style>