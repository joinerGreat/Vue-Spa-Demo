<template>
	<div id="ZASDPage" class="ZASDPage">
		<div class="content-nav">
			<el-breadcrumb separator="|" class="el-breadcrumb-first lf">
			  <el-breadcrumb-item :to="{ path: '/' }" class="bread-item">平湖</el-breadcrumb-item>
			  <el-breadcrumb-item class="bread-item">浙江</el-breadcrumb-item>
			  <el-breadcrumb-item class="bread-item">全国</el-breadcrumb-item> 
			</el-breadcrumb>
			<el-breadcrumb separator="|" class="el-breadcrumb-second lf">
			 <el-breadcrumb-item :to="{ path: '/' }" class="bread-item">最近一周</el-breadcrumb-item>
			  <el-breadcrumb-item class="bread-item">月</el-breadcrumb-item>
			  <el-breadcrumb-item class="bread-item">年</el-breadcrumb-item>
			</el-breadcrumb>
			<el-breadcrumb separator="》" class="el-breadcrumb-third rf">
			  <el-breadcrumb-item :to="{ path: '/' }" class="bread-item">最近一周</el-breadcrumb-item>
			  <el-breadcrumb-item class="bread-item">月</el-breadcrumb-item>
			  <el-breadcrumb-item class="bread-item">年</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--图表区-->
		<div class="echart-area">
			<Bar-Content></Bar-Content>
			<Pie-Content></Pie-Content>
		</div>
		<!--表格区-->
		<table class="layui-table" layui-skin="line">
			<thead>
				<tr>
					<th>案件类型</th>
					<th>案件起因</th>
					<th>案件手段</th>
					<th>案件数目</th>
					<th>案件占比</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in items">
					<td>{{item.AJLX}}</td>
					<td>{{item.AJQY}}</td>
					<td>{{item.AJSD}}</td>
					<td>{{item.AJSM}}</td>
					<td>{{item.AJZB}}</td>
					<td>
						<button class="layui-btn" @click="showDetails($event,index)">详情</button>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="dialog" v-if="willShow">
			<div class="dialog-content">
				<i class="layui-icon closeDialog" @click="closeDialog">&#x1006;</i>
				<ul v-for="(todo,index) in todos">
					<li>{{todo.AJLX}}</li>
					<li>{{todo.AJQY}}</li>
					<li>{{todo.AJSD}}</li>
					<li>{{todo.AJSM}}</li>
					<li>{{todo.AJZB}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
import Axios from 'axios'
import BarContent from '../../components/Echart/bar.vue'
import PieContent from '../../components/Echart/pie.vue'
	export default {
		name: '',
		data () {
			return {
				items: '',
				todos: [],
				willShow: false
			}
		},
		components: {
			BarContent,
			PieContent,
		},
		methods:{
			showDetails:function($event,index){
				//定义全局this
				var _this = this;
				//清空todos
				_this.todos = [];
				//jquery操作
				/*var currentTd = $(event.target).parent().siblings();
				$.each(currentTd,function(key,val){
					_this.todos.push($(val).text())
				})*/
				//当前行的数据赋值给todo
				_this.todos.push(_this.items[index]);
				console.log(_this.todos)
				_this.willShow = true;
			},
			closeDialog:function(){
				this.willShow = false;
			}
		},
		mounted: function(){
			this.$nextTick(function(){
				//定义全局this
				var  _this = this;
				Axios.get("../../../src/data/AJSD.json")
					.then(function(res){
						//console.log(res.data)
						_this.items = res.data;
						//console.log(_this.items)
					})
					.catch(function(err){
						alert(arr)
					})
			})
		}
	}
</script>
<style scoped>
	.lf{
		float: left;
	}
	.rf{
		float: right;
	}
	.ZASDPage{
		position: relative;
		width: 100%;
		height: 100%;
	}
	.content-nav{
		width: 100%;
		height: 50px;
		padding: 0 50px;
		line-height: 50px;
		box-sizing: border-box;
	}
	.el-breadcrumb{
		width: auto;
		height: 50px;
		line-height: 50px;
	}
	.el-breadcrumb-first{
		margin-right: 30px;
	}
	.bread-item{
		font-size: 16px;
	}

	.echart-area{
		width: 100%;
		height: auto;
		margin: 30px 0 30px;
		overflow: hidden;
		box-sizing: border-box;
	}
	/* ========================
	弹出框
	=========================== */
	.dialog{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.3);
	}
	.dialog .dialog-content{
		width: 50%;
		height: 100%;
		margin: 0 auto;
		padding-top: 50px;
		box-sizing: border-box;
		cursor: pointer;
	}
	.dialog .dialog-content .closeDialog{
		font-size: 22px;
		color: #fff;
		background: #40C5CC;
	}
	.dialog .dialog-content li{
		display: block;
		margin-top: 30px;
		font-size: 20px;
		color: #fff;
	}
</style>