<template>
	<div id="YJPage" class="YJPage">
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
			<div id="demo4"></div>
		</div>
	</div>
</template>
<script>
import Axios from 'axios'
	export default {
		name:'',
		data () {
			return {
				items:'',
				html: []
			}
		},
		mounted:function(){
			this.$nextTick(function(){
				var _this = this;
				Axios.get('../../../src/data/GXFX.json')
					.then(function(res){
						layui.use(['laypage','layer'],function(){
							var laypage = layui.laypage,
								layer = layui.layer;

							var num = 5;//每一页的数量
							var render = function(curr){			
							var last = curr*num-1;//当前页的最后一行数据的下标
			                        last = last >= res.data.length?(res.data.length-1):last;
				                    for(var i=(curr*num-num); i<=last; i++){
				                        // 从未显示的第一行开始
				                        _this.html[i] = res.data[i];
				                             
				                    }		                    
				                    return _this.html;
							}
							laypage({
			                    cont:'demo4',
			                    pages:Math.ceil(res.data.length/num),
			                    first:false,
			                    last: false,
			                    jump:function(obj){	      	
			                    	_this.items = '';
			                    	_this.items = render(obj.curr);

			                    }
			                });	
						})
					})
					.catch(function(err){
						console.log(err)
					})
			})
		},
		methods:{
			
		}
	}
</script>
<style scoped>
	.YJPage .table-area{
		width: 90%;
		margin: 30px auto;
	}
</style>