export default {
    path: '/frtb',
    title: '组合分析',
    lang: '组合分析',
    icon: 'pie-chart',
    children: (pre => [
        // { path: `${pre}fxfwd`, title: 'FX FWD', lang: 'menu.fxfwd', icon: 'bar-chart' },
        { path: `${pre}combinedcashflow`, title: 'Combined Cash Flow', lang: 'Combined Cash Flow', icon: 'bar-chart' },
        { path: `${pre}senarioAnalysis`, title: 'Senario Analysis', lang: 'menu.senarioAnalysis', icon: 'bar-chart' },
        { path: `${pre}attribution`, title: 'Attribution', lang: 'menu.attribution', icon: 'bar-chart' },
    ])('/frtb/')
}
