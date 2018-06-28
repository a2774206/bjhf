<template>
  <div class="step">
  		<div class="steptitle">
  			<div>
  				<p class="china">{{msg}}</p>
  				<p class="english">SERVICE FLOW</p>
  			</div>
  		</div>
  		<div class="step_list">
  			<ul class="step_list_ul">
  				<li></li>
  			</ul>
  		</div>
  		<ul class="step_con_list">
  			<li v-for="(i,item) in Imgobj.imgList" @mouseenter="changeImg(i)" :key='item' @mouseleave="changeurl(i)">
  				<p class="step_list_img" :style="{backgroundImage: 'url(' + Imgobj.imgSrc + i.imgName + '.png)'}"></p>
  				<p class="step_list_x" >{{i.titleName}}</p>
				</li>
  		</ul>
  </div>
</template>

<script>
export default {
  name: 'step',
  data () {
    return {
    	msg:'服务流程',
    	Imgobj:{
    		'imgSrc':'static/img/',
    		'imgList':[
	    		{
	    			'imgName':'hzqt',
	    			'imgName1':'hzqt',
	    			'titleName':'合作洽谈'
	    		},{
	    			'imgName':'ddde',
	    			'imgName1':'ddde',
	    			'titleName':'定点定位'
	    		},{
	    			'imgName':'qdht',
	    			'imgName1':'qdht',
	    			'titleName':'签订合同'
	    		},{
	    			'imgName':'hmsj',
	    			'imgName1':'hmsj',
	    			'titleName':'画面设计'
	    		},{
	    			'imgName':'dysk',
	    			'imgName1':'dysk',
	    			'titleName':'打印上刊'
	    		},{
	    			'imgName':'hmwh',
	    			'imgName1':'hmwh',
	    			'titleName':'画面维护'
	    		},{
	    			'imgName':'skbg',
	    			'imgName1':'skbg',
	    			'titleName':'下刊报告'
	    		}
    		]
    	}
    }
  },
  methods:{
  	changeImg(i){ 
  		i.imgName = i.imgName1;
  		i.imgName= i.imgName+'1';
  		
  	},
  	changeurl(i){
  		i.imgName = i.imgName1;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.step_list_img{
	width: 77px;
	height: 78px;
	text-align: center;
	margin: 0 auto;
	background-origin: padding-box;
	margin-top: 46px;
	background-repeat: no-repeat;
	background-position: center;
}

.step{
	width: 1200px;
	overflow: hidden;
	margin: 0 auto;
	margin-top: 68px;
	padding-bottom: 20px;
}
.step_list{
	margin: 0 99px;
	padding-top: 16px;
	width: 1002px;
	height: 34px;
	border-top: 1px solid #aaa;
	margin-bottom: 49px;
}
.step_list .step_list_ul{
	width: 130px;
	margin: 0 auto;
	margin-top: 25px;
}
.step_list li{
	width: 130px;
	height: 8px;
	background: #d2261e;

}
.steptitle{
	width: 330px;
	height: 64px;
	position: relative;
	background: #fff;
	text-align: center;
	left: calc(1200px / 2 - 165px);
	top: 2px;
}
.china{
	font-size: 36px;
	color: #333333;
	margin-bottom: 12px;
}
.english{
	font-family: ArialMT;
	font-size: 18px;
	color: #666;
}
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
.step_con_list li{
	width: 160px;
	height: 219px;
	margin-right: 11px;
	border: solid 1px #d2261e;
	margin-bottom: 1px;

}
.step_con_list li:hover{
	background-color: #d2261e;
	box-shadow: 0px 6px 7px 0px 
		rgba(210, 38, 30, 0.5);
	
	
}
.step_con_list li:hover .step_list_x{
	color: #fff;
	letter-spacing: 1px;
}
.step_con_list li:last-child{
	
	margin-right:0px;
}
.step_list_t{
	font-size: 18px;
	margin-top: 17px;
	margin-bottom: 16px;
	color: #333;
}
.step_list_x{
	font-size: 18px;
	color: #666;
	text-align: center;
	margin-top: 35px;
}
</style>
