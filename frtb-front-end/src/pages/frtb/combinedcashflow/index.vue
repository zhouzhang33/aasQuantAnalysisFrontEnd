<template>
  <d2-container :filename="filename" type="full" class="page" better-scroll>
    <d2-grid-layout
            v-bind="layout"
            @layout-updated="layoutUpdatedHandler">
      <div>
        <el-row>
          <el-col :span="6">
            <div class='box-card' style="height:790px">
              <div class="box-card-title">
                查询条件
              </div>
              <el-row>
                <el-col :span="8">
                  <div class="left-col1">投组</div>
                  <div class="left-col2">货币</div>
                  <div class="left-col1">起始日</div>
                  <div class="left-col2">结束日</div>
                  <div class="left-col1">管理周期</div>
                  <div class="left-col2">交易品种</div>
                  <div class="left-col1">展示方式</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1">
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneControls"
                            placeholder="请选择">
                      <el-option
                              v-for="item in intepolationTypeOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col2">
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneControls"
                            placeholder="请选择">
                      <el-option
                              v-for="item in intepolationTypeOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col1">
                    <el-date-picker
                            class="oneControls"
                            placeholder="选择日期"
                            type="date">
                    </el-date-picker>
                  </div>
                  <div class="left-col2">
                    <el-date-picker
                            class="oneControls"
                            placeholder="选择日期"
                            type="date"
                    >
                    </el-date-picker>
                  </div>
                  <div class="left-col1">
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            placeholder="请选择">
                      <el-option
                              v-for="item in intepolationTypeOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col2">
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            placeholder="请选择">
                      <el-option
                              v-for="item in intepolationTypeOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col1">
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            placeholder="请选择">
                      <el-option
                              v-for="item in intepolationTypeOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <div class="left-col1" style="color:transparent">a</div>
                  <div class="left-col2" style="color:transparent">a</div>
                  <div class="left-col1" style="color:transparent">a</div>

                </el-col>
                <el-col :span="16">
                  <div class="left-col1">
                    <el-button class="oneContorls"></el-button>
                  </div>
                  <div class="left-col2">
                    <el-button class="oneContorls"></el-button>
                  </div>
                  <div class="left-col1">
                    <el-button class="oneContorls"></el-button>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="box-card" style="height:790px">
              <d2-crud
                      style="height:780px;overflow: auto"
                      ref="d2Crud"
                      :columns="combinedcashflowCols"
                      :data="ccfData"
                      :options="options"/>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <div class="box-card" style="height:400px">
              <el-button @click="changeEchart">click me</el-button>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="box-card" style="height:400px">
              <div class="box-card-title">
                现金流合计图
              </div>
              <div class="my-block">
                <div v-show='showDetailCurve===true' id="detailCCF" style="height:350px;width:1351px"></div>
                <div v-show='showDetailCurve===false' id="totalCCF" style="height:350px;width:1351px"></div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
<!--      <div>-->
<!--        <el-dialog-->
<!--                title="现金流合计图"-->
<!--                :visible.sync="showDetailCurve"-->
<!--                :append-to-body="true"-->
<!--                width="70%">-->
<!--          <div class='box-card' style="height:100%">-->
<!--            <div class="box-card-title">现金流合计图</div>-->
<!--&lt;!&ndash;            <div  id="totalCCF" style="height:350px;width:100%"></div>&ndash;&gt;-->
<!--          </div>-->
<!--        </el-dialog>-->
<!--      </div>-->
      <!--      </d2-grid-item>-->
    </d2-grid-layout>
  </d2-container>
</template>

<script>

  import {
    getFXFWDPricingResult,
    getInterestCurve,
    SavePricing
  } from '@api/index'
  import {
    currencyPairOptions,
    yingYeRiGuiZeOptions,
    jiXiTianShuFangshiOptions,
    currency1EarningCurveOptions,
    currency2EarningCurveOptions,
    intepolationTypeOptions,
    curveNameOptions,
    tradingTypeOptions,
    tradingDirectionOptions,
  } from '../UIPara/UIPara'
  import {
    swapFormResult,
    swapForm,
  }from '../UIPara/FRTBParam'
  import echarts from 'echarts'
  export default {
    components: {
    },
    data () {
      return {
        filename: __filename,
        layout: {
          layout: [
            { 'x': 0, 'y': 0, 'w':  3, 'h': 13,'i': '0' },
            { 'x': 0, 'y': 13, 'w': 3, 'h': 15.5, 'i': '1' },
            { 'x': 3, 'y': 0, 'w': 6,  'h': 13, 'i': '2' },
            { 'x': 9, 'y': 0, 'w': 3,  'h': 13, 'i': '3' },
            { 'x': 3, 'y': 13, 'w': 9, 'h': 15.5, 'i': '4' },
          ],
          colNum: 12,
          rowHeight: 40,
          isDraggable: false,
          isResizable: false,
          isMirrored: false,
          verticalCompact: true,
          margin: [2, 3],
          useCssTransforms: true
        },
        combinedcashflowCols:[
          {
            title:'Bucket',
            key:'Bucket',
            width:'80px'
          },
          {
            title:'Date',
            key:'Date',
            width:'230px',
            component: {
              name: 'el-date-picker',

            }
          },
          {
            title:'Typology',
            key:'Typology',

          },
          {
            title:'Instrument',
            key:'Instrument',

          },
          {
            title:'Flows',
            key:'Flows',
            children:[
              {
                title:'CNY',
                key:'CNY',
                width:'200px'
              },
              {
                title:'USD',
                key:'USD',
                width:'200px'
              },
              {
                title:'',
                key:'blank',
                width:'200px'
              }
            ]
          },
        ],
        ccfData:[

            {"Bucket":"TODAY","BucketRowspan":"7","Date":"2012/9/25","Typology":"Total 2012-09-25","TypologSpan":"1","Instrument":"","CNY":"427835","USD":"-2339303","blank":""},
            {"Bucket":"TODAY","BucketRowspan":"0","Date":"2012/9/25","Typology":"Bond Future","TypologSpan":"1","Instrument":"CNY BOND FUTURE 5Y","CNY":"-3990","USD":"","blank":"0"},
            {"Bucket":"TODAY","BucketRowspan":"0","Date":"2012/9/25","Typology":"CDS","TypologSpan":"3","Instrument":"Total CDS","CNY":"441825","USD":"","blank":"0"},
            {"Bucket":"TODAY","BucketRowspan":"0","Date":"2012/9/25","Typology":"CDS","TypologSpan":"0","Instrument":"CHINA UNICOME DEFAULT","CNY":"443325","USD":"","blank":""},
            {"Bucket":"TODAY","BucketRowspan":"0","Date":"2012/9/25","Typology":"CDS","TypologSpan":"0","Instrument":"CHINA UNICOME LTD","CNY":"-1500","USD":"","blank":""},
            {"Bucket":"TODAY","BucketRowspan":"0","Date":"2012/9/25","Typology":"Collar Cap","TypologSpan":"1","Instrument":"CYN SHIBOR 3M","CNY":"-10000","USD":"","blank":"0"},
            {"Bucket":"TODAY","BucketRowspan":"0","Date":"2012/9/25","Typology":"FRA","TypologSpan":"1","Instrument":"USD 3M LIBOR","CNY":"","USD":"-2339303","blank":""},
            {"Bucket":"TOM","BucketRowspan":"1","Date":"2012/9/26","Typology":"Bond","TypologSpan":"1","Instrument":"021001001.IB","CNY":"-1000055521","USD":"","blank":""},
            {"Bucket":"SPOT","BucketRowspan":"4","Date":"2012/9/27","Typology":"Total 2012-09-27","TypologSpan":"1","Instrument":"","CNY":"159140","USD":"27476","blank":""},
            {"Bucket":"SPOT","BucketRowspan":"0","Date":"2012/9/27","Typology":"Bond Future","TypologSpan":"1","Instrument":"CNY BOND FUTURE 5Y","CNY":"159140","USD":"","blank":""},
            {"Bucket":"SPOT","BucketRowspan":"0","Date":"2012/9/27","Typology":"FRA","TypologSpan":"1","Instrument":"USD 3M LIBOR","CNY":"","USD":"-1000","blank":"0"},
            {"Bucket":"SPOT","BucketRowspan":"0","Date":"2012/9/27","Typology":"Swaption European","TypologSpan":"1","Instrument":"USD LIBOR Q 3M","CNY":"","USD":"28476","blank":""},
            {"Bucket":"30D","BucketRowspan":"3","Date":"2012/9/28","Typology":"Sec Lend/Borrow BD","TypologSpan":"3","Instrument":"Total Sec Lend/Borrow BD","CNY":"-20571","USD":"","blank":""},
            {"Bucket":"30D","BucketRowspan":"0","Date":"2012/9/28","Typology":"Sec Lend/Borrow BD","TypologSpan":"0","Instrument":"CGTB 0 171020 1320","CNY":"23061","USD":"","blank":"0"},
            {"Bucket":"30D","BucketRowspan":"0","Date":"2012/9/28","Typology":"Sec Lend/Borrow BD","TypologSpan":"0","Instrument":"CHINA 0 190115 1401","CNY":"-43733","USD":"","blank":""},
            {"Bucket":"2M","BucketRowspan":"3","Date":"2012/10/31","Typology":"Sec Lend/Borrow BD","TypologSpan":"3","Instrument":"Total Sec Lend/Borrow BD","CNY":"-341078","USD":"","blank":""},
            {"Bucket":"2M","BucketRowspan":"0","Date":"2012/10/31","Typology":"Sec Lend/Borrow BD","TypologSpan":"0","Instrument":"CGTB 0 171020 1320","CNY":"380514","USD":"","blank":""},
            {"Bucket":"2M","BucketRowspan":"0","Date":"2012/10/31","Typology":"Sec Lend/Borrow BD","TypologSpan":"0","Instrument":"CHINA 0 190115 1401","CNY":"-721592","USD":"","blank":""},
            {"Bucket":"3M","BucketRowspan":"4","Date":"2012/11/30","Typology":"Total 3M (2012-12-25)","TypologSpan":"1","Instrument":"","CNY":"-310071","USD":"-18238243","blank":""},
            {"Bucket":"3M","BucketRowspan":"0","Date":"2012/11/30","Typology":"Sec Lend/Borrow BD","TypologSpan":"3","Instrument":"Total Sec Lend/Borrow BD","CNY":"-310071","USD":"","blank":""},
            {"Bucket":"3M","BucketRowspan":"0","Date":"2012/11/30","Typology":"Sec Lend/Borrow BD","TypologSpan":"0","Instrument":"CGTB 0 171020 1320","CNY":"345922","USD":"","blank":""},
            {"Bucket":"3M","BucketRowspan":"0","Date":"2012/11/30","Typology":"Sec Lend/Borrow BD","TypologSpan":"0","Instrument":"CHINA 0 190115 1401","CNY":"-655993","USD":"","blank":""},
            {"Bucket":"3M","BucketRowspan":"1","Date":"2012/12/5","Typology":"FRA","TypologSpan":"1","Instrument":"USD 3M LIBOR","CNY":"","USD":"-18238243","blank":""},
        ],
        options: {
          border: true,
          spanMethod ({ row, column, rowIndex, columnIndex }) {
            var colspannum=1
            var rowspannum=1
            if (columnIndex <2) {
              rowspannum=parseInt(row.BucketRowspan)
              if(rowspannum ===0 ){
                colspannum=0
              }
              return{
                rowspan:rowspannum,
                colspan:colspannum
              }
            } //endif
            else  if (columnIndex === 2){
              rowspannum=parseInt(row.TypologSpan)
              if(rowspannum ===0 ){
                colspannum=0
              }
              return{
                rowspan:rowspannum,
                colspan:colspannum
              }
            }
          },//end span
          rowStyle(row) {
            if (row.rowIndex % 2 === 0) {
              return "height:30px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px";
            } else {
              return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
            }
          },
          headerCellStyle(row) {
            return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
          },
        },//end option
        myechats:null,
        echartOptions:{
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
            },
            // toolbox: {
            //   feature: {
            //     dataView: {show: true, readOnly: false},
            //     magicType: {show: true, type: ['line', 'bar']},
            //     restore: {show: true},
            //     saveAsImage: {show: true}
            //   }
            // },
            legend: {
              //data:['蒸发量','降水量','平均温度'],
              textStyle:{
                color:'white',

              }
            },
            xAxis: [
              {
                show:false,
                type: 'category',
                //data: ['1','2','3','4','5','6','7','8','9','10'],
                axisPointer: {
                  type: 'shadow'
                },
                axisLine:{
                  lineStyle:{
                    color:'white',  //坐标轴的颜色
                    width:1,
                  },
                },
                textStyle:{
                  color:"white",
                  fontSize:16
                },
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '现金流',
                // min: 0,
                // max: 250,
                // interval: 50,
                axisLabel: {
                  formatter: '{value}'
                },
                axisLine:{
                  lineStyle:{
                    color:'white',  //坐标轴的颜色
                    width:1,
                  },
                },
                textStyle:{
                  color:"white",
                  fontSize:16
                },
              },

            ],
            series: [
              {
                name:'现金交易/债券承分销',
                type:'bar',
                stack: 'one',
                data:[
                      ['1',-12],
                      ['2',0],
                      ['3',0],
                      ['4',0],
                      ['5',0],
                ]
              },
              {
                name:'IRS交易/IRS解约交易',
                type:'bar',
                stack: 'one',
                data:[['1',0],
                      ['2',-15],
                      ['3',0],
                      ['4',0],
                      ['5',0],
                      ]
              },
              {
                name:'票据交易/票据包',
                type:'bar',
                data:[['1',0],
                      ['2',0],
                      ['3',-2],
                      ['4',0],
                      ['5',0]]
              },
              {
                name:'掉期',
                type:'bar',
                stack: 'one',
                data:[['1',0],
                      ['2',0],
                      ['3',0],
                      ['4',0],
                      ['5',15]]
              },
              {
                name:'远期期',
                type:'bar',
                stack: 'one',
                data:[['1',0],
                      ['2',0],
                      ['3',0],
                      ['4',0],
                      ['5',-15]]
              },
              {
                name:'；票据交易/票据包',
                type:'line',
                stack: 'one',
                data:[['1',-25],
                      ['2',-5],
                      ['3',0],
                      ['4',25],
                      ['5',-25]]
              }
            ]

        },
        myechartsTotal:null,
        myechartsTotalOptions:{
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data:['流入','流出','敞口'],
              textStyle:{
                color:'white',
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data : ['Oct 10','Oct 11','Oct 12','Oct 13','Oct 14','Oct 15','Oct 16',
                        'Oct 17','Oct 18','Oct 19','Oct 20','Oct 21' ],
                axisLine:{
                  lineStyle:{
                    color:'white',  //坐标轴的颜色
                    width:1,
                  },
                },
                textStyle:{
                  color:"white",
                  fontSize:16
                },
              }
            ],
            yAxis : [
              {
                type : 'value',
                axisLine:{
                  lineStyle:{
                    color:'white',  //坐标轴的颜色
                    width:1,
                  },
                },
                textStyle:{
                  color:"white",
                  fontSize:16
                },
              },
            ],
            series : [
              {
                name:'流入',
                type:'bar',
                stack:'one',
                data:[5,10,15,20,22,75,140,160,40,20,10,5]
              },
              {
                name:'流出',
                type:'bar',
                stack: 'one',
                data:[-5,-10,-15,-20,-22,-75,-140,-160,-40,-20,-10,-5]
              },
              {
                name:'敞口',
                type:'line',
                stack: 'one',
                data:[0,0,0,-5,-7,-7,0,-20,-20,-20,-10,5]
              },
            ]

    },
        showDetailCurve:false,
      }
    },
    mounted () {

      this.myechats = echarts.init(document.getElementById('detailCCF'));
      this.myechats.setOption(this.echartOptions);

      this.myechartsTotal=echarts.init(document.getElementById('totalCCF'));
      this.myechartsTotal.setOption(this.myechartsTotalOptions)
    },
    methods: {

      changeEchart(){
        if(this.showDetailCurve) {
          this.showDetailCurve = false
        }else {
          this.showDetailCurve = true
        }
      },
      // ****************************
// style code
      resizeHandler(i, newH, newW) {
        this.log("resizeHandler", `i: ${i}, newH: ${newH}, newW: ${newW}`);
      },
      moveHandler(i, newX, newY) {
        this.log("moveHandler", `i: ${i}, newX: ${newX}, newY: ${newY}`);
      },
      resizedHandler(i, newH, newW, newHPx, newWPx) {
        this.log(
                "resizedHandler",
                `i: ${i}, newH: ${newH}, newW: ${newW}, newHPx: ${newHPx}, newWPx: ${newWPx}`
        );
      },
      movedHandler(i, newX, newY) {
        this.log("movedHandler", `i: ${i}, newX: ${newX}, newY: ${newY}`);
      },
      // 测试代码
      layoutUpdatedHandler(newLayout) {
        //console.group("layoutUpdatedHandler");
        newLayout.forEach(e => {
          console.log(
                  `{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`
          );
        });
        console.groupEnd();
      },
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
