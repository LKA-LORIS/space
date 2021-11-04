<template>
    <h1>Tabs</h1>
    <TabsIndicators :name="technology" :current-index="currentTab" @switch="switchTab($event)" />
    <TabsItem v-for="(technology, index) in technology" :technology="technology" :key="index" :current-tab="currentTab"
        :index="index" />

</template>

<script>
    import TabsIndicators from './TabsIndicators.vue';
    import TabsItem from './TabsItem.vue';
    export default {
        props: {
            technology: {
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