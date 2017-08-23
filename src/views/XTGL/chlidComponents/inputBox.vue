<template>
	<div class="inputBox">
		<div class="layui-form-item">
		    <label class="layui-form-label">输入:</label>
		    <div class="layui-input-block">
		      <input class="layui-input" v-model="inputNum" @blur="inputEvent">
		    </div>
	  	</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				inputNum: '',
			}
		},
		methods:{
			inputEvent:function(){
				//调用dispatch
				this.$store.dispatch('inputevent',this.inputNum)
			}
		}
	}
</script>