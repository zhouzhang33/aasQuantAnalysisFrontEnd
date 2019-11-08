<template>
  <d2-container :filename="filename" type="full" class="page" better-scroll>
    <d2-grid-layout
            v-bind="layout">
      <div class="box-card" style="height:180px">
        <div class="box-card-title">交易要素</div>
        <div class="my-block">
          <el-col :span="6">
            <el-col :span="8">
              <div class="left-col1">估值日</div>
              <div class="left-col2">货币对</div>
              <div class="left-col1">数字期权类型</div>
            </el-col>
            <el-col :span="16">
              <div class="left-col1">
                <el-date-picker
                        class="oneControls"
                        placeholder="选择日期"
                        type="date"
                        v-model="digitaloptionForm.guZhiRi">
                </el-date-picker>
              </div>
              <div class="left-col2">
              <el-select
                      class="oneContorls"
                      v-model="digitaloptionForm.currencyPair"
                      placeholder="请选择">
                <el-option
                        v-for="item in currencyPairOptions"
                        :key="item.key"
                        :label="item.label"
                        :value="item.value"
                ></el-option>
              </el-select>
              </div>
              <div class="left-col1">
                <el-select
                        class="oneContorls"
                        v-model="digitaloptionForm.digitalOptionType"
                        placeholder="请选择">
                  <el-option
                          v-for="item in digitalOptionTypeOptions"
                          :key="item.key"
                          :label="item.label"
                          :value="item.value"
                  ></el-option>
                </el-select>
              </div>

            </el-col>
          </el-col>

<!--          第二列-->
          <el-col :span="6">
            <el-col :span="8">
              <div class="left-col1">起息日</div>
              <div class="left-col2">本币金额</div>
              <div class="left-col1">买卖方向</div>
            </el-col>
            <el-col :span="16">
              <div class="left-col1">
                <el-date-picker
                        class="oneControls"
                        placeholder="选择日期"
                        type="date"
                        v-model="digitaloptionForm.qiXiRi">
                </el-date-picker>
              </div>
              <div class="left-col2" >
                <el-input-number
                        :controls="false"
                        class="oneContorls"
                        v-model="digitaloptionForm.benBiJingE"
                >
                </el-input-number>
              </div>
              <div class="left-col1" >
                <el-select
                        class="oneContorls"
                        v-model="digitaloptionForm.maiMaiFangXiang"
                        placeholder="请选择">
                  <el-option
                          v-for="item in tradingDirectionOptions"
                          :key="item.key"
                          :label="item.label"
                          :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-col>
<!--          第三列-->
          <el-col :span="6">
            <el-col :span="8">
              <div class="left-col1">交割日</div>
              <div class="left-col2">外币金额</div>
              <div class="left-col1">期权行权方向</div>
            </el-col>
            <el-col :span="16">
              <div class="left-col1">
                <el-date-picker
                        class="oneControls"
                        placeholder="选择日期"
                        type="date"
                        v-model="digitaloptionForm.jiaoGeRi">
                </el-date-picker>
              </div>
              <div class="left-col2" >
                <el-input-number
                        :controls="false"
                        class="oneContorls"
                        v-model="digitaloptionForm.waiBiJinE"
                >
                </el-input-number>
              </div>
              <div class="left-col1">
                <el-select
                        class="oneContorls"
                        v-model="digitaloptionForm.optionDirection"
                        placeholder="请选择">
                  <el-option
                          v-for="item in tradingDirectionOptions"
                          :key="item.key"
                          :label="item.label"
                          :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-col>
<!--          第四列-->
          <el-col :span="6">
            <el-col :span="8">
              <div class="left-col1">到期日</div>
              <div class="left-col2">行权价</div>

            </el-col>
            <el-col :span="16">
              <div class="left-col1">
                <el-date-picker
                        class="oneControls"
                        placeholder="选择日期"
                        type="date"
                        v-model="digitaloptionForm.daoQiRi">
                </el-date-picker>
              </div>
              <div class="left-col2">
                <el-input-number
                        :controls="false"
                        class="oneControls"
                        v-model="digitaloptionForm.xingQuanJia"
                >
                </el-input-number>
              </div>

            </el-col>
          </el-col>

        </div>
      </div>

      <div class="box-card" style="height:96px">
        <div class="box-card-title">定价参数</div>
        <div class="my-block">
          <el-col :span="6">
            <el-col :span="8">
              <div class="left-col1">营业日规则</div>
            </el-col>
            <el-col :span="16">
              <div class="left-col1" >
                <el-select class="oneControls"
                           placeholder="请选择"
                           v-model="digitaloptionForm.yingYeRiGuiZe">
                  <el-option
                          :key="item.key"
                          :label="item.label"
                          :value="item.value"
                          v-for="item in yingYeRiGuiZeOptions"
                  ></el-option>
                </el-select>
              </div>

            </el-col>

          </el-col>
          <el-col :span="6">
            <el-col :span="8">
              <div class="left-col1">计息天数</div>
            </el-col>
            <el-col :span="16">
              <div class="left-col1" >
                <el-select class="oneControls"
                           placeholder="请选择"
                           v-model="digitaloptionForm.jiXiTianShuFangshi">
                  <el-option
                          :key="item.key"
                          :label="item.label"
                          :value="item.value"
                          v-for="item in jiXiTianShuFangshiOptions"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-col>
          <el-col :span="12">
            <div class="left-col1" style="color:transparent">a</div>
          </el-col>
        </div>
      </div>

      <div class="box-card" style="height:150px">
        <div class="box-card-title">市场数据</div>
        <el-col :span="6">
          <el-col :span="8">
            <div class="left-col1">本币远期利率</div>
            <div class="left-col2" style="color:transparent">a</div>
          </el-col>
          <el-col :span="16">
            <div class="left-col1">
              <el-input-number
                      :controls="false"
                      class="oneControls"
                      v-model="digitaloptionForm.benBiDaoQiYuanQiLiLv"
              >
              </el-input-number>
            </div>
            <div class="left-col2">
              <el-button type="info" class="curvebutton" >查看本币远期利率曲线</el-button>
            </div>
          </el-col>
        </el-col>
        <el-col :span="6">
          <el-col :span="8">
            <div class="left-col1">外币远期利率</div>
            <div class="left-col2" style="color:transparent">a</div>
          </el-col>
          <el-col :span="16">
            <div class="left-col1">
              <el-input-number
                      :controls="false"
                      class="oneControls"
                      v-model="digitaloptionForm.waiBiDaoQiYuanQiLiLv"
              >
              </el-input-number>
            </div>
            <div class="left-col2">
              <el-button type="info" class="curvebutton" >查看外币远期利率曲线</el-button>
            </div>
          </el-col>
        </el-col>
        <el-col :span="6">
          <el-col :span="8">
            <div class="left-col1">外币即期价格</div>
            <div class="left-col2" style="color:transparent">a</div>
          </el-col>
          <el-col :span="16">
            <div class="left-col1">
              <el-input-number
                      :controls="false"
                      class="oneControls"
                      v-model="digitaloptionForm.waiBiDaoJiQiJiaGe"
              >
              </el-input-number>
            </div>
            <div class="left-col2" style="color:transparent">a</div>
          </el-col>
        </el-col>

        <el-col :span="6">
          <div class="left-col1" style="color:transparent">a</div>
          <div class="left-col2">
            <el-button type="info" class="curvebutton" @click="showVolatilityCurve">查看波动率曲面</el-button>
          </div>
        </el-col>
      </div>


      <div class="box-card" style="height:468px">
        <div class="box-card-title">
          定价结果
        </div>
        <div class="my-block">
          <div style="margin-top:50px">
            <el-button type="info" class="curvebutton" @click="calcPricing" >计算NPV</el-button>
          </div>
          <div style="margin-top:50px">
          <el-col :span="6">
            <el-col :span="8">
              <div class="left-col1">NPV</div>
              <div class="left-col2">Vega</div>
            </el-col>
            <el-col :span="16">
              <div class="left-col1" >
                <el-input-number
                        :controls="false"
                        class="oneContorls"
                        v-model="digitaloptionResultForm.NPV"
                >
                </el-input-number>
              </div>
              <div class="left-col2" >
                <el-input-number
                        :controls="false"
                        class="oneContorls"
                        v-model="digitaloptionResultForm.Vega"
                >
                </el-input-number>
              </div>
            </el-col>

          </el-col>
          <el-col :span="6">
            <el-col :span="8">
              <div class="left-col1">Delta</div>
              <div class="left-col2">Theta</div>
            </el-col>
            <el-col :span="16">
              <div class="left-col1" >
                <el-input-number
                        :controls="false"
                        class="oneContorls"
                        v-model="digitaloptionResultForm.Delta"
                >
                </el-input-number>
              </div>
              <div class="left-col2" >
                <el-input-number
                        :controls="false"
                        class="oneContorls"
                        v-model="digitaloptionResultForm.Vega"
                >
                </el-input-number>
              </div>
            </el-col>
          </el-col>
          <el-col :span="6">
            <el-col :span="8">
              <div class="left-col1">Gamma</div>
              <div class="left-col2">Rho1</div>
            </el-col>
            <el-col :span="16">
              <div class="left-col1" >
                <el-input-number
                        :controls="false"
                        class="oneContorls"
                        v-model="digitaloptionResultForm.Gamma"
                >
                </el-input-number>
              </div>
              <div class="left-col2" >
                <el-input-number
                        :controls="false"
                        class="oneContorls"
                        v-model="digitaloptionResultForm.Rho1"
                >
                </el-input-number>
              </div>
            </el-col>
          </el-col>
          <el-col :span="6">
            <el-col :span="8">
              <div class="left-col1" style="color:transparent">a</div>
              <div class="left-col2">Rho2</div>
            </el-col>
            <el-col :span="16">
              <div class="left-col1" style="color:transparent">a</div>
              <div class="left-col2" >
                <el-input-number
                        :controls="false"
                        class="oneContorls"
                        v-model="digitaloptionResultForm.Rho1"
                >
                </el-input-number>
              </div>
            </el-col>
          </el-col>
          </div>
        </div>
      </div>

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


    </d2-grid-layout>
  </d2-container>
</template>

<script>

import {
  getInterestCurve,
  getFXDigitalPricingResult,
  SavePricing
} from '@api/index'
import survecurve from '../UIPara/surf'
import {
  currencyPairOptions,
  tradingDirectionOptions,
  yingYeRiGuiZeOptions,
  jiXiTianShuFangshiOptions,
  digitalOptionTypeOptions
} from '../UIPara/UIPara'

import {
  digitaloptionForm,
  digitaloptionResultForm
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
        rowHeight: 30,
        isDraggable: false,
        isResizable: false,
        isMirrored: false,
        verticalCompact: true,
        margin: [2, 3],
        useCssTransforms: true
      },

      currencyPairOptions:currencyPairOptions,
      tradingDirectionOptions:tradingDirectionOptions,
      yingYeRiGuiZeOptions:yingYeRiGuiZeOptions,
      jiXiTianShuFangshiOptions:jiXiTianShuFangshiOptions,
      dialogName:'',
      interestCurveData:null,
      showtable:true,
      interestialogTableVisible:false,
      digitalOptionTypeOptions:digitalOptionTypeOptions,
      digitaloptionForm:digitaloptionForm,
      digitaloptionResultForm:digitaloptionResultForm
    }
  },
  mounted () {
  },
  methods: {
    ////api
    calcPricing(){
      console.log('call pricing')
      getFXDigitalPricingResult('NPV',this.digitaloptionForm).then(res => {
        console.log(res, 'res')
        var keys = Object.keys(res['Result']);
        for(var i=0; i<keys.length; i++){
          // console.log({"key": keys[i], "value": res[keys[i]]})
          // this.resultData1[i] = {"key": keys[i], "value": res['FX'][keys[i]]}
          this.digitaloptionResultForm[keys[i]]=res['Result'][keys[i]];
        }

      }).catch(function (error) {
        console.log(error);
        vm.errorMsg = error;
      });
      var data={name:Date.now(),Input:this.digitaloptionForm,Result:this.digitaloptionResultForm};
      SavePricing('digitaloption',data)
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

    /////
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
  .dividerStyle{
    height:45px;
    margin: auto;
    background:#FFE600;
    width:5px;
    color:transparent;
    /*margin:5px 0px 5px 0px;*/
  }
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
    text-align: center;
  }
}

</style>

<style lang="scss" >

</style>
