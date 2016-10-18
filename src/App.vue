<template>
  <div id="app">
    <hhl-menu></hhl-menu>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <hhl-footer></hhl-footer>
  </div>
</template>

<script>
  import Menu from './components/Menu'
  import Footer from './components/Footer'

  export default {
    components: {
      'hhl-menu': Menu,
      'hhl-footer': Footer
    }
  }
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
