<template>
  <d2-container :filename="filename" type="full" class="page" better-scroll>
    <d2-grid-layout
            v-bind="layout"
            @layout-updated="layoutUpdatedHandler">

        <div>
          <el-col :span="4">
            <el-row>
              <div class="right-column">
                <div class='box-card' style="height:925px">
                  <div class="box-card-title">
                    交易类型选取
                  </div>
                  <el-col>
                    <div class="right-col-s">
                      <div class="box-card-title">
                        <el-checkbox-button class="controls-a-line-attr" v-model="isSwap" @click="clickSwap">外汇远掉期</el-checkbox-button>
                      </div>
                    </div>
                    <div class="right-col-s">
                      <div class="box-card-title">
                        <el-checkbox-button class="controls-a-line-attr" v-model="isEuropeanOption" @click="clickEuropeanOption">外汇欧式期权</el-checkbox-button>
                      </div>
                    </div>
                    <div class="right-col-s">
                      <div class="box-card-title">
                        <el-checkbox-button class="controls-a-line-attr" v-model="isIrsCcs" @click="clickIrsCcs">IRS/CCS</el-checkbox-button>
                      </div>
                    </div>
                    <div class="right-col-s">
                      <div class="box-card-title">
                        <el-checkbox-button class="controls-a-line-attr" v-model="isBond" @click="clickBond">债券</el-checkbox-button>
                      </div>
                    </div>
                  </el-col>
                </div>
              </div>
            </el-row>
            <el-row>
              <el-button type="info" class="tradeInfoButton" @click="showWaibiInterestCurve">选取交易</el-button>
            </el-row>
          </el-col>

          <el-col :span="10">
            <div class="left-column">
              <div class='box-card' style="height:925px">
                <el-row>
                  <div v-show="isSwap === true">
                    <el-col :span="10">
                      <div style="padding:30px">
                        <div class="box-card-title">
                          <span>外汇远掉期风险因子设定</span>
                        </div>
                        <el-col :span="12">
                          <div class="left-col1-s">风险因子</div>
                          <div class="left-col2-s">变动幅度</div>
                        </el-col>
                        <el-col :span="12">
                          <div class="left-col1-s">
                            <el-select
                                    class="oneContorls"
                                    v-model="swapScenario.RiskType"
                                    placeholder="请选择">
                              <el-option
                                      v-for="item in swapScenarioOptions"
                                      :key="item.key"
                                      :label="item.label"
                                      :value="item.value"
                              ></el-option>
                            </el-select>
                          </div>
                          <div class="left-col2-s">
                            <el-input-number
                                    :controls="false"
                                    class="oneContorls"
                                    v-model="swapScenario.Change"
                            >
                            </el-input-number>
                          </div>
                        </el-col>
                      </div>
                    </el-col>
                  </div>
                </el-row>
                <el-row>
                  <div v-show="isEuropeanOption === true">
                    <el-col :span="10">
                      <div style="padding:30px">
                        <div class="box-card-title">
                          <span>外汇欧式期权风险因子设定</span>
                        </div>
                        <el-col :span="12">
                          <div class="left-col1-s">风险因子</div>
                          <div class="left-col2-s">变动幅度</div>
                        </el-col>
                        <el-col :span="12">
                          <div class="left-col1-s">
                            <el-select
                                    class="oneContorls"
                                    v-model="europeanOptionScenario.RiskType"
                                    placeholder="请选择">
                              <el-option
                                      v-for="item in europeanOptionScenarioOptions"
                                      :key="item.key"
                                      :label="item.label"
                                      :value="item.value"
                              ></el-option>
                            </el-select>
                          </div>
                          <div class="left-col2-s">
                            <el-input-number
                                    :controls="false"
                                    class="oneContorls"
                                    v-model="europeanOptionScenario.Change"
                            >
                            </el-input-number>
                          </div>
                        </el-col>
                      </div>
                    </el-col>
                  </div>
                </el-row>
                <el-row>
                  <div v-show="isIrsCcs === true">
                    <el-col :span="10">
                      <div style="padding:30px">
                        <div class="box-card-title">
                          <span>IRS/CCS风险因子设定</span>
                        </div>
                        <el-col :span="12">
                          <div class="left-col1-s">风险因子</div>
                          <div class="left-col2-s">变动幅度</div>
                        </el-col>
                        <el-col :span="12">
                          <div class="left-col1-s">
                            <el-select
                                    class="oneContorls"
                                    v-model="irsccsScenario.RiskType"
                                    placeholder="请选择">
                              <el-option
                                      v-for="item in irsccsScenarioOptions"
                                      :key="item.key"
                                      :label="item.label"
                                      :value="item.value"
                              ></el-option>
                            </el-select>
                          </div>
                          <div class="left-col2-s">
                            <el-input-number
                                    :controls="false"
                                    class="oneContorls"
                                    v-model="irsccsScenario.Change"
                            >
                            </el-input-number>
                          </div>
                        </el-col>
                      </div>
                    </el-col>
                  </div>
                </el-row>
                <el-row>
                  <div v-show="isBond === true">
                    <el-col :span="10">
                      <div style="padding:30px">
                        <div class="box-card-title">
                          <span>债券风险因子设定</span>
                        </div>
                        <el-col :span="12">
                          <div class="left-col1-s">风险因子</div>
                          <div class="left-col2-s">变动幅度</div>
                        </el-col>
                        <el-col :span="12">
                          <div class="left-col1-s">
                            <el-select
                                    class="oneContorls"
                                    v-model="bondScenario.RiskType"
                                    placeholder="请选择">
                              <el-option
                                      v-for="item in bondScenarioOptions"
                                      :key="item.key"
                                      :label="item.label"
                                      :value="item.value"
                              ></el-option>
                            </el-select>
                          </div>
                          <div class="left-col2-s">
                            <el-input-number
                                    :controls="false"
                                    class="oneContorls"
                                    v-model="bondScenario.Change"
                            >
                            </el-input-number>
                          </div>
                        </el-col>
                      </div>
                    </el-col>
                  </div>
                </el-row>
                <div v-show="isSwap===true||isEuropeanOption===true||isIrsCcs===true||isBond===true">
                  <el-row>
                    <el-button class="controls-a-line-attr-btm">开始计算</el-button>
                  </el-row>
                </div>
              </div>
            </div>
          </el-col>

          <el-col :span="14">
            <div v-show="isSwap===true">
              <div style="margin-top:10px">
                <el-col :span="24">
                  <div style="padding:30px">
                    <div class="box-card-title">
                      <span>外汇远掉期情景计算结果</span>
                    </div>
                    <el-table
                            :data="fxSneData"
                            :cell-style="rowstyle"
                            :header-cell-style="headerstyle"
                            style="width:100%"
                    >
                      <el-table-column
                              label="NPV"
                              prop="NPV"
                      >
                      </el-table-column>
                      <el-table-column
                              label="PV1"
                              prop="PV1"
                      >
                      </el-table-column>
                      <el-table-column
                              label="PV2"
                              prop="PV2"
                      >
                      </el-table-column>
                    </el-table>
                  </div>
                </el-col>
              </div>
            </div>
            <div v-show="isEuropeanOption===true">
              <div style="margin-top:10px">
                <el-col :span="24">
                  <div style="padding:30px">
                    <div class="box-card-title">
                      <span>外汇欧式期权情景计算结果</span>
                    </div>
                    <el-table
                            :data="europeanOptionSneData"
                            :cell-style="rowstyle"
                            :header-cell-style="headerstyle"
                            style="width:100%"
                    >
                      <el-table-column
                              label="NPV"
                              prop="NPV"
                      >
                      </el-table-column>
                      <el-table-column
                              label="Delta"
                              prop="Delta"
                      >
                      </el-table-column>
                      <el-table-column
                              label="Gamma"
                              prop="Gamma"
                      >
                      </el-table-column>
                      <el-table-column
                              label="Vega"
                              prop="Vega"
                      >
                      </el-table-column>
                      <el-table-column
                              label="Theta"
                              prop="Theta"
                      >
                      </el-table-column>
                      <el-table-column
                              label="Rho"
                              prop="Rho"
                      >
                      </el-table-column>
                    </el-table>
                  </div>
                </el-col>
              </div>
            </div>
            <div v-show="isIrsCcs===true">
              <div style="margin-top:10px">
                <el-col :span="24">
                  <div style="padding:30px">
                    <div class="box-card-title">
                      <span>IRS/CCS情景计算结果</span>
                    </div>
                    <el-table
                            :data="IrsCcsSneData"
                            :cell-style="rowstyle"
                            :header-cell-style="headerstyle"
                            style="width:100%"
                    >
                      <el-table-column
                              label="NPV"
                              prop="NPV"
                      >
                      </el-table-column>
                      <el-table-column
                              label="AccrualInterest"
                              prop="AccrualInterest"
                      >
                      </el-table-column>
                      <el-table-column
                              label="DV01"
                              prop="DV01"
                      >
                      </el-table-column>
                      <el-table-column
                              label="ReceiveNPV"
                              prop="ReceiveNPV"
                      >
                      </el-table-column>
                      <el-table-column
                              label="PayNPV"
                              prop="PayNPV"
                      >
                      </el-table-column>
                    </el-table>
                  </div>
                </el-col>
              </div>
            </div>
            <div v-show="isBond===true">
              <div style="margin-top:10px">
                <el-col :span="24">
                  <div style="padding:30px">
                    <div class="box-card-title">
                      <span>债券情景计算结果</span>
                    </div>
                    <el-table
                            :data="BondSneData"
                            :cell-style="rowstyle"
                            :header-cell-style="headerstyle"
                            style="width:100%"
                    >
                      <el-table-column
                              label="DirtyPrice"
                              prop="DirtyPrice"
                      >
                      </el-table-column>
                      <el-table-column
                              label="CleanPrice"
                              prop="CleanPrice"
                      >
                      </el-table-column>
                      <el-table-column
                              label="AccrualInterest"
                              prop="AccrualInterest"
                      >
                      </el-table-column>
                      <el-table-column
                              label="DV01"
                              prop="DV01"
                      >
                      </el-table-column>
                      <el-table-column
                              label="Duration"
                              prop="Duration"
                      >
                      </el-table-column>
                      <el-table-column
                              label="Convexity"
                              prop="Convexity"
                      >
                      </el-table-column>
                      <el-table-column
                              label="VaR"
                              prop="VaR"
                      >
                      </el-table-column>
                    </el-table>
                  </div>
                </el-col>
              </div>
            </div>
          </el-col>

        </div>
<!--      </d2-grid-item>-->
    </d2-grid-layout>
  </d2-container>
</template>

<script>

import {
  pricing,
  calcFxFWD
} from '@api/index'

import {
  swapScenarioOptions,
  europeanOptionScenarioOptions,
  irsccsScenarioOptions,
  bondScenarioOptions
} from './UIPara'

import Calendar from 'vue-calendar-component'

export default {
  components: {
    Calendar
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
        rowHeight: 30,
        isDraggable: false,
        isResizable: false,
        isMirrored: false,
        verticalCompact: true,
        margin: [2, 3],
        useCssTransforms: true
      },
      isSwap:false,
      isEuropeanOption:false,
      isIrsCcs:false,
      isBond:false,
      swapScenario: {
        RiskType:'',
        Change:'',
      },
      europeanOptionScenario: {
        RiskType:'',
        Change:'',
      },
      irsccsScenario: {
        RiskType:'',
        Change:'',
      },
      bondScenario: {
        RiskType:'',
        Change:'',
      },
      swapScenarioOptions:swapScenarioOptions,
      europeanOptionScenarioOptions:europeanOptionScenarioOptions,
      irsccsScenarioOptions:irsccsScenarioOptions,
      bondScenarioOptions:bondScenarioOptions,
      fxSneData:[
        {NPV:0,PV1:0,PV2:0},
      ],
      europeanOptionSneData:[
        {NPV:0,Delta:0,Gamma:0,Vega:0,Theta:0,Rho:0},
      ],
      IrsCcsSneData:[
        {NPV:0,AccrualInterest:0,DV01:0,ReceiveNPV:0,PayNPV:0},
      ],
      BondSneData:[
        {DirtyPrice:0,CleanPrice:0,AccrualInterest:0,DV01:0,Duration:0,Convexity:0,VaR:0},
      ],
    }

  },
  mounted () {
  },
  methods: {
    // ****************************
    clickSwap(){
      if(this.isSwap === true){
        this.isSwap = false;
      }
      else{
        this.isSwap = true;
      }
    },
    clickEuropeanOption(){
      if(this.isEuropeanOption===true){
        this.isEuropeanOption = false;
      }
      else{
        this.isEuropeanOption = true;
      }
    },
    clickIrsCcs(){
      if(this.isIrsCcs===true){
        this.isIrsCcs = false;
      }
      else{
        this.isIrsCcs = true;
      }
    },
    clickBond(){
      if(this.isBond===true){
        this.isBond = false;
      }
      else{
        this.isBond = true;
      }
    },
    layoutUpdatedHandler (newLayout) {
      //console.group("layoutUpdatedHandler");
      newLayout.forEach(e => {
        console.log(
                `{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`
        )
      })
      console.groupEnd()
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
.right-col-s{
  height:80px;
  background:transparent;
  margin:auto;
  line-height: 200px;
  vertical-align: center;

}
.left-col1-s{
  height:40px;
  background:#312E30;
  margin:5px 0px 5px 0px;
  padding-left:20px;
  line-height: 40px;
  vertical-align: center;
  font-size:16px;
  color:white;
}
.left-col2-s{
  height:40px;
  background:#454754;;
  margin:5px 0px 5px 0px;
  padding-left:20px;
  line-height: 40px;
  vertical-align: center;
  font-size:16px;
  color:white;
}
.oneContorls {
  width:190px;
}
.tradeInfoButton{
  width:190px;
}
.controls-a-line-attr-btm{
  margin:50px 60px 60px 500px;
}
</style>

<style lang="scss" >

</style>
