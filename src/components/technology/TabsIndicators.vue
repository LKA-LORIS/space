<template>
  <div class="tabs">
    <ul>
      <li v-for="(item, index) in name" :key="item.id" @click="$emit('switch', index)"
        :class="{active : currentIndex === index}" class="tabsIndicators">{{item.id}}</li>
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