<template>
  <div v-show="currentTab === index">
    <div class="planet">
      <img :src="technology.img" :alt="technology.name">
    </div>
    <div class="description">

      <div class="content">
        <h2>{{technology.name}}</h2>
        <p>{{technology.description}}</p>
        <hr>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['technology', 'currentTab', 'index']
  }
</script>

<style>

</style>