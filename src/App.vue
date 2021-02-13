<template>
  <div id="app">
    <Header />
    <div class="content-wrap"> 
      <router-view></router-view>
    </div>
    <br>
    <br>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}
#content-wrap {
  padding-bottom: 2.5rem;
  
}
</style>
