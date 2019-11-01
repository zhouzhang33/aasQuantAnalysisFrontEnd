export default {
  path: '/bdc-risk-predict',
  title: '风险知识库',
  lang:'menu.fxyjk',
  icon: 'exclamation-circle',  //exclamation
  children: (pre => [

    { path: `${pre}indicator`, title: '预警指标集', lang:'menu.yjzbj', icon: 'list' },
    { path: `${pre}large-company`, title: '信贷审批规则', lang:'menu.large', icon: 'building' },
    { path: `${pre}small-company`, title: '金融犯罪打标类', lang:'menu.small', icon: 'building' },
    // { path: `${pre}small-company`, title: '大中型企业', lang:'menu.small', icon: 'home' },
    // { path: `${pre}small-company`, title: '小微型企业', lang:'menu.small', icon: 'home' },
    // { path: `${pre}finassurence`, title: '金融保险', icon: 'binoculars' },
    // { path: `${pre}demographic`, title: '人口预就业', icon: 'binoculars' }

  ])('/bdc-risk-predict/')
}

 