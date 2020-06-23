export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
        exact: true
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/welcome',
          },
          {
            path: '/welcome',
            name: '首页',
            icon: 'smile',
            component: './Welcome',
          },
          {
            name: '系统设置',
            icon: 'table',
            path: '/system',
            routes: [
              {
                name: '权限菜单',
                icon: 'table',
                path: '/system/menu/list',
                component: '@/pages/base/system/menu',
              },
              {
                name: '权限角色',
                icon: 'table',
                path: '/system/role/list',
                component: '@/pages/base/system/role',
              },
              {
                name: '管理员',
                icon: 'table',
                path: '/system/admin/list',
                component: '@/pages/base/system/admin',
              },
            ]
          },
          {
            name: '项目设置',
            icon: 'table',
            path: '/project',
            routes: [
              {
                name: '区域字典',
                icon: 'table',
                path: '/project/areas/list',
                component: '@/pages/base/project/areas',
              },
              {
                name: '项目管理',
                icon: 'table',
                path: '/project/resions/list',
                component: '@/pages/base/project/regions',
              },
            ]
          },
          {
            name: '用户管理',
            icon: 'table',
            path: '/users',
            routes: [
              {
                name: '用户列表',
                icon: 'table',
                path: '/users/user-list',
                component: '@/pages/base/userManage',
              }
            ]
          },
          {
            name: '基础设置',
            icon: 'table',
            path: '/basicset',
            routes: [
              {
                name: '极光推送',
                icon: 'table',
                path: '/basicset/setJpush',
                component: '@/pages/base/basicset/setJpush',
              },
              {
                name: '微信支付',
                icon: 'table',
                path: '/basicset/setWxpay',
                component: '@/pages/base/basicset/setWxpay',
              },
              {
                name: '授权认证',
                icon: 'table',
                path: '/basicset/setAuthorized',
                component: '@/pages/base/basicset/setAuthorized',
              },
              {
                name: '快递公司列表',
                icon: 'table',
                path: '/basicset/express-list',
                component: '@/pages/base/basicset/express',
              },
            ]
          },
          {
            name: '系统设置',
            icon: 'table',
            path: '/sysset',
            routes: [
              {
                name: '报事报修',
                icon: 'table',
                path: '/sysset/repair',
                component: '@/pages/property/sysset/repair',
              },
              {
                name: '免费服务',
                icon: 'table',
                path: '/sysset/reservation',
                component: '@/pages/property/sysset/reservation',
              },
              {
                name: '房产类别',
                icon: 'table',
                path: '/sysset/houseCategory',
                component: '@/pages/property/sysset/houseCategory',
              },
            ]
          },
          {
            name: '楼栋管理',
            icon: 'table',
            path: '/house',
            routes: [
              {
                name: '楼宇列表',
                icon: 'table',
                path: '/house/building',
                component: '@/pages/property/house/building',
              },
              {
                name: '楼宇单元',
                icon: 'table',
                path: '/house/unit',
                component: '@/pages/property/house/unit',
              },
              {
                name: '房产类别',
                icon: 'table',
                path: '/house/house',
                component: '@/pages/property/house/house',
              },
            ]
          },
          {
            name: '个人中心',
            icon: 'user',
            path: '/account',
            hideInMenu:true,
            routes: [
              {
                name: '个人设置',
                icon: 'smile',
                path: '/account/settings',
                component: './user/account/settings',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
]
