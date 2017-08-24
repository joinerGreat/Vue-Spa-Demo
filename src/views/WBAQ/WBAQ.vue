<template>
	<div id="WBAQPage" class="WBAQPage">
		<carousel :slides="slides" :inv="invTime"></carousel>
	</div>
</template>
<script>
import carousel from '../../components/Carousel.vue'
	export default {
		data () {
			return {
				invTime: 2000,
				slides: [
					{
						src:require('../../assets/pic1.jpg'),
						title:'xxx1', 
					},
					{
						src:require('../../assets/pic2.jpg'),
						title:'xxx2'
					},
					{
						src:require('../../assets/pic3.jpg'),
						title:'xxx3'
					},
					{
						src:require('../../assets/pic4.jpg'),
						title:'xxx4'
					}
				]
			}
		},
		components: {
			carousel
		}
	}
</script>
<style scoped>
	
</style>