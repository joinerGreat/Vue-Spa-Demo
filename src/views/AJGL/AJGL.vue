<template>
	<div id="AJGLPage" class="AJGLPage">
		<p>hello AJGLPage</p>
		<input type="text" name="" @keyup="show($event)">
	</div>
</template>
<script>
	export default {
		name:'',
		data () {
			return {

			}
		},

		methods: {
			show: function (ev) {
	            if(ev.keyCode==13){
	              alert('你按了回车键！')
	            }
	        }
		}
	}
</script>
<style scoped>
	
</style>