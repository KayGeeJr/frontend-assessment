<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>  
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';



export default {
  name: 'App',

  components:{
    NavBar
  }
  
}
</script>

<style>
#app {
  background: url("@/assets/abstract-background.jpg");
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
