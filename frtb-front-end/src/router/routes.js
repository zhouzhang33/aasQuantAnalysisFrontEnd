import playground from './modules/playground'
import frame from './modules/frame'
import d2Crud from './modules/d2-crud'
import plugins from './modules/plugins'
import charts from './modules/charts'
import components from './modules/components'
import element from './modules/element'
import filters from './modules/filters'
import business from './modules/business'
import layoutHeaderAside from '@/layout/header-aside'
import frtb from './modules/frtb'

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页 必须 name:index
      // {
      //   path: 'index',
      //   name: 'index',
      //   meta: {
      //     title: '管理驾驶舱',
      //     auth: true
      //   },
      //   component: () => import('@/pages/index')
      // },
      {
        path: '/frtb/workflow',
        name: 'index',
        meta: {
          title: '任务列表',
          auth: true
        },
        component: () => import('@/pages/frtb/workflow')
      },
      {
        path: '/frtb/MTM',
        name: 'MTM',
        meta: {
          title: 'Market to Market',
          auth: true
        },
        component: () => import('@/pages/frtb/MTM')
      },
      {
        path: '/frtb/capital',
        name: 'capital',
        meta: {
          title: 'Capital',
          auth: true
        },
        component: () => import('@/pages/frtb/capital')
      },
      {
        path: '/frtb/expshortfall',
        name: 'expshortfall',
        meta: {
          title: 'Expeced Shortfall',
          auth: true
        },
        component: () => import('@/pages/frtb/expshortfall')
      },
      {
        path: '/frtb/stress',
        name: 'stress',
        meta: {
          title: 'Stress',
          auth: true
        },
        component: () => import('@/pages/frtb/stress')
      },
      {
        path: '/frtb/marketstandard',
        name: 'marketsd',
        meta: {
          title: 'Market Standard',
          auth: true
        },
        component: () => import('@/pages/frtb/marketstandard')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: {
          beforeRouteEnter (to, from, next) {
            next(instance => instance.$router.replace(from.fullPath))
          },
          render: h => h()
        }
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: {
          beforeRouteEnter (to, from, next) {
            next(instance => instance.$router.replace(JSON.parse(from.params.route)))
          },
          render: h => h()
        }
      }
    ]
  },

  // bdcrisk,
  // bdcmacro,
  frtb,
  playground,
  frame,
  d2Crud,
  plugins,
  charts,
  components,
  element,
  filters,
  business
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  // 404
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/error-page-404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
