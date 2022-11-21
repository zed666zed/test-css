<template>
  <div id="app">
    <!-- <login></login> -->
    <!-- <Home></Home> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './pages/login/login.vue'
import Home from './pages/home/home.vue'
export default {
  
  name: 'App',
  components:{
    Login,
    Home
  }
}
</script>

<style >
#app {
  height: 100vh;
}

</style>
