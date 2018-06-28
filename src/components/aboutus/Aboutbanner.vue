<template>
  <div class="AboutAll">
  	<div class="Aboutbanner">
    		<img src="../../../static/img/aboutbanner.png">
    		<div class="content">
    			<center class="content_english">ABOUT US</center>
    			<center class="content_china">关于我们</center>
    		</div>
    		<div class="gsjs">
    		</div>
    		
    </div>
    <div class="gsjs_title">
  			<p>北京鸿飞广告有限公司是集专业的广告策划、研究、推广、代理于一体的专业广告服务机构。公司最新推出的社区户外广告是一种新颖的社区户外广告媒体。与北京社区服务有限公司联手创办的社区户外服务媒体，现在重点对北京18区县的2600个社区所有的居民楼、写字楼、高档小区进行开发、建设和发布。运作户外广告牌16万块。</p>
  			<p>在新世纪发展的今天，社区户外广告媒体不仅担负起发展城市经济、宣扬民族文化的职责，而且是与时俱进，与时代的主旋律和城市的新风貌相协调。此外，开发的新媒体为明天的市场提供了新的宣传载体，企业利用这个载体提高市场占有率，使其宣传达到权威性、快捷性、长期性的广泛投放效果。</p>
  			<p>社区户外广告是由PVC展板、不锈钢结构写真面以及保利布画布构成，它由社区公益宣传和广告两部分构成，主要挂在社区的主出入口，楼门出入口以及社区活动中心、停车场、马路旁边等人员流动性大，流动面积广的位置，她的针对性特别强，主要服 务对象有：学校、培训机构、医院、娱乐中心、房地产、保险公司等各企事业单位及个体工商户等等。</p>
  			<p>北京鸿飞广告有限公司具有多年户外经验，一件件成功的作品脱颖而出，相信我们的付出一定会使您的企业品牌更加美观、更具有个性化，具有独创性。</p>
  			<p>我们真诚的期待与您合作，携手共进，启迪未来！</p>
  		</div>
  		<div class="youshi_all">
	  			<div id="youshi">
		  			<h2>社区广告  五大优势</h2>
		  			<p>COMMUNITY　ADVERTISEMENT 5 BIG SUPERIORITY</p>
		  			<div class="youshi_bottom"></div>
		  		</div>
		  		<div class="youshi_img"></div>
  		</div>
  		
  </div>
</template>

<script>

export default {
  name: 'Aboutbanner',
  data () {
    return {
      msg: ''
    }
  },
  components:{
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
.AboutAll{
	
}
.Aboutbanner{
	width: 100%;
	height: auto;
	position: relative;
}
.Aboutbanner img{
	width: 100%;
	height: auto;
	
}
.content{
	text-align: center;
	width: 163px;
	height: 97px;
	margin: 0 auto;
	position: absolute;
	top: calc( 50% - 43.5px );
	left: calc( 50% - 82.5px );
	color: #ffffff;
	
}
.content_china{
	width: 92px;
	height: 23px;
	padding-top: 74px;
	font-size: 22px;
	font-weight: 300;
	margin: 0 auto;
	border-top:3px solid #d2261e ;
	margin-top: -60px;

}
.content_english{
	margin: 0 auto;
	color:rgba(255, 255, 255, 0.5);
	font-size: 29px;
}
.gsjs{
	width: 144px;
	height: 150px;
	background: url(../../../static/img/gsjs.png);
	background-size: cover;
	position: absolute;
	bottom: -75px;
	left: 5.393258426966292%;
}
.gsjs_title{

	width: 1182px;
	margin: 0 auto;
	margin-top: 116px;
	padding-bottom: 40px;
		
}
.gsjs_title p{
	text-indent: 2em;
	line-height: 2em;
	margin-bottom: 15px;
	font-size: 14px;
	color: #333;
}
#youshi{
	width: 1198px;
	height: 98px;
	margin: 0 auto;
	text-align: center;
	margin-top: 40px;
}
#youshi h2{
	font-size: 36px;
	font-weight: normal;
	color: #333333;
}
#youshi p{
	margin: 24px 0;
}
.youshi_bottom{
	width: 130px;
	height: 8px;
	background-color: #d2261e;
	margin: 0 auto;
}
.youshi_img{
	width: 1206px;
	height: 820px;
	margin: 0 auto;
	background: url(../../../static/img/wdys.png);
	margin-top: -180px;
	margin-bottom: 130px;
}
.youshi_all{
	width: 100%;
	overflow: hidden;
	background: #f9f9f9;
}
</style>
