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

      <!--      </d2-grid-item>-->

      <div class='box-card' style="height:415px">
        <el-col :span="12">
          <div class="box-card-title">
            <span>交易要素</span>
            <span style="margin-left:90px"> <el-button class="oneContorls" type="info" @click="showBondComaprison"> 相关债券比 </el-button>  </span>
          </div>
          <div class="my-block">
            <el-col :span="4">
              <div class="left-col1">债券代码</div>
              <div class="left-col2">主体评级</div>
              <div class="left-col1">剩余期限</div>
              <div class="left-col2">起息日</div>
              <div class="left-col1">行权日</div>
              <div class="left-col2">债券收益率</div>
              <div class="left-col1">票面总额</div>
              <div class="left-col2">估值日</div>
            </el-col>
            <el-col :span="8">
              <div class="left-col1" >
                <el-input
                        class="oneContorls"
                        v-model="bondForm.bondCode"
                >
                </el-input>
              </div>
              <div class="left-col2" >
                <el-input
                        class="oneContorls"
                        v-model="bondForm.bondRating"
                >
                </el-input>
              </div>
              <div class="left-col1" >
                <el-input
                        class="oneContorls"
                        v-model="bondForm.remainingDate"
                >
                </el-input>
              </div>
              <div class="left-col2" >
                  <el-date-picker
                          class="oneContorls"
                          placeholder="选择日期"
                          type="date"
                          v-model="bondForm.interestStartDate">
                  </el-date-picker>
              </div>
              <div class="left-col1" >
                  <el-date-picker
                          class="oneContorls"
                          placeholder="选择日期"
                          type="date"
                          v-model="bondForm.exerciseDate">
                  </el-date-picker>
              </div>
              <div class="left-col2" >
                <el-input-number
                        :controls="false"
                        class="oneContorls"
                        v-model="bondForm.shouYiLv"
                        :precision=5
                >
                </el-input-number>
              </div>
              <div class="left-col1" >
                <el-input-number
                        :controls="false"
                        class="oneContorls"
                        v-model="bondForm.piaoMianZongE"
                        :precision=5
                >
                </el-input-number>
              </div>
              <div class="left-col2" >
                <el-date-picker
                        class="oneContorls"
                        placeholder="选择日期"
                        type="date"
                        v-model="bondForm.guZhiRi">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :span="4">
                <div class="left-col1">债券简称</div>
                <div class="left-col2">票面利率</div>
                <div class="left-col1">利率方式</div>
                <div class="left-col2">结算日</div>
                <div class="left-col1">兑付日</div>
                <div class="left-col2">利差%</div>
                <div class="left-col1">结算金额</div>
                <div class="left-col2" style="color:transparent">a</div>
              </el-col>
            <el-col :span="8">
                <div class="left-col1" >
                  <el-input
                          class="oneContorls"
                          v-model="bondForm.zhaiQuanJianCheng"
                  >
                  </el-input>
                </div>
                <div class="left-col2" >
                  <el-input-number
                          class="oneContorls"
                          :controls="false"
                          v-model="bondForm.piaoMianLiLv"
                          :precision=5
                  >
                  </el-input-number>
                </div>
                <div class="left-col1" >
                  <el-select
                          filterable
                          allow-create
                          default-first-option
                          class="oneContorls"
                          v-model="bondForm.liLvFangShi" placeholder="请选择">
                    <el-option
                            v-for="item in xiPiaoLeiXingOptions"
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
                          v-model="bondForm.jieSuanRi">
                  </el-date-picker>
                </div>
                <div class="left-col1" >
                  <el-date-picker
                          class="oneContorls"
                          placeholder="选择日期"
                          type="date"
                          v-model="bondForm.duiFuRi">
                  </el-date-picker>
                </div>
                <div class="left-col2" >
                  <el-input-number
                          :controls="false"
                          class="oneContorls"
                          v-model="bondForm.liCha"
                          :precision=5
                  >
                  </el-input-number>
                </div>
                <div class="left-col1" >
                  <el-input-number
                          :controls="false"
                          class="oneContorls"
                          v-model="bondForm.jieSuanJingE"
                          :precision=5
                  >
                  </el-input-number>
                </div>
              <div class="left-col2" style="color:transparent">a</div>
              </el-col>
          </div>
        </el-col>
<!--        右边的两栏-->

        <el-col :span="12">
          <div class="box-card-title" >
            <span>定价参数</span>
          </div>
          <div class="my-block" style="margin-top:19px">
          <el-col :span="5">
            <div class="left-col1">首次基准利率重置日</div>
            <div class="left-col2">基准利率重置频率</div>
            <div class="left-col1">浮动利率利差(bp)</div>
            <div class="left-col2">浮动利率倍数</div>
            <div class="left-col1">浮动利率上限</div>
            <div class="left-col2">浮动利率下限</div>
            <div class="left-col1" style="color:transparent">a</div>
            <div class="left-col2" style="color:transparent">a</div>
          </el-col>
          <el-col :span="7">
            <div class="left-col1" >
              <el-date-picker
                      class="oneContorls"
                      placeholder="选择日期"
                      type="date"
                      v-model="bondForm.shouCiJiZhunLiLvChongZhiRi">
              </el-date-picker>
            </div>
            <div class="left-col2" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.jiZhunLiLvChongZhiPingLv"
                      :precision=5
              >
              </el-input-number>
            </div>
            <div class="left-col1" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.fuDongLiLvCha"
                      :precision=5
              >
              </el-input-number>
            </div>
            <div class="left-col2" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.fuDongLiLvBeiShu"
                      :precision=5
              >
              </el-input-number>
            </div>
            <div class="left-col1" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.fuDongLiLvShangXian"
                      :precision=5
              >
              </el-input-number>
            </div>
            <div class="left-col2" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.fuDongLiLvXiaXian"
                      :precision=5
              >
              </el-input-number>
            </div>
            <div class="left-col1" style="color:transparent">a</div>
            <div class="left-col2" style="color:transparent">a</div>
          </el-col>
          <!--            第二列-->
          <el-col :span="4">
            <div class="left-col1">计息日调整</div>
            <div class="left-col2">付息日调整</div>
            <div class="left-col1">付息频率</div>
            <div class="left-col2">计息天数方式</div>
            <div class="left-col1">营业日规则</div>
            <div class="left-col2" style="color:transparent">a</div>
            <div class="left-col1" style="color:transparent">a</div>
            <div class="left-col2" style="color:transparent">a</div>
          </el-col>
          <el-col :span="8">
            <div class="left-col1" >
              <el-input
                      class="oneContorls"
                      v-model="bondForm.jixiRiTiaoZheng"
              >
              </el-input>
            </div>
            <div class="left-col2" >
              <el-input-number
                      class="oneContorls"
                      :controls="false"
                      v-model="bondForm.fuxiRiTiaoZheng"
                      :precision=5
              >
              </el-input-number>
            </div>
            <div class="left-col1" >
              <el-input-number
                      class="oneContorls"
                      :controls="false"
                      v-model="bondForm.fuXiPinLV"
                      :precision=5
              >
              </el-input-number>
              <el-select
                      filterable
                      allow-create
                      default-first-option
                      class="oneContorls" v-model="bondForm.fuXiPinLV" placeholder="请选择">
                <el-option
                        v-for="item in fuXiPinLVOptions"
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
                      class="oneContorls" v-model="bondForm.jiXiTianShuFangshi" placeholder="请选择">
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
                      filterable
                      allow-create
                      default-first-option
                      class="oneContorls" v-model="bondForm.yingYeRiGuiZe" placeholder="请选择">
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
     </div>
      <div class='box-card' style="height:185px">
        <el-col :span="24">
          <div class="box-card-title">
            <span>市场数据</span>
          </div>
<!--          <el-row>-->
<!--            <el-button class="controls-a-line">折现曲线</el-button>-->
<!--          </el-row>-->
          <div class="my-block" style="margin-top:10px">
            <el-col :span="6">
              <el-col :span="8">
                <div class="left-col1">收益率曲线名称</div>
                <div class="left-col2" style="color:transparent">a</div>
              </el-col>
              <el-col :span="16">
                <div class="left-col1" >
                  <el-select
                          filterable
                          allow-create
                          default-first-option
                          class="oneContorls" v-model="bondForm.zhaiQuanShouYiLvQuXianMingCheng" placeholder="请选择">
                    <el-option
                            v-for="item in bondEarningCurveOptions"
                            :key="item.key"
                            :label="item.label"
                            :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
                <div class="left-col2" >
                  <el-button type="info" class="oneContorls" >查看收益率曲线</el-button>
                </div>
              </el-col>
            </el-col>
<!--            2nd col-->
            <el-col :span="6">
              <el-col :span="8">
                <div class="left-col1">基准利率参考曲线</div>
                <div class="left-col2" style="color:transparent">a</div>
              </el-col>
              <el-col :span="16">
                <div class="left-col1" >
                  <el-select
                          filterable
                          allow-create
                          default-first-option
                          class="oneContorls" v-model="bondForm.jiZhunLiLvCanKaoQuXian" placeholder="请选择">
                    <el-option
                            v-for="item in curveNameOptions"
                            :key="item.key"
                            :label="item.label"
                            :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
                <div class="left-col2" >
                  <el-button type="info" class="oneContorls" @click="showbaseInterestCurve">查看利率率曲线</el-button>
                </div>
              </el-col>
            </el-col>
            <!--            3rd col-->
            <el-col :span="6">
              <el-col :span="8">
                <div class="left-col1">债券折现曲线(bp)</div>
                <div class="left-col2" style="color:transparent">a</div>
              </el-col>
              <el-col :span="16">
                <div class="left-col1" >
                    <el-input-number
                            :controls="false"
                            class="oneContorls"
                            v-model="bondForm.zhaiQuanZheXianQuXian"
                            :precision=5
                    >
                    </el-input-number>
                </div>
                <div class="left-col2" >
                  <el-button type="info" class="oneContorls" @click="showDiscountCurve">查看折现曲线</el-button>
                </div>
              </el-col>
            </el-col>
            <!--            4th col-->
            <el-col :span="6">
              <el-col :span="8">
                <div class="left-col1">基准利率%</div>
                <div class="left-col2" style="color:transparent">a</div>
              </el-col>
              <el-col :span="16">
                <div class="left-col1" >
                  <el-input-number
                          :controls="false"
                          class="oneContorls"
                          v-model="bondForm.jiZhunLiLv"
                          :precision=5
                  >
                  </el-input-number>
                </div>
                <div class="left-col2" style="color:transparent">a</div>
              </el-col>
            </el-col>
          </div>

<!--左边的最后一列-->
        </el-col>
      </div>

      <div class='box-card' style="height:250px">

        <div class="box-card-title">
          <span>定价结果</span>
        </div>

        <el-row>
          <el-button type="info" class="controls-a-line" @click="calcPricing">计算NPV</el-button>
          <el-button type="info" class="controls-a-line" @click="compareResult">实时报价对比</el-button>
          <el-button type="info" class="controls-a-line" @click="showEarningCurve">债券收益散点图</el-button>
        </el-row>
        <div style="margin-top:10px">
          <el-row>
            <el-col :span="6">
              <el-col :span=8>
                <div class="left-col1">全价</div>
                <div class="left-col2">麦氏久期</div>
              </el-col>
              <el-col :span=16>
                <div class="left-col1">
                  <el-input-number
                          :controls="false"
                          class="oneContorls"
                          v-model="bondResultForm.quanJia"
                          :precision=5
                  >
                  </el-input-number>
                </div>
                <div class="left-col2">
                  <el-input-number
                          :controls="false"
                          class="oneContorls"
                          v-model="bondResultForm.xiuZhengJiuQi"
                          :precision=5
                  >
                  </el-input-number>
                </div>
              </el-col>
            </el-col>
            <!-- 第二列           -->
            <el-col :span="6">
              <el-col :span=8>
                <div class="left-col1">净价</div>
                <div class="left-col2">修正久期</div>
              </el-col>
              <el-col :span=16>
                <div class="left-col1">
                  <el-input-number
                          :controls="false"
                          class="oneContorls"
                          v-model="bondResultForm.jingJia"
                          :precision=5
                  >
                  </el-input-number>
                </div>
                <div class="left-col2">
                  <el-input-number
                          :controls="false"
                          class="oneContorls"
                          v-model="bondResultForm.xiuZhengJiuQi"
                          :precision=5
                  >
                  </el-input-number>
                </div>
              </el-col>
            </el-col>
            <!-- 第三列           -->
            <el-col :span="6">
              <el-col :span=8>
                <div class="left-col1">应记利息</div>
                <div class="left-col2">凸性</div>
              </el-col>
              <el-col :span=16>
                <div class="left-col1">
                  <el-input-number
                          :controls="false"
                          class="oneContorls"
                          v-model="bondResultForm.yingJiLiXi"
                          :precision=5
                  >
                  </el-input-number>
                </div>
                <div class="left-col2">
                  <el-input-number
                          :controls="false"
                          class="oneContorls"
                          v-model="bondResultForm.tuXing"
                          :precision=5
                  >
                  </el-input-number>
                </div>
              </el-col>
            </el-col>
            <!--            第四列-->
            <el-col :span="6">
              <el-col :span=8>
                <div class="left-col1">DV01</div>
                <div class="left-col2">VaR</div>
              </el-col>
              <el-col :span=16>
                <div class="left-col1">
                  <el-input-number
                          :controls="false"
                          class="oneContorls"
                          v-model="bondResultForm.DV01"
                          :precision=5
                  >
                  </el-input-number>
                </div>
                <div class="left-col2">
                  <el-input-number
                          :controls="false"
                          class="oneContorls"
                          v-model="bondResultForm.VaR"
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
            <div class="box-card-title">{{ marketCurveName }}</div>

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
        </el-dialog>
      </div>
      <div>
        <el-dialog
                :visible.sync="bondCompareVisible"
                :append-to-body="true"
                width="95%"
        >
          <bondComparison v-if="bondShowEarningCurveVisible===0"  />
          <bondCurve v-else-if="bondShowEarningCurveVisible===1" />
          <bondDiscountCurve v-else-if="bondShowEarningCurveVisible===2" />
          <bondPricing v-else-if="bondShowEarningCurveVisible ===3" />
        </el-dialog>
      </div>
<!--      <div>-->
<!--        <el-dialog-->
<!--          :visible.sync="bondShowEarningCurveVisible"-->
<!--          :append-to-body="true"-->
<!--          width="70%">-->
<!--          <bondCurve/>-->
<!--        </el-dialog>-->


<!--      </div>-->


    </d2-grid-layout>
  </d2-container>
</template>

<script>

  import {
    getInterestCurve,
    getBondPricingResult,
    SavePricing
  } from '@api/index'
import {
  jiXiTianShuFangshiOptions,
  yingYeRiGuiZeOptions,
  bondEarningCurveOptions,
  curveNameOptions,
  xiPiaoLeiXingOptions,
  fuXiPinLVOptions
  } from '../UIPara/UIPara'
import {
  bondResultForm,
  bondForm
} from '../UIPara/FRTBParam'
import bondComparison from "./bondComparison"
import bondCurve from "./bondEarningCurve"
import bondDiscountCurve from "./bondDiscountCurve";
import bondPricing from "./bondPricing";
  export default {
    components: {
      bondComparison,
      bondCurve,
      bondDiscountCurve,
      bondPricing
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
          rowHeight: 28,
          isDraggable: false,
          isResizable: false,
          isMirrored: false,
          verticalCompact: true,
          margin: [2, 3],
          useCssTransforms: true
        },
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        marketVardata: [{
            label: 'MarketVar',
            id:1,
            children: [{
              label: 'Assumption',
              id:2
            },{
              label: 'MarketSimulationInputs',
              id:3
            },{
              label: 'RateEnvironment',
              id:4
            },{
              label: 'CurveEvolution',
              id:5
            },{
              label: 'TradeSet',
              id:6
            },{
              label: 'varVectors',
              id:7
            },{
              label: 'VARDrilldown',
              id:8
            }
            ]
          }],

        interestCurveData:null,
        interestialogTableVisible:false,
        marketCurveName:'',
        jiXiTianShuFangshiOptions:jiXiTianShuFangshiOptions,
        yingYeRiGuiZeOptions:yingYeRiGuiZeOptions,
        bondEarningCurveOptions:bondEarningCurveOptions,
        curveNameOptions:curveNameOptions,
        xiPiaoLeiXingOptions:xiPiaoLeiXingOptions,
        fuXiPinLVOptions:fuXiPinLVOptions,
        bondResultForm:bondResultForm,
        bondForm:bondForm,

        bondCompareVisible:false,
        bondShowEarningCurveVisible:0


      }
    },
    mounted () {
    },
    methods: {
      showBondComaprison(){
        this.bondShowEarningCurveVisible = 0
        this.bondCompareVisible = true
      },
   // API
      compareResult(){
        this.bondShowEarningCurveVisible = 3
        this.bondCompareVisible = true
      },
      showEarningCurve(){
        this.bondShowEarningCurveVisible = 1
        this.bondCompareVisible = true
        console.log('showEarningCurve')
      },
      showDiscountCurve(){
        this.bondShowEarningCurveVisible = 2
        this.bondCompareVisible = true
      },
      calcPricing() {
        console.log('call pricing')
        getBondPricingResult('NPV',this.bondForm).then(res => {
          let keys = Object.keys(res['Result']);
          for(let i=0; i<keys.length; i++){
            this.bondResultForm[keys[i]]=res['Result'][keys[i]];
            console.log(res['Result'][keys[i]],'response');
          }

        }).catch(function (error) {
          console.log(error);
          vm.errorMsg = error;
        });
        // var data={name:Date.now(),Input:this.swapForm,Result:this.swapFormResult};
        // SavePricing('bond',data)

      },
      showbaseInterestCurve(){
        var self = this;
        var curvename='CNY_Repo7D';
        if (this.bondForm.jiZhunLiLvCanKaoQuXian==='人民币FR007收益利率曲线'){
          curvename='CNY_Repo7D';
        }else if(this.bondForm.jiZhunLiLvCanKaoQuXian==='美元OIS曲线'){
          curvename='USD_OIS';
        }
        console.log(curvename,'name')
        getInterestCurve(curvename).then(res => {
          self.interestCurveData = res.list;
        });
        this.marketCurveName = this.bondForm.jiZhunLiLvCanKaoQuXian;
        // this.interestCurveData=this.interestWaiBiCurveData
        this.interestialogTableVisible=true;
      },

      // ****************************
      rowstyle(row) {
        if (row.rowIndex % 2 === 0) {
          return "height:30px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px";
        } else {
          return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
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
        return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
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
