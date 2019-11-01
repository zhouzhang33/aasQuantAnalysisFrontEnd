import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }
export default {
  path: '/bdc-about-us',
  name: 'bdc-about-us',
  meta,
  redirect: { name: 'bdc-about-us/' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'team',
      name: `${pre}team`,
     component: () => import('@/pages/bdc-about-us/team'),
      meta: {
        ...meta,
        title: '团队介绍'
      }
    },
    // {
    //   path: 'solutions',
    //   name: `${pre}solutions`,
    //  component: () => import('@/pages/bdc-about-us/solutions'),
    //   meta: {
    //     ...meta,
    //     title: '解决方案'
    //   }
    // },
    {
      path: 'smartbond',
      name: `${pre}smartbond`,
     component: () => import('@/pages/bdc-about-us/smartbond'),
      meta: {
        ...meta,
        title: '智慧债券'
      }
    },
    {
      path: 'insights',
      name: `${pre}insights`,
     component: () => import('@/pages/bdc-about-us/insights'),
      meta: {
        ...meta,
        title: '业务洞察'
      }
    },
    {
      path: 'cases',
      name: `${pre}cases`,
     component: () => import('@/pages/bdc-about-us/cases'),
      meta: {
        ...meta,
        title: '客户案例'
      }
    },
   
  ])('bdc-about-us-')
}
