<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/destination">Destination</router-link> |
    <router-link to="/crew">Crew</router-link> |
    <router-link to="/technology">Technology</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
img {
  display:block;
  height:auto;
  max-width: 100%;
}

</style>
