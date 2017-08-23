<template>
	<div id="note-editor">
		<textarea
		 	v-model="activeNoteText"
			@input="editNote"	
			class="form-control">
		</textarea>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				activeNoteText:'Edit Note'
			}

		},
		computed: {
			activeNoteText () {
				return this.$store.state.activeNote.text
			}
		},
		methods:{
			editNote () {
				this.$store.dispatch("editNote",this.activeNoteText)
			},
		}
	}
</script>