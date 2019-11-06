<template xmlns:el-col="http://www.w3.org/1999/html">
  <d2-container :filename="filename" type="full" class="page" better-scroll>
    <d2-grid-layout
            v-bind="layout"
            @layout-updated="layoutUpdatedHandler">
        <div>
          <el-col :span="4">
            <div class="right-column">
              <div class='box-card' style="height:925px">
                <div class="box-card-title">
                  交易类型选取及参数录入
                </div>
                <el-col>
                  <div class="right-col-attr">
                    <div class="box-card-title">
                      <el-checkbox-button class="controls-a-line-attr" v-model="isSwap" @click="clickSwap">外汇远掉期</el-checkbox-button>
                    </div>
                  </div>
                  <div class="right-col-attr">
                    <div class="box-card-title">
                      <el-checkbox-button class="controls-a-line-attr" v-model="isEuropeanOption" @click="clickEuropeanOption">外汇欧式期权</el-checkbox-button>
                    </div>
                  </div>
                  <div class="right-col-attr">
                    <div class="box-card-title">
                      <el-checkbox-button class="controls-a-line-attr" v-model="isIrsCcs" @click="clickIrsCcs">IRS/CCS</el-checkbox-button>
                    </div>
                  </div>
                  <div class="right-col-attr">
                    <div class="box-card-title">
                      <el-checkbox-button class="controls-a-line-attr" v-model="isBond" @click="clickBond">债券</el-checkbox-button>
                    </div>
                  </div>
                </el-col>
              </div>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="left-column">
              <div class='box-card' style="height:925px">
               <el-row>
                  <div v-show="isSwap === true">
                    <el-col :span="10">
                      <div style="padding:30px">
                        <div class="box-card-title">
                          <span>外汇远掉期日期选取</span>
                        </div>
                        <el-col :span="12">
                          <div class="left-col1-attr">起始日</div>
                          <div class="left-col2-attr">终止日</div>
                        </el-col>
                        <el-col :span="12">
                          <div class="left-col1-attr">
                            <el-date-picker
                                    class="oneContorls-attr"
                                    placeholder="选择日期"
                                    type="date"
                                    v-model="swapForm.tradingDate">
                            </el-date-picker>
                          </div>
                          <div class="left-col2-attr">
                            <el-date-picker
                                    class="oneContorls-attr"
                                    placeholder="选择日期"
                                    type="date"
                                    v-model="swapForm.tradingDate">
                            </el-date-picker>
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
                          <span>外汇欧式期权日期选取</span>
                        </div>
                        <el-col :span="12">
                          <div class="left-col1-attr">起始日</div>
                          <div class="left-col2-attr">终止日</div>
                        </el-col>
                        <el-col :span="12">
                          <div class="left-col1-attr" >
                            <el-date-picker
                                    class="oneContorls-attr"
                                    placeholder="选择日期"
                                    type="date"
                                    v-model="europeanOptionForm.tradeDate">
                            </el-date-picker>
                          </div>
                          <div class="left-col2-attr">
                            <el-date-picker
                                    class="oneContorls-attr"
                                    placeholder="选择日期"
                                    type="date"
                                    v-model="europeanOptionForm.tradeDate">
                            </el-date-picker>
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
                          <span>IRS/CCS日期选取</span>
                        </div>
                        <el-col :span="12">
                          <div class="left-col1-attr">起始日</div>
                          <div class="left-col2-attr">终止日</div>
                        </el-col>
                        <el-col :span="12">
                          <div class="left-col1-attr">
                            <el-date-picker
                                    class="oneContorls-attr"
                                    placeholder="选择日期"
                                    type="date"
                                    v-model="irsccsForm.evaluationDate">
                            </el-date-picker>
                          </div>
                          <div class="left-col2-attr">
                            <el-date-picker
                                    class="oneContorls-attr"
                                    placeholder="选择日期"
                                    type="date"
                                    v-model="irsccsForm.evaluationDate">
                            </el-date-picker>
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
                          <span>债券日期选取</span>
                        </div>
                        <el-col :span="12">
                          <div class="left-col1-attr">起始日</div>
                          <div class="left-col2-attr">终止日</div>
                        </el-col>
                        <el-col :span="12">
                          <div class="left-col1-attr">
                            <el-date-picker
                                    class="oneContorls-attr"
                                    placeholder="选择日期"
                                    type="date"
                                    v-model="bondForm.guZhiRi">
                            </el-date-picker>
                          </div>
                          <div class="left-col2-attr">
                            <el-date-picker
                                    class="oneContorls-attr"
                                    placeholder="选择日期"
                                    type="date"
                                    v-model="bondForm.guZhiRi">
                            </el-date-picker>
                          </div>
                        </el-col>
                      </div>
                    </el-col>
                  </div>
                </el-row>
                <div v-show="isSwap===true||isEuropeanOption===true||isIrsCcs===true||isBond===true">
                  <el-row>
                    <el-button class="controls-a-line-attr-btm">归因计算</el-button>
                  </el-row>
                </div>
              </div>
            </div>
          </el-col>

          <el-col :span="12">
            <div v-show="isSwap===true">
              <div style="margin-top:10px">
                <el-col :span="24">
                  <div style="padding:30px">
                    <div class="box-card-title">
                      <span>外汇远掉期归因分析结果</span>
                    </div>
                    <el-table
                            :data="fxAttrData"
                            :cell-style="rowstyle"
                            :header-cell-style="headerstyle"
                            style="width:100%"
                    >
                      <el-table-column
                              label="TimeChange"
                              prop="TimeChange"
                      >
                      </el-table-column>
                      <el-table-column
                              label="FXRate"
                              prop="FXRate"
                      >
                      </el-table-column>
                      <el-table-column
                              label="IRCurve"
                              prop="IRCurve"
                      >
                      </el-table-column>
                      <el-table-column
                              label="TotalFVChange"
                              prop="TotalFVChange"
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
                      <span>外汇欧式期权归因分析结果</span>
                    </div>
                    <el-table
                            :data="fxEuropeanOptionAttrData"
                            :cell-style="rowstyle"
                            :header-cell-style="headerstyle"
                            style="width:100%"
                    >
                      <el-table-column
                              label="TimeChange"
                              prop="TimeChange"
                      >
                      </el-table-column>
                      <el-table-column
                              label="FXRate"
                              prop="FXRate"
                      >
                      </el-table-column>
                      <el-table-column
                              label="IRCurve"
                              prop="IRCurve"
                      >
                      </el-table-column>
                      <el-table-column
                              label="Volatility"
                              prop="Volatility"
                      >
                      </el-table-column>
                      <el-table-column
                              label="TotalFVChange"
                              prop="TotalFVChange"
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
                      <span>IRS/CCS归因分析结果</span>
                    </div>
                    <el-table
                            :data="IrsCcsAttrData"
                            :cell-style="rowstyle"
                            :header-cell-style="headerstyle"
                            style="width:100%"
                    >
                      <el-table-column
                              label="TimeChange"
                              prop="TimeChange"
                      >
                      </el-table-column>
                      <el-table-column
                              label="FXRate"
                              prop="FXRate"
                      >
                      </el-table-column>
                      <el-table-column
                              label="IRCurve"
                              prop="IRCurve"
                      >
                      </el-table-column>
                      <el-table-column
                              label="TotalFVChange"
                              prop="TotalFVChange"
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
                      <span>债券归因分析结果</span>
                    </div>
                    <el-table
                            :data="BondAttrData"
                            :cell-style="rowstyle"
                            :header-cell-style="headerstyle"
                            style="width:100%"
                    >
                      <el-table-column
                              label="TimeChange"
                              prop="TimeChange"
                      >
                      </el-table-column>
                      <el-table-column
                              label="FXRate"
                              prop="FXRate"
                      >
                      </el-table-column>
                      <el-table-column
                              label="Yield"
                              prop="Yield"
                      >
                      </el-table-column>
                      <el-table-column
                              label="TotalFVChange"
                              prop="TotalFVChange"
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
      isSwap:false,
      isEuropeanOption:false,
      isIrsCcs:false,
      isBond:false,
      swapForm: {
        currencyPair: 'USD/CNY',
        tradingType: '掉期',
        yuanDuanMaiMaiFanagxiang: '买入',
        tradingDate: Date.now(),
        currency1InterestCurve: '美元隐含利率曲线',
        currency2InterestCurve: '人名币FR007收益利率曲线',
        intepolationType: '线性插值',
        jiXiTianShuFangshi: 'ACT/365',
        yingYeRiGuiZe: '调整至下一营业日',
        jinDuanHuiLv: '',
        yuanDuanHuiLv: '',
        jinDuanQiXiRi: Date.now(),
        jinDuanJiaoGeRi: Date.now(),
        waiBiJinDuanJingE: '',
        waiBiJinDuanLiLv: '',
        benBiJinDuanJingE: '',
        benBiJinDuanLiLv: '',
        waiBiYuanDuanJingE: '',
        waiBiYuaDuanLiLv: '',
        benBiYuaDuanJingE: '',
        benBiYuaDuanLiLv: '',
        jinDuanQixiRi: Date.now(),
        jinDuanJiaogeRi: Date.now(),
        waiBiJinDuanJingE: '',
        waiBiJinDuanLiLv: '',
        benBiJinDuanJingE: '',
        benBiJinDuanLiLv: '',
        yuanDuanQixiRi: Date.now(),
        yuanDuanJiaogeRi: Date.now(),
        waiBiyuanDuanJingE: '',
        waiBiyuanDuanLiLv: '',
        benBiyuanDuanJingE: '',
        benBiyuanDuanLiLv: '',

      },
      europeanOptionForm: {
        currencyPair: '',
        direction: '',
        optionType: '',
        tradeDate: '',
        expireDate: '',
        jiaoGeDate: '',
        benbiQiQuanJingE: '',
        waibiQiQuanJingE: '',
        volatility: '',
        xingQuanJia: '',
        qiQuanFei: '',
        jiXiTianShuFangshi: 'ACT/365',
        yingYeRiGuiZe: '调整至下一营业日',
        boDonglvQuMianChaZhi: 'Linear of delta',
        zheXianQuxianChaZhi: 'Linear log normal',
        waiBiLiLvCurve: '美元隐含利率曲线',
        benBiLiLvCurve: '人名币FR007收益利率曲线',
        benBiDaoQiYuanQiLiLv: '',
        waiBiDaoQiYuanQiLiLv: '',
      },
      irsccsForm: {
        nominalCaptial: '',
        currencyType: '人民币',
        tradeLocation: '中国',
        tradeDate: Date.now(),
        interestDate: Date.now(),
        dueDate: Date.now(),
        evaluationDate: Date.now(),
        resetNominalCapital: '否',
        firstNominalCapitalResetDate: Date.now(),
        nominalCapitalResetFreq: '0.1',
        nominalCapitalResetStatus: '正常',
        nominalCapitalResetRatio: '10',
        nominalCapitalResetAmount: '1000',
        roleSelf: '收取',
        interestSetting: '固定利率',
        fixInterestRate: '4.1',
        payFreq: '1Y',
        interestBaseline: 'ACT/365',
        interestAdjustment: '实际天数调整',
        resetDateAdjustment: '本期初',
        resetDateAdjustmentDate: '1',
        firstInterestDate: Date.now(),
        resetFreq: '1D',
        interestType: '单利',
        actualPayDateAdj: '经调整的下一营业日',
        firstDeterminedInterestDate: Date.now(),
        endPeriodSpan: '自成一期',
        roleSelf2: '支付',
        interestSetting2: '浮动利率',
        floatingInterestDir2: '正浮动',
        payFreq2: '1Y',
        interestBaseline2: 'ACT/365',
        interestAdjustment2: '实际天数调整',
        resetDateAdjustment2: '本期初',
        resetDateAdjustmentDate2: '1',
        firstInterestDate2: Date.now(),
        resetFreq2: '1D',
        interestType2: '单利',
        actualPayDateAdj2: '经调整的下一营业日',
        firstDeterminedInterestDate2: Date.now(),
        endPeriodSpan2: '自成一期',
        calculationMethod: '本币交易法',
      },
      bondForm: {
        bondCode: '',
        bondRating: '',
        remainingDate: '',
        interestStartDate: '',
        exerciseDate: '',
        shouYiLv: '',
        piaoMianZongE: '',
        guZhiRi: '',
        zhaiQuanJianCheng: '',
        piaoMianLiLv: '',
        liLvFangShi: '',
        jieSuanRi: '',
        duiFuRi: '',
        liCha: '',
        jieSuanJingE: '',
        shouCiJiZhunLiLvChongZhiRi: '',
        jiZhunLiLvChongZhiPingLv: '',
        fuDongLiLvCha: '',
        fuDongLiLvBeiShu: '',
        fuDongLiLvShangXian: '',
        fuDongLiLvXiaXian: '',
        jixiRiTiaoZheng: '',
        fuxiRiTiaoZheng: '',
        fuXiPinLV: '',
        jiXiTianShuFangshi: '',
        yingYeRiGuiZe: '',
        zhaiQuanShouYiLvQuXianMingCheng: '',
        jiZhunLiLvCanKaoQuXian: '',
        zhaiQuanZheXianQuXian: '',
        jiZhunLiLv: '',
      },
      fxAttrData:[
        {TimeChange:0,FXRate:0,IRCurve:0,TotalFVChange:0},
      ],
      fxEuropeanOptionAttrData:[
        {TimeChange:0,FXRate:0,IRCurve:0,Volatility:0,TotalFVChange:0},
      ],
      IrsCcsAttrData:[
        {TimeChange:0,FXRate:0,IRCurve:0,TotalFVChange:0},
      ],
      BondAttrData:[
        {TimeChange:0,FXRate:0,Yield:0,TotalFVChange:0},
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
</style>

<style lang="scss" >

</style>
