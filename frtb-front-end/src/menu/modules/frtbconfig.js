export default {
    path: '/frtbconfig',
    title: 'FRTB配置',
    lang: 'FRTB配置',
    icon: 'pie-chart',
    children: (pre => [
        // { path: `${pre}fxfwd`, title: 'FX FWD', lang: 'menu.fxfwd', icon: 'bar-chart' },
        { path: `${pre}workflow`, title: 'workflow', lang: 'WorkFlow', icon: 'bar-chart' },
        { path: `${pre}MTM`, title: 'Mark to Market', lang: 'Mark to Market', icon: 'bar-chart' },
        { path: `${pre}capital`, title: 'Capital', lang: 'Capital', icon: 'bar-chart' },
        { path: `${pre}expshortfall`, title: 'Expected Shortfall', lang: 'Expected Shortfall', icon: 'bar-chart' },
        { path: `${pre}marketstandard`, title: 'Market Standard', lang: 'Market Standard', icon: 'bar-chart' },
        { path: `${pre}stress`, title: 'Stress', lang: 'Stress', icon: 'bar-chart' },
    ])('/frtbconfig/')
}
