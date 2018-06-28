<template>
  <div class="news">
  		<div class="newstitle">
  			<div>
  				<p class="china">{{msg}}</p>
  				<p class="english">INDUSTRY INFORMATION</p>
  			</div>
  		</div>
  		<div class="news_list">
  			<ul class="news_list_ul">
  				
  				<li></li>
  			</ul>
  		</div>
  		<ul class="news_con_list" style="padding: 2px;">
  			<li v-for="i in 3">
  				<p class="news_list_img"><img src="../../../static/img/new.png"></img></p>
  				<p class="news_list_t">
  					<p style="font-size: 12px;color: #aaa;margin-bottom: 4px;">2018-5-8</p>
  					<h3 style="font-size: 18px;font-weight: 200;color: #333;padding-bottom: 16px;border-bottom: 1px solid #e9e9e9;margin-bottom: 16px;">
  						市政协委员值机96156热线倾听百姓心声
  					</h3>
  					<p style="color: #666;font-size: 14px;line-height: 23px;">
  						国庆节到来前夕，北京96156社区服务热线推出了10个社区便利服务精品项目，届时统一的服务规范...
  					</p>
  					
  				</p>
  			
  			</li>
  		</ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
    	msg:'行业资讯'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news_list_img{
	width: 363px;
	height: 221px;
}
.news_list_img img{
	width: 100%;
	height: 100%;
}
.news{
		clear: left;
	
	width: 1200px;
	overflow: hidden;
	margin: 0 auto;
	background-color:#fff;
}
.news_list{
	margin: 0 99px;
	padding-top: 16px;
	width: 1002px;
	height: 34px;
	border-top: 1px solid #aaa;
	margin-bottom: 49px;
}
.news_list .news_list_ul{
	width: 130px;
	margin: 0 auto;
	margin-top: 25px;
}
.news_list li{
	width: 130px;
	height: 8px;
	background: #d2261e;
	margin-right: 4px;
}
.newstitle{
	width: 330px;
	height: 64px;
	position: relative;
	background: #fff;
	text-align: center;
	left: calc(1200px / 2 - 165px);
	margin-top: 53px;
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
.news_con_list li{
	width: 367px;
	height: 394px;
	margin-right: 0px;
	padding: 15px;
	margin-bottom: 2px;
	transition: all 0.5s; 
}
.news_con_list li:hover{
	/*transform: scale(0.9);*/
	background-color: #ffffff;
	box-shadow: 0px 2px 7px 1px 
		rgba(170, 170, 170, 0.4);
}
.news_con_list li:last-child{
	
	margin-right:0px;
}
.news_list_t{
	font-size: 18px;
	margin-top: 7px;
	margin-bottom: 7px;
	color: #333;
	
}
.news_list_x{
	font-size: 14px;
	color: #666;
}
</style>
