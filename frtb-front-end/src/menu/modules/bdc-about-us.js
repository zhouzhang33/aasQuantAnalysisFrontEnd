export default {
  path: '/bdc-about-us',
  title: '关于我们',
  lang:'menu.gywm',
  icon: 'puzzle-piece',
  children: (pre => [

    { 
      path: `${pre}team`, 
      title: '解决方案', 
      lang:'menu.solutions',
      icon: 'address-card',
    },
    // { 
    //   path: `${pre}solutions`, 
    //   title: '解决方案将来要改', 
    //   icon: 'stethoscope' ,
    //   children: [
    //     { path: `${pre}smartbond`, title: '智慧债券', icon: 'heartbeat'},
    //     { path: `${pre}insights`, title: '业务洞察', icon: 'crosshairs'  }
    //   ]
    // },
    // { path: `${pre}insights`, title: '业务洞察', icon: 'crosshairs' },
    { 
      path: `${pre}cases`, 
      title: '客户案例', 
      lang:'menu.customers', 
      icon: 'briefcase' },
    // { path: `${pre}recruiting`, title: '招贤纳士', icon: 'male' },
       
  ])('/bdc-about-us/')
}

