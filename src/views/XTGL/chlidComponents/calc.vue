<template>
	<div class="clacBox">
		<div>
			<button class="btn layui-btn" @click="increment">加1</button>
			<button class="btn layui-btn" @click="decrement">减1</button>
			<button class="btn layui-btn" @click="increment">乘2</button>
			<button class="btn layui-btn" @click="increment">除2</button>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {

			}
		},
		methods:{
			increment () {
				//dispatch调用
				this.$store.dispatch('increment')
			},
			decrement () {
				this.$store.dispatch('decrement')
			}
		}
	}
</script>
<style scoped>
	
</style>