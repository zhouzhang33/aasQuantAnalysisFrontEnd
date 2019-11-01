export default {
  path: '/fiv-value-app',
  title: '估值应用',
  lang:'menu.gzyy',
  icon: 'calculator',
  children: (pre => [
    { 
      path: `${pre}single-valuation`, 
      title: '单笔试算', 
      lang:'menu.gzss', 
      icon: 'bar-chart',
      children: [
        { path: `${pre}gjsysp`, title: '贵金属衍生品', lang: 'menu.gjsysp', icon: 'heartbeat'},
        { path: `${pre}whysp`, title: '外汇衍生品', lang: 'menu.whysp', icon: 'spinner'  }
      ]
    },
    { 
      path: `${pre}batch-valuation`, 
      title: '批量计算', 
      lang:'menu.pljs', 
      icon: 'bar-chart',
      children: [
        { path: `${pre}a`, title: '损益汇总', lang: 'menu.sunyihz', icon: 'heartbeat'},
        { path: `${pre}b`, title: '归因分析', lang: 'menu.guiyinfx', icon: 'spinner'  },
        { path: `${pre}c`, title: '损益预估', lang: 'menu.sunyiyg', icon: 'spinner'  }
      ]
    },
   
  ])('/fiv-value-app')
}
