<template>
    <h1>Tabs</h1>
    <TabsIndicators :name="planets" :current-index="currentTab" @switch="switchTab($event)" />
    <TabsItem v-for="(planet, index) in planets" :planet="planet" :key="index" :current-tab="currentTab"
        :index="index" />

</template>

<script>
    import TabsIndicators from './TabsIndicators.vue';
    import TabsItem from './TabsItem.vue';
    export default {
        props: {
            planets: {
                type: Array,
                required: true
            }
        },
        components: {
            TabsIndicators,
            TabsItem
        },
        data() {
            return {
                currentTab: 0
            }
        },
        methods: {
            setCurrentSlide(index) {
                this.currentTab = index;
            },
            switchTab(index) {
                this.setCurrentSlide(index);
            }
        }

    }
</script>

<style>

</style>