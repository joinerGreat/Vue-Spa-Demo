<template>
	<div id="note-editor">
		<textarea
		 	:value="activeNoteText"
			@input="editNote"	
			class="form-control">
		</textarea>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				
			}

		},
		computed: {
			activeNoteText () {
				return this.$store.state.activeNote.text
			}
		},
		methods:{
			editNote () {
				this.$store.dispatch("editNote")
			},
		}
	}
</script>