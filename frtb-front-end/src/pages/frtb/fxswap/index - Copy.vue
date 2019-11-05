<template>
  <d2-container :filename="filename" type="full" class="page" better-scroll>
        <d2-grid-layout
                v-bind="layout"
                @layout-updated="layoutUpdatedHandler">
      <!--      <d2-grid-item-->
      <!--              @move="moveHandler"-->
      <!--              @moved="movedHandler"-->
      <!--              @resize="resizeHandler"-->
      <!--              @resized="resizedHandler"-->
      <!--              >-->
      <div>
<!--        <el-col :span="6">-->
<!--          <div class="left-column">-->
<!--            <div class='box-card' style="height:925px">-->
<!--              <div class="box-card-title">-->
<!--                日期设定-->
<!--              </div>-->
<!--              <Calendar-->
<!--                      style="font-size: 12px;background: #114450">-->
<!--              </Calendar>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-col>-->

        <el-col :span="24">
          <div class='box-card' style="height:400px">
            <div class="right-column">
              <div >
                <div class="box-card-title">
                  <span>交易信息</span>
                 </div>
                <div style="padding:20px">
                  <el-form :inline="true" ref="swapFormRef" :model="swapForm" label-width="120px" style="width:90%" :label-position="swapForm.position">

                    <el-col :span="8">
                      <el-form-item label="交易日">
                        <el-date-picker
                                v-model="swapForm.tradingDate"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="即期起息日">
                        <el-date-picker
                                v-model="swapForm.interestDate"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="即期汇率">
                        <el-input-number
                                :controls="false"
                                class="form-num"
                                v-model="swapForm.currentInterestRate"
                        >
                        </el-input-number>
                      </el-form-item>
                    </el-col>

                    <el-col :span="8">
                      <el-form-item label="近端起息日">
                        <el-date-picker
                                v-model="swapForm.nearInterestDate"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="近端期限">
                        <el-select v-model="swapForm.nearPeriod" placeholder="请选择期限">
                          <el-option
                                  v-for="item in nearPeriodOption"
                                  :key="item.key"
                                  :label="item.label"
                                  :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="近端汇率">
                        <el-input-number
                                :controls="false"
                                class="form-num"
                                v-model="swapForm.nearInterestRate"
                        >
                        </el-input-number>
                      </el-form-item>
                    </el-col>
<!--                    第三行-->
                    <el-col :span="8">
                      <el-form-item label="远端起息日">
                        <el-date-picker
                                v-model="swapForm.farInterestDate"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                      </el-form-item>
                    </el-col>

                    <el-col :span="8">
                      <el-form-item label="远端期限">
                        <el-select v-model="swapForm.farPeriod" placeholder="请选择期限">
                          <el-option
                                  v-for="item in farPeriodOption"
                                  :key="item.key"
                                  :label="item.label"
                                  :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>

                    <el-col :span="8">
                      <el-form-item label="远端汇率">
                        <el-input-number
                                :controls="false"
                                class="form-num"
                                v-model="swapForm.farInterestRate"
                        >
                        </el-input-number>
                      </el-form-item>
                    </el-col>

                    <el-col :span="24">
                      <el-col :span="8">
                        <el-form-item label="货币对">
                          <el-select v-model="swapForm.currencyPair" placeholder="请选择货币对">
                            <el-option
                                    v-for="item in currencyPairArray"
                                    :key="item.key"
                                    :label="item.label"
                                    :value="item.value"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>


                      <el-col :span="8">
                        <el-form-item label="">
                          <el-radio style='width:120px' v-model="swapForm.nearAmountOption" label="近端金额 1"></el-radio>
                        </el-form-item>
<!--                      </el-col>-->
<!--                      <el-col :span="5">-->
                        <el-form-item>
                          <el-input-number
                                  :controls="false"
                                  class="form-num"
                                  v-model="swapForm.nearAmountValue1"
                          >
                          </el-input-number>
                        </el-form-item>
                      </el-col>


                      <el-col :span="8">
                        <el-form-item label="远端金额 1">
                          <el-input-number
                                  :controls="false"
                                  class="form-num"
                                  v-model="swapForm.farAmountValue1"
                          >
                          </el-input-number>
                        </el-form-item>
                      </el-col>
                    </el-col>


                    <el-col :span="24">
                      <el-col :span="8">
                      <el-form-item label="交易类型">
                        <el-select v-model="swapForm.tradingType" placeholder="请选择货币对">
                          <el-option
                                  v-for="item in currencyPairArray"
                                  :key="item.key"
                                  :label="item.label"
                                  :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                      </el-col>

                      <el-col :span="8">
                        <el-form-item label="">
                          <el-radio style='width:120px' v-model="swapForm.nearAmountOption" label="近端金额 2"></el-radio>
                        </el-form-item>
<!--                      </el-col>-->
<!--                      <el-col :span="6">-->
                        <el-form-item>
                          <el-input-number
                                  :controls="false"
                                  class="form-num"
                                  v-model="swapForm.nearAmountValue2"
                          >
                          </el-input-number>
                        </el-form-item>
                      </el-col>

                      <el-col :span="8">
                        <el-form-item label="远端金额 2">
                          <el-input-number
                                  :controls="false"
                                  class="form-num"
                                  v-model="swapForm.farAmountValue2"
                          >
                          </el-input-number>
                        </el-form-item>
                      </el-col>
                    </el-col>
                  </el-form>
                </div>
              </div>
            </div>
          </div>

          <div class='box-card' style="height:395px">
            <div class="box-card-title">
              <span>收益率</span>
            </div>
            <div style="padding:20px">
              <el-form :inline="true" ref="swapFormBottomRef" :model="swapForm" label-width="170px" style="width:90%" :label-position="labelPostion">
               <el-col :span="4">
                 <div style="color:transparent">a</div>
               </el-col>
                <el-col :span="10">
                 <el-form-item label="">
                   <el-radio v-model="swapForm.earningRatio" label="收益(系统默认)"></el-radio>
                 </el-form-item>
               </el-col>
                <el-col :span="10">
                  <el-form-item label="">
                    <el-radio v-model="swapForm.earningRatio" label="收益率（自定义）"></el-radio>
                  </el-form-item>
                </el-col>



                <el-col :span="4">
                  <div style="color:transparent">a</div>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="近端货币1收益率">
                    <el-input-number
                            :controls="false"
                            class="form-num"
                            v-model="swapForm.currency1EarningRateDefaultNear"
                    >
                    </el-input-number>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="货币1收益率曲线名称">
<!--                    <span style="margin:0px 10px 0px 10px"><el-tag type="info" size="medium">曲线名称</el-tag></span>-->
<!--                    <el-input-number
                            :controls="false"
                            class="form-num"
                            v-model="swapForm2.currency1EarningRateUser"
                    >
                    </el-input-number>-->
                    <el-select v-model="swapForm.currency1EarningCurveName" placeholder="曲线名称">
                      <el-option
                              v-for="item in currency1EarningCurveOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>


                <el-col :span="4">
                  <div style="color:transparent">a</div>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="近端货币2收益率">
                    <el-input-number
                            :controls="false"
                            class="form-num"
                            v-model="swapForm.currency2EarningRateDefaultNear"
                    >
                    </el-input-number>
                  </el-form-item>
                </el-col>

                <el-col :span="10">
                  <el-form-item label="货币2收益率曲线名称">
<!--                    <el-input-number
                            :controls="false"
                            class="form-num"
                            v-model="swapForm2.currency2EarningRateUser"
                    >
                    </el-input-number>-->
<!--                    <span style="margin:0px 10px 0px 10px"><el-tag type="info" size="medium">曲线名称</el-tag></span>-->
                    <el-select v-model="swapForm.currency2EarningCurveName" placeholder="曲线名称">
                      <el-option
                              v-for="item in currency1EarningCurveOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>



                <el-col :span="4">
                  <div style="color:transparent">a</div>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="远端货币1收益率">
                    <el-input-number
                            :controls="false"
                            class="form-num"
                            v-model="swapForm.currency1EarningRateDefaultFar"
                    >
                    </el-input-number>
                  </el-form-item>
                </el-col>

                <el-col :span="10">
                  <el-form-item label="曲线插值方法">
                    <!--                    <el-input-number
                                                :controls="false"
                                                class="form-num"
                                                v-model="swapForm2.currency2EarningRateUser"
                                        >
                                        </el-input-number>-->
<!--                    <span style="margin:0px 10px 0px 10px"><el-tag type="info" size="medium">曲线名称</el-tag></span>-->
                    <el-select v-model="swapForm.intepolationType" placeholder="请选择插值方法">
                      <el-option
                              v-for="item in intepolationTypeOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <div style="color:transparent">a</div>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="远端货币2收益率">
                    <el-input-number
                            :controls="false"
                            class="form-num"
                            v-model="swapForm.currency2EarningRateDefaultFar"
                    >
                    </el-input-number>
                  </el-form-item>
                </el-col>
              </el-form>
            </div>
          </div>


          <div class='box-card' style="height:385px">
            <div style="padding:20px;margin:auto">
              <el-row>
                <el-col :span="4">
                  <div style="color:transparent">a</div>
                </el-col>
              <el-col :span="3">
                <el-button type="info" @click="resetInputs">清空</el-button>
              </el-col>
              <el-col :span="5">
                <el-button type="info" @click="getSystemEarningRate">获取系统收益率</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="primary" @click="calcPricing">计算成本</el-button>
                <el-input-number style='margin-left:5px;margin-right:5px' v-model="costResult" disable
                                 :controls="false"></el-input-number>

                <span>
                  <el-radio v-model="calcUnit" label="CYN"></el-radio>
                  <el-radio v-model="calcUnit" label="USD"></el-radio>
                </span>
              </el-col>
              </el-row>


            <el-row>

            <div style="border:2px solid gray;width:85%;height:180px;margin-top:30px;padding:10px;margin-left:90px;padding-left:80px">
              <div>
                套利空间计算
              </div>
              <div style="margin-top:20px">
                <el-form :inline="true" ref="swapFormBottomRef" :model="swapForm" label-width="120px" style="width:90%" :label-position="labelPostion">
                <el-col :span="8">
                  <el-form-item label="货币1曲线名称">
                    <el-select v-model="swapForm.curveName" placeholder="选择曲线名称">
                      <el-option
                              v-for="item in curveNameOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                  <el-col :span="8">
                    <el-form-item label="PV 1 ">
                      <el-input-number
                              :controls="false"
                              class="form-num"
                              disabled
                              v-model="swapForm.PV1"
                      >
                      </el-input-number>
                      <el-tag style="margin-left:5px">USD</el-tag>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">

                    <el-form-item label="PV 2 ">
                      <el-input-number
                              :controls="false"
                              class="form-num"
                              disabled
                              v-model="swapForm.PV2"
                      >
                      </el-input-number>
                      <el-tag style="margin-left:5px">CNY</el-tag>
                    </el-form-item>
                  </el-col>
<!--                  第二行-->
                  <el-col :span="8">
                    <el-form-item label="货币2曲线名称">
                      <el-select v-model="swapForm.curveName2" placeholder="选择曲线名称">
                        <el-option
                                v-for="item in curveNameOptions"
                                :key="item.key"
                                :label="item.label"
                                :value="item.value"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="NPV">
                      <el-input-number
                              :controls="false"
                              class="form-num"
                              disabled
                              v-model="swapForm.NPV"
                              style="width:150px"
                      >
                      </el-input-number>
                      <span>
                     <el-radio v-model="swapForm.calcNPVUnit" label="CYN"></el-radio>
                     <el-radio v-model="swapForm.calcNPVUnit" label="USD"></el-radio>
                      </span>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">

                    <el-form-item label="套利空间">
                      <el-input-number
                              :controls="false"
                              class="form-num"
                              disabled
                              v-model="swapForm.arbitrage"
                      >
                      </el-input-number>
                      <el-tag style="margin-left:5px">USD</el-tag>
                    </el-form-item>
                  </el-col>
                </el-form>
              </div>



            </div>
              </el-row>
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
    calcFxFWD,
    calcFXFWDSwap
  } from '@api/index'
  import Calendar from 'vue-calendar-component'
  import {
    currencyPairArray,
    nearPeriodOption,
    farPeriodOption,
    nearAmountOption,
    currency1EarningCurveOptions,
    intepolationTypeOptions,
    curveNameOptions,
  } from './UIPara'
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
          rowHeight: 40,
          isDraggable: false,
          isResizable: false,
          isMirrored: false,
          verticalCompact: true,
          margin: [2, 3],
          useCssTransforms: true
        },
        labelPostion:'left',
        swapForm1:{
          currencyPair:'USD/CNY',
          tradingType:'远期/掉期',
          yuanDuanMaiMaiFanagxiang: '买入',
          tradingDate:Date.now(),
          currency1InterestCurve:'',
          currency2InterestCurve:'',
          intepolationType:'线性插值',
          jiXiTianShuFangshi: 'ACT/365',
          yingYeRiGuiZe:'调整至下一营业日',
          jinDuanHuiLv:'',
          yuanDuanHuiLv:'',
          jinDuanQiXiRi:'',
          jinDuanJiaoGeRi:'',
          waiBiJinDuanJingE:'',
          waiBiJinDuanLiLv:'',
          benBiJinDuanJingE:'',
          benBiJinDuanLiLv:'',
          waiBiYuanDuanJingE:'',
          waiBiYuaDuanLiLv:'',
          benBiYuaDuanJingE:'',
          benBiYuaDuanLiLv:'',
        },


        swapForm:{

          currencyPair:'USD/CNY',
          tradingDate:Date.now(),
          interestDate:Date.now(),
          currentInterestRate:6.5418,
          nearInterestDate:Date.now(),
          nearInterestRate:6.5418,
          nearPeriod:'SPOT',

          farInterestRate:6.5679,
          farInterestDate:Date.now(),
          nearAmountOption:'近端金额 1',
          tradingType:'远期/掉期',
          nearAmountValue1:20000000.00,
          farAmountValue1:-20000000.00,
          nearAmountValue2:-130836000,
          farAmountValue2:131358000.00,

          earningRatio:'收益(系统默认)',
          currency1EarningRateDefaultNear:"3.08364",
          currency2EarningRateDefaultNear:"4.40340",
          currency1EarningCurveName:'美元隐含利率曲线',
          currency2EarningCurveName:'人名币FR007收益利率曲线',

          currency1EarningRateDefaultFar:"3.08364",
          currency2EarningRateDefaultFar:"4.40340",

          intepolationType:'线性插值',

          curveName:'美元OIS曲线',
          curveName2:'人民币FR007收益曲线',

          PV1:1309100.00,
          PV2:-749900.00,
          NPV:-13091.00,
          calcNPVUnit:'USD',
          arbitrage:-631.00,
        },
        costResult:'',
        calcUnit:'CYN',
        currencyPairArray:currencyPairArray,
        nearPeriodOption:nearPeriodOption,
        farPeriodOption:farPeriodOption,
        nearAmountOption:nearAmountOption,
        // currency1EarningRateUserOption:currency1EarningRateUserOption,
        intepolationTypeOptions:intepolationTypeOptions,
        curveNameOptions:curveNameOptions,
        currency1EarningCurveOptions:currency1EarningCurveOptions


      }
    },
    mounted () {
    },
    methods: {
      // ****************************
      rowstyle(row) {
        if (row.rowIndex % 2 === 0) {
          return "height:50px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px";
        } else {
          return "height:50px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
        }
      },
      rowstyleInfo(row) {
        if (row.rowIndex % 2 === 0) {
          return "height:50px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px";
        } else {
          return "height:50px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
        }
      },
      headerstyle(row) {
        return "height:50px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
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
      resetInputs(){
        this.swapForm.currencyPair='USD/CNY';
        this.swapForm.tradingDate=Date.now();
        this.swapForm.interestDate=Date.now();
        this.swapForm.currentInterestRate=0;
        this.swapForm.nearInterestDate=Date.now();
        this.swapForm.nearInterestRate=0;
        this.swapForm.nearPeriod='SPOT';

        this.swapForm.farInterestRate=0;
        this.swapForm.farInterestDate=Date.now();
        this.swapForm.nearAmountOption='近端金额1';
        this.swapForm.tradingType='远期/掉期';
        this.swapForm.nearAmountValue1=0;
        this.swapForm.farAmountValue1=0;
        this.swapForm.nearAmountValue2=0;
        this.swapForm.farAmountValue2=0;

        this.swapForm.earningRatio='收益(系统默认)';
        this.swapForm.currency1EarningRateDefaultNear=0;
        this.swapForm.currency2EarningRateDefaultNear=0;
        this.swapForm.currency1EarningCurveName='美元隐含利率曲线';
        this.swapForm.currency2EarningCurveName='人名币FR007收益利率曲线';

        this.swapForm.currency1EarningRateDefaultFar=0;
        this.swapForm.currency2EarningRateDefaultFar=0;

        this.swapForm.intepolationType='线性插值';

        this.swapForm.curveName='美元OIS曲线';
        this.swapForm.curveName2='人民币FR007收益曲线';

        this.swapForm.PV1='';
        this.swapForm.PV2='';
        this.swapForm.NPV='';
        this.swapForm.calcNPVUnit='';
        this.swapForm.arbitrage='';
      },
      getSystemEarningRate() {
        //这里是call API
        this.swapForm.currentInterestRate=1;
        this.swapForm.nearInterestRate=1;
        this.swapForm.farInterestRate=1;
      },
      calcPricing() {
        var data={
          name:'test'
        }
        console.log('call pricing')
        calcFXFWDSwap(this.swapForm).then(res => {
          console.log(res,'res')
        }).catch(function (error){
          console.log(error);
          vm.errorMsg = error;
        });
      }

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

 .form-num{
   width: 220px;
 }
</style>

<style lang="scss" >
.box-card .el-form-item__label{
  font-size:16px;
  color:white;
}
  .box-card .el-radio__label {
    font-size: 16px;
    padding-left: 10px;
    color:white;
  }
  .box-card .el-form--inline .el-form-item {
    margin-right: 0px;
  }
  .box-card .el-input-number .el-input__inner {
  text-align: left;
}
</style>
