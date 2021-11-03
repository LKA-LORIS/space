<template>
<div>
  <h1>Page Crew</h1>
  <div class="crew">
    <h5><span>02</span> meet your crew</h5>  
    <Carousel :crews="crews" :interval="3000" controls indicators />
  </div>
</div>
  
</template>
<script>
import Carousel from '../components/carousel/Carousel.vue';
  export default {
    name: 'Crew',
    components: {
      Carousel
    },
    data() {
      return {
        crews: [
          {
            id: 1,
            poste: 'commander',
            name: 'douglas hurley',
            description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
            img: require('../assets/douglas-hurley.png')
          },
          {
            id: 2,
            poste: 'mission specialist',
            name: 'mark shuttleworth',
            description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
            img: require('../assets/mark-shuttleworth.png')
          },
          {
            id: 3,
            poste: 'pilot',
            name: 'victor glover',
            description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
            img: require('../assets/victor-glover.png')
          }, 
          {
            id: 4,
            poste: 'flight engineer',
            name: 'anousheh ansari',
            description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
            img: require('../assets/anousheh-ansari.png')
          }
        ]
      }
    }
  }
</script>