<template>
    <div class="carousel">
        <div class="carousel-inner">
            <CarouselIndicators v-if="indicators" :total="crews.length" :current-index="currentSlide" @switch="switchSlide($event)" />
            <CarouselItem v-for="(crew, index) in crews" :crew="crew" :key="`item-${index}`"
                :current-slide="currentSlide" :index="index" :direction="direction" @mouseenter="stopSlidetimer"
                @mouseout="startSlideTimer" />
            <CarouselControls v-if="controls" @prev="prev" @next="next" />
        </div>
    </div>
</template>

<script>
    import CarouselItem from './CarouselItem.vue';
    import CarouselControls from './CarouselControls.vue';
    import CarouselIndicators from './CarouselIndicators.vue';
    export default {
        props: {
            crews: {
                type: Array,
                required: true
            },
            controls: {
                type: Boolean,
                default: false
            },
            indicators : {
                type: Boolean,
                default: false
            },
            interval: {
                type: Number,
                default: 5000
            }
        },
        components: {
            CarouselItem,
            CarouselControls,
            CarouselIndicators
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
            prev(step = -1) {
                const index = this.currentSlide > 0 ? this.currentSlide + step : this.crews.length - 1;
                this.setCurrentSlide(index);
                this.direction = "left";
                this.startSlideTimer();
            },
            _next(step = 1) {
                const index = this.currentSlide < this.crews.length - 1 ? this.currentSlide + step : 0;
                this.setCurrentSlide(index);
                this.direction = "right";
            },
            next(step = 1) {
                this._next(step);
                this.startSlideTimer();
            },
            startSlideTimer() {
                this.stopSlidetimer();
                this.slideInterval = setInterval(() => {
                    this._next();
                }, this.interval)
            },
            stopSlidetimer() {
                clearInterval(this.slideInterval);
            },
            switchSlide(index) {
                const step = index - this.currentSlide;
                if (step > 0) {
                    this.next(step)
                } else {
                    this.prev(step)
                }
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