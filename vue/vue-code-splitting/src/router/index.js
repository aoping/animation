import Vue from 'vue'
import VueRouter from 'vue-router'
/*import First from '@/components/First' 
import Second from '@/components/Second'*/

Vue.use(VueRouter)

/*const routes = [ 
 //重定向 
 { 
 path:'/', 
 redirect:'first' 
 }, 
 { 
 path: '/first', 
 name: 'First', 
 component: First 
 }, 
 { 
 path: '/second', 
 name: 'Second', 
 component: Second 
 } 
]*/

//懒加载路由 
const routes = [{ //当首次进入页面时，页面没有显示任何组件；让页面一加载进来就默认显示first页面 
            path: '/', //重定向，就是给它重新指定一个方向，加载一个组件； 
            component: resolve => require(['src/components/First'], resolve)
        },
        {
            path: '/first',
            component: resolve => require(['src/components/First'], resolve)
        },
        {
            path: '/second',
            component: resolve => require(['src/components/Second'], resolve)
        }
        //这里require组件路径根据自己的配置引入 
    ]
    //最后创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。 

const router = new VueRouter({
    routes
})

export default router;