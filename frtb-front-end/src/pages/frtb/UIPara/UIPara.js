export var currencyPairOptions=[
  {
    key:'USD/CNY',  label:'USD/CNY', value:'USD/CNY',
  },
  // {
  //   key: 'USD/CAD',
  //   label: 'USD/CAD',
  //   value: 'USD/CAD',
  // },
];

export var callPutOptions=[
  {key:'Call',value:'Call',label:'Call'},
  {key:'Put',value:'Put',label:'Put'},
];

export var zheXianQuxianChaZhiOptions=[
  {key:'Linear log normal',value:'Linear log normal',label:'Linear log normal'},
];
export var boDonglvQuMianChaZhiOptions=[
  {key:'Linear of Delta',value:'Linear of Delta',label:'Linear of Delta'},
];
export var yingYeRiGuiZeOptions=[
  {
    key:'调整至下一营业日',
    label:'调整至下一营业日',
    value:'调整至下一营业日',
  },
  {
    key:'下一营业日(考虑月末)',
    label:'下一营业日(考虑月末)',
    value:'下一营业日(考虑月末)',
  },
  {
    key:'下一营业日(考虑季末)',
    label:'下一营业日(考虑季末)',
    value:'下一营业日(考虑季末)',
  },
];
export var jiXiTianShuFangshiOptions=[
  {
    key:'ACT/365',
    label:'ACT/365',
    value:'ACT/365',
  },
  {
    key:'ACT/365(fixed)',
    label:'ACT/36(fixed)5',
    value:'ACT/365(fixed)',
  },
  {
    key:'ACT/360',
    label:'ACT/36',
    value:'ACT/36',
  },
  {
    key:'30/360',
    label:'30/36',
    value:'30/36',
  },
];
export var nearPeriodOption=[
  {
    key:'SPOT',
    label:'SPOT',
    value:'SPOT',
  },
];

export var farPeriodOption = [
  {
    key:'3M',
    label:'3M',
    value:'3M',
  },
];
export var nearAmountOption = ['近端金额1','近端金额2'];
export var currency1EarningCurveOptions = [
  {
    key:'美元隐含利率曲线',
    label:'美元隐含利率曲线',
    value:'美元隐含利率曲线',
  },
  {
    key:'Libor',
    label:'Libor',
    value:'Libor',
  },
  {
    key:'OIS',
    label:'OIS',
    value:'OIS',
  },
  {
    key:'自定义',
    label:'自定义',

    value:'自定义',
  },
];
export var currency2EarningCurveOptions = [
  {
    key:'人民币FR007收益利率曲线',
    label:'人民币FR007收益利率曲线',
    value:'人民币FR007收益利率曲线',
  },
  {
    key:'Shibor',
    label:'Shibor',
    value:'Shibor',
  },
  {
    key:'自定义',
    label:'自定义',
    value:'自定义',
  },
];
export var intepolationTypeOptions = [
  {
    key:'线性插值',
    label:'线性插值',
    value:'线性插值',
  },
  {
    key:'三次样条',
    label:'三次样条',
    value:'三次样条',
  },
  {
    key:'Log-linear',
    label:'Log-linear',
    value:'Log-linear',
  },
]
export var curveNameOptions=[
  {
    key:'USD_OIS',
    label:'美元OIS曲线',
    value:'USD_OIS',
  },
  {
    key:'CNY_Repo7D',
    label:'人民币FR007收益曲线',
    value:'CNY_Repo7D',
  },
  {
    key:'discountCurve',
    label:'贴现利率',
    value:'discountCurve',
  },
];
export var tradingTypeOptions=[
  {
    key:'远期',
    label:'远期',
    value:'远期',
  },
  {
    key:'掉期',
    label:'掉期',
    value:'掉期',
  },
];
export var tradingDirectionOptions=[
  {
    key:'买入外币',
    label:'买入外币',
    value:'买入外币',
  },
  {
    key:'卖出外币',
    label:'卖出外币',
    value:'卖出外币',
  },
];
export var directionOptions=[
  {
    key:'收取利息',  label:'收取利息', value:'收取利息',
  },
  {
    key:'支付利息',  label:'支付利息', value:'支付利息',
  },
];
export var xiPiaoLeiXingOptions=[
  {
    key:'固定',  label:'固定', value:'固定',
  },
  {
    key:'浮动',  label:'浮动', value:'浮动',
  },
]
export var fuXiPingLvOptions=[
  {
    key:'1M',  label:'1M', value:'1M',
  },
  {
    key:'3M',  label:'3M', value:'3M',
  },
  {
    key:'6M',  label:'6M', value:'6M',
  },
  {
    key:'1Y',  label:'1Y', value:'1Y',
  },
]
export var currencyOptions=[
  {
    key:'人民币',
    label:'人民币',
    value:'人民币',
  },
  {
    key:'美元',
    label:'美元',
    value:'美元',
  },
];
export var jiXiFangShiOptions=[
  {
    key:'单利',  label:'单利', value:'单利',
  },
  {
    key:'复利',  label:'复利', value:'复利',
  },
]
export var jieJiaRiOptions=[
  {
    key:'北京',  label:'北京', value:'北京',
  },
];
// export var yingYeRiTiaoZhengOptions =[
//   {
//     key:'MF',  label:'MF', value:'MF',
//   },
// ];
export var irstargetOptions =[
  {
    key:'NPV',  label:'NPV', value:'NPV',
  },
  {
    key:'利差',  label:'利差', value:'利差',
  },
];
export var bondEarningCurveOptions=[
  {key:'中债企业债到期收益率曲线',value:'中债企业债到期收益率曲线',label:'中债企业债到期收益率曲线'},
]
export var fuXiPinLVOptions=[
  {key:'按年',value:'按年',label:'按年'},
  {key:'按半年',value:'按半年',label:'按半年'},
  {key:'按季度',value:'按季度',label:'按季度'},
  {key:'按月',value:'按月',label:'按月'},
]

export var touCunOptions=[
  {
    key:'10000', label:'10000', value:'10000',
  },
]
export var swaptionTradingTypeOptions=[
  {
    key:'1Y', label:'1Y', value:'1Y',
  },
  {
    key:'5Y', label:'5Y', value:'5Y',
  },
]
export var notificationDateOption=[
  {
    key:'0D', label:'0D', value:'0D',
  },
]
export var jiaoGeFangShiOptions=[
  {
    key:'本金交割', label:'本金交割', value:'本金交割',
  },
  {
    key:'利差交割', label:'利差交割', value:'利差交割',
  },
]
export var swaptionJiaoYiDuiShouOptions=[
  {
    key:'平安国际', label:'平安国际', value:'平安国际',
  },
]
export var swaptionPricingModelOptions=[
  {
    key:'Black-Scholes', label:'Black-Scholes', value:'Black-Scholes',
  },

]
export var volatilityTypeOptions=[
  {
    key:'Lognormal', label:'Lognormal', value:'Lognormal',
  },

]
export var digitalOptionTypeOptions=[
      {
        key:'补充类型', label:'补充类型', value:'补充类型',
      },

]
///////////////////////////////////


export var echartOption = {
  title: {

    textStyle:{
      color: "white",
    },


  },
  legend:{
    show:true,
    y:'bottom',
    orient:'horizontal',
    textStyle:{
      color:"white",
      fontSize:16

    }
  },

  tooltip: {
    trigger: 'axis',
    // formatter: function (params) {
    //     params = params[0];
    //
    //     return params.value[1] +'yuan';
    // },
    // axisPointer: {
    //     animation: false
    // }
  },
  grid: {
    left: '3%',
    right: '1%',
    bottom: '15%',
    top:'10%',
    containLabel: true
  },
  xAxis: {
    name: '日期',
    nameLocation:'center',
    nameGap:30,
    textStyle:{
      color:"white",
      fontSize:16
    },
    type: 'time',
    splitLine: {
      show: false
    },
    nameTestStyle:{
      color:'#FFFFFF'
    },
    axisLine:{
      lineStyle:{
        color:'white',  //坐标轴的颜色
        width:1,
      },
    },
  },
  yAxis: {
    name: '利率',
    nameLocation:'center',
    nameGap:30,
    type: 'value',
    //boundaryGap: [0, '100%'],
    splitLine: {
      show: false
    },
    axisLabel:{
      formatter:'{value}%'
    },
    axisLine:{
      lineStyle:{
        color:'white',  //坐标轴的颜色
        width:1,
      }
    },
    nameTestStyle:{
      color:'#FFFFFF'
    },
  },
  series: [
    {
      name:'贴现利率',
      type:'line',
      data:[['2017/1/25','5.5%']]
    },
  ]

};

export var echartOptionRight = {
  title: {
    //text: 'CPU资源',
    textStyle:{
      color: "white",
    }
  },
  legend:{
    show:true,
    y:'bottom',
    orient:'horizontal',
    textStyle:{
      color:"white",
      fontSize:16

    }
  },

  tooltip: {
    trigger: 'axis',
    // formatter: function (params) {
    //     params = params[0];
    //
    //     return params.value[1] +'yuan';
    // },
    // axisPointer: {
    //     animation: false
    // }
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '15%',
    top:'3%',
    containLabel: true
  },
  xAxis: {
    name: '到期价格（元）',
    nameLocation:'center',
    nameGap:30,
    textStyle:{
      color:"white",
      fontSize:16
    },
    type: 'value',
    splitLine: {
      show: false
    },
    nameTestStyle:{
      color:'#FFFFFF'
    },
    axisLine:{
      lineStyle:{
        color:'white',  //坐标轴的颜色
        width:1,
      },
    },
  },
  yAxis: {
    type: 'value',
    //boundaryGap: [0, '100%'],
    splitLine: {
      show: false
    },
    axisLine:{
      lineStyle:{
        color:'white',  //坐标轴的颜色
        width:1,
      }
    },
    nameTestStyle:{
      color:'#FFFFFF'
    },
  },
  series: [
    {
      name:'总收益',
      type:'line',
      data:[[1,1],[5,5],[7,5],[9,9],[10,10]]
    },
    {
      name:'Leg1',
      type:'line',
      data:[[1,1.5],[5,5.5],[7,5.5],[9,5.5],[10,5.5]]
    },
    {
      name:'Leg2',
      type:'line',
      data:[[1,5.5],[5,5.5],[7,5.5],[9,9.5],[10,10.5]]
    },
  ]
};
export var echartSurfoption = {
  tooltip: {},
  backgroundColor: 'transparent',
  visualMap: {
    show: false,
    dimension: 2,
    min: -1,
    max: 1,
    inRange: {
      color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    }
  },
  xAxis3D: {
    type: 'value',
    nameTextStyle:{
      color:'white'
    },
    axisLine:{
      lineStyle:{
        color:'white'
      }
    }
  },
  yAxis3D: {
    type: 'value',
    nameTextStyle:{
      color:'white'
    },
    axisLine:{
      lineStyle:{
        color:'white'
      }
    }
  },
  zAxis3D: {
    type: 'value',
    nameTextStyle:{
      color:'white'
    },
    axisLine:{
      lineStyle:{
        color:'white'
      }
    }
  },
  grid3D: {
    viewControl: {
      // projection: 'orthographic'
    }
  },
  series: [{
    type: 'surface',
    wireframe: {
      // show: false
    },
    equation: {
      x: {
        step: 0.05
      },
      y: {
        step: 0.05
      },
      z: function (x, y) {
        if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
          return '-';
        }
        return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
      }
    }
  }]
}