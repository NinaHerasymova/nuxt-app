<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav=!displaySidenav"/>
    <Nuxt/>
  </div>
</template>

<script>
import TheSidenav from "../components/Navigation/TheSidenav";
import TheHeader from "../components/Navigation/TheHeader";

export default {
  components: {TheHeader, TheSidenav},
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
  html {
    font-family: 'Open Sans', sans-serif;
  }
</style>
