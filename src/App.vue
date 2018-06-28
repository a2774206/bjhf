<template>
  <div id="app">
  	<headers></headers>
  	<router-view/>
  	<footers></footers>
  </div>
</template>

<script>
import headers from './components/public/Header'
import footers from './components/public/Footer'
export default {
  name: 'App',
  components:{
  	headers,footers
  }
}
</script>

<style>
#app {
  font-family:"微软雅黑", 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
 	background: #fff;
  overflow: hidden;
}
p {
    display: block;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
</style>
