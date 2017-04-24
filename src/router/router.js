import Vue from 'vue'
import VueRouter from 'vue-router'
import firstPage from '../views/firstPage/firstPage.vue'
import AJGLPage from '../views/AJGL/AJGL.vue'
import ZASDPage from '../views/ZASD/ZASD.vue'
import GXFXPage from '../views/GXFX/GXFX.vue'
import KSHFXPage from '../views/KSHFX/KSHFX.vue'
import TJFXPage from '../views/TJFX/TJFX.vue'
import WBAQPage from '../views/WBAQ/WBAQ.vue'
import XSDFXPage from '../views/XSDFX/XSDFX.vue'
import XTGLPage from '../views/XTGL/XTGL.vue'
import YJPage from '../views/YJ/YJ.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes:[
		{
			path:'/',
			name:'first',
			component:firstPage
		},
		{
			path:'/AJGL',
			name: 'AJGL',
			component:AJGLPage
		},
		{
			path:'/ZASD',
			name:'ZASD',
			component:ZASDPage
		},
		{
			path:'/GXFX',
			name:'GXFX',
			component:GXFXPage
		},
		{
			path:'/KSHFX',
			name:'KSHFX',
			component:KSHFXPage
		},
		{
			path:'/TJFX',
			name:'TJFX',
			component:TJFXPage
		},
		{
			path:'/WBAQ',
			name:'WBAQ',
			component:WBAQPage
		},
		{
			path:'/XSDFX',
			name:'XSDFX',
			component:XSDFXPage
		},
		{
			path:'/XTGL',
			name:'XTGL',
			component:XTGLPage
		},
		{
			path:'/YJ',
			name:'YJ',
			component:YJPage
		},
	]
})