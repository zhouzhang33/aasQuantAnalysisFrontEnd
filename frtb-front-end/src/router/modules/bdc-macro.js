import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }
export default {
  path: '/bdc-macro',
  name: 'bdc-macro',
  meta,
  redirect: { name: 'bdc-macro-macrodata' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'macrodata',
      name: `${pre}macrodata`,
      component: () => import('@/pages/bdc-macro/bdc-macrodata'),
      meta: {
        ...meta,
        title: '宏观数据'
      }
    },

    {
      path: 'nec',
      name: `${pre}nec`,
      component: () => import('@/pages/bdc-macro/guominjingji'),
      meta: {
        ...meta,
        title: '国民经济核算'
      }
    },
    {
      path: 'priceindex',
      name: `${pre}priceindex`,
      component: () => import('@/pages/bdc-macro/jiagezhishu'),
      meta: {
        ...meta,
        title: '价格指数'
      }
    },
    {
      path: 'finassurence',
      name: `${pre}finassurence`,
      component: () => import('@/pages/bdc-macro/financeinsurance'),
      meta: {
        ...meta,
        title: '金融保险'
      }
    },
    {
      path: 'demographic',
      name: `${pre}demographic`,
      component: () => import('@/pages/bdc-macro/renkoujiuye'),
      meta: {
        ...meta,
        title: '人口预就业'
      }
    },
  ])('bdc-macro-')
}
