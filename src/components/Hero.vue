<template>
    <div class="hero">
        <div class="container">
            <div class="hero__inner">
                <div class="hero__content">
                    <h5>so, you want to travel to</h5>
                    <h1>space</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
                        hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
                        this world experience!
                    </p>
                </div>
                <div class="hero__cta">
                    <BaseButton type="button__cta" link to='/destination'>Explore</BaseButton>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .hero {
        display: flex;
        align-items: center;
        min-height: calc(100vh - 136px);


        &__inner {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        &__content {
            max-width: 44.6rem;

            h1 {
                margin: 2.4rem 0;
            }
        }

    }
</style>