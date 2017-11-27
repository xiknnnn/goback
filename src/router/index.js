import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
	scrollBehavior(to,from,savedPosition){
		if (savedPosition) {
			console.log(savedPosition)
			return savedPosition
		}else {
			console.log(123)
			return {x:0,y:0}
		}
	},
	mode:'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta:{
				title:'Home',
				keepAlive:true,
			}
		},
		{
			path:'detail/:id',
			name:'Detail',
			component:Detail,
		}
	]
})
