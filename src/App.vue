<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
  import Header from './components/Header.vue';
  export default {
    components: {
      Header
    }

  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@400;700&family=Bellefair&display=swap');

  // variables CSS
  :root {
    // HEX : #FFFFFF
    --white: hsla(0, 0%, 100%, 1);
    --white-50: hsla(0, 0%, 100%, 0.5);
    --tropical-blue: hsla(231, 77%, 90%, 1);
    --ebony: hsla(230, 35%, 7%, 1);
  }

  //   font-family: 'Barlow', sans-serif;
  // font-family: 'Barlow Condensed', sans-serif;
  // font-family: 'Bellefair', serif;



  // Reset

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
    overflow-wrap: break-word;
  }

  img,
  svg {
    display: block;
    height: auto;
    max-width: 100%;
  }

  // Body

  body {
    position: relative;
    margin: 0;
    padding-top: 4rem;
    font-size: 1.8rem;
    -webkit-text-size-adjust: 100%;
    min-height: 100vh;
    color: var(--white);
    font-family: 'Barlow Condensed', sans-serif;
    overflow-x: hidden;
    background-image: url('./assets/background/background-desktop.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  #app {
    position: relative;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Bellefair', serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    text-transform: uppercase;
    font-weight: 400;
    margin: 0;
  }

  h1,
  .h1 {
    font-size: 15rem;
    color: var(--white);
  }

  h5,
  .h5 {
    font-size: 2.8rem;
    color: var(--tropical-blue);
    text-transform: uppercase;
    letter-spacing: 0.472rem;
    font-family: 'Barlow Condensed', sans-serif;
  }

  p {
    color: var(--tropical-blue);
    line-height: 3.2rem;
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    margin:0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 1190px;
    width: 100%;
    margin: 0 auto;
    padding: 0 4rem;
  }

  // Transitions Pages

  .fade-enter-from {
    opacity: 0;
  }

  .fade-enter-active {
    transition: all 0.5s linear;
  }

  .fade-leave-to {
    transition: all 0.5s linear;
    opacity: 0;
  }

  @media (min-resolution: 192dpi) {
    body {
      background-image: url('/img/meeting-s@2x.jpg');
    }
  }
</style>