import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }
export default {
  path: '/bdc-risk-predict',
  name: 'bdc-risk-predict',
  meta,
  redirect: { name: 'bdc-risk-predict-indicator' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'indicator',
      name: `${pre}indicator`,
      component: () => import('@/pages/bdc-risk-predict/bdc-risk-indicator'),
      meta: {
        ...meta,
        title: '预警指标集'
      }
    },

    {
      path: 'large-company',
      name: `${pre}large-company`,
      component: () => import('@/pages/bdc-risk-predict/large-company'),
      meta: {
        ...meta,
        title: '大中型企业'
      }
    },
    {
      path: 'small-company',
      name: `${pre}small-company`,
      component: () => import('@/pages/bdc-risk-predict/small-company'),
      meta: {
        ...meta,
        title: '小微型企业'
      }
    },
  ])('bdc-risk-predict-')
}
