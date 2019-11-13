import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: false }
export default {
  path: '/frtb',
  name: 'frtb',
  meta,
  redirect: { name: 'frtb' },
  component: layoutHeaderAside,
  children: [

    {
      path: 'fxswap',
      name: 'index',
      meta: {
        title: 'FRTB',
        auth: false
      },
      component: () => import('@/pages/frtb/fxswap/index')
    },
    {
      path: 'europeanOption',
      name: 'europeanOption',
      meta: {
        title: 'European Option',
        auth: false
      },
      component: () => import('@/pages/frtb/europeanOption/index')
    },
    {
      path: 'irsccs',
      name: 'irsccs',
      meta: {
        title: 'IRS-CCS',
        auth: false
      },
      component: () => import('@/pages/frtb/irsccs/index')
    },
    {
      path: 'bond',
      name: 'bond',
      meta: {
        title: 'Bond',
        auth: true
      },
      component: () => import('@/pages/frtb/bond/index')
    },
    {
      path: 'swaption',
      name: 'swaption',
      meta: {
        title: 'Swaption',
        auth: true
      },
      component: () => import('@/pages/frtb/swaption/index')
    },
    {
      path: 'fxdigitaloption',
      name: 'fxdigitaloption',
      meta: {
        title: 'FX Digital Option',
        auth: true
      },
      component: () => import('@/pages/frtb/fxdigitaloption/index')
    },
    {
      path: 'combinedcashflow',
      name: 'combinedcashflow',
      meta: {
        title: 'Combined Cash Flow',
        auth: true
      },
      component: () => import('@/pages/frtb/combinedcashflow/index')
    },
    {
      path: 'potofolioanalysis',
      name: 'potofolioanalysis',
      meta: {
        title: '组合头寸分析',
        auth: true
      },
      component: () => import('@/pages/frtb/potofolioanalysis/index')
    },
    {
      path: 'senarioAnalysis',
      name: 'senarioAnalysis',
      meta: {
        title: 'Senario Analysis',
        auth: true
      },
      component: () => import('@/pages/frtb/senarioAnalysis/index')
    },
    {
      path: 'attribution',
      name: 'attribution',
      meta: {
        title: 'Attribution',
        auth: true
      },
      component: () => import('@/pages/frtb/attribution/index')
    },


  ]
}
