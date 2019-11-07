import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: false }
export default {
    path: '/frtbconfig',
    name: 'frtbconfig',
    meta,
    redirect: { name: 'frtbconfig' },
    component: layoutHeaderAside,
    children: [
        {
            path: 'fxfwd',
            name: 'fxfwd',
            meta: {
                title: 'FRTB',
                auth: false
            },
            component: () => import('@/pages/frtbconfig/fxfwd/index')
        },
        {
            path: '/frtbconfig/workflow',
            name: 'workflow',
            meta: {
                title: '任务列表',
                auth: true
            },
            component: () => import('@/pages/frtbconfig/workflow')
        },
        {
            path: '/frtbconfig/MTM',
            name: 'MTM',
            meta: {
                title: 'Market to Market',
                auth: true
            },
            component: () => import('@/pages/frtbconfig/MTM')
        },
        {
            path: '/frtbconfig/capital',
            name: 'capital',
            meta: {
                title: 'Capital',
                auth: true
            },
            component: () => import('@/pages/frtbconfig/capital')
        },
        {
            path: '/frtbconfig/expshortfall',
            name: 'expshortfall',
            meta: {
                title: 'Expeced Shortfall',
                auth: true
            },
            component: () => import('@/pages/frtbconfig/expshortfall')
        },
        {
            path: '/frtbconfig/stress',
            name: 'stress',
            meta: {
                title: 'Stress',
                auth: true
            },
            component: () => import('@/pages/frtbconfig/stress')
        },
        {
            path: '/frtbconfig/marketstandard',
            name: 'marketsd',
            meta: {
                title: 'Market Standard',
                auth: true
            },
            component: () => import('@/pages/frtbconfig/marketstandard')
        },

    ]
}
