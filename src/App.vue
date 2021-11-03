<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/destination">Destination</router-link> |
    <router-link to="/crew">Crew</router-link> |
    <router-link to="/technology">Technology</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style lang="scss">
  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  .fade-enter-from {
    opacity:0;
  }

  .fade-enter-active {
    transition: all 0.5s linear;
  }

  .fade-leave-to {
    transition: all 0.5s linear;
    opacity:0;
  }
</style>
