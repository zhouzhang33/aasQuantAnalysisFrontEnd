export var curveNameOptions=[
    {
        key: 'Shibor3M', label: 'Shibor3M', value: 'Shibor3M',
    },
    {
        key: 'Shibor1M', label: 'Shibor1M', value: 'Shibor1M',
    },
];

export var displayOptions=[
    {
        key: '损失分布数据表', label: '损失分布数据表', value: '损失分布数据表',
    },
    {
        key: '损失分布图', label: '损失分布图', value: '损失分布图',
    },
];

export var touzuOptions=[
    {
        key: 'TRADING', label: 'TRADING', value: 'TRADING',
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
export var echartOptionLeft = {
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
