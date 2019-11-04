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

      <div class='box-card' style="height:400px">
        <el-col :span="12">
          <div class="box-card-title">
            <span>交易要素</span>
          </div>
          <el-col :span="4">
            <div class="left-col2">债券代码</div>
            <div class="left-col2">主体评级</div>
            <div class="left-col2">剩余期限</div>
            <div class="left-col2">起息日</div>
            <div class="left-col2">行权日</div>
            <div class="left-col2">债券收益率</div>
            <div class="left-col2">票面总额</div>
            <div class="left-col2">估值日</div>
          </el-col>

          <el-col :span="6">
            <div class="left-col2" >
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
            <div class="left-col2" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.remainingDate"
              >
              </el-input-number>
            </div>
            <div class="left-col2" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.interestStartDate"
              >
              </el-input-number>
            </div>
            <div class="left-col2" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.exerciseDate"
              >
              </el-input-number>
            </div>
            <div class="left-col2" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.shouYiLv"
              >
              </el-input-number>
            </div>
            <div class="left-col2" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.piaoMianZongE"
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
          <el-col :span="2">
            <div style="color:transparent">
              a
            </div>
          </el-col>
<!--            第二列-->
            <el-col :span="4">
              <div class="left-col2">债券简称</div>
              <div class="left-col2">票面利率</div>
              <div class="left-col2">利率方式</div>
              <div class="left-col2">结算日</div>
              <div class="left-col2">兑付日</div>
              <div class="left-col2">利差%</div>
              <div class="left-col2">结算金额</div>
            </el-col>
            <el-col :span="6">
              <div class="left-col2" >
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
                >
                </el-input-number>
              </div>
              <div class="left-col2" >
                <el-select class="oneContorls" v-model="bondForm.liLvFangShi" placeholder="请选择">
                  <el-option
                          v-for="item in interestRateOptions"
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
              <div class="left-col2" >
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
                >
                </el-input-number>
              </div>
              <div class="left-col2" >
                <el-input-number
                        :controls="false"
                        class="oneContorls"
                        v-model="bondForm.jieSuanJingE"
                >
                </el-input-number>
              </div>
            </el-col>
        </el-col>
        <el-col :span="2">
          <div style="color:transparent">
            a
          </div>
        </el-col>
<!--        右边的两栏-->

        <el-col :span="12">
          <div class="box-card-title" >
            <span>定价参数</span>
          </div>
          <el-col :span="5">
            <div class="left-col2">首次基准利率重置日</div>
            <div class="left-col2">基准利率重置频率</div>
            <div class="left-col2">浮动利率利差(bp)</div>
            <div class="left-col2">浮动利率倍数</div>
            <div class="left-col2">浮动利率上限</div>
            <div class="left-col2">浮动利率下限</div>
          </el-col>

          <el-col :span="6">
            <div class="left-col2" >
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
              >
              </el-input-number>
            </div>
            <div class="left-col2" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.fuDongLiLvCha"
              >
              </el-input-number>
            </div>
            <div class="left-col2" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.fuDongLiLvBeiShu"
              >
              </el-input-number>
            </div>
            <div class="left-col2" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.fuDongLiLvShangXian"
              >
              </el-input-number>
            </div>
            <div class="left-col2" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.fuDongLiLvXiaXian"
              >
              </el-input-number>
            </div>
          </el-col>
          <el-col :span="1">
            <div style="color:transparent">
              a
            </div>
          </el-col>
          <!--            第二列-->
          <el-col :span="4">
            <div class="left-col2">计息日调整</div>
            <div class="left-col2">付息日调整</div>
            <div class="left-col2">付息频率</div>
            <div class="left-col2">计息天数方式</div>
            <div class="left-col2">营业日规则</div>
          </el-col>
          <el-col :span="6">
            <div class="left-col2" >
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
              >
              </el-input-number>
            </div>
            <div class="left-col2" >
              <el-input-number
                      class="oneContorls"
                      :controls="false"
                      v-model="bondForm.fuXiPinLV"
              >
              </el-input-number>
            </div>
            <div class="left-col2" >
              <el-select class="oneContorls" v-model="bondForm.jiXiTianShuFangshi" placeholder="请选择">
                <el-option
                        v-for="item in interestDateOptions"
                        :key="item.key"
                        :label="item.label"
                        :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="left-col2" >
              <el-select class="oneContorls" v-model="bondForm.yingYeRiGuiZe" placeholder="请选择">
                <el-option
                        v-for="item in openDayOptions"
                        :key="item.key"
                        :label="item.label"
                        :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="left-col2" >
              <el-input-number
                      class="oneContorls"
                      :controls="false"
                      v-model="bondForm.jiZhunLiLv"
              >
              </el-input-number>
            </div>
          </el-col>
          <el-col :span="2">
            <div style="color:transparent">
              a
            </div>
          </el-col>
        </el-col>
     </div>
      <div class='box-card' style="height:400px">
        <el-col :span="6">
          <div class="box-card-title">
            <span>市场数据</span>
          </div>
          <el-col :span="10">
            <div class="left-col2">债券收益率曲线名称</div>
            <div class="left-col2">基准利率参考曲线</div>
            <div class="left-col2">债券折现曲线(bp)</div>
            <div class="left-col2">基准利率%</div>
          </el-col>
          <el-col :span="14">
            <div class="left-col2" >
              <el-select class="oneContorls" v-model="bondForm.zhaiQuanShouYiLvQuXianMingCheng" placeholder="请选择">
                <el-option
                        v-for="item in bondEarningCurveOptions"
                        :key="item.key"
                        :label="item.label"
                        :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="left-col2" >
            <el-select class="oneContorls" v-model="bondForm.jiZhunLiLvCanKaoQuXian" placeholder="请选择">
              <el-option
                      v-for="item in baseInterestRateCurveOptions"
                      :key="item.key"
                      :label="item.label"
                      :value="item.value"
              ></el-option>
            </el-select>
           </div>
            <div class="left-col2" >
              <el-select class="oneContorls" v-model="bondForm.zhaiQuanZheXianQuXian" placeholder="请选择">
                <el-option
                        v-for="item in boundDiscountCurveOptions"
                        :key="item.key"
                        :label="item.label"
                        :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="left-col2" >
              <el-input-number
                      :controls="false"
                      class="oneContorls"
                      v-model="bondForm.jiZhunLiLv"
              >
              </el-input-number>
            </div>
          </el-col>
<!--左边的最后一列-->
        </el-col>

        <el-col :span="18">
          <div class="box-card-title">
            <span>市场数据</span>
          </div>
          <el-row>
            <el-button class="controls-a-line">计算NPV</el-button>
            <el-button class="controls-a-line">实时报价对比</el-button>
          </el-row>
          <el-row>
            <el-col :span=3>
            <div class="left-col2">全价</div>
            <div class="left-col2">麦氏久期</div>
            </el-col>
            <el-col :span=3>
              <el-input-number
                      :controls="false"
                      class="oneContorls1"
                      v-model="bondResultForm.quanJia"
              >
              </el-input-number>
              <el-input-number
                      :controls="false"
                      class="oneContorls1"
                      v-model="bondResultForm.xiuZhengJiuQi"
              >
              </el-input-number>
            </el-col>
<!-- 第二列           -->
            <el-col :span=3>
              <div class="left-col2">净价</div>
              <div class="left-col2">修正久期</div>
            </el-col>
            <el-col :span=3>
              <el-input-number
                      :controls="false"
                      class="oneContorls1"
                      v-model="bondResultForm.jingJia"
              >
              </el-input-number>
              <el-input-number
                      :controls="false"
                      class="oneContorls1"
                      v-model="bondResultForm.xiuZhengJiuQi"
              >
              </el-input-number>
            </el-col>
            <!-- 第三列           -->
            <el-col :span=3>
              <div class="left-col2">应记利息</div>
              <div class="left-col2">凸性</div>
            </el-col>
            <el-col :span=3>
              <el-input-number
                      :controls="false"
                      class="oneContorls1"
                      v-model="bondResultForm.yingJiLiXi"
              >
              </el-input-number>
              <el-input-number
                      :controls="false"
                      class="oneContorls1"
                      v-model="bondResultForm.tuXing"
              >
              </el-input-number>
            </el-col>
<!--            第四列-->
            <el-col :span=3>
              <div class="left-col2">DV01</div>
              <div class="left-col2">VaR</div>
            </el-col>
            <el-col :span=3>
              <el-input-number
                      :controls="false"
                      class="oneContorls1"
                      v-model="bondResultForm.DV01"
              >
              </el-input-number>
              <el-input-number
                      :controls="false"
                      class="oneContorls1"
                      v-model="bondResultForm.VaR"
              >
              </el-input-number>
            </el-col>
          </el-row>


          <el-row>
            <el-button class="controls-a-line">债券收益散点图</el-button>
            <el-button class="controls-a-line">计算NPV</el-button>
            <el-button class="controls-a-line">计算DV01</el-button>
            <el-button class="controls-a-line">实时报价对比</el-button>
          </el-row>


        </el-col>
      </div>


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
          rowHeight: 30,
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
        bondForm:{
          bondCode:'',
          bondRating:'',
          remainingDate:'',
          interestStartDate:'',
          exerciseDate:'',
          shouYiLv:'',
          piaoMianZongE:'',
          guZhiRi:'',
          zhaiQuanJianCheng:'',
          piaoMianLiLv:'',
          liLvFangShi:'',
          jieSuanRi:'',
          duiFuRi:'',
          liCha:'',
          jieSuanJingE:'',
          shouCiJiZhunLiLvChongZhiRi:'',
          jiZhunLiLvChongZhiPingLv:'',
          fuDongLiLvCha:'',
          fuDongLiLvBeiShu:'',
          fuDongLiLvShangXian:'',
          fuDongLiLvXiaXian:'',
          jixiRiTiaoZheng:'',
          fuxiRiTiaoZheng:'',
          fuXiPinLV:'',
          jiXiTianShuFangshi:'',
          yingYeRiGuiZe:'',
          zhaiQuanShouYiLvQuXianMingCheng:'',
          jiZhunLiLvCanKaoQuXian:'',
          zhaiQuanZheXianQuXian:'',
          jiZhunLiLv:'',
        },
        bondResultForm:{
          quanJia:'',
          maishiJiuQi:'',
          jingJia:'',
          xiuZhengJiuQi:'',
          yingJiLiXi:'',
          DV01:'',
          tuXing:'',
          VaR:'',
        }





      }
    },
    mounted () {
    },
    methods: {
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
    line-height: 40px;
    vertical-align: center;
  }
  .left-col1{
    height:40px;
    background:#312E30;
    margin:5px 0px 5px 0px;
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


</style>

<style lang="scss" >

</style>
