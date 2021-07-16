<template>
  <div id="app">

    <Nav></Nav>    
    <router-view></router-view>    
    <Footer></Footer>
    
  </div>
</template>

<script>

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "Helvetica", "Arial",'Noto Sans TC',"LiHei Pro","黑體-繁","微軟正黑體", sans-serif;
}

html {
  height:100%;
}

</style>
