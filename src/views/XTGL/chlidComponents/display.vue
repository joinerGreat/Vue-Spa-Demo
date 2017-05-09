<template>
	<div>
		<h3>Count is {{count}}</h3>
	</div>
</template>
<script>
import {mapState} from "vuex"
	export default {
		/*computed: {
			count () {
				return this.$store.state.count
			}
		}*/
		/*computed: mapState({
			//对象用法
			//count:'count'
		})*/
		computed: mapState([
			//数组用法
			"count"
		])
	}
</script>
<style scoped> 
	h3{
		font-size: 30px;
	}
</style>