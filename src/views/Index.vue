<template>
  <div class="Index">
  	<banner></banner>
  	<videos></videos>
  	<cases></cases>
  	<step></step>
  	<friend></friend>
  	<loadimg></loadimg>
<!--  	<news></news>-->
  </div>
</template>

<script>
import banner from '../components/index/Banner'
import videos from '../components/index/Video'
import cases from '../components/index/Case'
import step from '../components/index/Step'
//import news from '../components/index/News'
import friend from '../components/index/Friend'
import loadimg from './loadimg'

export default {
  name: 'Index',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    banner,videos,cases,step,friend,loadimg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
