<template>
    <div class="logo">
        <router-link to="/">
            <img :src="imageSource" alt="logo Space">
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            imageSource: {
                type: String,
                required: false,
                default: ''
            }
        }

    }
</script>

<style lang="scss" scoped>
    .logo {
        flex-shrink: 0;
        padding: 0 6.5rem 0 5.5rem;
    }
</style>