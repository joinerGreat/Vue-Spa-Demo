<template>
	<div id="main" style="width:200px;height;200px;"></div>
</template>
<script>
	import echarts from 'echarts'
	let echarts = require('echarts/lib/echarts')
	require('./lib/chart/map');
	export default {
		name: '',
		data () {
			return {
					charts: '',
					data1: [
		                {name: '北京',value: Math.round(Math.random()*1000)},
		                {name: '天津',value: Math.round(Math.random()*1000)},
		                {name: '上海',value: Math.round(Math.random()*1000)},
		                {name: '重庆',value: Math.round(Math.random()*1000)},
		                {name: '河北',value: Math.round(Math.random()*1000)},
		                {name: '河南',value: Math.round(Math.random()*1000)},
		                {name: '云南',value: Math.round(Math.random()*1000)},
		                {name: '辽宁',value: Math.round(Math.random()*1000)},
		                {name: '黑龙江',value: Math.round(Math.random()*1000)},
		                {name: '湖南',value: Math.round(Math.random()*1000)},
		                {name: '安徽',value: Math.round(Math.random()*1000)},
		                {name: '山东',value: Math.round(Math.random()*1000)},
		                {name: '新疆',value: Math.round(Math.random()*1000)},
		                {name: '江苏',value: Math.round(Math.random()*1000)},
		                {name: '浙江',value: Math.round(Math.random()*1000)},
		                {name: '江西',value: Math.round(Math.random()*1000)},
		                {name: '湖北',value: Math.round(Math.random()*1000)},
		                {name: '广西',value: Math.round(Math.random()*1000)},
		                {name: '甘肃',value: Math.round(Math.random()*1000)},
		                {name: '山西',value: Math.round(Math.random()*1000)},
		                {name: '内蒙古',value: Math.round(Math.random()*1000)},
		                {name: '陕西',value: Math.round(Math.random()*1000)},
		                {name: '吉林',value: Math.round(Math.random()*1000)},
		                {name: '福建',value: Math.round(Math.random()*1000)},
		                {name: '贵州',value: Math.round(Math.random()*1000)},
		                {name: '广东',value: Math.round(Math.random()*1000)},
		                {name: '青海',value: Math.round(Math.random()*1000)},
		                {name: '西藏',value: Math.round(Math.random()*1000)},
		                {name: '四川',value: Math.round(Math.random()*1000)},
		                {name: '宁夏',value: Math.round(Math.random()*1000)},
		                {name: '海南',value: Math.round(Math.random()*1000)},
		                {name: '台湾',value: Math.round(Math.random()*1000)},
		                {name: '香港',value: Math.round(Math.random()*1000)},
		                {name: '澳门',value: Math.round(Math.random()*1000)}
		            ],
		            data2: [
	                {name: '北京',value: Math.round(Math.random()*1000)},
	                {name: '天津',value: Math.round(Math.random()*1000)},
	                {name: '上海',value: Math.round(Math.random()*1000)},
	                {name: '重庆',value: Math.round(Math.random()*1000)},
	                {name: '河北',value: Math.round(Math.random()*1000)},
	                {name: '安徽',value: Math.round(Math.random()*1000)},
	                {name: '新疆',value: Math.round(Math.random()*1000)},
	                {name: '浙江',value: Math.round(Math.random()*1000)},
	                {name: '江西',value: Math.round(Math.random()*1000)},
	                {name: '山西',value: Math.round(Math.random()*1000)},
	                {name: '内蒙古',value: Math.round(Math.random()*1000)},
	                {name: '吉林',value: Math.round(Math.random()*1000)},
	                {name: '福建',value: Math.round(Math.random()*1000)},
	                {name: '广东',value: Math.round(Math.random()*1000)},
	                {name: '西藏',value: Math.round(Math.random()*1000)},
	                {name: '四川',value: Math.round(Math.random()*1000)},
	                {name: '宁夏',value: Math.round(Math.random()*1000)},
	                {name: '香港',value: Math.round(Math.random()*1000)},
	                {name: '澳门',value: Math.round(Math.random()*1000)}
	            ]
			}
		},
		methods: {
			drawMap(id){
				this.echarts = echarts.init(document.getElementById(id))
				//设置配置
				this.echarts.setOption({
					title : {},//标题
				    tooltip : {
				        trigger: 'item'
				    },
				    legend: {
				        orient: 'vertical',
				        left: '80%',
				        top:'80%',
				        itemWidth:50,
				        itemHeight:20,
				        align:'left',
				        data:[
				        // {icon:'bar'},
				        '当前案件','相似度95%案件'
				        ]
				    },//图例

				    toolbox: {
				        show: true,
				        orient : 'vertical',
				        left: 'right',
				        top: 'center',
				    },
				    series : [
				    	{
				            name: '当前案件',
				            type: 'map',
				            mapType: 'china',
				            roam: false,
				            label: {
				                normal:{
				                    label:{
				                        show:true,
				                        textStyle: {
				                            color: "#000"
				                        }
				                    }
				                },
				                emphasis: {
				                    show: true
				                }
				            },
				            labelLine:{
								normal:{
									lineStyle:{
									color:'rgba(255,255,255,.9)'
									}
								}
							},
							itemStyle:{//小圆点的颜色
								normal:{
									color:'#FF3000',
									shadowBlur:200,
									shadowColor:'rgba(255,255,255,.5)',
				                    areaColor:'#ccc',
				                    borderColor: '#fff',
				                    borderWidth: 1,
								}
							},
				            data:this.data1
				        },
				        {
				            name: '相似度95%案件',
				            type: 'map',
				            mapType: 'china',
				            roam: false,
				            label: {
				                normal:{
				                    label:{
				                        show:true,
				                        textStyle: {
				                            color: "#000"
				                        }
				                    }
				                },
				                emphasis: {
				                    show: true
				                }
				            },
				            labelLine:{
				                normal:{
				                    lineStyle:{
				                    color:'rgba(255,255,255,.9)'
				                    }
				                }
				            },
				            itemStyle:{//小圆点的颜色
				                normal:{
				                    color:'#FFF000',
				                    shadowBlur:200,
				                    shadowColor:'rgba(255,255,255,.5)',
				                    areaColor:'#ccc',
				                    borderColor: '#fff',
				                    borderWidth: 1,
				                }
				            },
				            data:this.data2
				        }
				    ]
				})
			}
		},
		//调用
		mounted(){
			this.$nextTick(function() {
				this.drawMap('main')
			})
		}
	}
</script>
<style scoped>
	
</style>