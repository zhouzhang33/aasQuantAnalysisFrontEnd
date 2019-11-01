export default {
  path: '/bdc-risk',
  title: '风险监控平台',
  lang: 'menu.fxjkpt',
  icon: 'bolt',
  children: (pre => [
    { 
      path: `${pre}monitor`, 
      title: '风险监控平台', 
      lang: 'menu.fxjkpt',
      icon: 'bolt' 
    },
    { 
      path: `${pre}infostation`, 
      title: '大数据情报站', 
      lang: 'menu.dsjqbz',
      icon: 'sellsy' ,
      // children: [
      //   { path: `${pre}searchresults`, title: '搜索结果', icon: 'male' },
      // ]
    },
    // { path: `${pre}graph`, title: '图谱测试', iconsvg: 'd2-crud' },
    { 
      path: `${pre}profile`, 
      title: '企业风险画像', 
      lang: 'menu.qyfxhx',
      icon: 'newspaper-o',
    },
    { 
      path: `${pre}profile`, 
      title: '模型管理', 
      lang: 'menu.mxgl',
      icon: 'connectdevelop',
      children: [
        { path: `${pre}modelmonitor`, title: '模型健康监测', lang: 'menu.mxjkjc', icon: 'heartbeat'},
        { path: `${pre}modeldeploy`, title: '模型训练与发布', lang: 'menu.mxxlyfb', icon: 'spinner'  }
      ]
    },
    { 
      path: `${pre}analysis`, 
      title: '关联分析', 
      lang: 'menu.glfx',
      icon: 'gg',
      children: [
        { path: `${pre}relationquery`, title: '关联关系查询', lang: 'menu.gxcx', icon: 'chain'},
        { path: `${pre}hidenrelation`, title: '产业链图谱挖掘', lang: 'menu.gxwj', icon: 'chain-broken' }
      ]
    },
    // { path: `${pre}searchresults`, title: ' ', icon: ' ' },
  ])('/bdc-risk/')
}
