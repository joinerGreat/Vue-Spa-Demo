<template>
	<div id="XSDFXPage" class="XSDFXPage"></div>
</template>
<script>
	export default {
		name:'',
		data () {
			return {
				
			}
		},
		mounted() {
			// 百度地图API功能
			// 创建Map实例
			var map = new BMap.Map("XSDFXPage",{enableMapClick:true});
			// 初始化地图,设置中心点坐标和地图级别
			map.centerAndZoom(new BMap.Point(116.4035,39.915), 11);
			// 添加地图类型控件
			map.addControl(new BMap.MapTypeControl());  
			// 设置地图显示的城市 此项是必须设置的
			map.setCurrentCity("杭州");    
			// 开启鼠标滚轮缩放      
			map.enableScrollWheelZoom(true);
			// 设置定时器，对地图进行自动移动
			setTimeout(function(){
				map.panTo(new BMap.Point(113.262232,23.154345));
			}, 2000);
			setTimeout(function(){
				map.setZoom(14);
			},4000);
			//添加折线
			var pointGZ = new BMap.Point(113.262232,23.154345);
			var pointHK = new BMap.Point(110.35,20.02);
			setTimeout(function(){
				var polyline = new BMap.Polyline([pointGZ,pointHK],{strokeColor:"blue",strokeWeight:5,strokeOpacity:0.5});
				map.addOverlay(polyline);
			},6000);
			//添加工具条、比例尺控件
			map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}));
			map.addControl(new BMap.NavigationControl());
			map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL}));
			//添加定位相关控件
			var navigationControl = new BMap.NavigationControl({
				//靠左上角
				anchor:BMAP_ANCHOR_TOP_LEFT,
				//LARGE类型
				type:BMAP_NAVIGATION_CONTROL_LARGE,
				//启用显示定位
				enableGeolocation:true
			});
			map.addControl(navigationControl);
			//添加定位控件
			var geolocationControl = new BMap.GeolocationControl();
			geolocationControl.addEventListener("localtionSuccess",function(e) {
				//定位成功事件
				var address = '';
				address += e.addressComponent.province;
				address += e.addressComponent.city;
				address += e.addressComponent.district;
				address += e.addressComponent.street;
				address += e.addressComponent.streetNumber;
				alert("当前定位地址为："+ address);
			});
			geolocationControl.addEventListener("locationError",function(e) {
				//定位失败事件
				alert(e.message);
			});
			map.addControl(geolocationControl);
		}
	}
</script>
<style scoped>
	html,body,.XSDFXPage{
			width: 100%;
			height: 100%;
			overflow: hidden;
			margin: 0;
			font-family: "微软雅黑";
		}
</style>