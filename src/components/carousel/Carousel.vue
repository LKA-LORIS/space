<template>
    <div class="carousel">
        <div class="carousel-inner">
            <CarouselItem v-for="(crew, index) in crews" :crew="crew" :key="`item-${index}`"
                :current-slide="currentSlide" :index="index" :direction="direction" />
            <CarouselControls @prev="prev" @next="next" />
        </div>
    </div>
</template>

<script>
    import CarouselItem from './CarouselItem.vue';
    import CarouselControls from './CarouselControls.vue';
    export default {
        props: ['crews'],
        components: {
            CarouselItem,
            CarouselControls
        },
        data() {
            return {
                currentSlide: 0,
                slideInterval: null,
                direction: "right"
            }
        },
        methods: {
            setCurrentSlide(index) {
                this.currentSlide = index;
            },
            prev() {
                const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.crews.length - 1;
                this.setCurrentSlide(index);
                this.direction = "left";
                this.startSlideTimer();
                console.log(index);
            },
            _next() {
                const index = this.currentSlide < this.crews.length - 1 ? this.currentSlide + 1 : 0;
                this.setCurrentSlide(index);
                this.direction = "right";
            },
            next() {
                this._next();
                this.startSlideTimer();
                console.log(index);
            },
            startSlideTimer() {
                this.stopSlidetimer();
                this.slideInterval = setInterval(() => {
                    this._next();
                }, 5000)
            },
            stopSlidetimer() {
                clearInterval(this.slideInterval);
            }
        },

        mounted() {
            this.startSlideTimer();
        },

        beforeUnmount() {
            this.stopSlidetimer();
        }
    }
</script>

<style scoped>
    .carousel {
        display: flex;
        justify-content: center;
    }

    .carousel-inner {
        position: relative;
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
    }
</style>