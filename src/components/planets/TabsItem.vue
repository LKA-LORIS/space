<template>
  <div v-show="currentTab === index">
    <div class="planet">
      <img :src="planet.img" :alt="planet.name">
    </div>
    <div class="description">

      <div class="content">
        <h2>{{planet.name}}</h2>
        <p>{{planet.description}}</p>
        <hr>
        <div class="travel">
          <div class="distance">
            <p class="subheading-text">{{planet.titleDistance}}</p>
            <p class="subheading-title">{{planet.numberDistance}}</p>
          </div>
          <div class="time">
            <p class="subheading-text">{{planet.titleTime}}</p>
            <p class="subheading-title">{{planet.numberTime}}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['planet', 'currentTab', 'index']
  }
</script>

<style>

</style>