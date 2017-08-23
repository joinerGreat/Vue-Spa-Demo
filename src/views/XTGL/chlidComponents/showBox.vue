<template>
	<div class="showBox">
		<div class="layui-form-item">
		    <div class="layui-input-block">
		      <input class="layui-input" v-model="inputNum">
		    </div>
	  	</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {

			}
		},
		computed:{
			//拿inputNum
			inputNum () {
				return this.$store.state.inputNum
			}
		}
	}
</script>
<style scoped>
	.layui-input-block{
		margin-left: 0!important;
	}
	.layui-input{
		width: 100%!important;
	}
</style>