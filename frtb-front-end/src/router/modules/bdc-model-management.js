import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }
export default {
  path: '/bdc-model-management',
  name: 'bdc-model-management',
  meta,
  redirect: { name: 'bdc-model-management-model-schedule' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'model-schedule',
      name: `${pre}model-schedule`,
      component: () => import('@/pages/bdc-macro/bdc-macrodata'),
      meta: {
        ...meta,
        title: '模型调度'
      }
    },
     {
      path: 'health-monitoring',
      name: `${pre}health-monitoring`,
      component: () => import('@/pages/bdc-macro/bdc-macrodata'),
      meta: {
        ...meta,
        title: '模型健康监控'
      }
    }
  
   
  ])('bdc-model-management-')
}
