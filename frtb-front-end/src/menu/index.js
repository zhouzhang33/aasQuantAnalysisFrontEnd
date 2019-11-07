// // 插件
// import demoPlugins from './modules/demo-plugins'
// // 组件
// import demoComponents from './modules/demo-components'
// // 组件
// import demoCharts from './modules/demo-charts'
// // 组件库
// import demoElement from './modules/demo-element'
// // 组件库
// import demoFilters from './modules/demo-filters'
// // 试验台
// import demoPlayground from './modules/demo-playground'
// // 示例
// import demoBusiness from './modules/demo-business'
// // CRUD
// import demoD2Crud from './modules/demo-d2-crud'
// 第三方网页
//import demoFrame from './modules/demo-frame'
//
// import bdcriskmonitor from './modules/bdc-risk-monitor'
//
// import bdcmarco from './modules/bdc-macro'
//
// import bdcriskpredict from './modules/bdc-risk-predict'

// import  aboutus from   './modules/bdc-about-us'

// import fivValueApp from   './modules/fiv-value-app'
import frtbanalysis from   './modules/frtbanalysis'
import frtbconfig from   './modules/frtbconfig'

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
  // index,
  // europeanOption,
  // irsccs,
  // // aboutus,
  // Bond,
  // swaption
]

// 菜单 顶栏
export const menuHeader = [
  {
    title: 'FX FWD Swap',
    icon: 'tachometer',
    path: '/frtb/fxswap',
    name: 'index'
  },
  {
    title: 'FX European Option',
    icon: 'tachometer',
    path: '/frtb/europeanOption',
    name: 'europeanOption'
  },
  {
    title: 'IRS CCS',
    icon: 'tachometer',
    path: '/frtb/irsccs',
    name: 'irsccs'
  },
  {
    title: 'Bond',
    icon: 'tachometer',
    path: '/frtb/bond',
    name: 'Bond'
  },
  {
    title: 'Swaption',
    icon: 'tachometer',
    path: '/frtb/swaption',
    name: 'swaption'
  },
  frtbanalysis,
  frtbconfig,
]
