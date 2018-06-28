<template>
  <div class="headers">
  	<div class="logo">
  		<div class="logo_0"></div>
  		<div class="logo_1"></div>
  		<div class="phone">
  			<p class="phone_img"></p>
  			<p class="p_msg">
  				<p class="msg_top">服务热线</p>
  				<p class="msg_bottom">400-0098-987</p>
  			</p>
  		</div>
  	</div>
  	<div class="headerlist">
  		<ul class="header_list">
  	  		<router-link :to="i.route" tag="li"  v-for="(i,item) in headerList" :key='item' :class='{active:i.route==active}'>
  	  			{{i.name}}
  	  		</router-link>
  	  		
  	  	</ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
    	headerList:[
	    	{'name':'首页','route':'/'},
	    	{'name':'关于我们','route':'/aboutus'},
	    	{'name':'社区媒体','route':'/media'},
	    	{'name':'户外招商','route':'/Investment'},
	    	{'name':'整合营销','route':'/Marketing'},
	    	{'name':'人才招聘','route':'/Talent'},
	    	{'name':'联系我们','route':'/Contactus'}
    	],
    	deflaut:'/'
    }
   
  },
   computed:{
    	active(){
    		 this.deflaut = this.$route.path;
    			return this.deflaut;
    	}
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
  float:left;
  margin:0;
  padding: 0;
}
a {
  color: #42b983;
  text-decoration: none;
  color: #fff;
}
.headers{
	width: 100%;
	overflow: hidden;
	background: #fff;
}
.logo{
	width: 1200px;
	margin: 0 auto;
}
.logo_0{
	width: 154px;
	height: 62px;
	background: url(/static/img/96156.png);
	float: left;
	margin-top: -6px;
	margin-bottom: 6px;
}
.logo_1{
	width: 209px;
	height: 34px;
	margin-top: 14px;
	margin-left: 51px;
	margin-right: 557px;
	background: url(/static/img/hunfei.png);
	background-size: 100% 100%;
	float: left;
}
.phone{
	overflow: hidden;
	margin-top: 15px;
}
.phone_img{
	width: 40px;
	height: 48px;
	background: url(../../../static/img/dh.png);
	background-size: 100% 100%;
	float: left;
	margin-right: 20px;
}
.msg_top{
	height: 18px;
	font-size: 18px;
	line-height: 18px;
	color: #666666;
	text-align: left;	
	margin-bottom: 9px;
	overflow: hidden;
}
.msg_bottom{
	height: 21px;
	font-size: 25px;
	line-height: 21px;
	color: #d1251d;
}
.headerlist{
	width: 100%;
	clear: both;
	background-color: #333333;
}
.header_list{
	width: 1200px;
	height: 51px;
	line-height: 51px;
	margin: 0 auto;
	
}
.header_list li{
	width: 171px;
	height: 51px;
	font-size: 18px;
	text-align: center;
	margin: 0;
	padding: 0;
	color: #fff;
}
.header_list li:hover{
	cursor: pointer;
}
.active{
	background-color: #d2261e;
}
</style>
