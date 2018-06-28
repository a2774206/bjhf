<template>
	<div class="case_warp">
		<div class="case">
			<div class="casetitle">
				<div>
					<p class="china">{{msg}}</p>
					<p class="english">BRAND CASE</p>
				</div>
			</div>
			<div class="case_list">
				<ul class="case_list_ul">
					<li v-for="(i,item) in ulLength" @mouseover="inint(i)" @mouseout="mouseouts()" :key='i' :class="{'active':i==num}"></li>
				</ul>
			</div>
			
			<div class="hidden">
				<ol>
					<li class="ol_left"  @click="left" v-if="num != 1"><</li>
					<li class="ol_right" @click="right" v-if='num != ulLength'>></li>
				</ol>
				<ul class="case_con_list" ref='ul'>
					<li v-for="i in dengxiang">
						
						<p class="case_list_img">
							<img :src="'static/img/'+i.img+'.png'">
						</p>
						<p class="case_list_t">{{i.title}}</p>
						<p class="case_list_x">{{i.pinpai}}</p>
					</li>
				</ul>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'case',
		data() {
			return {
				msg: '品牌案例',
				timeout:null,
				dengxiang:[
					{
						'img':'tp2','title':'社区高端灯箱','pinpai':'兴创屹墅'
					},
					{
						'img':'2_2','title':'社区高端灯箱','pinpai':'美墅杉房地产'
					},
					{
						'img':'1_1','title':'社区高端灯箱','pinpai':'TATA木门'
					},
					{
						'img':'3_3','title':'社区高端灯箱','pinpai':'链家房地产'
					},
					{
						'img':'tp1','title':'社区高端灯箱','pinpai':'美联臣'
					},
					{
						'img':'11','title':'96156社区服务宣传栏','pinpai':'十八酒坊'
					},{
						'img':'12','title':'96156社区服务宣传栏','pinpai':'苏宁易购'
					},{
						'img':'13','title':'96156社区服务宣传栏','pinpai':'长城宽带'
					},{
						'img':'14','title':'96156社区服务宣传栏','pinpai':'方太电器'
					},{
						'img':'16','title':'96156社区服务宣传栏','pinpai':'大中电器'
					},{
						'img':'17','title':'96156社区服务宣传栏','pinpai':'美的空调'
					},{
						'img':'18','title':'96156社区服务宣传栏','pinpai':'北京现代'
					},{
						'img':'20','title':'道闸门','pinpai':'依诺瓷砖'
					},{
						'img':'21','title':'道闸门','pinpai':'格力电器'
					},{
						'img':'22','title':'道闸门','pinpai':'TATA木门'
					},{
						'img':'23','title':'道闸门','pinpai':'梦天水漆木门'
					}
					
				],
				num:1
			}
		},
		computed:{
			ulLength(){
				 return this.dengxiang.length/4
			}
		},
		created(){
			this.marquee();
		},
		beforeDestroy(){
			clearInterval(this.timeout)
		},
		methods:{
			inint(i){
				clearInterval(this.timeout);
				this.ulength(i);
			},
			mouseouts(){
				this.marquee()
			},
			ulength(i){
				this.num = i;
				let width = 1200;
				let el = this.$refs.ul;
				let left = 0;
				left = -width * (this.num - 1) + 'px';
				el.style.left = left;
			},
			marquee(){
				this.timeout = setInterval(()=>{
				if(this.num<this.ulLength){
					this.num ++
				}else{
					this.num = 1
				}
				this.ulength(this.num);
				},4000)
			},
			left(){
				this.num = this.num - 1;
				if(this.num>=1){
					let el = this.$refs.ul;
					el.style.left = ( this.num - 1 ) * -1200+'px';
				}
			},
			right(){
				this.num = this.num + 1;
				if(this.num<=this.ulLength+1){
					let el = this.$refs.ul;
					el.style.left =  -this.num * 1200 + 1200  +'px';
				}
				
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.case_warp{
		width: 100%;
		overflow: hidden;
		background-color: #f9f9f9;
		padding-bottom: 45px;
	}
	.case_list_img {
		width: 249px;
		height: 277px;
	}
	
	.case_list_img img {
		width: 100%;
		height: 100%;
	}
	
	.case {
		width: 1200px;
		overflow: hidden;
		margin: 0 auto;
		margin-top: 45px;
		
	}
	
	.case_list {
		margin: 0 99px;
		padding-top: 16px;
		width: 1002px;
		height: 34px;
		border-top: 1px solid #aaa;
		margin-bottom: 49px;
	}
	
	.case_list .case_list_ul {
		width: 536px;
		margin: 0 auto;
		margin-top: 25px;
	}
	
	.case_list li {
		width: 130px;
		height: 8px;
		background: #aaa;
		margin-right: 4px;
	}
	
	.casetitle {
		width: 330px;
		height: 64px;
		position: relative;
		background: #F9F9F9;
		text-align: center;
		left: calc(1200px / 2 - 165px);
		top: 2px;
	}
	
	.china {
		font-size: 36px;
		color: #333333;
		margin-bottom: 12px;
	}
	
	.english {
		font-family: ArialMT;
		font-size: 18px;
		color: #666;
	}
	
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: block;
		float: left;
		margin: 0;
		padding: 0;
	}
	
	a {
		color: #42b983;
		text-decoration: none;
		color: #fff;
	}
	.hidden{
		width: 1200px;
		height: 391px;
		overflow: hidden;
	}
	.case_con_list{
		width:5000px;
		position: relative;
		clear: both;
		top: -37px;
		left: 0;
		transition: all 1.2s;
	}
	
	/*.case_con_list li {
		width: 249px;
		height: 361px;
		margin-right: 27px;
		padding: 15px;
		margin-bottom: 2px;
		transition: all 0.5s;
		background: #fff;
		white-space:nowrap; 
		
	}*/
	.case_con_list li {
		width: 249px;
		height: 361px;
		margin-right: 68px;
		padding: 0px;
		margin-bottom: 2px;
		transition: all 0.5s;
		background: #fff;
		white-space:nowrap; 
		
	}
	.case_con_list li:nth-child(4n) {
		margin-right: 0;
	}
	.case_con_list li:hover {
		transform: scale(0.9);
		background-color: #ffffff;
		box-shadow: 0px 2px 7px 1px rgba(170, 170, 170, 0.4);
	}
	
	
	
	.case_list_t {
		font-size: 18px;
		margin-top: 17px;
		margin-bottom: 16px;
		color: #333;
	}
	
	.case_list_x {
		font-size: 14px;
		color: #666;
	}
	ol {
		position: relative;
		z-index: 99;
		text-align: center;
		top: calc(277px / 2 - 18.5px );
		-webkit-margin-before: 0em;
   		-webkit-margin-after: 0em;
   		-webkit-padding-start: 0px;
   		
	}
	ol li{
		width: 35px;
		height: 28px;
		background-color: rgba(0, 0, 0, 0.6);
		opacity: 0.6;
		font-size: 21px;
		transform: scaleY(2);
		line-height: 28px;
		cursor: pointer;
	}
	ol li:first-child{
		float: left;
		color: #fff;
	}
	ol li:last-child{
		float: right;
		color: #fff;
	}
	 .case_list_ul .active{
		background: #d2261e;
	}
</style>