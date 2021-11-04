<template>
  <div class="tabs">
    <ul>
      <li v-for="(item, index) in name" :key="index" @click="$emit('switch', index)"
        :class="{active : currentIndex === index}" class="tabsIndicators">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    emits: ['switch'],
    props: ['name', 'currentIndex']
  }
</script>

<style>

</style>