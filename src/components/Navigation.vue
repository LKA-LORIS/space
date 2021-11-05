<template>
  <nav>
    <ul>
      <li>
        <BaseButton type="button__navigation" link to='/'><span>00</span>Home</BaseButton>
      </li>
      <li>
        <BaseButton type="button__navigation" link to='/destination'><span>01</span>Destination</BaseButton>
      </li>
      <li>
        <BaseButton type="button__navigation" link to='/crew'><span>02</span>Crew</BaseButton>
      </li>
      <li>
        <BaseButton type="button__navigation" link to='/technology'><span>03</span>Technology</BaseButton>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  nav {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    height: 100%;
    padding: 0 16.7rem 0 7.3rem;


    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      backdrop-filter: blur(81.5485px);
      background: rgba(255, 255, 255, 0.04);
      z-index: -1;
    }

    ul {
      display: flex;
      height: 100%;
      padding: 0 25px;
      li {
        padding: 0 25px;
      }
    }

    span {
      display: inline-block;
      margin-right: 1.2rem;
      letter-spacing: 0.27rem;
      font-weight: 700;
    }
  }
</style>