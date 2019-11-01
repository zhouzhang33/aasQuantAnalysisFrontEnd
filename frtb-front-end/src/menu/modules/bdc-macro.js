export default {
  path: '/bdc-macro',
  title: '宏观信息',
  lang:'menu.hgxx',
  icon: 'pie-chart',
  children: (pre => [
    { path: `${pre}macrodata`, title: '宏观数据', lang:'menu.hgsj', icon: 'bar-chart' },

    { path: `${pre}nec`, title: '国民经济核算', lang:'menu.gmjjhs', icon: 'university' },

    { path: `${pre}priceindex`, title: '价格指数', lang:'menu.jgzs', icon: 'line-chart' },

    { path: `${pre}finassurence`, title: '金融保险', lang:'menu.jrbx', icon: 'cny' },

    { path: `${pre}demographic`, title: '人口与就业', lang:'menu.rkyjy', icon: 'users' }

   
  ])('/bdc-macro/')
}
