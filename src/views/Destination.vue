<template>
    <div>
        <h1>Page Destination</h1>
        <div class="destination">
            <h5><span>01</span> pick your destination</h5>
            <Tabs :planets="planets" />
        
        </div>
    </div>

</template>

<script>
    import Tabs from '../components/planets/Tabs.vue';
    export default {
        name: 'Destination',
        components: {
            Tabs
        },
        data() {
            return {
                planets: [{
                        id: 1,
                        name: 'Moon',
                        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
                        img: require('../assets/planets/moon/moon.png'),
                        titleDistance: 'avg. distance',
                        numberDistance: '384,400 km',
                        titleTime: 'est. travel time',
                        numberTime: '3 days'
                    },
                    {
                        id: 2,
                        name: 'Mars',
                        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
                        img: require('../assets/planets/mars/mars.png'),
                        titleDistance: 'avg. distance',
                        numberDistance: '225 mil. km',
                        titleTime: 'est. travel time',
                        numberTime: '9 months'
                    },
                    {
                        id: 3,
                        name: 'Europa',
                        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
                        img: require('../assets/planets/europa/europa.png'),
                        titleDistance: 'avg. distance',
                        numberDistance: '668 mil. km',
                        titleTime: 'est. travel time',
                        numberTime: '3 years'
                    },
                    {
                        id: 4,
                        name: 'Titan',
                        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
                        img: require('../assets/planets/titan/titan.png'),
                        titleDistance: 'avg. distance',
                        numberDistance: '1.6 bil. km',
                        titleTime: 'est. travel time',
                        numberTime: '7 years'
                    }
                ]
            }
        }
    }
</script>

<style>

</style>