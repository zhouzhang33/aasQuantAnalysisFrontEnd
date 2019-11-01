// 插件
import demoPlugins from './modules/demo-plugins'
// 组件
import demoComponents from './modules/demo-components'
// 组件
import demoCharts from './modules/demo-charts'
// 组件库
import demoElement from './modules/demo-element'
// 组件库
import demoFilters from './modules/demo-filters'
// 试验台
import demoPlayground from './modules/demo-playground'
// 示例
import demoBusiness from './modules/demo-business'
// CRUD
import demoD2Crud from './modules/demo-d2-crud'
// 第三方网页
import demoFrame from './modules/demo-frame'

// 菜单 侧边栏
export const menuAside = [
  demoComponents,
  demoPlugins,
  demoCharts,
  demoElement,
  demoFilters,
  demoPlayground,
  demoBusiness,
  demoD2Crud,
  demoFrame
]

// 菜单 顶栏
export const menuHeader = [
  {
    title: '管理驾驶舱',
    icon: 'home',
    path: '/index',
    name:'管理驾驶舱'
  },
  {
    title: '风险监控平台',
    icon: 'home',
    // path: '/bdc-risk-monitor',
    name:'风险监控平台',
    children: [
      {
        path: '/bdc-risk-monitor',
        title: '风险监控平台',
        iconSvg: 'd2-crud',
      },
      {
        path: '/bdc-infostation',
        title: '大数据情报站',
        iconSvg: 'd2-crud',
      },
      {
        path: '/bdc-e-risk-profile',
        title: '企业风险画像',
        iconSvg: 'd2-crud',
      },
      {
        path: '/bdc-conn-analysis',
        title: '关联分析',
        iconSvg: 'd2-crud',
      }
    ]
  },
  {
    title: '宏观信息',
    icon: 'pie-chart',
    path: '/bdc-macro',
    name:'宏观信息',
    children: [
      {
        path: '/bdc-macrodata',
        title: '宏观数据',
        icon: 'bar-chart',
      },
      {
        path: '/bdc-macro-nec',
        title: '国民经济核算',
        icon: 'binoculars',
      },
      {
        path: '/bdc-priceindex',
        title: '价格指数',
        icon: 'pie-chart',
      },
      {
        path: '/bdc-finassurence',
        title: '金融保险',
        icon: 'binoculars',
      },
      {
        path: '/bdc-demographic',
        title: '人口预就业',
        icon: 'binoculars',
      }
    ]
  },
  {
    title: '风险预警库',
    icon: 'exclamation',
    path: '/bdc-risk-predict',
    name:'风险预警库',
    children: [
      {
        path: '/bdc-risk-indicator',
        title: '预警指标集',
        icon: 'exclamation',
      },
      {
        path: '/bdc-risk-big-e',
        title: '大中型企业',
        icon: 'exclamation',
      },
      {
        path: '/bdc-risk-small-e',
        title: '小微企业',
        icon: 'exclamation',
      }
    ]
  },
  {
    title: ' 模型管理',
    icon: 'cubes',
    path: '/bdc-model-management',
    name:'模型管理',
    children: [
      {
        path: '/bdc-model-schedule',
        title: '模型调度',
        icon: 'cog',
      },
      {
        path: '/bdc-health-monitoring',
        title: '模型健康监控',
        icon: 'medkit',
      }
    ]
  }
]
