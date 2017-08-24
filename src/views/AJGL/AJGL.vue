<template>
	<div id="AJGLPage" class="AJGLPage">
		<p>hello AJGLPage</p>
		<input type="text" name="" @keyup="show($event)">
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
	.AJGLPage{
		width: 100%;
		height: 100%;
	}
</style>