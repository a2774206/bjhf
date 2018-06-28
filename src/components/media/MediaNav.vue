<template>
  <div class="medianav">
  		<ul class="media_nav" ref="media">
  			<li @mouseover="sj(i)" :class="{'before':i===num}" v-for="(item,i) in navData">
  				<p><img :src="item.img" /></p>
  				<strong>{{item.name}}</strong>
  			</li>
  			
  		</ul>
  		<div class="media_tab" v-show="num==0">
  			<div class="media_left">
  				<img src="static/img/fel.png">
  			</div>
  			<div class="media_right">
  				<p class="media_right_p">第一种媒体形式：</p>
  				<h3>96156北京市社区服务栏</h3>
  				<p class="hr"></p>
  				<ul>
  					<li>规 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：260cm×220cm</li>
  					<li>广&nbsp;告&nbsp;&nbsp;位：200cm×100cm</li>
  					<li>公益橱窗：200cm×100cm</li>
  					<li class="ul_red">价       格：普通小区2200元/月  中高档小区4000元/月</li>
  				</ul>
  				<p class="media_right_p1">这种规格的广告牌主要是分布在社区里面的主要出入口、主要交通路口、活动中心等社区内人流量最为密集的区域。上方为企业广告发布区，下方为社区公益宣传橱窗。</p>
  			</div>
  			<div class="img_list">
  				<ul>
  					<li v-for="i in navData[0].imgArr">
  						<img :src="'static/img/'+(i)+'.png'">
  					</li>
  				</ul>
  			</div>
  		</div>
  		
  		<div class="media_tab" v-show="num == 1">
  			<div class="media_left">
  				<img src="static/img/gddx.png">
  			</div>
  			<div class="media_right">
  				<p class="media_right_p">第二种媒体形式：</p>
  				<h3>苹果型材高端社区灯箱+LED</h3>
  				<p class="hr"></p>
  				<ul class="media_2">
  					<li class="ul_red">高清灯箱</li>
  					<li>LED</li>
  					<li>尺 &nbsp; &nbsp; &nbsp; &nbsp;寸：148cm×148cm</li>
  					<li>尺 &nbsp; &nbsp; &nbsp; &nbsp;寸：148cm×30cm</li>
  					<li>广告面积：2.78m²</li>
  					<li>广告面积：0.45m²</li>
  					<li class="ul_red">价&nbsp; &nbsp; &nbsp; &nbsp;格：7000/月</li>
  					<li class="ul_red">价&nbsp; &nbsp; &nbsp; &nbsp;格：2000/月</li>
  					<li class="ul_red">材质类型：</li>
  				</ul>
  				<p class="media_right_p1">HP720高清灯箱片     内打灯效果     拉丝不锈钢—防止生锈     钢化玻璃面板-轻透无划痕</p>
  			</div>
  			<div class="img_list">
  				<ul>
  					<li v-for="i in 16" :title="i">
  						<img :src="'static/img/dengxiang'+i+'.png'">
  					</li>
  				</ul>
  			</div>
  		</div>
  		
  		
  		<div class="media_tab" v-show="num == 2">
  			<div class="media_left">
  				<img src="../../../static/img/dzm.png">
  			</div>
  			<div class="media_right">
  				<p class="media_right_p">第三种媒体形式：</p>
  				<h3>道闸门</h3>
  				<p class="hr"></p>
  				<ul>
  					<li>规 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：80cm*300cm / 50*380cm</li>
  					<li>广&nbsp;告&nbsp;&nbsp;位：暂无</li>
  					<li>公益橱窗：暂无</li>
  					<li class="ul_red">价       格：待定</li>
  				</ul>
  				<p class="media_right_p1">这种规格的广告牌主要是分布在为写字楼、住宅、办公室、楼宇、公共通道等出入口。</p>
  			</div>
  			<div class="img_list">
  				<ul>
  					<li v-for="i in 10">
  						<img :src="'static/img/dz'+i+'.png'">
  					</li>
  				</ul>
  			</div>
  		</div>
  </div>
</template>

<script>
//	import Vue from 'vue'
//	import jquery from 'jquery'
export default {
  name: 'medianav',
  data () {
    return {
    	navData:[
  				{
  					'name':'96156北京市社区服务栏',
  					'img':'static/img/01.png',
  					'imgArr':[
  						'4','5','6','7','8','9','10','15','30','31','32','33'
  					]
  				},
  				{'name':'苹果型材高端社区灯箱','img':'static/img/02.png'},
  				{
  					'name':'道闸门',
  					'img':'static/img/03.png',
  					'imgArr':[
  						'4','5','6','7','8','9','10','11','12','13','14','15'
  					]
  				}
  			],
  		num:0
    }
  },
  methods:{
    sj(i){
//  	console.log(this.$(this.$refs.media.children[i]).addClass('before'))
			this.num = i;
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
.media_nav{
	width: 782px;
	height: 176px;
	margin: 0 auto;
	margin-top: 70px;
}
.media_nav li{
	width: 213px;
	height: 150px;
	background: #d2261e;
	margin-right:68px ;
	text-align: center;
	position: relative;
}
.before{
	box-shadow: 1px 3px 7px 1px 
		rgba(210, 38, 30, 0.35);
}
.media_nav li.before::before{
		content: ' ';
		display: block;
	 	width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #d2261e;
    position: absolute;
    bottom: -10px;
    left: calc(213px / 2 - 20px);
}
.media_nav li:last-child{
	margin-right: 0;
}
.media_nav li p{
	width: 43px;
	height: 32px;
	margin: 0 auto;
	margin-bottom: 17px;
	margin-top: 35px;
	
}
.media_nav li strong{
	display: block;
	clear: left;
	width: 131px;
	height: 40px;
	font-size: 18px;
	font-weight: 300;
	color: #fff;
	margin: 0 auto;
}
.media_tab{
	width: 1200px;
	margin:0 auto;
	margin-top: 33px;
	overflow: hidden;
	
}
.media_left{
	width: 477px;
	height: 366px;
	box-shadow: 1px 3px 7px 1px 
		rgba(35, 24, 21, 0.2);
	float: left;
	margin-left: 1px;
	margin-top:1px;
}
.media_right{
	float: right;
	width: 626px;
	height: 335px;
	box-shadow: 1px 3px 7px 1px 
		rgba(35, 24, 21, 0.2);
	padding-top: 29px;
	padding-left:38px ;
	padding-right: 38px;
	margin-right: 3px;
	margin-top:2px;
	color: #666;
}
.media_left img{
	width: 448px;
	height: 336px;
	margin-top: 15px;
	margin-left: 15px;
}
.media_right_p{
	font-size: 14px;
	margin-bottom: 15px;
}
.media_right h3{
	font-size: 24px;
	color: #d2261e;
	margin-bottom: 34px;
}
.media .hr{
	width: 75px;
	height: 3px;
	background-color: #d2261e;
	margin-bottom: 18px;
}
.media .media_right{
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 28px;
}
.media .media_right li{
	float: none;
}
.media_right_p1{
	margin-top: 35px;
	clear: left;
}
.img_list{
	width: 1208px;
	height: 699px;
	margin: 0 auto;
	clear: both;
	padding-top: 67px;
}
.img_list li{
	width: 250px;
	height: 184px;
	padding: 16px;
	margin-right: 25px;
	box-shadow: 0px 3px 7px 0px 
		rgba(35, 24, 21, 0.2);
		margin-bottom: 24px;
		transition: transform .5s;
}
.img_list li:hover{
	transform: scale(1.05);
	background: #fff;
	box-shadow:none;
}
.img_list li:nth-child(4n){
	margin-right: 0;
}
.img_list li img{
	width: 100%;
	height: 100%;
}
.ul_red{
	color: #d2261e;
}
.media_2 li{
	width: 50%;
	float: left !important;
}
</style>
