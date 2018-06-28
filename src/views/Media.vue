<template>
	<div class="media">
		<div class="Aboutbanner">
			<img src="../../static/img/banner1.png">
			<div class="content">
				<center class="content_english">COMMUNITY MEDIA</center>
				<center class="content_china">社区媒体</center>
			</div>
			<div class="gsjs">
			</div>
		</div>
		<medianav></medianav>
	</div>
</template>

<script>
	import medianav from '../components/media/MediaNav'
	export default {
		name: 'media',
		data() {
			return {
				msg: ''
			}
		},
		components: {
			medianav
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
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
		width: 323px;
		height: 97px;
		margin: 0 auto;
		position: absolute;
		top: calc( 50% - 43.5px);
		left: calc( 50% - 162.5px);
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
	
	.gsjs_title {
		width: 1182px;
		margin: 0 auto;
		margin-top: 130px;
	}
	
	.gsjs_title p {
		text-indent: 2em;
		line-height: 2em;
		margin-bottom: 15px;
		font-size: 14px;
		color: #333;
	}
</style>