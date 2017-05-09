<template>
	<div id="AJGLPage" class="AJGLPage">
		<toolbar></toolbar>
		<notes-list></notes-list>
		<editor></editor>
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
		components:{
			Toolbar,
			NotesList,
			Editor
		}
	}
</script>
<style scoped>
	.AJGLPage{
		width: 100%;
		height: 100%;
	}
</style>