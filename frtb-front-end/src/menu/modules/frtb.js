export default {
  path: '/frtb',
  title: 'FRTB',
  lang: 'menu.frtb',
  icon: 'pie-chart',
  children: (pre => [
    // { path: `${pre}fxfwd`, title: 'FX FWD', lang: 'menu.fxfwd', icon: 'bar-chart' },
    { path: `${pre}fxswap`, title: 'FX FWD', lang: 'menu.fxswap', icon: 'bar-chart' },
    { path: `${pre}europeanOption`, title: 'European Option', lang: 'menu.europeanOption', icon: 'bar-chart' },
    { path: `${pre}irsccs`, title: 'IRS CCS', lang: 'menu.irsccs', icon: 'bar-chart' },
    { path: `${pre}bond`, title: 'Bond', lang: 'menu.bond', icon: 'bar-chart' },
    { path: `${pre}senarioAnalysis`, title: 'Senario Analysis', lang: 'menu.senarioAnalysis', icon: 'bar-chart' },
    { path: `${pre}attribution`, title: 'Attribution', lang: 'menu.attribution', icon: 'bar-chart' },
    { path: `${pre}bermudanswap`, title: 'FX FWD', lang: 'menu.bermudanswap', icon: 'bar-chart' },
    { path: `${pre}cds`, title: 'CDS', lang: 'menu.cds', icon: 'bar-chart' },
    { path: `${pre}cds`, title: '欧式期权', lang: 'menu.european', icon: 'bar-chart' },
    { path: `${pre}cds`, title: '美式期权', lang: 'menu.american', icon: 'bar-chart' }
  ])('/frtb/')
}
