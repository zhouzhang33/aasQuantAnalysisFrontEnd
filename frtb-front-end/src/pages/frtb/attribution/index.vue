<template xmlns:el-col="http://www.w3.org/1999/html">
  <d2-container :filename="filename" type="full" class="page" better-scroll>
    <d2-grid-layout
            v-bind="layout"
            @layout-updated="layoutUpdatedHandler">
      <div>
          <el-col :span="6">
            <el-row>
              <div class='box-card' style="height:790px">
                <div class="box-card-title">
                  查询条件
                </div>
                <el-row>
                  <el-col :span="8">
                      <div class="left-col1-attr">投组</div>
                      <div class="left-col2-attr">货币</div>
                      <div class="left-col1-attr">起始日</div>
                      <div class="left-col2-attr">结束日</div>
                      <div class="left-col1-attr">交易品种</div>
                      <div class="left-col2-attr">展示方式</div>
                    </el-col>
                  <el-col :span="16">
                      <div class="left-col1-attr">
                        <el-select
                                filterable
                                allow-create
                                default-first-option
                                class="oneContorls-attr"
                                placeholder="请选择">
                          <el-option
                                  v-for="item in intepolationTypeOptions"
                                  :key="item.key"
                                  :label="item.label"
                                  :value="item.value"
                          ></el-option>
                        </el-select>
                      </div>
                      <div class="left-col2-attr">
                        <el-select
                                filterable
                                allow-create
                                default-first-option
                                class="oneControls-attr"
                                placeholder="请选择">
                          <el-option
                                  v-for="item in currencyOptions"
                                  :key="item.key"
                                  :label="item.label"
                                  :value="item.value"
                          ></el-option>
                        </el-select>
                      </div>
                      <div class="left-col1-attr">
                        <el-date-picker
                                class="oneControls-attr"
                                placeholder="选择日期"
                                type="date">
                        </el-date-picker>
                      </div>
                      <div class="left-col2-attr">
                        <el-date-picker
                                class="oneControls-attr"
                                placeholder="选择日期"
                                type="date"
                        >
                        </el-date-picker>
                      </div>
                      <div class="left-col1-attr">
                        <el-select
                                filterable
                                allow-create
                                default-first-option
                                class="oneContorls-attr"
                                v-model="productStatus.isUsed"
                                placeholder="请选择">
                          <el-option
                                  v-for="item in productTypes"
                                  :key="item.key"
                                  :label="item.label"
                                  :value="item.value"
                          ></el-option>
                        </el-select>
                      </div>
                      <div class="left-col2-attr">
                        <el-select
                                filterable
                                allow-create
                                default-first-option
                                class="oneContorls-attr"
                                v-model="productStatus.htDisplay"
                                placeholder="请选择">
                          <el-option
                                  v-for="item in displayOptions"
                                  :key="item.key"
                                  :label="item.label"
                                  :value="item.value"
                          ></el-option>
                        </el-select>
                      </div>
                    </el-col>
                </el-row>
              </div>
            </el-row>
            <el-row>
              <el-col span="12">
                <el-button type="info" class="box-card" @click="calPLResults">查询</el-button>
              </el-col>
              <el-col span="12">
                <el-button type="info" class="box-card" @click="clearPLResults">清空</el-button>
              </el-col>
            </el-row>
          </el-col>

          <el-col :span="18">
            <el-row>
              <div style="margin-top:10px">
                <el-col :span="24">
                  <div style="padding:30px">
                    <div class="box-card-title" v-show="productStatus.htDisplay === '损失分布数据表'">
                      <span>损益分布数据表</span>
                    </div>
                    <div class="box-card" style="height:790px" v-show="displayData === false && productStatus.htDisplay === '损失分布数据表'">
                      <el-table
                              :border="true"
                              :data="IniGeneralData"
                              :cell-style="rowstyle"
                              :header-cell-style="headerstyle"
                              @select=""
                              style="width:100%"
                      >
                        <el-table-column
                                type="selection"
                                width="80px"
                        >
                        </el-table-column>
                        <el-table-column
                                label="投组群组"
                                prop="投组群组"
                        >
                        </el-table-column>
                        <el-table-column
                                label="总损益"
                                prop="总损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="已实现损益"
                                prop="已实现损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="浮动盈亏"
                                prop="浮动盈亏"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日日损益"
                                prop="结束日日损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日月损益"
                                prop="结束日月损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日年损益"
                                prop="结束日年损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日已实现损益"
                                prop="结束日已实现损益"
                        >
                        </el-table-column>
                      </el-table>
                    </div>
                    <div class="box-card" style="height:790px" v-show="productStatus.isUsed==='' && productStatus.htDisplay === '损失分布数据表' && displayData === true">
                      <el-table
                              :border="true"
                              :data="IniGeneralData"
                              :cell-style="rowstyle"
                              :header-cell-style="headerstyle"
                              style="width:100%"
                      >
                        <el-table-column
                                type="selection"
                                width="80px"
                        >
                        </el-table-column>
                        <el-table-column
                                label="投组群组"
                                prop="投组群组"
                        >
                        </el-table-column>
                        <el-table-column
                                label="总损益"
                                prop="总损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="已实现损益"
                                prop="已实现损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="浮动盈亏"
                                prop="浮动盈亏"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日日损益"
                                prop="结束日日损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日月损益"
                                prop="结束日月损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日年损益"
                                prop="结束日年损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日已实现损益"
                                prop="结束日已实现损益"
                        >
                        </el-table-column>
                      </el-table>
                    </div>
                    <div class="box-card" style="height:790px" v-show="productStatus.isUsed==='FXFWDSwap' && productStatus.htDisplay === '损失分布数据表'&& displayData === true">
                      <el-table
                              :border="true"
                              :data="GeneralDataSwap"
                              :cell-style="rowstyle"
                              :header-cell-style="headerstyle"
                              style="width:100%"
                              @select="interestialogTableVisible=true"
                      >
                        <el-table-column
                                type="selection"
                                width="80px"
                        >
                        </el-table-column>
                        <el-table-column
                                label="投组群组"
                                prop="投组群组"
                        >
                        </el-table-column>
                        <el-table-column
                                label="总损益"
                                prop="总损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="已实现损益"
                                prop="已实现损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="浮动盈亏"
                                prop="浮动盈亏"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日日损益"
                                prop="结束日日损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日月损益"
                                prop="结束日月损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日年损益"
                                prop="结束日年损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日已实现损益"
                                prop="结束日已实现损益"
                        >
                        </el-table-column>
                      </el-table>
                    </div>
                  </div>
                </el-col>
              </div>
            </el-row>
            <el-row>
              <div v-show="productStatus.htDisplay != ''">
                <el-col span="8">
                  <el-button type="info" class="box-card-attr" @click="showDPPart">结束日损益占比分析</el-button>
                </el-col>
                <el-col span="8">
                  <el-button type="info" class="box-card-attr" @click="showContinousDP">区间连续日损益分析</el-button>
                </el-col>
                <el-col span="8">
                  <el-button type="info" class="box-card-attr" @click="showPNL">区间损益归因分析</el-button>
                </el-col>
              </div>
            </el-row>
          </el-col>
        </div>

        <div>
          <el-dialog
            title="结束日损益占比分析"
            :visible.sync="DPPartVisible"
            :append-to-body="true"
            @opened="DPPartGraphOpenSWAP"
            width="70%"
          >
            <div class='box-card' style="height:100%">
              <div class="box-card-title"> {{ dialogNameDPPart }}</div>
            </div>
            <div v-if="DPPart===true">
              <div>
                <el-table
                        :border="true"
                        :data="DPPartDataSWAP"
                        :cell-style="rowstyle"
                        :header-cell-style="headerstyle"
                >
                  <el-table-column
                          label="数据类型"
                          prop="数据类型"
                  >
                  </el-table-column>
                  <el-table-column
                          label="外汇远掉期结束日损益"
                          prop="外汇远掉期结束日损益"
                  >
                  </el-table-column>
                  <el-table-column
                          label="结束日总损益"
                          prop="结束日总损益"
                  >
                  </el-table-column>
                </el-table>
              </div>
              <div class="box-card" style="height:500px">
                <div id="DPPartChartSWAP" style="margin:auto;width:700px;height:400px"></div>
              </div>
            </div>
          </el-dialog>
        </div>

        <div>
          <el-dialog
                  title="区间连续日损益分析"
                  :visible.sync="ContinousDPVisible"
                  :append-to-body="true"
                  @opened="ConDPGraphOpenSWAP1"
                  width="70%"
          >
            <div class='box-card' style="height:100%">
              <div class="box-card-title"> {{ dialogNameConDP }}</div>
            </div>
            <div v-if="ContinousDP===true">
              <div>
                <el-table
                        :border="true"
                        :data="ConDPSWAP1"
                        :cell-style="rowstyle"
                        :header-cell-style="headerstyle"
                >
                  <el-table-column
                          label="数据类型"
                          prop="数据类型"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-04"
                          prop="2019-11-04"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-05"
                          prop="2019-11-05"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-06"
                          prop="2019-11-06"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-07"
                          prop="2019-11-07"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-08"
                          prop="2019-11-08"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-09"
                          prop="2019-11-09"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-10"
                          prop="2019-11-10"
                  >
                  </el-table-column>
                </el-table>
              </div>
              <div class="box-card" style="height:500px">
                <div id="ConDPChartSWAP1" style="margin:auto;width:700px;height:400px"></div>
              </div>
            </div>
          </el-dialog>
        </div>
        <div>
          <el-dialog
                  title="区间损益归因分析"
                  :visible.sync="PnlVisible"
                  :append-to-body="true"
                  width="70%"
          >
            <div class='box-card' style="height:100%">
              <div class="box-card-title"> {{ dialogNamePNL }}</div>
            </div>
            <div v-if="Pnl===true">
              <div>
                <el-table
                        :border="true"
                        :data="PNLSWAP1"
                        :cell-style="rowstyle"
                        :header-cell-style="headerstyle"
                >
                  <el-table-column
                          label="投组"
                          prop="投组"
                  >
                  </el-table-column>
                  <el-table-column
                          label="货币"
                          prop="货币"
                  >
                  </el-table-column>
                  <el-table-column
                          label="浮动盈亏"
                          prop="浮动盈亏"
                  >
                  </el-table-column>
                  <el-table-column
                          label="期限影响"
                          prop="期限影响"
                  >
                  </el-table-column>
                  <el-table-column
                          label="汇率影响"
                          prop="汇率影响"
                  >
                  </el-table-column>
                  <el-table-column
                          label="利率影响"
                          prop="利率影响"
                  >
                  </el-table-column>
                  <el-table-column
                          label="残差"
                          prop="残差"
                  >
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-dialog>
        </div>
<!--      </d2-grid-item>-->
    </d2-grid-layout>
  </d2-container>
</template>

<script>

import {
  intepolationTypeOptions,
  currencyOptions,
  productTypes,
  echartDPPartOptionSWAP,
  echartConPDSWAP1} from '../UIPara/UIPara'

import {displayOptions} from './UIPara'
import echarts from 'echarts'
import Calendar from 'vue-calendar-component'

export default {
  components: {
    Calendar
  },
  data: function () {
    return {
      filename: __filename,
      layout: {
        layout: [
          { 'x': 0, 'y': 0, 'w': 3, 'h': 13, 'i': '0' },
          { 'x': 0, 'y': 13, 'w': 3, 'h': 15.5, 'i': '1' },
          { 'x': 3, 'y': 0, 'w': 6, 'h': 13, 'i': '2' },
          { 'x': 9, 'y': 0, 'w': 3, 'h': 13, 'i': '3' },
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
      ContinousDPVisible:false,
      ContinousDP:false,
      DPPartVisible:false,
      DPPart:false,
      PnlVisible:false,
      Pnl:false,
      showtable:true,
      displayData:false,
      intepolationTypeOptions:intepolationTypeOptions,
      currencyOptions:currencyOptions,
      productTypes:productTypes,
      displayOptions:displayOptions,
      echartDPPartOptionSWAP:echartDPPartOptionSWAP,
      echartConPDSWAP1:echartConPDSWAP1,
      currentRow: null,
      myechart:null,
      productStatus: {
        isUsed: '',
        htDisplay:'',
      },

      IniGeneralData:[
        {"投组群组":"","总损益":"","已实现损益":"","浮动盈亏":"","结束日日损益":"","结束日月损益":"","结束日年损益":"","结束日已实现损益":""},
      ],
      GeneralDataSwap:[
        {"投组群组":"FXSWAP-TRADING","总损益":"65566990.15","已实现损益":"4390749.77","浮动盈亏":"61176240.38","结束日日损益":"9366712.88","结束日月损益":"281001386.37","结束日年损益":"16522881518.83","结束日已实现损益":"627249.97"},
        {"投组群组":"FXSWAP-TRADING","总损益":"70035371.72","已实现损益":"11580806.34","浮动盈亏":"58454565.38","结束日日损益":"10005053.10","结束日月损益":"300151593.09","结束日年损益":"17648913673.87","结束日已实现损益":"1654400.91"},
        {"投组群组":"FXSWAP-TRADING","总损益":"77966750.18","已实现损益":"21837973.58","浮动盈亏":"56128776.59","结束日日损益":"11138107.17","结束日月损益":"334143215.04","结束日年损益":"19647621044.36","结束日已实现损益":"3119710.51"},
        {"投组群组":"FXSWAP-TRADING","总损益":"35783431.23","已实现损益":"4703604.52","浮动盈亏":"31079826.70","结束日日损益":"5111918.75","结束日月损益":"153357562.40","结束日年损益":"9017424669.02","结束日已实现损益":"671943.50"},
        {"投组群组":"FXSWAP-TRADING","总损益":"62041950.52","已实现损益":"44724642.30","浮动盈亏":"17317308.22","结束日日损益":"8863135.79","结束日月损益":"265894073.66","结束日年损益":"15634571531.18","结束日已实现损益":"6389234.61"},
        {"投组群组":"FXSWAP-TRADING","总损益":"57277275.18","已实现损益":"39891622.21","浮动盈亏":"17385652.97","结束日日损益":"8182467.88","结束日月损益":"245474036.47","结束日年损益":"14433873344.49","结束日已实现损益":"5698803.17"},
        {"投组群组":"FXSWAP-TRADING","总损益":"56419491.47","已实现损益":"17311881.65","浮动盈亏":"39107609.82","结束日日损益":"8059927.35","结束日月损益":"241797820.57","结束日年损益":"14217711849.63","结束日已实现损益":"2473125.95"},
        {"投组群组":"FXSWAP-TRADING","总损益":"22723439.79","已实现损益":"17074628.38","浮动盈亏":"5648811.41","结束日日损益":"3246205.68","结束日月损益":"97386170.55","结束日年损益":"5726306828.12","结束日已实现损益":"2439232.63"},
        {"投组群组":"FXSWAP-TRADING","总损益":"83219605.29","已实现损益":"8439686.73","浮动盈亏":"74779918.56","结束日日损益":"11888515.04","结束日月损益":"356655451.26","结束日年损益":"20971340534.19","结束日已实现损益":"1205669.53"},
        {"投组群组":"FXSWAP-TRADING","总损益":"27491544.28","已实现损益":"10331747.14","浮动盈亏":"17159797.14","结束日日损益":"3927363.47","结束日月损益":"117820904.07","结束日年损益":"6927869159.02","结束日已实现损益":"1475963.88"},

      ],
      DPPartDataSWAP:[
        {"数据类型":"损益","外汇远掉期结束日损益":"558525849.81 ","结束日总损益":"3292629249.06 "},
      ],
      ConDPSWAP1:[
        {"数据类型":"日损益","2019-11-04":" 114,541,140 ","2019-11-05":" 132,930,453 ","2019-11-06":" -143,007,454 ","2019-11-07":" -148,637,255 ","2019-11-08":" 192,681,679 ","2019-11-09":" 230,273,605 ","2019-11-10":" 179,743,683 "},
        {"数据类型":"累计损益","2019-11-04":" 114,541,140 ","2019-11-05":" 247,471,593 ","2019-11-06":" 104,464,139 ","2019-11-07":" -44,173,116 ","2019-11-08":" 148,508,563 ","2019-11-09":" 378,782,167 ","2019-11-10":" 558,525,850 "},

      ],
      PNLSWAP1:[
        {"投组":"FXSWAP-TRADING","货币":"CNY","浮动盈亏":"61176240.38","期限影响":"1357554.762","汇率影响":"40784160.26","利率影响":"19034525.3659938 ","残差":"0.00"},

      ],
      options: {
        border: true,
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
    }
  },
  mounted () {
  },
  methods: {
    // ****************************
    DPPartGraphOpenSWAP(){
      this.myechart = echarts.init(document.getElementById('DPPartChartSWAP'));
      this.myechart.setOption(this.echartDPPartOptionSWAP);
    },
    ConDPGraphOpenSWAP1(){
      this.myechart = echarts.init(document.getElementById('ConDPChartSWAP1'));
      this.myechart.setOption(this.echartConPDSWAP1);
    },
    calPLResults () {
      if (this.displayData === false){
        this.displayData = true;
      }
    },
    clearPLResults () {
      if (this.displayData === true){
        this.displayData = false;
      }
    },
    clickSwaption(){
      this.clickSwaption()
    },
    rowstyle(row){
      if (row.rowIndex % 2 === 0) {
        return "height:30px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px";
      } else {
        return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
      }
    },
    headerstyle(row) {
      return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
    },
    layoutUpdatedHandler (newLayout) {
      console.group('layoutUpdatedHandler')
      newLayout.forEach(e => {
        console.log(`{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`)
      })
      console.groupEnd()
    },
    showContinousDP(){
      this.ContinousDPVisible = true;
      this.ContinousDP = true;
      this.dialogNameConDP = '区间连续日损益';
    },
    showDPPart(){
      this.DPPartVisible = true;
      this.DPPart = true;
      this.dialogNameDPPart = '结束日损益占比';
    },
    showPNL(){
      this.PnlVisible = true;
      this.Pnl = true;
      this.dialogNamePNL = '区间损益归因';
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

.right-col-attr{
  height:80px;
  background:transparent;
  margin:auto;
  line-height: 200px;
  vertical-align: center;

}
.controls-a-line-attr{
  margin:0px 60px 60px 20px;
}
.controls-a-line-attr-btm{
  margin:50px 60px 60px 500px;
}
.left-col1-attr{
  height:40px;
  background:#312E30;
  margin:5px 0px 5px 0px;
  padding-left:20px;
  line-height: 40px;
  vertical-align: center;
  font-size:16px;
  color:white;
}
.left-col2-attr{
  height:40px;
  background:#454754;;
  margin:5px 0px 5px 0px;
  padding-left:20px;
  line-height: 40px;
  vertical-align: center;
  font-size:16px;
  color:white;
}
.oneContorls-attr {
  width:190px;
}
.tradeInfoButton-attr{
  width:190px;
}
.box-card-attr {
  /*margin: 5px;*/
  border-radius: 5px;
  padding: 5px;
  //background-color: #2c2c41;
  background-color: #333333;
  color: white;
  margin: -100px 2px 0px 350px;
}
</style>

<style lang="scss" >

</style>
