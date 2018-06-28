<template>
  <div class="Video">
  	<div class="video_content">
  		<div id="video">
  			<video width="800" height="" autoplay="autoplay" controls="controls" poster="../../../static/img/bjxxw_j.jpg">
  				<source src="../../../static/bjxxw.mp4" type="video/mp4"></source>
  				<object width="" height="" type="application/x-shockwave-flash" data="myvideo.swf">
  					<param name="movie" value="myvideo.swf" />
  					<param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
  				</object>
  				当前浏览器不支持 video直接播放，点击这里下载视频： <a href="myvideo.webm">下载视频</a>
  			</video>
  		</div>
  		<div class="video_sm">
  			<!--<p>北京市社区公共服务信息导引牌”项目是96156北京市社区公共服务平台推介的公益项目。</p>
  			<p>北京信息网与北京市社区服务中心联合推出96156北京市社区服务宣传栏，广告牌直接安放在每个社区大门口，锁定目标人群，覆盖北京16区县2766个社区。北京信息网和6000块96156信息导引牌，为商家提供全套的线上线下推广解决方案。</p>
  			<p>近年，公司开辟了高端社区高端苹果型材灯箱业务。本项目位于高端社区，锁定高端消费群体，消费人群准确。现在已经有500多块分布在北京城六区高端社区及商圈。</p>-->
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
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
.Video{
	width: 100%;
	overflow: hidden;
	padding-bottom: 20px;
}
.video_content{
	width: 1200px;
	margin: 0 auto;
	margin-top: 47px;
}
#video{
	width: 866px;
	height: 500px;
	float: left;
	margin-right: 25px;
	
}
video{
	width: 100%;
	height: 100%;
	background: #fff;
	}
.video_sm{
	width: 271px;
	height: 420px;
	float: left;
	background-color: #d2261e;
	color: #fff;
	padding:36px 17px;
	line-height: 1.8em;
	background: url(../../../static/img/111.png);
	background-size: cover;
	margin-top: 3px;
}
.video_sm p{
	text-indent: 2em;
}
</style>
