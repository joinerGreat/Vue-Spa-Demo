<template>
	<div id="XTGLPage" class="XTGLPage">
		<display></display>
		<increment></increment>
	</div>
</template>
<script>
import display from "./chlidComponents/display.vue"
import increment from "./chlidComponents/increment.vue"
	export default {
		name:'',
		data () {
			return {

			}
		},
		components:{
			display,
			increment
		}
	}
</script>
<style scoped>
	.XTGLPage{
		margin-top: 200px;
	}
</style>