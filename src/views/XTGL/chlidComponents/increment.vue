<template>
	<div>
		<input v-model="num" @blur="countinfo"/>
		<hr/>
		<button @click="increment">+1</button>
		<button @click="decrement">-1</button>
	</div>
</template>
<script>
//引入mapActions
import {mapActions} from "vuex";
	export default {
		data () {
			return {
				num:10
			}
		},
		methods:{
			countinfo () {
				try{
					this.$store.dispatch('countinfo',this.num)
				}catch(error){
					alert(error)
				}	
			},
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