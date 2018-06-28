import Vue from 'vue'
import Router from 'vue-router'

//import Index from '@/views/Index'
import Aboutus from '@/views/Aboutus'
import Media from '@/views/Media'
import Contactus from '@/views/Contactus'
import Talent from '@/views/Talent'
import Investment from '@/views/Investment'
import Marketing from '@/views/Marketing'
Vue.use(Router)

export default new Router({
	
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/views/Index'], resolve)
    },{
      path: '/index',
      name: 'Index',
      component: resolve => require(['@/views/Index'], resolve)
      
    },{
      path: '/aboutus',
      name: 'aboutus',
      component: resolve => require(['@/views/Aboutus'], resolve) 
    },{
      path: '/media',
      name: 'media',
      component: resolve => require(['@/views/Media'], resolve)
    },{
    	path:'/Contactus',
    	name:'Contactus',
     	component: resolve => require(['@/views/Contactus'], resolve)
    },{
    	path:'/Talent',
    	name:'Talent',
     	component: resolve => require(['@/views/Talent'], resolve)
    },{
    	path:'/Investment',
    	name:'Investment',
     	component: resolve => require(['@/views/Investment'], resolve)
    },{
    	path:'/Marketing',
    	name:'Marketing',
     	component: resolve => require(['@/views/Marketing'], resolve)
    }
    
  ]
})
