<template>
  <d2-container :filename="filename" type="full" class="page" better-scroll>
    <d2-grid-layout
      v-bind="layout"
      @layout-updated="layoutUpdatedHandler">

      <d2-grid-item
        v-bind="layout.layout[0]"
        @resize="resizeHandler"
        @move="moveHandler"
        @resized="resizedHandler"
        @moved="movedHandler">


      <div class='box-card' style="height: 395px">
        <div class="my-first-row-title">
          日期设定
        </div>

        <div class="box-card-content" style='margin-top:25px'>
            <Calendar
              style="font-size: 12px !important">
            </Calendar>
        </div>
      </div>



      </d2-grid-item>

      <d2-grid-item
        v-bind="layout.layout[1]"
        @resize="resizeHandler"
        @move="moveHandler"
        @resized="resizedHandler"
        @moved="movedHandler">

        <div class='box-card'>
          <div class="my-first-row-title">
            计算配置
          </div>
            <div class="box-card-content">
              <el-row>
                <el-col :span='12'>
                  <div style="padding: 10px 0px;margin-left:40px">
                    <el-button size="medium" type="primary" @click="getFxFWD">单笔计算</el-button>
                  </div>
                </el-col>
                <el-col :span='12'>
                  <div style="padding: 10px 0px;margin-left:40px">
                    <el-tag size="medium" color="grey" style="color: white; padding: 0px 15px;">计算耗时： {{computingTime}}</el-tag>
                  </div>
                </el-col>
              </el-row>
          </div>

        </div>
        <div class='box-card'>
           <el-form :inline="true" size="mini" style="margin-left:40px;margin-top:20px;color: white">
              <el-form-item label="并行进程数">
                <el-input-number
                  v-model="processes"
                  :precision="0"
                  :step="1"
                  :max="10"
                  @change="handleChange_proc"
                ></el-input-number>
              </el-form-item>
            </el-form>
            <el-form :inline="true" size="mini" style="margin-left:40px;color: white">
              <el-form-item label="计算场景数">
                <el-input-number
                  v-model="num_scenes"
                  :precision="0"
                  :step="100"
                  :max="10000"
                  @change="handleChange_scene"
                ></el-input-number>
              </el-form-item>
            </el-form>

            <el-form :inline="true" size="mini" style="margin-left:40px">
              <el-form-item>
                <el-button ref="BatchComp" size="medium" type="primary" @click="getPricing" :disabled="workingflag">{{batchCompBtnText}}</el-button>
              </el-form-item>
              <el-form-item style="margin-left:110px">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  :with-credentials="true"
                  :limit="5"
                  :action="uploadUrl()"
                  :auto-upload="false">
                  <el-button size="medium" type="primary">报表上报</el-button>
                </el-upload>
              </el-form-item>
            </el-form>

        </div>
        </d2-grid-item>

      <d2-grid-item
        v-bind="layout.layout[2]"
        @resize="resizeHandler"
        @move="moveHandler"
        @resized="resizedHandler"
        @moved="movedHandler">

       <div class='box-card'>
          <div class="my-first-row-title">
          输入数据
        </div>
        <el-row>
        <el-col :span=12>
          <div class="box-card-content">
            交易数据
              <d2-crud
                      ref="tradeDataTable"
                      :columns="tradeDataColumns"
                      :data="tradeData"
                      :cell-style="cellstyle"
                      :row-style="cellstyle"
                      @cell-data-change="tradeDataChange"
                      :options = "InputDataTableOpt"
              />
          </div>
        </el-col>

        <el-col :span=12>
          <div class="box-card-content">
            市场数据 Yield Curve
          <div style="margin: 5px 0px 0 10px;">
            <el-select style="width:120px;margin-left:20px" size="mini" v-model="marketdata.datasSource" placeholder="数据源" @change="">
              <el-option label="Bloomberg" value="Bloomberg"></el-option>
              <el-option label="Routers" value="Routers"></el-option>
              <el-option label="Wind" value="Wind"></el-option>
              <el-option label="申万宏源" value="申万宏源"></el-option>
              <el-option label="Joinquant" value="Joinquant"></el-option>
            </el-select>
            <el-select style="width:120px;margin-left:80px" size="mini" v-model="marketdata.method" placeholder="方式" @change="dataSrouceChange($event)">
              <el-option label="Discount Factor" value="Discount Factor"></el-option>
              <el-option label="Zero Rate" value="Zero Rate"></el-option>
              <el-option label="Spawtion Volatility" value="Spawtion Volatility"></el-option>
              <el-option label="OIS" value="OIS"></el-option>
              <el-option label="LIBOR" value="LIBOR"></el-option>
              <el-option label="L3M" value="L3M"></el-option>
              <el-option label="FF" value="FF"></el-option>
              <el-option label="FXSPOT" value="FXSPOT"></el-option>
            </el-select>

            <!-- </el-dropdown> -->
            <div style = "margin:20px 0px 5px -10px">
              <ve-line
                :data="YCData"
                :settings="chartSettings"
                :extend="extend2"
                v-bind="pubSetting"
                width = "400px"
                height = "260px"
              ></ve-line>
            </div>
          </div>
        </div>
        </el-col>
       </el-row>
      </div>
      </d2-grid-item>

      <!-- *********************************** 资源监控 ****************** -->
      <d2-grid-item
        v-bind="layout.layout[3]"
        @resize="resizeHandler"
        @move="moveHandler"
        @resized="resizedHandler"
        @moved="movedHandler">

        <div class='box-card' style="height: 395px;">
          <div class="my-first-row-title">
            CPU计算资源
          </div>
          <div class="box-card-content">
            <clusterfigures />
          </div>
        </div>
      </d2-grid-item>


      <!-- *********************************** 输出 ****************** -->

      <d2-grid-item
        v-bind="layout.layout[4]"
        @resize="resizeHandler"
        @move="moveHandler"
        @resized="resizedHandler"
        @moved="movedHandler">

        <div class='box-card'>
          <div class="my-first-row-title">
            计算结果
          </div>
           <el-row>
            <el-col :span=8>
             <div class="box-card-content">
                FXFWD
                <!-- <el-table
                  :data="resultData1"
                  style="width: 100%; margin-top: 5px;"
                  :cell-style="cellstyle"
                  :row-style="cellstyle"
                  :loading="workingflag"
                  height="370">
                  <el-table-column
                    prop="key"
                    label="KEY"
                    width="">
                  </el-table-column>
                  <el-table-column
                    prop="value"
                    label="VALUE"
                    width="">
                  </el-table-column>
                </el-table> -->
                <d2-crud
                ref="resultDataTable1"
                :columns="resultDataColumns"
                :data="resultData1"
                :cell-style="cellstyle"
                :row-style="cellstyle"
                :loading = "workingflag"
                :options = "resultDataTableOpt"
                />
             </div>
            </el-col>



            <el-col :span=8>
            <div class="box-card-content">
                  CXFWD
                  <d2-crud
                  ref="resultDataTable2"
                  :columns="resultDataColumns"
                  :data="resultData1"
                  :cell-style="cellstyle"
                  :row-style="cellstyle"
                  :loading = "workingflag"
                  :options = "resultDataTableOpt"
                  />
            </div>
            </el-col>

            <el-col :span=8>
              <div class="box-card-content">
                新增指标
                <d2-crud
                ref="resultDataTable3"
                :columns="resultDataColumns"
                :data="resultData3"
                :cell-style="cellstyle"
                :row-style="cellstyle"
                :loading = "workingflag"
                :options = "resultDataTableOpt"
                />
            </div>
            </el-col>

          </el-row>
        </div>
      </d2-grid-item>

<!-- *********************************** 任务配置 ****************** -->
      <!-- <d2-grid-item
        v-bind="layout.layout[2]"
        @resize="resizeHandler"
        @move="moveHandler"
        @resized="resizedHandler"
        @moved="movedHandler">
        <el-card shadow="never" class="page_card">
          <el-tag size="small" type="default" slot="header" >批量计算</el-tag>

          <el-form :inline="true" size="mini">
            <el-form-item label="并行进程数">
              <el-input-number
                v-model="processes"
                :precision="0"
                :step="1"
                :max="10"
                @change="handleChange_proc"
              ></el-input-number>
            </el-form-item>
          </el-form>
          <el-form :inline="true" size="mini">
            <el-form-item label="计算场景数">
              <el-input-number
                v-model="num_scenes"
                :precision="0"
                :step="100"
                :max="10000"
                @change="handleChange_scene"
              ></el-input-number>
            </el-form-item>
          </el-form>
          <el-form :inline="true" size="mini">
            <el-form-item>
              <el-button ref="BatchComp" size="mini" type="primary" @click="getPricing" :disabled="workingflag">{{batchCompBtnText}}</el-button>
            </el-form-item>
            <el-form-item>
              <el-upload
                class="upload-demo"
                ref="upload"
                :with-credentials="true"
                :limit="5"
                :action="uploadUrl()"
                :auto-upload="false">
                <el-button size="mini" type="primary">报表上报</el-button>
              </el-upload>
            </el-form-item>

          </el-form>

        </el-card>
      </d2-grid-item> -->

    </d2-grid-layout>
  </d2-container>
</template>

<script>
//import clusterfigures from './components/clusterfigures';
import clusterfigures from './components/clusterfigures_one';

import {
  pricing,
  cpus,
  calcFxFWD,
} from "@api/index";
import Calendar from 'vue-calendar-component';

export default {
  components: {
    clusterfigures,
    Calendar
  },
  data () {
    this.chartSettings = {
      // stack: { 用户: ["访问用户", "下单用户"] },
      // xAxisType: ['date'],
      yAxisType: ['normal'],
      // min: [0, 0],
      // max: [1.2, 1.2],
      // area: false,
    };
    this.extend2 = {
      series: {
        showSymbol: true,
        // color: ['grey'],
      },
      legend:{
        textStyle:{color:'#FFFFFF'}
      },
      xAxis: {
          nameTextStyle: {
              color: '#FFFFFF',
          },
          axisLine:{
            lineStyle:{
               color: '#FFFFFF',
              }

          },
      },
      yAxis: {
          nameTextStyle: {
              color: '#FFFFFF',
            },
          axisLine:{
            lineStyle:{
               color: '#FFFFFF',
              }

          },
      }


    };

    return {
      filename: __filename,
      // layout: {
      //   layout: [
      //     { 'x': 0, 'y': 0, 'w': 7, 'h': 12.5, 'i': '0' },
      //     { 'x': 0, 'y': 13, 'w': 7, 'h': 13.5, 'i': '1' },
      //     { 'x': 7, 'y': 0, 'w': 5, 'h': 10, 'i': '2' },
      //     { 'x': 7, 'y': 6, 'w': 5, 'h': 16, 'i': '3' },
      //     { 'x': 7, 'y': 6, 'w': 5, 'h': 16, 'i': '3' },
      //   ],
      layout: {
        layout: [
          { 'x': 0, 'y': 0, 'w':  3, 'h': 13,'i': '0' },
          { 'x': 0, 'y': 13, 'w': 3, 'h': 15.5, 'i': '1' },
          { 'x': 3, 'y': 0, 'w': 6,  'h': 13, 'i': '2' },
          { 'x': 9, 'y': 0, 'w': 3,  'h': 13, 'i': '3' },
          { 'x': 3, 'y': 13, 'w': 9, 'h': 15.5, 'i': '4' },
        ],
        colNum: 12,
        rowHeight: 30,
        isDraggable: false,
        isResizable: false,
        isMirrored: false,
        verticalCompact: true,
        margin: [2, 3],
        useCssTransforms: true
      },

      processes: 1,
      num_scenes: 100,
      workingflag: false,
      resultDataLoading: false,
      resultDataTableOpt: {height: '370'},
      InputDataTableOpt: {height: '290'},
      computingTime: 0,
      batchCompBtnText: "批量计算",

      marketdata: {
        dataSource: "Bloomberg",
        method: "Discount Factor"
      },
      // ************************* 交易数据 *******************
      tradeDataColumns: [
        {
          title: '参数',
          key: 'key',
        },
        {
          title: '数据',
          key: 'value',
          component: {
            name: 'el-input',
            size: 'small'
          }
        }
      ],
      tradeData: [{
        key: 'ID',
        value: 'FXFWD01',
      }, {
        key: 'TYPE',
        value: 'FX FWD',
      }, {
        key: 'SKIP',
        value: 'False',
      }, {
        key: 'CURRENCY',
        value: 'USD',
      }, {
        key: 'FOREIGN_1_CURRENCY',
        value: 'CNY',
      }, {
        key: 'PAY_DATE',
        value: '2019/4/15',
      }, {
        key: 'FX_FWD',
        value: 6.9207,
      }],
      // ******************************* 计算结果数据
      resultDataColumns: [
        {
          title: '参数',
          key: 'key',
        },
        {
          title: '数据',
          key: 'value',
        }
      ],
      resultData1: [],
      resultData2: [],
      resultData3: [{key:'指标一',value:1.0},{key:'指标二',value:2.0}    ],
      // [{
      //   key: 'PRICE',
      //   value: 'N/A',
      // }, {
      //   key: 'PV',
      //   value: 'N/A',
      // }, {
      //   key: 'FX FWD',
      //   value: 'N/A',
      // }, {
      //   key: 'INVERSE PRICE',
      //   value: 'N/A',
      // }, {
      //   key: 'FORWARD DELTA',
      //   value: 'N/A',
      // }, {
      //   key: 'FUTURES DELTA',
      //   value: 'N/A',
      // }, {
      //   key: 'DELTA',
      //   value: 'N/A',
      // }, {
      //   key: 'RHO',
      //   value: 'N/A',
      // }, {
      //   key: 'PHI',
      //   value: 'N/A',
      // }, {
      //   key: 'PAY DATE',
      //   value: 'N/A',
      // }, {
      //   key: 'Cash Flow Table',
      //   value: 'N/A',
      // }, {
      //   key: 'UPDATED',
      //   value: 'N/A',
      // }, {
      //   key: 'ID',
      //   value: 'N/A',
      // }, {
      //   key: 'LOCAL ID',
      //   value: 'N/A',
      // }, {
      //   key: 'TIMER',
      //   value: 'N/A',
      // }, {
      //   key: 'TIMER CPU ',
      //   value: 'N/A',
      // }],

      // ******************************* 市场数据
      YCData: {
        columns: ["date", "USD_SwapCurve", "CNY_ImpliedCurve"],
        rows: [
          {"date": "2018/12/31", "USD_SwapCurve": 1, "CNY_ImpliedCurve": 1},
          {"date": "2019/1/10", "USD_SwapCurve": 0.9993, "CNY_ImpliedCurve": 0.9990},
          {"date": "2019/2/4", "USD_SwapCurve": 0.9974, "CNY_ImpliedCurve": 0.9949},
          {"date": "2019/3/4", "USD_SwapCurve": 0.9952, "CNY_ImpliedCurve": 0.9932},
          {"date": "2019/4/3", "USD_SwapCurve": 0.9929, "CNY_ImpliedCurve": 0.9928},

          {"date": "2024/1/3", "USD_SwapCurve": 0.8798, "CNY_ImpliedCurve": 0.8632},

          {"date": "2028/1/4", "USD_SwapCurve": 0.7862, "CNY_ImpliedCurve": 0.7493},
          {"date": "2029/1/3", "USD_SwapCurve": 0.7629, "CNY_ImpliedCurve": 0.7221},
          {"date": "2039/1/4", "USD_SwapCurve": 0.5663},

          {"date": "2069/1/3", "USD_SwapCurve": 0.2586},
        ]
      },

      pubSetting: {
        // color: ['blue'],
        grid: {
          // left: 'left',
          // top: 'top',
          left: '8%',
          right: '5%',
          top: '15%',
          bottom: '5%',
          containLabel: true
        },
        yAxis: {
          min: 0,
          max: 1.2,
          name: 'Discount Factor',
          nameLocation: 'center',
          nameGap: '30'
        }
      },

    }
  },
  mounted () {
	this.marketdata.datasSource='Bloomberg';
	this.marketdata.method='Discount Factor';


  },
  methods: {
    // **************************** 单笔计算
    getFxFWD(){
      this.workingflag = true
      console.log(this.tradeData)
      var td={}
      for(var i=0; i<this.tradeData.length; i++){
        td[this.tradeData[i].key]=this.tradeData[i].value
      }
      var data = {
        "TradeData": td,
        "paydate": "2019/4/15",
        "nowdate": "2018/12/31"
      }
      calcFxFWD(data, '1').then(res => {
        // console.log(res);
        var keys = Object.keys(res['FX']);
        for(var i=0; i<keys.length; i++){
          // console.log({"key": keys[i], "value": res[keys[i]]})
          // this.resultData1[i] = {"key": keys[i], "value": res['FX'][keys[i]]}
          this.$refs.resultDataTable1.updateRow(i, {"key": keys[i], "value": res['FX'][keys[i]]})
        }
        keys = Object.keys(res['CX']);
        for(var i=0; i<keys.length; i++){
          // this.resultData2[i] = {"key": keys[i], "value": res['CX'][keys[i]]}
          this.$refs.resultDataTable2.updateRow(i, {"key": keys[i], "value": res['CX'][keys[i]]})
        }
        this.computingTime = res['Computation Time']
        this.workingflag = false
      })
    },
    // **************************** 批量计算
    getPricing(){
      this.workingflag = true
      this.batchCompBtnText = "计算中，请稍后……"
      // this.$refs.BatchComp.disabled = !this.$refs.BatchComp.disabled
      for(var i=0; i<1; i++){
        pricing(this.num_scenes).then(res => {
          console.log(res);
          this.workingflag = false
          this.batchCompBtnText = "批量计算"
        })
      }
    },
    handleChange_proc(value) {
      this.processes = value
    },
    handleChange_scene(value) {
      this.num_scenes = value
    },
    tradeDataChange ({ rowIndex, key, value, row }) {
      // console.log(rowIndex)
      // console.log(key)
      // console.log(value)
      // console.log(row)
      this.tradeData[rowIndex] = row
    },
    dataSrouceChange(event, item){
      // console.log(event)
      this.YCData.rows = [
        {"date": "2018/12/31", "USD_SwapCurve": 1, "CNY_ImpliedCurve": 1},
        {"date": "2019/1/10", "USD_SwapCurve": 0.9993, "CNY_ImpliedCurve": 0.9990},
        {"date": "2019/2/4", "USD_SwapCurve": 0.9974, "CNY_ImpliedCurve": 0.9949},
        {"date": "2019/3/4", "USD_SwapCurve": 0.9952, "CNY_ImpliedCurve": 0.9932},
        {"date": "2019/4/3", "USD_SwapCurve": 0.9929, "CNY_ImpliedCurve": 0.9928},
        {"date": "2024/1/3", "USD_SwapCurve": 0.8798, "CNY_ImpliedCurve": 0.8632},
        {"date": "2028/1/4", "USD_SwapCurve": 0.7862, "CNY_ImpliedCurve": 0.7493},
        {"date": "2029/1/3", "USD_SwapCurve": 0.7629, "CNY_ImpliedCurve": 0.7221},
        {"date": "2039/1/4", "USD_SwapCurve": 0.5663},

        {"date": "2069/1/3", "USD_SwapCurve": 0.2586},
      ]
    },
    uploadUrl:function(){
      return "http://127.0.0.1:8080/uploadFile";
    },


    log (arg1 = 'log', ...logs) {
      if (logs.length === 0) {
        console.log(arg1)
      } else {
        console.group(arg1)
        logs.forEach(e => {
          console.log(e)
        })
        console.groupEnd()
      }
    },
    // 显示提示
    showInfo () {
      this.$notify({
        title: '提示',
        message: '你可以按住卡片拖拽改变位置；或者在每个卡片的右下角拖动，调整卡片大小'
      })
    },
    // 测试代码
    layoutUpdatedHandler (newLayout) {
      console.group('layoutUpdatedHandler')
      newLayout.forEach(e => {
        console.log(`{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`)
      })
      console.groupEnd()
    },
    resizeHandler (i, newH, newW) {
      this.log('resizeHandler', `i: ${i}, newH: ${newH}, newW: ${newW}`)
    },
    moveHandler (i, newX, newY) {
      this.log('moveHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
    },
    resizedHandler (i, newH, newW, newHPx, newWPx) {
      this.log('resizedHandler', `i: ${i}, newH: ${newH}, newW: ${newW}, newHPx: ${newHPx}, newWPx: ${newWPx}`)
    },
    movedHandler (i, newX, newY) {
      this.log('movedHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
    },

    // ************************** 表格样式
    // cellstyle: function(row, rowindex) {
    //   return "font-size:12px;height:80px;";
    // },
    cellstyle(row) {
      return "font-size:12px;";
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
// .box-card {
//   margin: 0px;
//   background: #fbde00;
//   //background:#2c2c41;
//   //color:white;
//   font: 12px Arial;
//   height:100%
// }

.my-first-row-title {
    font-size: 20px;
    color: #FFDE00;
    text-align: center;
    font-weight: bold;
}

</style>

<style lang="scss" >
// .el-card__header {
//   padding: 5px 5px ;
//   background-color: #fbde00;
// }
// .el-card__body {
//   padding: 5px;
// }
</style>
