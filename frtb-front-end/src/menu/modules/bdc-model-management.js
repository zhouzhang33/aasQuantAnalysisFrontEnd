export default {
  path: '/bdc-model-management',
  title: '模型管理',
  icon: 'puzzle-piece',
  children: (pre => [

    { path: `${pre}model-schedule`, title: '团队介绍', icon: 'cog' },
    { path: `${pre}health-monitoring`, title: '解决方案', icon: 'medkit' },
    { path: `${pre}health-monitoring`, title: '业务洞察', icon: 'heartbeat' },
    { path: `${pre}health-monitoring`, title: '客户案例', icon: 'medkit' },
    { path: `${pre}health-monitoring`, title: '招贤纳士', icon: 'medkit' }     
   
  ])('/bdc-model-management/')
}

