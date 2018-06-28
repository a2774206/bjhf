<template>
  <div class="friend">
  	<div class="fx">
  		<div class="friendtitle">
  		<p class="china">{{msg}}</p>
  		<p class="english"> COOPERATIVE PAETNER</p>
  	</div>
  	<div style="padding-bottom: 20px;">
  		<ul class="friendsnav">
  			<li v-for="(i,item) in LengthSize" class="friend_nav_li" :class="{'active':i==num}" @mouseover="ulength(i)"></li>
  		</ul>
  		<ul class="friend_nav">
  			
  		</ul>
  		<div class="nav_list">
  			<ul class="friendLists" ref='ul'>
	  			<li v-for="item in imgsrc">
	  				<img :src="'./static/img/'+item.src"/>
	  			</li>
	  		</ul>
  		</div>
  	</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'friend',
  data () {
    return {
    	msg:'合作伙伴',
    	num:1,
    	imgsrc:[
    		{'name':'中国人寿','url':'http://www.renshou.com','src':'rs.png'},
	    	{'name':'中国电信','url':'http://www.renshou.com','src':'dx.png'},
	    	{'name':'方正宽带','url':'http://www.renshou.com','src':'kd.png'},
	    	{'name':'苏宁易购','url':'http://www.renshou.com','src':'sn.png'},
	    	{'name':'雪佛兰','url':'http://www.renshou.com','src':'xfll.png'},
	    	{'name':'比亚迪汽车','url':'http://www.renshou.com','src':'byd.png'},
	    	{'name':'北京银行','url':'http://www.renshou.com','src':'bjyh.png'},
	    	{'name':'我爱我家','url':'http://www.renshou.com','src':'wawj.png'},
	    	{'name':'高思教育','url':'http://www.renshou.com','src':'gsjy.png'},
	    	{'name':'家乐福','url':'http://www.renshou.com','src':'jlf.png'},
	    	{'name':'KCoo','url':'http://www.renshou.com','src':'Kcoo.png'},
	    	{'name':'链家','url':'http://www.renshou.com','src':'lj.png'},
	    	{'name':'龙文教育','url':'http://www.renshou.com','src':'lwjy.png'},
	    	{'name':'美联臣','url':'http://www.renshou.com','src':'mlc.png'},
	    	{'name':'麦田房产','url':'http://www.renshou.com','src':'mtfc.png'},
	    	{'name':'王井府百货','url':'http://www.renshou.com','src':'wfjbh.png'},
	    	{'name':'和合承德','url':'http://www.renshou.com','src':'cdbssz.png'},
	    	{'name':'物美','url':'http://www.renshou.com','src':'wm.png'},
	    	{'name':'小狗电器','url':'http://www.renshou.com','src':'xgdq.png'},
	    	{'name':'中国铁建','url':'http://www.renshou.com','src':'zgtj.png'}
	    ]
    }
 	},
 	computed:{
 		LengthSize(){
 			return Math.ceil(this.imgsrc.length/8);
 		}
 	},
 	methods:{
 		ulength(i){
 			this.num = i;
			let width = 1235;
			let el = this.$refs.ul;
			let left = 0;
			left = -width * (i - 1) + 6 + 'px';
			el.style.left = left;
			console.log(left)
 		}
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.active{
		background: #d2261e !important;
	}
	.friendsnav{
		width: 400px;
		margin: 0 auto;
	}
	.nav_list{
		width: 1235px;
		margin: 0 auto;
		overflow: hidden;
	}
	.friendsnav li{
		width: 130px;
		height: 8px;
		background: #dedede;
		margin-right: 4px;
	}
	.friendsnav li:last-child{
		margin-right: 0;
	}
	.friend .fx{
		width: 100%;
		overflow: hidden;
		background: rgba(0,0,0,0.7);
	}
	.friendLists{
		white-space: nowrap;
		clear: left;
		width: 3780px;
		position: relative;
		left:calc((100% - 1235px) / 2 + 14px);
		height: 320px;
		overflow: hidden;
		margin-top: 40px;
		transition: all 0.5s; 
	}
	.friendLists li{
		width: 252px;
		height: 92px;
		margin-right: 63px;
		margin-bottom: 88px;
		position: relative;
		overflow: hidden;
	}
	.friendLists li::before{
		content: ' ';
		display: block;
		position: absolute;
		top: -10px;
		width: 40px;
		height: 120%;
		background: rgba(255,255,255,0.4);
	
		transform: rotate(30deg);
		left: -80px;
		transition: left .4s;
	}
	.friendLists li:hover::before{
		left: 400px;
	}
	.friendLists li img{
		width: 100%;
		height: 100%;
	}
	.friend_nav{
		width: 532px;
		margin: 0 auto;
		margin-top: 20px;
	}
.friend_nav_li{
	width: 130px;
	height: 8px;
	margin-right: 4px;	
}
.friend_nav li.friend_nav_li:last-child{
	margin-right: 0;
}
.friend_list_img{
	width: 77px;
	height: 78px;
	text-align: center;
	margin: 0 auto;

	margin-top: 46px;
	background-repeat: no-repeat;
	background-position: center;
}

.friend{

	width: 100%;
	overflow: hidden;
	margin: 0 auto;
	margin-top: 68px;
	background: url(../../../static/img/hzhb1.png) no-repeat;
	background-attachment: fixed;
	background-size: cover;
	background-position-y: 205%;
}


.friendtitle{
	width: 1002px;
	height: 98px;
	margin: 0 auto;
	text-align: center;
	padding-top: 46px;
}
/*.friendtitle div{
	width: 330px;
	height: 64px;
	position: relative;
	background: #f9f9f9;
	text-align: center;
	left: calc(1200px / 2 - 165px);
	top: 2px;
	overflow: hidden;
}*/
.china{
	font-size: 36px;
	color: #fff;
	width: 330px;
	margin: 0 auto;
	margin-bottom: 20px;
}
.english{
	font-family: ArialMT;
	font-size: 18px;
	color: #fff;
	width: 330px;
	margin: 0 auto;
	
	position: relative;
	z-index: 0;
}
.friendtitle::before{
	content: ' ';
	display: block;
	width: 100%;
	height: 1px;
	background: url('../../../static/img/x.png');
	background-position: center;
position: relative;
top: 70px;
z-index: 0;
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
ul, menu, dir {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
}
</style>
