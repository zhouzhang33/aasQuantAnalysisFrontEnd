export var directionOptions=[
  {key:'Buy',value:'Buy',label:'Buy'},
  {key:'Sell',value:'Sell',label:'Sell'},
];
export var callPutOptions=[
  {key:'Call',value:'Call',label:'Call'},
  {key:'Put',value:'Put',label:'Put'},
];
export var deliveryOptions=[
  {key:'1M',value:'1M',label:'1M'},
];
export var rdOptions=[
  {key:'SHIBOR',value:'SHIBOR',label:'SHIBOR'},
  {key:'LIBOR',value:'LIBOR',label:'LIBOR'},
];
export var currencyPair=[
  {key:'USD/CNY',value:'USD/CNY',label:'USD/CNY'},
];
export var optionType=[
  {key:'riskReversal',value:'riskReversal',label:'riskReversal'},
];

export var unitOptions=[
  {key:'CNY',value:'CNY',label:'CNY'},
  {key:'USD',value:'USD',label:'USD'},

]
export var greekOptions1=[
  {key:'Normal',value:'Normal',label:'Normal'},
]
export var greekOptions2=[
  {key:'Amount',value:'Amount',label:'Amount'},
]
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
