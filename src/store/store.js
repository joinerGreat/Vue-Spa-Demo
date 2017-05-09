import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		count: 10,
		notes: [],
		activeNote: {}
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
		},
		ADD_NOTE(state) {
			const newNote = {
				text: 'New Note',
				favorite: false
			}
			state.notes.push(newNote)
			state.activeNote = newNote
		},

		EDIT_NOTE(state, text) {
			state.activeNote.text = text
		},

		DELETE_NOTE(state) {
			state.notes.$remove(state.activeNote)
			state.activeNote = state.note[0]
		},

		TOGGLE_FAVORITE(state) {
			state.activeNote.favorite = !state.activeNote.favorite
		},

		SET_ACTIVE_NOTE(state, note) {
			state.activeNote = note
		}
	},
	actions:{
		increment({commit}){
			commit("INCREMENT")
		},
		decrement({commit}){
			commit("DECREMENT")
		},
		addNote({commit}){
			commit('ADD_NOTE')
		},
		editNote({commit},e){
			commit("EDIT_NOTE",e.target.value)
		},
		deleteNote({commit}){
			commit("DELETE_NOTE")
		},
		updateActiveNote({commit},note){
			commit("SET_ACTIVE_NOTE",note)
		},
		toggleFavorite({commit}){
			commit("TOGGLE_FAVORITE")
		}
	}
}) 

export default store