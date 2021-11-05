<template>
    <header class="header">
        <div class="header__inner">
            <Logo :imageSource="require('@/assets/logo/logo.svg')" />
            <hr class="header__separator">
            <Navigation type="button__navigation" />
        </div>
    </header>
</template>

<script>
    import Logo from './Logo.vue';
    import Navigation from './Navigation.vue';
    export default {
        components: {
            Logo,
            Navigation
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        position: relative;
        height: 9.6rem;

        &__inner {
            display: flex;
            align-items: center;
            height: 100%;
        }

        &__separator {
            height: 0.1rem;
            width: 100%;
            opacity: 0.25;
            margin: 0 -2.5rem 0 0;
            background-color: var(--white);
            z-index: 1;
        }
    }
</style>