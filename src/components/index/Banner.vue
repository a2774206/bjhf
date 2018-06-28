<template>
  <div class="Banner">
  	<slider :pages="pages" :sliderinit="sliderinit">
	    <!-- slot  -->
	  </slider>
  </div>
</template>

<script>
import slider from 'vue-concise-slider'
export default {
   data () {
      return {
        //图片列表[arr]
        pages:[
          
          {
           title: 'slide2',
           style:{
            background:'url(static/img/banner_11.jpg)'
            }
          },
          {
            title: 'slide3',
            style:{
              background:'url(static/img/banner_12.jpg)',
            },
          }
        ],
        //滑动配置[obj]
        sliderinit: {
          currentPage: 0,//当前页码
          thresholdDistance: 500,//滑动判定距离
          thresholdTime:1000,//滑动判定时间
          autoplay:3000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:'horizontal',//方向设置，垂直滚动
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
        }
      }
    },
    components: {
        slider
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
  display: block;
  
}
a {
  color: #42b983;
}
.Banner{
	overflow: hidden;
	width: 100%;
	background: #fff;
	height: 500px;
}
.Banner img{
	width: 100%;
}
</style>
