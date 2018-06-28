<template>
  <div class="footer">
  	<ul class="footerul">
  		<li v-for="i in imgsrc">
  			<a  class="footerimg" target="_blank" :href="i.url"><img :src="'./static/img/'+i.src" :title="i.name"/></a>
  		</li>
  	</ul>
  	<div class="address">
  		<center>
  			<br />地址：北京市丰台区石榴庄联宏大厦6层北京信息网
  			<br />公司旗下平台: &nbsp;&nbsp;北京信息网&nbsp;&nbsp;&nbsp;96156北京市社区服务宣传栏&nbsp;&nbsp;&nbsp;天下通达（北京）国际展览有限公司
  			<br />京ICP备14001781号
  		</center>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'footers',
  data () {
    return {
    	imgsrc:[
    		{'name':'北京信息网','url':'http://www.bjxxw.com','src':'bjxxw.png'},
	    	{'name':'天下通达','url':'http://www.txtdgg.com','src':'txtd.png'},
	    	{'name':'北京民政','url':'http://www.bjmzj.gov.cn/templet/mzj/index.shtml','src':'bjmz.png'},
	    	{'name':'网络110','url':'http://www.bj.cyberpolice.cn/index.jsp','src':'wl.png'},
	    	{'name':'北京文化局举报热线','url':'http://www.bjwhzf.gov.cn/accuse.do','src':'whsc.png'},
	    	{'name':'经营性网站备案信息','url':'http://www.hd315.gov.cn/beian/view.asp?bianhao=010202008062400003','src':'baxx.png'}
	    ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footer center{
		color: #fff;
		font-size: 14px;
		line-height: 35px;
	}
	.footerimg{
		background: #fff;
		display: inline-block;
		height: 50px;
	}
	.footerimg img{
		width: 100%;
		height: 100%;
	}
	.address{
	width: 100%;
	height: 165px;
	background-color: #333333;
	}
	.footerul{
		overflow: hidden;
		width: 743px;
		margin: 0 auto;
		margin-top: 42px;
		margin-bottom: 35px;
	}
	.footerul li{
		width: 116px;
		height: 50px;
		margin-right: 7px;
	}
	.footerul li:last-child{
		margin-right: 0;
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

</style>
