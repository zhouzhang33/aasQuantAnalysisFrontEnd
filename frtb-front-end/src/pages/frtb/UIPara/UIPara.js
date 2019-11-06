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
    key:'人名币FR007收益利率曲线',
    label:'人名币FR007收益利率曲线',
    value:'人名币FR007收益利率曲线',
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
    key:'美元OIS曲线',
    label:'美元OIS曲线',
    value:'美元OIS曲线',
  },
  {
    key:'人民币FR007收益曲线',
    label:'人民币FR007收益曲线',
    value:'人民币FR007收益曲线',
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
///////////////////////////////////


export var echartOption = {
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
