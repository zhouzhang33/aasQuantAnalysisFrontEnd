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
      path: 'fxfwd',
      name: 'fxfwd',
      meta: {
        title: 'FRTB',
        auth: false
      },
      component: () => import('@/pages/frtb/fxfwd/index')
    },
    {
      path: 'fxswap',
      name: 'fxswap',
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
        auth: false
      },
      component: () => import('@/pages/frtb/bond/index')
    }
  ]
}
