<template>
	<div id="ph-header" class="ph-header">
		<ul class="layui-nav">
			<li class="layui-nav-item">
				<img src="../assets/images/logo.jpg" height="69" width="67" alt="">
			</li>
			<li class="layui-nav-item ph-title">
				<a href="">人案智能系统</a>
			</li>
			<li class="layui-nav-item link-page-title">
				<router-link to="/">首页</router-link>
			</li>
			<li class="layui-nav-item link-page-title">
				<router-link to="/AJGL">案件管理</router-link>
			</li>
			<li class="layui-nav-item link-page-title">
				<router-link to="/XSDFX">相似度分析页面</router-link>
			</li>
			<li class="layui-nav-item link-page-title">
				<router-link to="/GXFX">关系分析</router-link>
			</li>
			<li class="layui-nav-item link-page-title">
				<router-link to="/KSHFX">可视化深度分析</router-link>
			</li>
			<li class="layui-nav-item link-page-title">
				<router-link to="/TJFX">统计分析</router-link>
			</li>
			<li class="layui-nav-item link-page-title">
				<router-link to="/YJ">预警</router-link>
			</li>
			<li class="layui-nav-item link-page-title">
				<router-link to="/WBAQ">文本案件结构化</router-link>
			</li>
			<li class="layui-nav-item link-page-title">
				<router-link to="/XTGL">系统管理</router-link>
			</li>
			<li class="layui-nav-item">
				<img src="../assets/images/system-person.gif" height="29" width="26" alt="">
			</li>
			<li class="layui-nav-item ph-user">
				<a href="">{{headerUserName}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: '',
		data () {
			return {

			}
		},
		props:[
			'headerUserName'
		]
	}
</script>
<style scoped>
	.ph-header{
		width: 100%;
		height: 70px;
	}
	.ph-header .layui-nav{
		background-color: #40C5CC;
	}
	.ph-header .layui-nav a{
		color: #fff;
	}
	.ph-header .layui-nav .ph-title,.ph-header .layui-nav .ph-user{
		margin-left: 0!important;
	}
	.ph-header .layui-nav .ph-title a{
		padding-left: 0!important;
		font-size: 16px!important;
		cursor: default;
	}
	.ph-header .layui-nav .ph-user a{
		padding-left: 0!important;
		font-size: 18px;
		color: #F05133;
	}	
	.ph-header .layui-nav .link-page-title:hover{
		background-color: #16979E;
	}
</style>