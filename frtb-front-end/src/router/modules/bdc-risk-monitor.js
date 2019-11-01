import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/bdc-risk',
  name: 'bdc-risk',
  meta,
  redirect: { name: 'bdc-risk-monitor' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'monitor',
      name: `${pre}monitor`,
      component: () => import('@/pages/bdc-risk-monitor/index'),
      meta: {
        ...meta,
        title: '风险监控平台'
      }
    },
    // 如果需要搜索功能，反注释掉这段
    // {
    //   path: 'infostation',
    //   name: `${pre}infostation`,
    //   component: () => import('@/pages/bdc-risk-monitor/bdc-infostation'),
    //   meta: {
    //     ...meta,
    //     title: '大数据情报站'
    //   }
    // },
    {
      path: 'infostation',
      name: `${pre}infostation`,
      component: () => import('@/pages/bdc-risk-monitor/search-results'),
      meta: {
        ...meta,
        title: '大数据情报站'
      }
    },
    {
      path: 'profile',
      name: `${pre}profile`,
      meta: {
        auth: true,
        title:'企业风险画像'
      },
      component: () => import('@/pages/bdc-risk-monitor/bdc-profile')
    },
     {
      path: 'modelmonitor',
      name: `${pre}modelmonitor`,
      meta: {
        auth: true,
        title:'模型健康监测'
      },
      component: () => import('@/pages/bdc-risk-monitor/bdc-model/modelhealth')
    },
     {
      path: 'modeldeploy',
      name: `${pre}modeldeploy`,
      meta: {
        auth: true,
        title:'模型训练与发布'
      },
      component: () => import('@/pages/bdc-risk-monitor/bdc-model/deploy')
    },
    {
      path: 'hidenrelation',
      name: `${pre}hidenrelation`,
      meta: {
        auth: true,
        title:'隐藏关系挖掘'
      },
      component: () => import('@/pages/bdc-risk-monitor/bdc-hidenrelation')
    },

    {
      path: 'relationquery',
      name: `${pre}relationquery`,
      meta: {
        auth: true,
        title:'关联关系查询'
      },
      component: () => import('@/pages/bdc-risk-monitor/bdc-relation')
    },
    {
      path: 'searchresults',
      name: `${pre}searchresults`,
     component: () => import('@/pages/bdc-risk-monitor/search-results'),
      meta: {
        auth: true,
        title: '搜索结果'
      }
    },
    
  ])('risk-risk-')
}
