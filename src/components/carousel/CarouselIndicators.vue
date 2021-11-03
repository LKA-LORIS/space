<template>
    <div class="carousel-indicators">
        <button :class="{active : currentIndex === index}" class="carousel-indicator-item"
            v-for="(item, index) in total" :key="index" @click="$emit('switch', index)">{{item}}</button>
    </div>
</template>

<script>
    export default {
        emits: ['switch'],
        props: ['total', 'currentIndex']

    }
</script>

<style scoped>
    .carousel-indicators {
        position:absolute;
        top: 0;
        z-index: 99;
    }

    .carousel-indicator-item {
        background-color: blue;
        color: #fff;
        height: 20px;
        width: 20px;
        border-radius: 20px;
        margin: 0 10px;
        border: 0;
    }

    .active {
        background-color: chartreuse;
    }
</style>