<template>
	<div id="AJGLPage" class="AJGLPage">
<<<<<<< HEAD
		<p>hello AJGLPage</p>
		<input type="text" name="" @keyup="show($event)">
=======
		<toolbar></toolbar>
		<notes-list></notes-list>
		<editor></editor>
>>>>>>> a249407bea99a4e9b63acd50d691555d2a27d79e
	</div>
</template>
<script>
import Toolbar from "./Toolbar.vue"
import NotesList from "./NotesList.vue"
import Editor from "./Editor.vue"
	export default {
		name:'',
		data () {
			return {

			}
		},
<<<<<<< HEAD

		methods: {
			show: function (ev) {
	            if(ev.keyCode==13){
	              alert('你按了回车键！')
	            }
	        }
=======
		components:{
			Toolbar,
			NotesList,
			Editor
>>>>>>> a249407bea99a4e9b63acd50d691555d2a27d79e
		}
	}
</script>
<style scoped>
	.AJGLPage{
		width: 100%;
		height: 100%;
	}
</style>