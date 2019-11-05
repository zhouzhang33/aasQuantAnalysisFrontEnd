<template>
  <d2-container :filename="filename" type="full" class="page" better-scroll>
    <d2-grid-layout
            v-bind="layout"
            @layout-updated="layoutUpdatedHandler">
        <div>
          <div class="box-card" style="height:230px">
            <div class="box-card-title">
              交易要素
            </div>
            <div class="my-block">
              <el-col :span="6">
                <el-col :span="12">
                <div class="left-col1">头寸</div>
                <div class="left-col2">到期日</div>
                <div class="left-col1">行权价</div>
                <div class="left-col2">估值日</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-select
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
                <el-col :span="12">
                  <div class="left-col1">交易类型</div>
                  <div class="left-col2">通知期限</div>
                  <div class="left-col1">交割方式</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-select
                            class="oneContorls"
                            v-model="swaptionForm.jiaoYiLeiXing"
                            placeholder="请选择">
                      <el-option
                              v-for="item in jiaoYiLeiXingOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col2" >
                    <el-select
                            class="oneContorls"
                            v-model="swaptionForm.tongZhiQiXian"
                            placeholder="请选择">
                      <el-option
                              v-for="item in tongZhiQiXianOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col1" >
                    <el-select
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
                <el-col :span="12">
                  <div class="left-col1">交割日</div>
                  <div class="left-col2">交易对手</div>
                  <div class="left-col1">期权费</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="12">
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
                          class="oneContorls"
                          v-model="swaptionForm.jiaoYiDuiShou"
                          placeholder="请选择">
                    <el-option
                            v-for="item in jiaoYiDuiShouOptions"
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
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">起息日</div>
                  <div class="left-col2">币种</div>
                  <div class="left-col1">期权费交付日</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="12">
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
                            class="oneContorls"
                            v-model="swaptionForm.biZhong"
                            placeholder="请选择">
                      <el-option
                              v-for="item in biZhongOptions"
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
                <el-col :span="12">
                  <div class="left-col1">期权估值模型</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-select
                            class="oneContorls"
                            v-model="swaptionForm.qiQuanGuZhiMoXing"
                            placeholder="请选择">
                      <el-option
                              v-for="item in qiQuanGuZhiMoXingOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">波动率类型</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-select
                            class="oneContorls"
                            v-model="swaptionForm.boDongLvLeXing"
                            placeholder="请选择">
                      <el-option
                              v-for="item in qiQuanGuZhiMoXingOptions"
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
                <el-col :span="12">
                  <div class="left-col1">票面利率</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.piaoMianLiLv"
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">支付频率</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-select
                            class="oneContorls"
                            v-model="swaptionForm.zhiFuPingLv"
                            placeholder="请选择">
                      <el-option
                              v-for="item in zhiFuPingLvOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">计息天数方式</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-select
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
                <el-col :span="12">
                  <div class="left-col1">营业日规则</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-select
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
                <el-col :span="12">
                  <div class="left-col1">挂钩指数</div>
                  <div class="left-col2">支付频率</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input
                            class="oneContorls"
                            v-model="swaptionForm.guaGouZhiShu"
                    >
                    </el-input>
                  </div>
                  <div class="left-col2" >
                    <el-select
                            class="oneContorls"
                            v-model="swaptionForm.zhiFuPingLvFuDongDuan"
                            placeholder="请选择">
                      <el-option
                              v-for="item in zhiFuPingLvOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">浮动利率利差</div>
                  <div class="left-col2">计息天数方式</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.fuDongLiLvLiCha"
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" >
                      <el-select
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
                <el-col :span="12">
                  <div class="left-col1">杠杆率</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.gangGanLv"
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
              </el-col>

              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">重置频率</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-select
                            class="oneContorls"
                            v-model="swaptionForm.chongZhiPinLv"
                            placeholder="请选择">
                      <el-option
                              v-for="item in chongZhiPinLvOptions"
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
          <div class="box-card" style="height:96px">
            <div class="box-card-title">
              市场数据
            </div>
            <div class="my-block">
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">折现曲线</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.zheXianQuXian"
                    >
                    </el-input>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">远期曲线</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.yuanQiQuXian"
                    >
                    </el-input>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">波动率曲面</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.boDongLvQuMian"
                    >
                    </el-input>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1" style="color:transparent">a</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" style="color:transparent">a</div>
                </el-col>
              </el-col>
            </div>
          </div>
          <!--定价结果-->
          <div class="box-card" style="height:266px">
          <div class="box-card-title" style="margin-bottom:10px">
            定价结果
          </div>
          <el-row class="my-block">
            <div>
              <el-col>
                <el-col :span="4">
                  <el-button class="controls-a-line">计算NPV</el-button>
                </el-col>
                <el-col :span="4">
                  <el-button class="controls-a-line">推导隐含波动率</el-button>
                </el-col>
              </el-col>
            </div>
          </el-row>
            <el-row>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">平值行权价</div>
                  <div class="left-col2">NPV</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.pingZhiXingQuanJia"
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.NPV"
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
               <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">收益率</div>
                  <div class="left-col2">NPV(无费用)</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.shouYiLv"
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.NPVWuFeiYong"
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">隐含波动率</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.yinHanBoDongLv"
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">期权费</div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionResultForm.qiQuanFei"
                    >
                    </el-input-number>
                  </div>
                  <div class="left-col2" style="color:transparent">a</div>
                </el-col>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">DV01</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.DV01"
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">Gamma</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.Gamma"
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">Vega</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.Vega"
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-col :span="12">
                  <div class="left-col1">Theta</div>
                </el-col>
                <el-col :span="12">
                  <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="swaptionForm.Theta"
                    >
                    </el-input-number>
                  </div>
                </el-col>
              </el-col>
            </el-row>
          </div>
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
        rowHeight: 32,
        isDraggable: false,
        isResizable: false,
        isMirrored: false,
        verticalCompact: true,
        margin: [2, 3],
        useCssTransforms: true
      },
      swaptionForm: {
        touCun:'',
        jiaoYiLeiXing:'',
        jiaoGeRi:'',
        qiXiRi:'',
        daoQiRi:'',
        tongZhiQiXian:'0D',
        jiaoYiDuiShou:'',
        biZhong:'',
        xingQuanJia:'',
        jiaoGeFangShi:'',
        qiQuanFei:'',
        qiQuanFeiJiaoFuRi:'',
        guZhiRi:'',
        qiQuanGuZhiMoXing:'',
        boDongLvLeXing:'',
        piaoMianLiLv: '',
        zhiFuPingLv:'按季度',
        jiXiTianShuFangshi:'',
        yingYeRiGuiZe:'',
        guaGouZhiShu:'',
        fuDongLiLvLiCha:'',
        gangGanLv:'',
        chongZhiPinLv:'',
        zhiFuPingLvFuDongDuan:'',
        jiXiTianShuFangShiFuDongDuan:'',
        zheXianQuXian:'',
        yuanQiQuXian:'',
        boDongLvQuMian:''

      },
    swaptionResultForm:{
        pingZhiXingQuanJia:'',
      NPV:'',
      DV01:'',
      NPVWuFeiYong:'',
      qiQuanFei:'',
      Gamma:'',
      Vega:'',
      Theta:'',
      shouYiLv:'',
      yinHanBoDongLv:'',

    }
    }
  },
  mounted () {
  },
  methods: {
    // ****************************
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
