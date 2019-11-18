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
                       name: '收益（万元）',
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
                           data: [
                               [0, 2.7009],
                               [0.08, 3.1585],
                               [0.17, 3.3867],
                               [0.25, 3.5072],
                               [0.5, 3.5607],
                               [0.75, 3.6233],
                               [1, 3.6579],
                               [2, 3.7577],
                               [3, 3.8959],
                               [5, 4.0656]]
                       },
                       {
                           name:'Yield Bid',
                           type:'scatter',
                           data:[
                               [1	    ,3.294543975],
                               [1	    ,3.401169361],
                               [1	    ,3.500948402],
                               [1.75	,3.68137412 ],
                               [1.8	,3.703732019 ],
                               [2	    ,3.689820446     ],
                               [2	    ,3.663347335     ],
                               [2	    ,3.619271391     ],
                               [2	    ,3.618371006     ],
                               [2	    ,3.5923          ],
                               [2	    ,3.790553648     ],
                               [2.5	,3.807551804 ],
                               [2.8	,3.809508961 ],
                               [3	    ,3.812790905     ],
                               [3	    ,3.853782683     ],
                               [3	    ,3.882423677     ],
                           ],
                       },
                       {
                           name:'Yield Ask',
                           type:'scatter',
                           data:[
                               [1	    ,3.756578717],
                               [1	    ,3.517628777],
                               [1	    ,3.890969578],
                               [1.75	,3.8823432],
                               [1.8	    ,3.9103284],
                               [2	    ,3.758596485],
                               [2	    ,3.803492229],
                               [2	    ,3.893573578],
                               [2	    ,3.928593787],
                               [2	    ,3.830475775],
                               [2	    ,3.88500415],
                               [2.5	    ,3.902374],
                               [2.8	    ,3.892324],
                               [3	    ,3.8824],
                               [3	    ,3.894],
                               [3	    ,3.8981],
                               [3	    ,3.9082],
                               [3	    ,3.9092],
                           ],
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