<template>
	<div class="abouts">
		<div>
			<div class="Aboutbanner">
				<img src="static/img/banner2.png">
				<div class="content">
					<center class="content_english">CONTACT US</center>
					<center class="content_china">联系我们</center>
				</div>
				<div class="gsjs">
				</div>

			</div>
			<ul class="contact_nav">
				<li>
					<p style="margin-top: 42px;margin-bottom: 15px;"><img src="static/img/ywlx.png" ></p>
					<h4 style="margin-bottom: 34px;">业务联系</h4>
					<p style="margin-bottom: 12px;">联系电话：13911088082</p>
					<p>固定电话：400-0098-987</p>
				</li>
				<li>
					<p style="margin-top: 42px;margin-bottom: 15px;"><img src="static/img/hfyx.png"></p>
					<h4 style="margin-bottom: 34px;">鸿飞邮箱</h4>
					<p style="margin-bottom: 12px;">邮箱1：xubin@bjxxw.com</p>
					<p>邮箱2：510255206@qq.com</p>
				</li>
				<li>
					<p style="margin-top: 42px;margin-bottom: 15px;"><img src="static/img/QQ.png"></p>
					<h4 style="margin-bottom: 34px;">客服QQ</h4>
					<p style="margin-bottom: 12px;">QQ1：510255206</p>
					<p>QQ2：2107472851</p>
				</li>
				<li>
					<p style="margin-top: 42px;margin-bottom: 15px;"><img src="static/img/gsdz.png"></p>
					<h4 style="margin-bottom: 34px;">公司地址</h4>
					<p style="margin-bottom: 12px;">北京市丰台区石榴庄西街232号</p>
					<p>联宏大厦6层北京信息网</p>
				</li>
			</ul>
		</div>
		<maps></maps>
		<div class="mapimg">
			<div class="mp_z"></div>
			<div class="liuyan">
				<p style="font-size: 24px;color: #fff;margin-top: 26px;">给我们留言</p>
				<p style="font-size: 24px;color: #fff;">Leave us a message</p>
				<div id="message">
					<form action="http://www.bjxxw.com/hongfei/sent_mail.php" method="post">
						<ul>
							<li>
								<p style="position: relative;width: 27px;height: 21px;top:34px;left: 21px;">
									<img src="static/img/yx.png" width="20" height="16" style="margin-top: 2px;">
								</p>
								<input type="email" placeholder="邮箱" name="email" style="width: 679px;height: 47px;">
							</li>
							<li style="position: relative;">
								<p style="position: relative;width: 27px;height: 21px;top:30px;left: 22px;">
									<img src="static/img/xm.png" width="18" height="22" style="margin-top: 2px;">
								</p>
								<p style="position: absolute;width: 27px;height: 21px;top:31px;right: 285px;">
									<img src="static/img/dhico.png"  width="22" height="22">
								</p>
								<p style="width: 333.5px;height: 47px;float: left;margin-right: 51px;">

									<input type="text" placeholder="姓名" name="name" style="width: 290px;height: 47px;" />
								</p>
								<p style="width: 333.5px;height: 47px;float: left;">
									<input type="text" placeholder="电话" name="tel" style="width: 295px;height: 47px;" />
								</p>
							</li>
							<li>
								<p style="position: relative;width: 27px;height: 21px;top:34px;left: 21px;">
									<img src="static/img/ly.png" width="20" height="19">
								</p>
								<textarea placeholder="留言" name="xuqiu" style="width: 679px;height: 155px;margin-bottom:10px;padding-left: 55px;padding-top: 15px;"></textarea>
							</li>
							<li><input type="submit" class="nosumit" id="submit"></li>
						</ul>
						<div class="lhds">
							<a target="_blank" href="https://j.map.baidu.com/60uAP">
								<p class="bjxxwbj">
									<strong style="display: inline-block;margin-top: 6px;">北京信息网</strong>
									<br />
									<span style="font-size: 12px;color: #3c6ccd;display: inline-block;margin-top: 20px;">北京市丰台区石榴庄西街232号联宏大厦6层北京信息网</span>
									<br /><span style="display: inline-block;margin-top: 6px;">地铁10号线石榴庄站（C东南口出）步行540米</span>
									<br /><span style="display: inline-block;margin-top: 6px;">公交光彩路南口站下车步行220米</span>
								</p>
							</a>
							<div class="zhongdian"></div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import maps from '../components/contactus/map'
	export default {
		name: 'Aboutus',
		data() {
			return {
				msg: ''
			}
		},
		components: {
			maps
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.contact_nav li img{
		
	}
	::-webkit-input-placeholder {
		color: #aaa;
	}
	
	input {
		padding: 0;
		border: 0;
	}
	
	.nosumit {
		padding: 0 !important;
		width: 130px;
		height: 50px;
		line-height: 50px;
		background: #d2261e;
		margin: 0;
		font-size: 18px;
		color: #ffff;
	}
	
	.nosumit:hover {
		background: #a81e18;
	}
	
	#message {}
	
	#message ul {
		width: 740px;
		float: left;
	}
	
	#message ul li {
		margin-bottom: 0px;
	}
	
	#message ul li input {
		padding-left: 55px;
	}
	
	.liuyan {
		width: 1200px;
		margin: 0 auto;
		position: absolute;
		left: calc((1366px / 2) - 600px);
	}
	
	.mapimg {
		height: 499px;
		width: 1920px;
		margin: 0 auto;
		background: url(../../static/img/dt.png) no-repeat;
		background-size: cover;
		background-position-x: -300px;
		position: relative;
	}
	
	.mp_z {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		position: absolute;
		top: 0;
	}
	
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul,
	menu,
	dir {
		display: block;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
	
	li {
		display: inline-block;
	}
	
	a {
		color: #42b983;
	}
	
	.Aboutbanner {
		width: 100%;
		height: auto;
		position: relative;
	}
	
	.Aboutbanner img {
		width: 100%;
		height: auto;
	}
	
	.content {
		text-align: center;
		width: 190px;
		height: 97px;
		margin: 0 auto;
		position: absolute;
		top: calc( 50% - 43.5px);
		left: calc( 50% - 95px);
		color: #ffffff;
	}
	
	.content_china {
		width: 92px;
		height: 23px;
		padding-top: 74px;
		font-size: 22px;
		font-weight: 300;
		margin: 0 auto;
		border-top: 3px solid #d2261e;
		margin-top: -60px;
	}
	
	.content_english {
		margin: 0 auto;
		color: rgba(255, 255, 255, 0.5);
		font-size: 29px;
	}
	
	.contact_nav {
		font-size: 12px;
		width: 1041px;
		overflow: hidden;
		margin: 48px auto;
	}
	
	.contact_nav h4 {
		font-size: 18px;
	}
	
	.contact_nav li {
		display: flex;
		flex-direction: column;
		width: 213px;
		height: 252px;
		background-color: #d2261e;
		color: #fff;
		margin-right: 63px;
		float: left;
		transition: all .2s ease-in 0s;
		align-items: center;
	}
	
	.contact_nav li:hover {
		transform: rotateY(0deg);
	}
	
	.contact_nav li:last-child {
		margin-right: 0;
	}
	
	.lhds {}
	
	.bjxxwbj {
		width: 330px;
		height: 172px;
		background: url(../../static/img/hfdz.png);
		float: left;
		margin-left: 85px;
		margin-top: 20px;
		text-align: left;
		padding: 0 17px;
	}
	
	.zhongdian {
		width: 48px;
		height: 60px;
		background: url(../../static/img/dz.png);
		position: absolute;
		right: 202px;
		bottom: 140px;
	}
</style>