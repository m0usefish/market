<template>
    <div class="pagination-btn">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style>
    .pagination-btn {
        background: white;
        border: solid 2px #E5E5E5;
        width: fit-content;
        color: black;
        padding: 20px 30px;
        font-weight: bold;
    }
</style>