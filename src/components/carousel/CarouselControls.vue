<template>
    <button class="carousel-control left" @click="$emit('prev')">Prev</button>
    <button class="carousel-control right" @click="$emit('next')">Next</button>
</template>

<script>
    export default {
        emits: ['prev', 'next']
    }
</script>

<style scoped>
    .carousel-control {
        display: inline-block;
        height: 50px;
        position: absolute;
        top: calc(50% - 25px);
        z-index: 2;
        cursor: pointer;
    }

    .left {
        left: 0;
    }

    .right {
        right: 0;
    }
</style>