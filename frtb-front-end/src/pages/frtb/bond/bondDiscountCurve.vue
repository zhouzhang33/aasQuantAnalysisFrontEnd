<template>
    <div class="box-card" style="height:500px">
        <div id="chartScatter" style="width:95%;height:450px">

        </div>
    </div>

</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "bondEarningCurve",
        data() {
            return{
                //scatter points
               bondEcharts:null,
               bondEarningCurveOption: {
                   title: {
                       textStyle:{
                           color: 'white',
                       },
                   },
                   legend:{
                       show:true,
                       y:'bottom',
                       orient:'horizontal',
                       textStyle:{
                           color:'white',
                           fontSize:16
                       }
                   },
                   tooltip: {
                       trigger: 'axis',
                   },
                   grid: {
                       left: '5%',
                       right: '1%',
                       bottom: '15%',
                       top:'10%',
                       containLabel: true
                   },
                   xAxis: {
                       name: 'Tenor',
                       nameLocation:'center',
                       nameGap:20,

                       textStyle:{
                           color:'white',
                           fontSize:16
                       },
                       type: 'category',
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
                       name: '',
                       nameLocation:'center',
                       nameGap:60,
                       type: 'value',
                       splitLine: {
                           show: false
                       },
                       axisLabel:{
                           formatter:'{value}'
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
                           name: 'Yield',
                           type: 'line',
                           data:
                               [
                                   // [1	    ,2.38],
                                   // [7	    ,2.49],
                                   // [30	    ,2.48],
                                   // [90	    ,2.56],
                                   // [180	,2.67],
                                   // [270	,2.83],
                                   // [365	,2.76],
                                   // [730	,2.679],
                                   // [1095	,2.61],
                                   // [1460	,2.59],
                                   // [1825	,2.596],
                                   // [2190	,2.618],
                                   // [2555	,2.65],
                                   // [2920	,2.679],
                                   // [3285	,2.71],
                                   // [3650	,2.746],
                                   // [4015	,2.8],
                                   // [4380	,2.858],
                                   // [4745	,2.882],
                                   // [5110	,2.89],
                                   // [5475	,2.88],
                                   // [5840	,2.83],
                                   // [6205	,2.772]]
                                   ['1D' 	,2.38 ],
                                   ['7D' 	,2.49 ],
                                   ['1M' 	,2.48 ],
                                   ['3M' 	,2.56 ],
                                   ['6M' 	,2.67 ],
                                   ['9M' 	,2.83 ],
                                   ['1Y' 	,2.76 ],
                                   ['2Y' 	,2.679],
                                   ['3Y' 	,2.61 ],
                                   ['4Y' 	,2.59 ],
                                   ['5Y' 	,2.596],
                                   ['6Y' 	,2.618],
                                   ['7Y' 	,2.65 ],
                                   ['8Y' 	,2.679],
                                   ['9Y' 	,2.71 ],
                                   ['10Y'	,2.746],
                                   ['12Y'	,2.8  ],
                                   ['15Y'	,2.858],
                                   ['20Y'	,2.882],
                                   ['25Y'	,2.89 ],
                                   ['30Y'	,2.88 ],
                                   ['40Y'	,2.83 ],
                                   ['50Y'	,2.772]]
                       },

                                          ]

                },

                // earningCurve:
                // bidScatter:
                // askScatter:
            }
        },
        mounted(){
            console.log('in the mounted ')
            this.bondEcharts = echarts.init(document.getElementById('chartScatter'));
            this.bondEcharts.setOption(this.bondEarningCurveOption);
            console.log( this.bondEcharts)
        }
    }
</script>

<style lang="scss" scoped>
    .page {
        .vue-grid-layout {
            //background-color: $color-bg;
            //
            background-color: #222222;
            border-radius: 4px;
            margin: -18px;
            .page_card {
                height: 100%;
                @extend %unable-select;
            }
            .vue-resizable-handle {
                opacity: .3;
                &:hover{
                    opacity: 1;
                }
            }
        }
    }
    //frtb

    .controls-a-line{
        margin:10px 5px 5px 50px;
    }
    .oneControls {
        width: 190px;
    }
    .oneControlsSmall {
        width: 90px;
    }
    .left-col2{
        height:40px;
        background:#454754;;
        margin:5px 0px 5px 0px;
        padding-left:20px;
        line-height: 40px;
        vertical-align: center;
    }
    .my-block{
        margin:0px 2px 0px 2px;
        //margin:auto;
        padding:0px 2px 0px 2px;
    }
    .left-col1{
        height:40px;
        background:#312E30;
        margin:5px 0px 5px 0px;
        padding-left:20px;
        line-height: 40px;
        vertical-align: center;
    }
    .right-col{
        height:40px;
        background:transparent;
        margin:auto;
        line-height: 40px;
        vertical-align: center;

    }
    .middle-col{
        height:40px;
        margin:auto;
        background:transparent;
    }
    .middle-col2{
        height:40px;
        margin:auto;
        background:#454754;;
    }
    .twoControls {
        width:108px;
    }

    .oneContorls {
        width:190px;
    }
    .oneContorls1 {
        width:150px;
    }
    .form-num{
        width: 220px;
    }
    .curvebutton{
        width:190px;
    }
    .curve-title{
        font-size:16px;
        text-align: center;
    }

</style>

<style lang="scss" >
    .d2-crud  .el-input__inner{
        width:180px
    }
    .d2-crud .el-table--enable-row-hover .el-table__body tr:hover>td{
        background-color: #222222;
    }
</style>