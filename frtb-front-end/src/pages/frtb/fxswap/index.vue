<template>
  <d2-container :filename="filename" type="full" class="page" better-scroll>
        <d2-grid-layout
                v-bind="layout"
                @layout-updated="layoutUpdatedHandler">
      <div>
        <el-col :span="24">
          <div class='box-card' style="height:340px">
                  <el-col :span="8">
                    <div class="box-card-title">
                      <span>交易要素</span>
                    </div>
                      <div class="my-block">
                    <el-col :span="12">
                      <div class="left-col1">货币对</div>
                      <div class="left-col2">交易类型</div>
                      <div class="left-col1">远端买卖方向</div>
                      <div class="left-col2">交易日</div>
                      <div class="left-col1">外币利率曲线名称</div>
                      <div class="left-col2">本币利率曲线名称</div>
                     </el-col>
                    <el-col :span="12">
                        <div class="left-col1" >
                            <el-select
                                    class="oneContorls"
                                    v-model="swapForm.currencyPair"
                                    placeholder="请选择">
                                <el-option
                                        v-for="item in currencyPairOptions"
                                        :key="item.key"
                                        :label="item.label"
                                        :value="item.value"
                                ></el-option>
                            </el-select>
                        </div>
                        <div class="left-col2" >
                            <el-select
                                    class="oneContorls"
                                    v-model="swapForm.tradingType"
                                    placeholder="请选择">
                                <el-option
                                        v-for="item in tradingTypeOptions"
                                        :key="item.key"
                                        :label="item.label"
                                        :value="item.value"
                                ></el-option>
                            </el-select>
                        </div>
                        <div class="left-col1" >
                            <el-select
                                    class="oneContorls"
                                    v-model="swapForm.yuanDuanMaiMaiFanagxiang"
                                    placeholder="请选择">
                                <el-option
                                        v-for="item in tradingDirectionOptions"
                                        :key="item.key"
                                        :label="item.label"
                                        :value="item.value"
                                ></el-option>
                            </el-select>
                        </div>
                        <div class="left-col2" >
                            <el-date-picker
                                    class="oneContorls"
                                    placeholder="选择日期"
                                    type="date"
                                    v-model="swapForm.tradingDate">
                            </el-date-picker>
                        </div>
                        <div class="left-col1" >
                            <el-select
                                    class="oneContorls"
                                    v-model="swapForm.currency1InterestCurve"
                                    placeholder="请选择">
                                <el-option
                                        v-for="item in currency1EarningCurveOptions"
                                        :key="item.key"
                                        :label="item.label"
                                        :value="item.value"
                                ></el-option>
                            </el-select>
                        </div>
                        <div class="left-col2" >
                            <el-select
                                    class="oneContorls"
                                    v-model="swapForm.currency2InterestCurve"
                                    placeholder="请选择">
                                <el-option
                                        v-for="item in currency2EarningCurveOptions"
                                        :key="item.key"
                                        :label="item.label"
                                        :value="item.value"
                                ></el-option>
                            </el-select>
                        </div>

                    </el-col>
                      </div>
                  </el-col>
<!--   中间                   -->
              <el-col :span="8">
                  <div class="box-card-title">
                      <span>定价参数</span>
                  </div>
                  <div class="my-block">
                  <el-col :span="12">
                      <div class="left-col1">插值方法</div>
                      <div class="left-col2">计息天数方式</div>
                      <div class="left-col1">营业日规则</div>
                      <div class="left-col2" style="color:transparent">a</div>
                      <div class="left-col1" style="color:transparent">a</div>
                      <div class="left-col2" style="color:transparent">a</div>
                  </el-col>
                  <el-col :span="12">
                      <div class="left-col1" >
                          <el-select
                                  class="oneContorls"
                                  v-model="swapForm.intepolationType"
                                  placeholder="请选择">
                              <el-option
                                      v-for="item in intepolationTypeOptions"
                                      :key="item.key"
                                      :label="item.label"
                                      :value="item.value"
                              ></el-option>
                          </el-select>
                      </div>
                      <div class="left-col2" >
                          <el-select
                                  class="oneContorls"
                                  v-model="swapForm.jiXiTianShuFangshi"
                                  placeholder="请选择">
                              <el-option
                                      v-for="item in jiXiTianShuFangshiOptions"
                                      :key="item.key"
                                      :label="item.label"
                                      :value="item.value"
                              ></el-option>
                          </el-select>
                      </div>
                      <div class="left-col1" >
                          <el-select
                                  class="oneContorls"
                                  v-model="swapForm.yingYeRiGuiZe"
                                  placeholder="请选择">
                              <el-option
                                      v-for="item in yingYeRiGuiZeOptions"
                                      :key="item.key"
                                      :label="item.label"
                                      :value="item.value"
                              ></el-option>
                          </el-select>
                      </div>
                      <div class="left-col2" style="color:transparent">a</div>
                      <div class="left-col1" style="color:transparent">a</div>
                      <div class="left-col2" style="color:transparent">a</div>

                  </el-col>
                  </div>
              </el-col>
<!--右边-->
              <el-col :span="8">
                  <div class="box-card-title">
                      <span>市场参数</span>
                  </div>
                  <div class="my-block">
                  <el-col :span="12">
                      <div class="left-col1">近端汇率</div>
                      <div class="left-col2">远端汇率</div>
                      <div class="left-col1"><el-button type="info" class="oneContorls" style="margin-left:60px" @click="showWaibiInterestCurve"> 外币利率曲线查看</el-button></div>
                      <div class="left-col2" style="color:transparent">a</div>
                      <div class="left-col1" style="color:transparent">a</div>
                      <div class="left-col2" style="color:transparent">a</div>
                  </el-col>
                  <el-col :span="12">
                      <div class="left-col1" >
                          <el-input-number
                                  :controls="false"
                                  class="oneContorls"
                                  v-model="swapForm.jinDuanHuiLv"
                          >
                          </el-input-number>
                      </div>
                      <div class="left-col2" >
                          <el-input-number
                                  :controls="false"
                                  class="oneContorls"
                                  v-model="swapForm.yuanDuanHuiLv"
                          >
                          </el-input-number>
                      </div>
                      <div class="left-col1" >
                          <el-button type="info" class="oneContorls" @click="showBenbiInterestCurve">本币利率曲线查看</el-button>
                      </div>
                      <div class="left-col2" style="color:transparent">a</div>
                      <div class="left-col1" style="color:transparent">a</div>
                      <div class="left-col2" style="color:transparent">a</div>
                  </el-col>
                  </div>
              </el-col>
                </div>


            <div class='box-card' style="height:155px">
                <div class="box-card-title">
                    <span>近端</span>
                </div>
                <div class="my-block" v-show="swapForm.tradingType==='掉期'">
                <el-col :span="8">
                    <el-col :span="12">
                        <div class="left-col1">近端起息日</div>
                        <div class="left-col2">近端交割</div>
                    </el-col>
                    <el-col :span="12">
                        <div class="left-col1" >
                            <el-date-picker
                                    class="oneContorls"
                                    placeholder="选择日期"
                                    type="date"
                                    v-model="swapForm.jinDuanQixiRi">
                            </el-date-picker>
                        </div>
                        <div class="left-col2" >
                            <el-date-picker
                                    class="oneContorls"
                                    placeholder="选择日期"
                                    type="date"
                                    v-model="swapForm.jinDuanJiaogeRi">
                            </el-date-picker>
                        </div>
                    </el-col>
                </el-col>
                <el-col :span="8">
                    <el-col :span="12">
                        <div class="left-col1">外币近端金额</div>
                        <div class="left-col2">外币近端利率</div>
                    </el-col>
                    <el-col :span="12">
                        <div class="left-col1" >
                            <el-input-number
                                    :controls="false"
                                    class="oneContorls"
                                    v-model="swapForm.waiBiJinDuanJingE"
                            >
                            </el-input-number>
                        </div>
                        <div class="left-col2" >
                            <el-input-number
                                    :controls="false"
                                    class="oneContorls"
                                    v-model="swapForm.waiBiJinDuanLiLv"
                            >
                            </el-input-number>
                        </div>
                    </el-col>
                </el-col>
                <el-col :span="8">
                    <el-col :span="12">
                        <div class="left-col1">本币近端金额</div>
                        <div class="left-col2">本币近端利率</div>
                    </el-col>
                    <el-col :span="12">
                        <div class="left-col1" >
                            <el-input-number
                                    :controls="false"
                                    class="oneContorls"
                                    v-model="swapForm.benBiJinDuanJingE"
                            >
                            </el-input-number>
                        </div>
                        <div class="left-col2" >
                            <el-input-number
                                    :controls="false"
                                    class="oneContorls"
                                    v-model="swapForm.benBiJinDuanLiLv"
                            >
                            </el-input-number>
                        </div>
                    </el-col>
                </el-col>
                </div>
            </div>

            <div class='box-card' style="height:155px">
                <div class="box-card-title">
                    <span>远端</span>
                </div>
                <div class="my-block">
                <el-col :span="8">
                    <el-col :span="12">
                        <div class="left-col1">远端起息日</div>
                        <div class="left-col2">远端交割日</div>
                    </el-col>
                    <el-col :span="12">
                        <div class="left-col1" >
                            <el-date-picker
                                    class="oneContorls"
                                    placeholder="选择日期"
                                    type="date"
                                    v-model="swapForm.yuanDuanQixiRi">
                            </el-date-picker>
                        </div>
                        <div class="left-col2" >
                            <el-date-picker
                                    class="oneContorls"
                                    placeholder="选择日期"
                                    type="date"
                                    v-model="swapForm.yuanDuanJiaogeRi">
                            </el-date-picker>
                        </div>
                    </el-col>
                </el-col>
                <el-col :span="8">
                    <el-col :span="12">
                        <div class="left-col1">外币远端金额</div>
                        <div class="left-col2">外币远端利率</div>
                    </el-col>
                    <el-col :span="12">
                        <div class="left-col1" >
                            <el-input-number
                                    :controls="false"
                                    class="oneContorls"
                                    v-model="swapForm.waiBiyuanDuanJingE"
                            >
                            </el-input-number>
                        </div>
                        <div class="left-col2" >
                            <el-input-number
                                    :controls="false"
                                    class="oneContorls"
                                    v-model="swapForm.waiBiyuanDuanLiLv"
                            >
                            </el-input-number>
                        </div>
                    </el-col>
                </el-col>
                <el-col :span="8">
                    <el-col :span="12">
                        <div class="left-col1">本币近端金额</div>
                        <div class="left-col2">本币近端利率</div>
                    </el-col>
                    <el-col :span="12">
                        <div class="left-col1" >
                            <el-input-number
                                    :controls="false"
                                    class="oneContorls"
                                    v-model="swapForm.benBiyuanDuanJingE"
                            >
                            </el-input-number>
                        </div>
                        <div class="left-col2" >
                            <el-input-number
                                    :controls="false"
                                    class="oneContorls"
                                    v-model="swapForm.benBiyuanDuanLiLv"
                            >
                            </el-input-number>
                        </div>
                    </el-col>
                </el-col>
                </div>
            </div>



          <div class='box-card' style="height:135px">
              <div class="box-card-title">
                  <span>计算结果</span>
              </div>
            <div style="padding:20px;margin:auto">
                <el-row>
                    <span v-show="swapForm.tradingType==='掉期'">
                      <span class="controls-a-line" style="margin-left:50px">PV1 </span>
                      <el-input-number
                              :controls="false"
                              class="controls-a-line"
                              disabled
                              v-model="swapFormResult.PV1"
                      >
                      </el-input-number>
                      <span class="controls-a-line" style="margin-left:50px">PV2 </span>
                      <el-input-number
                              :controls="false"
                              class="controls-a-line"
                              disabled
                              v-model="swapFormResult.PV2"
                      >
                      </el-input-number>
                    </span>
                  <span class="controls-a-line" style="margin-left:50px">NPV </span>
                  <el-input-number
                          :controls="false"
                          class="controls-a-line"
                          disabled
                          v-model="swapFormResult.PV1"
                  >
                  </el-input-number>
                  <span>
                  <el-radio v-model="calcUnit" label="CYN"></el-radio>
                  <el-radio v-model="calcUnit" label="USD"></el-radio>
                 </span>
                  <el-button class="controls-a-line" type="info" @click="calcPricing">计算NPV</el-button>
                  <el-button class="controls-a-line" type="info" @click="getSystemEarningRate">计算隐含利率曲线</el-button>
                  <el-button class="controls-a-line" type="info" @click="resetInputs">清空</el-button>
              </el-row>

            </div>
          </div>


            <div class='box-card' style="height:385px">
                <div class="box-card-title">
                    <span>套利空间计算</span>
                </div>

              <el-row>
                  <el-col :span="16" style="color:transparent">a</el-col>
                  <el-col :span="7">
                      <span>
                         <el-radio v-model="swapTaoLiFormResult.calcNPVUnit" label="CYN"></el-radio>
                         <el-radio v-model="swapTaoLiFormResult.calcNPVUnit" label="USD"></el-radio>
                      </span>
                      <el-button class="controls-a-line" type="info"@click="">计算套利空间</el-button>
                  </el-col>
              </el-row>

                  <div class="my-block" style="margin-top: 20px">
                      <el-col :span="8">
                          <el-col :span="12">
                              <div class="left-col1">外币利率曲线</div>
                              <div class="left-col2">本币利率曲线</div>
                          </el-col>
                          <el-col :span="12" >
                              <div class="left-col1" >
                                  <el-select   class="oneContorls" v-model="swapTaoLiForm.waiBiLiLvCurve" placeholder="选择曲线名称">
                                      <el-option
                                              class="oneContorls"
                                              v-for="item in currency1EarningCurveOptions"
                                              :key="item.key"
                                              :label="item.label"
                                              :value="item.value"
                                      ></el-option>
                                  </el-select>
                              </div>
                              <div class="left-col2" >
                                  <el-select  class="oneContorls" v-model="swapTaoLiForm.benBiLiLvCurve" placeholder="选择曲线名称">
                                      <el-option
                                              v-for="item in currency2EarningCurveOptions"
                                              :key="item.key"
                                              :label="item.label"
                                              :value="item.value"
                                      ></el-option>
                                  </el-select>
                              </div>
                          </el-col>
                      </el-col>
                      <el-col :span="8" v-if="swapForm.tradingType==='掉期'">
                          <el-col :span="12">
                              <div class="left-col1">PV1</div>
                              <div class="left-col2">PV2</div>
                          </el-col>
                          <el-col :span="12" >
                              <div class="left-col1" >
                                  <el-input-number
                                          :controls="false"
                                          class="oneContorls"
                                          disabled
                                          v-model="swapTaoLiFormResult.PV1"
                                  >
                                  </el-input-number>
                              </div>
                              <div class="left-col2" >
                                  <el-input-number
                                          :controls="false"
                                          class="oneContorls"
                                          disabled
                                          v-model="swapTaoLiFormResult.PV2"
                                  >
                                  </el-input-number>
                              </div>
                          </el-col>
                      </el-col>
                      <el-col :span="8" v-else>
                          <div class="left-col1" style="color:transparent">a</div>
                          <div class="left-col2" style="color:transparent">a</div>
                      </el-col>
                      <el-col :span="8">
                          <el-col :span="12">
                              <div class="left-col1">NPV</div>
                              <div class="left-col2">套利空间</div>
                          </el-col>
                          <el-col :span="12">
                              <div class="left-col1" >
                                  <el-input-number
                                          disabled
                                          :controls="false"
                                          class="oneContorls"
                                          v-model="swapTaoLiFormResult.NPV"
                                  >
                                  </el-input-number>
                              </div>
                              <div class="left-col2" >
                                  <el-input-number
                                          :controls="false"
                                          disabled
                                          class="oneContorls"
                                          v-model="swapTaoLiFormResult.taoLiKongJian"
                                  >
                                  </el-input-number>
                              </div>
                          </el-col>
                      </el-col>
                  </div>

              </div>

        </el-col>



      </div>

      <div>
            <el-dialog
                    title="利率曲线"
                    :visible.sync="interestialogTableVisible"
                    :append-to-body="true"

            >
                <div class='box-card' style="height:100%">
                    <div class="box-card-title"></div>

                <el-table
                        :data="interestCurveData"
                        :cell-style="rowstyle"
                        :header-cell-style="headerstyle"
                >
                    <el-table-column property="date" label="日期" ></el-table-column>
                    <el-table-column property="rate" label="利率"></el-table-column>
                </el-table>
                </div>
            </el-dialog>
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
      currencyPairOptions,
      yingYeRiGuiZeOptions,
      jiXiTianShuFangshiOptions,
      currency1EarningCurveOptions,
      currency2EarningCurveOptions,
      intepolationTypeOptions,
      curveNameOptions,
      tradingTypeOptions,
      tradingDirectionOptions,
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
        interestialogTableVisible:false,
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
              jinDuanQiXiRi:  Date.now(),
              jinDuanJiaoGeRi:  Date.now(),
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
          swapTaoLiForm:{
            waiBiLiLvCurve:'美元隐含利率曲线',
            benBiLiLvCurve:'人名币FR007收益利率曲线',
          },
          swapFormResult: {
              PV1: '',
              PV2: '',
              NPV: '',
          },
          swapTaoLiFormResult: {
              PV1: '',
              PV2: '',
              NPV: '',
              taoLiKongJian:'',
              calcNPVUnit:'CYN'
        },
        costResult:'',
        calcUnit:'CYN',
        currencyPairOptions: currencyPairOptions,
        yingYeRiGuiZeOptions:yingYeRiGuiZeOptions,
        jiXiTianShuFangshiOptions:jiXiTianShuFangshiOptions,
        currency1EarningCurveOptions:currency1EarningCurveOptions,
        currency2EarningCurveOptions:currency2EarningCurveOptions,
        intepolationTypeOptions:intepolationTypeOptions,
        curveNameOptions:curveNameOptions,
        tradingTypeOptions: tradingTypeOptions,
        tradingDirectionOptions:tradingDirectionOptions,
          interestCurveData:'',
         interestBenBiCurveData: [{
              date: '2016-05-02',
              rate: '6',

          }, {
              date: '2017-05-04',
              rate: '6.1',

          }, {
              date: '2018-05-01',
              rate: '6.2',

          }, {
              date: '2019-05-03',
              rate: '6.3',

          }],
        interestWaiBiCurveData: [{
            date: '2016-05-02',
            rate: '8',

        }, {
            date: '2017-05-04',
            rate: '8.1',

        }, {
            date: '2018-05-01',
            rate: '8.2',

        }, {
            date: '2019-05-03',
            rate: '8.3',

        }],
      }
    },
    mounted () {
    },
    methods: {
      // ****************************
        showWaibiInterestCurve(){
            this.interestCurveData=this.interestWaiBiCurveData
            this.interestialogTableVisible=true;

        },
        showBenbiInterestCurve(){
            this.interestCurveData=this.interestBenBiCurveData
            this.interestialogTableVisible=true;
        },


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
        this.currencyPair='USD/CNY';
        this.tradingType='掉期';
        this.yuanDuanMaiMaiFanagxiang='买入';
        this.tradingDate=Date.now();
        this.currency1InterestCurve='美元隐含利率曲线';
        this.currency2InterestCurve='人名币FR007收益利率曲线';
        this.intepolationType='线性插值';
        this.jiXiTianShuFangshi='ACT/365';
        this.yingYeRiGuiZe='调整至下一营业日';
        this.jinDuanHuiLv='';
        this.yuanDuanHuiLv='';
        this.jinDuanQiXiRi= Date.now();
        this.jinDuanJiaoGeRi= Date.now();
        this.waiBiJinDuanJingE='';
        this.waiBiJinDuanLiLv='';
        this.benBiJinDuanJingE='';
        this.benBiJinDuanLiLv='';
        this.waiBiYuanDuanJingE='';
        this.waiBiYuaDuanLiLv='';
        this.benBiYuaDuanJingE='';
        this.benBiYuaDuanLiLv='';
        this.jinDuanQixiRi=Date.now();
        this.jinDuanJiaogeRi=Date.now();
        this.waiBiJinDuanJingE='';
        this.waiBiJinDuanLiLv='';
        this.benBiJinDuanJingE='';
        this.benBiJinDuanLiLv='';
        this.yuanDuanQixiRi=Date.now();
        this.yuanDuanJiaogeRi=Date.now();
        this.waiBiyuanDuanJingE='';
        this.waiBiyuanDuanLiLv='';
        this.benBiyuanDuanJingE='';
        this.benBiyuanDuanLiLv='';
      },
      getSystemEarningRate() {
        //这里是call API
        this.swapForm.currentInterestRate=1;
        this.swapForm.nearInterestRate=1;
        this.swapForm.farInterestRate=1;
      },

      calcTaoLiKongJian(){
          console.log('call pricing')
          calcFXFWDSwap(this.swapForm).then(res => {
              console.log(res,'res')
          }).catch(function (error){
              console.log(error);
              vm.errorMsg = error;
          });
      },

      calcPricing() {
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

  .controls-a-line{
      margin:10px 5px 5px 50px;
  }
  .oneControls {
      width: 135px;
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
</style>

<style lang="scss" >

</style>
