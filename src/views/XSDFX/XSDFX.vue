<template>
	<div id="XSDFXPage" class="XSDFXPage">
		<p>hello XSDFXPage</p>
		<table>
			<tr v-for="(item,index) in items" @click="addCheck(index,$event)">
				<td>
					<input type="checkbox" :value="item.id" :checked="item.id"/><span>{{item.id}}</span>
				</td>
			</tr>
		</table>
	</div>
</template>
<script>
	export default {
		name:'',
		data () {
			return {
				items:[
					{"id":"12-00","isChecked":"false"},
					{"id":"12-01","isChecked":"false"},
					{"id":"12-02","isChecked":"false"},
					{"id":"12-03","isChecked":"false"},
					{"id":"12-04","isChecked":"false"},
					{"id":"12-05","isChecked":"false"},
				],
				value:'',
				checked:'',
				isChecked:''
			}
		},
		methods:{
			addCheck($event,index){
				console.log(index)
				if(this.isChecked == false){
					this.isChecked = true					
				}else{
					this.isChecked = false
				}

			}
		}
	}
	
</script>
<style scoped>
	table{
		width:500px;
		margin: 0 auto;
	}
	tr{
		height: 30px;
		line-height: 30px;
		border: 1px solid #000;
		cursor: pointer;
		background-color: #eee;
	}
	td{
		width: 100%;
	}
	input{

	}
</style>