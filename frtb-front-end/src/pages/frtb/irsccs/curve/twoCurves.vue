<template>
      <div style="height:100%;overflow: auto">
        <el-col :span="12">
          <div class="box-card">
            <div class="box-card-title">
              <span>  利率曲线 </span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-col :span="8">
                  <div class="left-col1">曲线名称</div>
                  <div class="left-col2">日期准则</div>
                  <div class="left-col1">平移类型</div>
                  <div class="left-col2">平移数值</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1">
                    <el-select class="oneControls"
                               placeholder="请选择"
                               v-model="curveLeg1.curveName"
                               @change="getLeftCurve">
                      <el-option
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                              v-for="item in curveNameOptions"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col2">
                    <el-select class="oneControls"
                               placeholder="请选择"
                               v-model="curveLeg1.riQiZhunZe">
                      <el-option
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                              v-for="item in jiXiTianShuFangshiOptions"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col1">
                    <el-select class="oneControls"
                               placeholder="请选择"
                               disabled
                               v-model="curveLeg1.quXianPingYiLeiXing">
                    </el-select>
                  </div>
                  <div class="left-col2" >
                    <el-input
                            class="oneControls"
                            disabled
                            v-model="curveLeg1.quXianPingYiShuZhi"
                    >
                    </el-input>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="12">
                <div class="left-col1" style="color:transparent">a </div>
                <div class="left-col2" style="color:transparent">a </div>
                <div class="left-col1" style="color:transparent">a </div>
                <div class="left-col2" style="color:transparent">a </div>
              </el-col>
            </el-row>
  <!--          这里是曲线-->
<!--            <div>-->
<!--              <div id='leftCure' style='margin:5px;width:800px;height:300px'></div>-->
<!--            </div>-->
          </div>
          <div class="box-card" style="height:200px;padding-top:20px">
             <div style="margin:auto">
              <el-row>
                <div v-if="curveLeg1.curveName==='discountCurve'">
                <el-table
                        :data="MarketDataLeg1"
                        :cell-style="rowstyle"
                        :header-cell-style="headerstyle"
                        style="width:95%;"
                >
                  <el-table-column
                          label="期限"
                          prop="期限"
                  >
                  </el-table-column>
                  <el-table-column
                          label="日期"
                          prop="日期"
                  >
                  </el-table-column>
                  <el-table-column
                          label="利率"
                          prop="利率"
                  >
                  </el-table-column>
                  <el-table-column
                          label="平移后利率"
                          prop="平移后利率"
                  >
                  </el-table-column>
                  <el-table-column
                          label="贴现率"
                          prop="贴现率"
                  >
                  </el-table-column>
                </el-table>
               </div>
                <div v-else>
                  <el-table
                          :data="MarketDataLeg1"
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
              </el-row>
            </div>
          </div>
        </el-col>

        <el-col :span="12">
          <div class="box-card">
            <div class="box-card-title">
              <span>  利率曲线 </span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-col :span="8">
                  <div class="left-col1">曲线名称</div>
                  <div class="left-col2">日期准则</div>
                  <div class="left-col1">平移类型</div>
                  <div class="left-col2">平移数值</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1">
                    <el-select class="oneControls"
                               placeholder="请选择"
                               v-model="curveLeg2.curveName"
                               @change="getRightCurve">
                      <el-option
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                              v-for="item in curveNameOptions"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col2">
                    <el-select class="oneControls"
                               placeholder="请选择"
                               v-model="curveLeg2.riQiZhunZe">
                      <el-option
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                              v-for="item in jiXiTianShuFangshiOptions"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col1">
                    <el-select class="oneControls"
                               placeholder="请选择"
                               disabled
                               v-model="curveLeg2.quXianPingYiLeiXing">
                    </el-select>
                  </div>
                  <div class="left-col2" >
                    <el-input
                            class="oneControls"
                            disabled
                            v-model="curveLeg2.quXianPingYiShuZhi"
                    >
                    </el-input>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="12">
                <div class="left-col1" style="color:transparent">a </div>
                <div class="left-col2" style="color:transparent">a </div>
                <div class="left-col1" style="color:transparent">a </div>
                <div class="left-col2" style="color:transparent">a </div>
              </el-col>
            </el-row>
            <!--          这里是曲线-->
            <!--            <div>-->
            <!--              <div id='leftCure' style='margin:5px;width:800px;height:300px'></div>-->
            <!--            </div>-->
          </div>
          <div class="box-card" style="height:200px;padding-top:20px">
            <div style="margin:auto">
              <el-row>
                <div v-if="curveLeg2.curveName==='discountCurve'">
                  <el-table
                          :data="MarketDataLeg2"
                          :cell-style="rowstyle"
                          :header-cell-style="headerstyle"
                          style="width:95%;"
                  >
                    <el-table-column
                            label="期限"
                            prop="期限"
                    >
                    </el-table-column>
                    <el-table-column
                            label="日期"
                            prop="日期"
                    >
                    </el-table-column>
                    <el-table-column
                            label="利率"
                            prop="利率"
                    >
                    </el-table-column>
                    <el-table-column
                            label="平移后利率"
                            prop="平移后利率"
                    >
                    </el-table-column>
                    <el-table-column
                            label="贴现率"
                            prop="贴现率"
                    >
                    </el-table-column>
                  </el-table>
                </div>
                <div v-else>
                  <el-table
                          :data="MarketDataLeg2"
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
              </el-row>
            </div>
          </div>
        </el-col>

      </div>


<!--      </d2-grid-item>-->

</template>

<script>

import {
  getDiscountCurve,
  getInterestCurve
} from '@api/index'

import echarts from 'echarts'
import {
  echartOption,
  jiXiTianShuFangshiOptions,
  curveNameOptions,
} from "../../UIPara/UIPara"
export default {
  components: {

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

      curveLeg1:{
        curveName:'CNY_Repo7D',
        riQiZhunZe:'ACT/365',
        quXianPingYiLeiXing:'平行',
        quXianPingYiShuZhi:'0bp',
      },
      curveLeg2:{
        curveName:'CNY_Repo7D',
        riQiZhunZe:'ACT/365',
        quXianPingYiLeiXing:'平行',
        quXianPingYiShuZhi:'0bp',
      },
      MarketDataLeg1:null,
      MarketDataLeg2:null,
      // myechats:null,
      // myechatsRight:null,
      // echartOption:echartOption,
      curveNameOptions:curveNameOptions,
      jiXiTianShuFangshiOptions:jiXiTianShuFangshiOptions,
    }
  },
  mounted () {
    // this.myechats = echarts.init(document.getElementById('leftCure'));
    // this.myechats.setOption(this.echartOption);
    // this.getTableData();
    // console.log(this.MarketDataLeg1,'log')
    this.curveLeg1.curveName='CNY_Repo7D'
    this.getLeftCurve()
    this.curveLeg2.curveName='CNY_Repo7D'
    this.getRightCurve()
  },
  methods: {
    // restful api
    getLeftCurve() {
      var self = this;
      getInterestCurve(this.curveLeg1.curveName).then(res => {
        self.MarketDataLeg1 = res.list;
        console.log(self.MarketDataLeg1,'return Curve')
      });
    },
    getRightCurve() {
      var self = this;
      getInterestCurve(this.curveLeg2.curveName).then(res => {
        self.MarketDataLeg2 = res.list;
        console.log(self.MarketDataLeg2,'return Curve')
      });
    },
    getTableData(){
      var self = this;
      // var options={
      //   series:{
      //     name:'贴现利率',
      //     type:'line',
      //     data:[],
      //   }
      //
      // }
      var data=[];
      getDiscountCurve().then(res => {
        self.MarketDataLeg1 = res.list;
        console.log(self.MarketDataLeg1,'data');

        self.MarketDataLeg1.forEach(onerow => {
          console.log( parseFloat(onerow['利率']),'floatnummber' )
          data.push([onerow['日期'],parseFloat(onerow['利率'])])
        });
        console.log(data,'data2')
        self.myechats.setOption({
            series: [{
              data: data
            }]
        });

      });

    },

    // ****************************
    rowstyle(row) {
      if (row.rowIndex % 2 === 0) {
        return "height:50px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px";
      } else {
        return "height:50px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
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
    background-color: #333333;
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
