<script setup>
defineProps({
    product: Object,
});
</script>

<template>
    <article class="product-card">
        <img :src="product.image" />
        <h4>{{ product.title }}</h4>|
        <p>{{ product.description }}</p>
    </article>
</template>