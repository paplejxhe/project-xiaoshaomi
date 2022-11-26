//引入相应的路由组件
import checkGradesDetail from '@/Pages/CheckGrades/detailed.vue'
export default [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/Pages/Home'),
        //路由元信息,新学习的一个配置项!!!!给当前路由添加一些额外数据
        //它的右侧是一个对象[可以有多个键值对]
        //路由配置项：书写的时候不要胡写、乱写、瞎写【在VC组件身上获取不到,没有任何意义】
        meta: { show: true,title:'首页' },
    }
    ,
    {
        //命名路由,给路由起一个名字
        name: 'background',
        //在注册路由的时候,如果这里占位，切记务必要传递params
        path: '/background',
        component: () => import('@/Pages/ProjectBackground'),
        meta: { show: true,title:'项目背景' },
    }
    ,
    {
        path: '/activities',
        name:'activities',
        component: () => import('@/Pages/Activities'),
        meta: { show: false,title:'赛事活动' },
    }
    ,
    {
        path: '/activities/detailed',
        name:'activitiesDetailed',
        component: () => import('@/Pages/Activities/detailed'),
        //路由元信息,控制当前路由是否需要Footer组件
        meta: { show: true,title:'详情' },
    },
    {
        path: '/connect',
        name:'connect',
        component: () => import('@/Pages/Home/Connect'),
        meta: { show: false,title:'联系我们' },
    }
    ,
    //重定向到首页
    {
        path: '/',
        redirect: '/home'
    }
    ,
    {
        path: '/checkGrades',
        name:'checkGrades',
        component: () => import('@/Pages/CheckGrades'),
        //路由元信息,控制当前路由是否需要Footer组件
        children: [
            { 
                path: 'detailed',
                name:'checkGradesDetailed',
                component: () => import('@/Pages/CheckGrades/detailed.vue'),
                meta: { show: true,title:'查询结果',isChildren:true },
            }
        ],
        meta: { show: true,title:'成绩查询' },
    },
    // {
    //     path: '/checkGrades/detailed',
    //     name:'checkGradesDetailed',
    //     component: () => import('@/Pages/CheckGrades/detailed'),
    //     //路由元信息,控制当前路由是否需要Footer组件
    //     meta: { show: true,title:'成绩查询',isChild:true },
    // },

/*     {
        path: '/communication',
        component: () => import('@/pages/Communication/Communication'),
        children: [
          {
            path: 'event',
            component: () => import('@/pages/Communication/EventTest/EventTest'),
            meta: {
             show: false
            },
          },
        ],
      }, */
]