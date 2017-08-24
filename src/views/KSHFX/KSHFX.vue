<template>
	<div id="KSHFXPage" class="KSHFXPage">
		<p>hello KSHFXPage</p>
		<button class="btn layui-btn" @click="getAccorsMsg">按钮</button>
	</div>
</template>
<script>
	export default {
		name:'',
		data () {
			return {

			}
		},
		methods: {
			getAccorsMsg: function() {
				let _this = this;
                 $.ajax({
					type: "POST",
                    dataType: "json", 
               	    xhrFields:{
                	    withCredentials:true
                    },
                    url: "http://10.0.0.46:8089/gas/account/login",
                    data:{
                       	mobile:"136",
						password:"123"
                    },
                    contentType:"application/json;charset=UTF-8",
                    success: function(res) {
                      	console.log(res);
                    },
                    error:function(jqXHR, textStatus, errorThrown) {
                    	console.log(jqXHR);
                    	console.log(textStatus);
                    	console.log(errorThrown)
                    }
				});
			}
		}
	}
</script>
<style scoped>
	
</style>