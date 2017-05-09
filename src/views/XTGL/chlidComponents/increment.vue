<template>
	<div>
		<button @click="increment">+1</button>
		<button @click="decrement">-1</button>
	</div>
</template>
<script>
//引入mapActions
import {mapActions} from "vuex";
	export default {
		methods:{
			increment () {
				//dispatch调用
				this.$store.dispatch('increment')
			},
			decrement () {
				this.$store.dispatch('decrement')
			}
		}
		/*methods: {
            ...mapActions(["increment", "decrement"])
        }*/
	}
</script>
<style scoped>
	button{
		width: 100px;
		height: 100px;
		font-size: 30px;
	}
</style>