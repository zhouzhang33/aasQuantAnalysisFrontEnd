<template>
  <d2-container :filename="filename" type="full" class="page" better-scroll>
    <d2-grid-layout
            v-bind="layout">
        <div>
          <div class="box-card" style="height:230px">
            <div class="box-card-title">
              交易要素
            </div>
            <div class="my-block">
              <el-col :span="6">
                <el-col :span="8">
                <div class="left-col1">头寸</div>
                <div class="left-col2">到期日</div>
                <div class="left-col1">行权价</div>
                <div class="left-col2">估值日</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            v-model="swaptionForm.touCun"
                            placeholder="请选择">
                      <el-option
                              v-for="item in touCunOptions"
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
                            v-model="swaptionForm.daoQiRi">
                    </el-date-picker>
                  </div>
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.xingQuanJia"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" >
                    <el-date-picker
                            class="oneContorls"
                            placeholder="选择日期"
                            type="date"
                            v-model="swaptionForm.guZhiRi">
                    </el-date-picker>
                  </div>
                </el-col>
              </el-col>

              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">交易类型</div>
                  <div class="left-col2">通知期限</div>
                  <div class="left-col1">交割方式</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            v-model="swaptionForm.jiaoYiLeiXing"
                            placeholder="请选择">
                      <el-option
                              v-for="item in swaptionTradingTypeOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col2" >
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            v-model="swaptionForm.tongZhiQiXian"
                            placeholder="请选择">
                      <el-option
                              v-for="item in notificationDateOption"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col1" >
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            v-model="swaptionForm.jiaoGeFangShi"
                            placeholder="请选择">
                      <el-option
                              v-for="item in jiaoGeFangShiOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
              </el-col>

              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">交割日</div>
                  <div class="left-col2">交易对手</div>
                  <div class="left-col1">期权费</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-date-picker
                            class="oneContorls"
                            placeholder="选择日期"
                            type="date"
                            v-model="swaptionForm.jiaoGeRi">
                    </el-date-picker>
                  </div>
                  <div class="left-col2" >
                    <el-select
                           filterable
                           allow-create
                           default-first-option
                          class="oneContorls"
                          v-model="swaptionForm.jiaoYiDuiShou"
                          placeholder="请选择">
                    <el-option
                            v-for="item in swaptionJiaoYiDuiShouOptions"
                            :key="item.key"
                            :label="item.label"
                            :value="item.value"
                    ></el-option>
                  </el-select>
                  </div>
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.qiQuanFei"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">起息日</div>
                  <div class="left-col2">币种</div>
                  <div class="left-col1">期权费交付日</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-date-picker
                            class="oneContorls"
                            placeholder="选择日期"
                            type="date"
                            v-model="swaptionForm.qiXiRi">
                    </el-date-picker>
                  </div>
                  <div class="left-col2" >
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            v-model="swaptionForm.biZhong"
                            placeholder="请选择">
                      <el-option
                              v-for="item in currencyOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col1" >
                    <el-date-picker
                            class="oneContorls"
                            placeholder="选择日期"
                            type="date"
                            v-model="swaptionForm.qiQuanFeiJiaoFuRi">
                    </el-date-picker>
                  </div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
              </el-col>
            </div>
          </div>
<!--          定价参数-->
          <div class="box-card" style="height:96px">
            <div class="box-card-title">
              定价参数
            </div>
            <div class="my-block">
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">期权估值模型</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            v-model="swaptionForm.qiQuanGuZhiMoXing"
                            placeholder="请选择">
                      <el-option
                              v-for="item in swaptionPricingModelOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">波动率类型</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            v-model="swaptionForm.boDongLvLeXing"
                            placeholder="请选择">
                      <el-option
                              v-for="item in volatilityTypeOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-col>
            </div>
          </div>
          <div class="box-card" style="height:96px">
            <div class="box-card-title">
              固定端
            </div>
            <div class="my-block">
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">票面利率</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.piaoMianLiLv"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">支付频率</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            v-model="swaptionForm.zhiFuPingLv"
                            placeholder="请选择">
                      <el-option
                              v-for="item in fuXiPinLVOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">计息天数方式</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            v-model="swaptionForm.jiXiTianShuFangshi"
                            placeholder="请选择">
                      <el-option
                              v-for="item in jiXiTianShuFangshiOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">营业日规则</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            v-model="swaptionForm.yingYeRiGuiZe"
                            placeholder="请选择">
                      <el-option
                              v-for="item in yingYeRiGuiZeOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-col>

            </div>
          </div>
<!--浮动段-->
          <div class="box-card" style="height:145px">
            <div class="box-card-title">
              浮动端
            </div>
            <div class="my-block">
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">挂钩指数</div>
                  <div class="left-col2">支付频率</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input
                            class="oneContorls"
                            v-model="swaptionForm.guaGouZhiShu"
                    >
                    </el-input>
                  </div>
                  <div class="left-col2" >
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            v-model="swaptionForm.zhiFuPingLvFuDongDuan"
                            placeholder="请选择">
                      <el-option
                              v-for="item in fuXiPinLVOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">浮动利率利差</div>
                  <div class="left-col2">计息天数方式</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.fuDongLiLvLiCha"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" >
                      <el-select
                              filterable
                              allow-create
                              default-first-option
                              class="oneContorls"
                              v-model="swaptionForm.jiXiTianShuFangShiFuDongDuan"
                              placeholder="请选择">
                        <el-option
                                v-for="item in jiXiTianShuFangshiOptions"
                                :key="item.key"
                                :label="item.label"
                                :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">杠杆率</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.gangGanLv"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">重置频率</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneContorls"
                            v-model="swaptionForm.chongZhiPinLv"
                            placeholder="请选择">
                      <el-option
                              v-for="item in fuXiPinLVOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
              </el-col>
            </div>
          </div>
          <!--市场数据-->
          <div class="box-card" style="height:145px">
            <div class="box-card-title">
              市场数据
            </div>
            <div class="my-block">
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">折现曲线</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.zheXianQuXian"
                    >
                    </el-input>
                  </div>
                  <div class="left-col2">
                    <el-button type="info" class="curvebutton" @click="showBenbiInterestCurve">查看折现曲线</el-button>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">远期曲线</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.yuanQiQuXian"
                    >
                    </el-input>
                  </div>
                  <div class="left-col2">
                    <el-button type="info" class="curvebutton" @click="showBenbiInterestCurve">查看远期曲线</el-button>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">波动率曲面</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.boDongLvQuMian"
                    >
                    </el-input>
                  </div>
                  <div class="left-col2">
                    <el-button type="info" class="curvebutton" @click="showVolatilityCurve">动率曲面</el-button>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1" style="color:transparent">a</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" style="color:transparent">a</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
              </el-col>
            </div>
          </div>
          <!--定价结果-->
          <div class="box-card" style="height:271px">
          <div class="box-card-title" style="margin-bottom:10px">
            定价结果
          </div>
          <el-row class="my-block">
            <div>
              <el-col>
                <el-col :span="4">
                  <el-button type="info" class="controls-a-line curvebutton" @click="calcPricing">计算NPV</el-button>
                </el-col>
                <el-col :span="4">
                  <el-button type="info" class="controls-a-line curvebutton" @click="calcHiddenVolatility">推导隐含波动率</el-button>
                </el-col>
              </el-col>
            </div>
          </el-row>
            <el-row>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">平值行权价</div>
                  <div class="left-col2">NPV</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.pingZhiXingQuanJia"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.NPV"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
               <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">收益率</div>
                  <div class="left-col2">NPV(无费用)</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.shouYiLv"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.NPVWuFeiYong"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">隐含波动率</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.yinHanBoDongLv"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">期权费</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.qiQuanFei"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">DV01</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.DV01"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">Gamma</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.Gamma"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">Vega</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.Vega"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="8">
                  <div class="left-col1">Theta</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.Theta"
                            :precision=5
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
            </el-row>
          </div>
        </div>
      <div>
        <el-dialog
                title="利率曲线"
                :visible.sync="interestialogTableVisible"
                :append-to-body="true"
                width="70%"

        >
          <div class='box-card' style="height:100%">
            <div class="box-card-title"> {{ dialogName }}</div>
            <div v-if="showtable === true">
              <el-table
                      :data="interestCurveData"
                      :cell-style="rowstyle"
                      :header-cell-style="headerstyle"
              >
                <el-table-column property="MarketDataType" label="MarketDataType" ></el-table-column>
                <el-table-column property="Source" label="Source"></el-table-column>
                <el-table-column property="Currency" label="Currency"></el-table-column>
                <el-table-column property="Tenor" label="Tenor"></el-table-column>
                <el-table-column property="ASK" label="ASK"></el-table-column>
                <el-table-column property="BID" label="BID"></el-table-column>
                <el-table-column property="MID" label="MID"></el-table-column>
              </el-table>
            </div>
            <div v-else>
              <div style="margin-top:20px">
                <survecurve :curvename="dialogName" style="width:99%;height:100%"/>
              </div>
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
  getInterestCurve,
  getSwaptionPricingResult,
  SavePricing
} from '@api/index'
import survecurve from '../UIPara/surf'
import {
  touCunOptions,
  swaptionTradingTypeOptions,
  notificationDateOption,
  jiaoGeFangShiOptions,
  swaptionJiaoYiDuiShouOptions,
  currencyOptions,
  swaptionPricingModelOptions,
  volatilityTypeOptions,
  fuXiPinLVOptions,
  jiXiTianShuFangshiOptions,
  yingYeRiGuiZeOptions,
} from '../UIPara/UIPara'

import {
  swaptionForm,
  swaptionResultForm
} from '../UIPara/FRTBParam'

export default {
  components: {
    survecurve
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
        rowHeight: 34,
        isDraggable: false,
        isResizable: false,
        isMirrored: false,
        verticalCompact: true,
        margin: [2, 3],
        useCssTransforms: true
      },

      touCunOptions:touCunOptions,
      swaptionTradingTypeOptions:swaptionTradingTypeOptions,
      notificationDateOption:notificationDateOption,
      jiaoGeFangShiOptions:jiaoGeFangShiOptions,
      swaptionJiaoYiDuiShouOptions:swaptionJiaoYiDuiShouOptions,
      currencyOptions:currencyOptions,
      swaptionPricingModelOptions:swaptionPricingModelOptions,
      volatilityTypeOptions:volatilityTypeOptions,
      fuXiPinLVOptions:fuXiPinLVOptions,
      jiXiTianShuFangshiOptions:jiXiTianShuFangshiOptions,
      yingYeRiGuiZeOptions:yingYeRiGuiZeOptions,
      fuXiPinLVOptions:fuXiPinLVOptions,
      interestialogTableVisible:false,
      showtable:true,
      dialogName:'',
      interestCurveData:null,
      swaptionForm:swaptionForm,
      swaptionResultForm:swaptionResultForm
    }
  },
  mounted () {
  },
  methods: {
    calcHiddenVolatility(){
      console.log('calcHiddenVolatility');

    },
    calcPricing(){
      console.log('call pricing')
      getSwaptionPricingResult('NPV',this.swaptionForm).then(res => {
        console.log(res,'res')
        var keys = Object.keys(res['Result']);
        for(var i=0; i<keys.length; i++){
          this.swaptionResultForm[keys[i]]=res['Result'][keys[i]];
        }

      }).catch(function (error) {
        console.log(error);
        vm.errorMsg = error;
      });
      var data={name:Date.now(),Input:this.swapForm,Result:this.swapFormResult};
      SavePricing('fxswap',data)
    },
    showBenbiInterestCurve(){
      var self = this;
      getInterestCurve('CNY_Repo7D').then(res => {
        self.interestCurveData = res.list;

      });
      this.dialogName='本币利率曲线';
      // this.interestCurveData=this.interestWaiBiCurveData
      this.interestialogTableVisible=true;
      this.showtable=true
    },
    showVolatilityCurve(){
      console.log('in volatility curve')
      this.showtable=false;
      this.dialogName='波动率曲面';
      this.interestialogTableVisible=true;


    },
    rowstyle (row) {
      if (row.rowIndex % 2 === 0) {
        return 'height:50px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px'
      } else {
        return 'height:50px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px'
      }
    },
    rowstyleInfo (row) {
      if (row.rowIndex % 2 === 0) {
        return 'height:50px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px'
      } else {
        return 'height:50px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px'
      }
    },
    headerstyle (row) {
      return 'height:50px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px'
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

</style>
