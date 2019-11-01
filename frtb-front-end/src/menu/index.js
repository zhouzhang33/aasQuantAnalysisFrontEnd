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

import bdcriskmonitor from './modules/bdc-risk-monitor'

import bdcmarco from './modules/bdc-macro'

import bdcriskpredict from './modules/bdc-risk-predict'

// import  aboutus from   './modules/bdc-about-us'

import fivValueApp from   './modules/fiv-value-app'
import frtb from   './modules/frtb'


// 菜单 侧边栏
export const menuAside = [
  // demoComponents,
  // demoPlugins,
  // demoCharts,
  // demoElement,
  // demoFilters,
  // demoPlayground,
  // demoBusiness,
  // demoD2Crud,
  // demoFrame,

  bdcriskmonitor,
  bdcmarco,
  bdcriskpredict,
  // aboutus,
  frtb
]

// 菜单 顶栏
export const menuHeader = [
  {
    title: '任务列表',
    icon: 'tachometer',
    path: '/frtb/workflow',
    name: 'index'
  },
  {
    title: 'Mark to Market',
    icon: 'tachometer',
    path: '/frtb/MTM',
    name: 'MTM'
  },
  {
    title: 'Capital',
    icon: 'tachometer',
    path: '/frtb/capital',
    name: 'capital'
  },
  {
    title: 'Expected Shortfall',
    icon: 'tachometer',
    path: '/frtb/expshortfall',
    name: 'expshortfall'
  },
  {
    title: 'Market Standard',
    icon: 'tachometer',
    path: '/frtb/marketstandard',
    name: 'marketsd'
  },
  {
    title: 'Stress',
    icon: 'tachometer',
    path: '/frtb/stress',
    name: 'stress'
  },
  // {
  //   title: '风险监控平台',
  //   icon: 'sc',
  //    path: '/bdc-risk',
  //   name:'风险监控平台',
  //   children: [
  //     {
  //       path: '/bdc-risk/monitor',
  //       title: '风险监控平台',
  //       iconSvg: 'd2-crud',
  //     },
  //     {
  //       path: '/bdc-risk/infostation',
  //       title: '大数据情报站',
  //       iconSvg: 'd2-crud',
  //     },
  //   ]
  // },

  // bdcriskmonitor,
  // bdcmarco,
  // bdcriskpredict,
  // aboutus,
  // bdcmodelmanagment
  frtb
]
