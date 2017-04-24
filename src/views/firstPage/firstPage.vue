<template>
	<div id="firstPage" class="firstPage">
		<div class="layui-input-block">
			<input name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input" type="text" v-model.trim="name">
		</div>
		<!-- 个人工作台 -->
		<div class="person-work-space">
			<div class="header-space">
				<span><i class="layui-icon">&#xe613;</i>&nbsp;&nbsp;个人工作台</span>
				<span><i class="layui-icon" v-on:click="showlayerOpen">&#xe620;</i></span>
			</div>
			<div class="body-sapce">
			<ul>
				<li v-for="(item,index) in items">
					<span>{{item.name}}</span>
					<i class="layui-icon" v-on:click="DeleteCurrentLi($event)">&#x1006;</i>
				</li>
				<li @click="addNewList">
					<span>＋</span>
					<span>新增</span>
				</li>
			</ul>
		</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: '',
		data () {
			return {
				name: '',
				items: [
					{"name":"案件管理"},
					{"name":"系统管理"},
					{"name":"人案管理"},
					{"name":"车辆管理"},
					{"name":"各种管理"},
					{"name":"全是管理"},
					{"name":"案件管理"},
					{"name":"案件管理"},
					{"name":"案件管理"},
					{"name":"案件管理"},
					{"name":"案件管理"},
					{"name":"案件管理"},
				]
			}
		},
		methods: {
			DeleteCurrentLi:function($event){
				//删除当前元素的父级li元素
				$(event.currentTarget).parent().css('display','none');
			},
			addNewList:function(){
				if (this.name === '') {
					return; 
				}else{
					this.items.push({
						"name": this.name
					})
					this.name = '';
				}
			},
			showlayerOpen:function(){
				layer.alert('这是在设置界面', {icon: 6});
			}
		},
		mounted:function(){

		}
	}
</script>
<style scoped>
	.firstPage .layui-input-block{
		width: 500px;
		margin: 0 auto;
		margin-top: 150px;
	}
	.firstPage .layui-input{
		border-color: #ccc;
		border-radius: 5px;
	}
	/* ===========================
	个人工作台
	============================== */
	.firstPage .person-work-space{
		margin: 0 auto;
		margin-top: 50px;
		margin-bottom: 50px;
		padding: 0 50px;
		width: 900px;
		height: 450px;
		box-sizing: border-box;
		border: 1px solid #40C5CC;
	}
	.firstPage .person-work-space .header-space{
		width: 100%;
		height: 50px;
		line-height: 50px;
		box-sizing: border-box;
	}
	.firstPage .person-work-space .header-space span:nth-child(1){
		float: left;
		font-size: 16px;
	}
	.firstPage .person-work-space .header-space span:nth-child(1) i{
		font-size: 26px;
		color: #40C5CC;
	}
	.firstPage .person-work-space .header-space span i{
		cursor: pointer;
	}
	.firstPage .person-work-space .header-space span:nth-child(2){
		float: right;
	}
/* 	.firstPage .person-work-space .body-sapce{
	margin-top: 30px;
} */
	.firstPage .person-work-space .body-sapce ul{
		float: left;
		width: 100%;
		margin-top: 30px;
	}
	.firstPage .person-work-space .body-sapce li{
		position: relative;
		float: left;
		margin-bottom: 15px;
		width: 94px;
		height: 45px;
		line-height: 45px;
		text-align: center;
		cursor: pointer;
	}
	.firstPage .person-work-space .body-sapce li:hover{
		background-color: #eee;
	}
	.firstPage .person-work-space .body-sapce li i{
		display: none;
		position: absolute;
		top: -12px;
		right: 0;
	}
	.firstPage .person-work-space .body-sapce li:hover i{
		display: block;
		color: #40C5CC;
	}
</style>