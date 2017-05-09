import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		count: 10
	},
	mutations:{
		//格式：类型(名字)+处理函数
		//加1
		INCREMENT(state) {
			state.count++;
		},
		//减1
		DECREMENT(state) {
			state.count--;
		}
	},
	actions:{
		increment({commit}){
			commit("INCREMENT")
		},
		decrement({commit}){
			commit("DECREMENT")
		}
	}
}) 

export default store