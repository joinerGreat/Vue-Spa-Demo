<template>
	<div id="GXFXPage" class="GXFXPage">
		<div class="layui-form-item">
		    <label class="layui-form-label">搜索结果</label>
		    <div class="layui-input-block">
		      <input name="title" lay-verify="title" autocomplete="off" :placeholder="placeholder" class="layui-input" type="text" @input="updateTable" v-model="value">
		    </div>
		</div>
		<div class="search-list">
			<ul>
				<li v-for="searchList in searchLists" @click="searchListClick($event)">{{searchList}}</li>
			</ul>
		</div>
		<!-- 表格 -->
		<div class="table-area">
			<table class="layui-table" layui-skin="line">
				<thead>
					<tr>
						<th>案件编号</th>
						<th>案件名称</th>
						<th>案件类型</th>
						<th>案件地点</th>
						<th>案件时间</th>
						<th>姓名</th>
						<th>年龄</th>
						<th>性别</th>
						<th>籍贯</th>
						<th>电话</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in items">
						<td>{{item.AJBH}}</td>
						<td>{{item.AJMC}}</td>
						<td>{{item.AJLX}}</td>
						<td>{{item.AJDD}}</td>
						<td>{{item.AJSJ}}</td>
						<td>{{item.name}}</td>
						<td>{{item.age}}</td>
						<td>{{item.gender}}</td>
						<td>{{item.JG}}</td>
						<td>{{item.phone}}</td>
						<td>
							<button class="layui-btn" @click="showDetails($event)">详情</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
//import Vue from 'vue'
import Axios from 'axios'
	export default {
		name:'',
		data () {
			return {
				placeholder: '请选择列表项',
				value: '',
				searchLists:["人名","案件编号","账号信息","车辆","案件信息"],
				items:''
			}
		},
		methods:{
			searchListClick:function($event){
				$(event.target).addClass('active').siblings().removeClass('active');
				var newPlaceholder = "请输入" + $(event.target).text()
				this.placeholder = newPlaceholder;
			},
			showDetails:function($event){
				//console.log(event.target)
				layer.msg('这是详情！');
			},
			updateTable:function(){
				console.log(this.value)
				//alert('change')
				//调用axios
				this.$nextTick(function(){
					var _this = this;
					Axios.get('../../../src/data/GXFX.json')
						.then(function(res){
							console.log(res.data,res.data.length)
							//遍历
							for(var i=0; i<res.data.length; i++){
								//console.log(res.data[i].AJBH);
								if( res.data[i].AJBH != _this.value &&
								 	res.data[i].AJMC != _this.value &&
								  	res.data[i].AJLX != _this.value &&
								  	res.data[i].AJDD != _this.value &&
								  	res.data[i].AJSJ != _this.value &&
								  	res.data[i].name != _this.value &&
								  	res.data[i].age != _this.value &&
								  	res.data[i].gender != _this.value &&
								  	res.data[i].JG != _this.value &&
								  	res.data[i].phone != _this.value){
									//删除当前项
									res.data.splice(i,1);
									//key 数组的长度在变
									i--;
									//console.log(res.data)
								}
							}				
							_this.items = res.data
						})
						.catch(function(err){
							console.log(err)
						})
				})
			}
		},
		mounted:function(){
			this.$nextTick(function(){
				var _this = this;
				Axios.get('../../../src/data/GXFX.json')
					.then(function(res){
						//console.log(res.data)
						_this.items = res.data
						//console.log(_this.items)
					})
					.catch(function(err){
						console.log(err)
					})
			})
		}
	}
</script>
<style scoped>
	.GXFXPage .layui-form-item{
		width: 500px;
		height: 50px;
		margin-top: 50px;
	}
	.GXFXPage .layui-form-item .layui-form-label{
		font-size: 16px;
		color: #40C5CC;
	} 
	.GXFXPage .search-list ul{
		padding-left: 110px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.GXFXPage .search-list li{
		float: left;
		cursor: pointer;
	}
	.GXFXPage .search-list li.active{
		color: #40C5CC;
	}
	.GXFXPage .table-area{
		margin-top: 30px;
		padding: 0 110px;
		box-sizing: border-box;
	}
</style>