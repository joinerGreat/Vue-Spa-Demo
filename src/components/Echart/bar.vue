<template>
	<div id="bar" class="barEchart"></div>
</template>
<script>
	import echarts from 'echarts'
	export default {
		name: '',
		data () {
			return {
				echarts: '',
				data1:  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				data2:  [10, 52, 200, 334, 390, 330, 220]
			}
		},
		methods:{
			drawBar:function(id){
				this.echarts = echarts.init(document.getElementById(id))
				this.echarts.setOption({
					color: ['#3398DB'],
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis : [
				        {
				            type : 'category',
				            data : this.data1,
				            axisTick: {
				                alignWithLabel: true
				            }
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:'直接访问',
				            type:'bar',
				            barWidth: '60%',
				            data:this.data2
				        }
				    ]
				});
			}
		},
		mounted(){
            this.$nextTick(function() {
                this.drawBar('bar')
            })
        }
	}
</script>
<style scoped>
	.barEchart{
		float: left;
		width: 40%;
		height: 300px;
		margin-right: 30px;
		box-sizing: border-box;
	}
</style>