<template>
  <div>
    <h1>Page Technology</h1>
    <div class="technology">
      <h5><span>03</span> space launch 101</h5>
      <Tabs :technology="technology" />
    </div>
  </div>

</template>

<script>
  import Tabs from '../components/technology/Tabs.vue';
  export default {
    name: 'Destination',
    components: {
      Tabs
    },
    data() {
      return {
        technology: [{
            id: 1,
            name: 'Launch Vehicule',
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            img: require('../assets/technology/launch-vehicule/launch-vehicule.jpg'),
          },
          {
            id: 2,
            name: 'Spaceport',
            description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
            img: require('../assets/technology/spaceport/spaceport.jpg'),
          },
          {
            id: 3,
            name: 'Space Capsule',
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            img: require('../assets/technology/space-capsule/space-capsule.jpg'),
          },
        ]
      }
    }
  }
</script>

<style>

</style>