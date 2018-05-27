import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/advanced-router/component/order-info.vue') }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/access',
        icon: 'key',
        name: 'access',
        title: '权限管理',
        component: Main,
        children: [
            { path: 'index', title: '人员列表', name: 'access_index', access: 0, component: () => import('@/views/bksystem/stafflist.vue') },
            { path: 'change', title: '权限变更', name: 'access_change', access: 0, component: () => import('@/views/bksystem/roleset.vue') }
        ]
    },
    {
        path: '/system',
        icon: 'lock-combination',
        title: '系统管理',
        name: 'system',
        access: 0,
        component: Main,
        children: [
            { path: 'index', title: '系统管理', name: 'accesstest_index', access: 0, component: () => import('@/views/access/access-test.vue') }
        ]
    },
    {
        path: '/food',
        icon: 'ios-infinite',
        title: '饮食',
        name: 'food',
        component: Main,
        children: [
            { path: 'restrant', title: '食堂', name: 'food_restrant', component: () => import('@/views/bkfood/restrant.vue') },
            { path: 'index', title: '菜单', name: 'food_index', component: () => import('@/views/bkfood/menu.vue') }
        ]
    },
    {
        path: '/rest',
        icon: 'social-buffer',
        title: '住宿',
        name: 'rest',
        component: Main,
        children: [
            { path: 'room', title: '房间', name: 'room', component: () => import('@/views/bkrest/room.vue') },
            { path: 'roommate', title: '室友', name: 'room_mate', component: () => import('@/views/bkrest/roommate.vue') }
        ]
    },
    {
        path: '/routes',
        icon: 'earth',
        title: '路线',
        name: 'routes',
        component: Main,
        children: [
            { path: 'inside', title: '校内', name: 'routes_inside', component: () => import('@/views/bkroutes/inner.vue') },
            { path: 'outside', title: '校外', name: 'routes_outside', component: () => import('@/views/bkroutes/outer.vue') }
        ]
    },
    {
        path: '/help',
        icon: 'android-add',
        title: '医疗',
        name: 'help',
        component: Main,
        children: [
            { path: 'index', title: '常见应急', name: 'help_common', component: () => import('@/views/bkhelp/index.vue') },
            { path: 'index', title: '医疗求助', name: 'help_call', component: () => import('@/views/bkhelp/callhelp.vue') }
        ]
    },
    {
        path: '/feedback',
        icon: 'android-checkbox',
        title: '反馈',
        name: 'feedback',
        component: Main,
        children: [
            { path: 'index', title: '问题反馈', name: 'feedback_inside', component: () => import('@/views/bkfeedback/index.vue') }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404
];
