<template>
	<div class="inputBox">
		<div class="layui-form-item">
		    <label class="layui-form-label">结果:</label>
		    <div class="layui-input-inline">
		      <input class="layui-input" v-model="resultNum">
		    </div>
	  	</div>

	  	<button class="btn layui-btn layui-btn-danger" @click="resultEvent">确认</button>
	</div>
</template>
<script>
	export default {
		data () {
			return {

			}
		},
		computed:{
			resultNum () {
				return this.$store.state.resultNum
			}
		},
		methods:{
			resultEvent () {
				this.$store.dispatch('resultevent')
			}
		}
	}
</script>
<style scoped> 
	.inputBox{
		overflow: hidden;
	}
	.layui-form-item{
		float: right;
		margin-top: 15px;
	}
	button{
		float: right;
		margin-top: 15px;
	}
</style>