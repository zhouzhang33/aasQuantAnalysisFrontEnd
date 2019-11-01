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
        <el-col :span="6">
          <div class="left-column">
            <div class='box-card' style="height:925px">
              <div class="box-card-title">
                日期设定
              </div>
              <Calendar
                      style="font-size: 12px">
              </Calendar>
            </div>
          </div>
        </el-col>

        <el-col :span="18">
          <div class="right-column">
            <div class='box-card' style="height:925px">
              <el-row>
               <el-col :span="10">
                <div style="padding:30px">
                  <div>
                    <span>Calculation Summary</span>
                  </div>
                  <el-table
                          :data="summaryData"
                          :cell-style="rowstyle"
                          :header-cell-style="headerstyle"
                          style="width:80%"
                  >
                    <el-table-column
                            label="Parameter"
                            prop="parameter"
                    >
                    </el-table-column>
                    <el-table-column
                            label="Value"
                            prop="value"
                    >
                    </el-table-column>
                  </el-table>
                </div>
               </el-col>
              </el-row>

              <el-row>
                <div style="margin-top:50px">
                  <el-col :span="24">
                    <div style="padding:30px">
                      <div>
                        <span>Sensitivity Capital (Correlation Scenario. Low)</span>
                      </div>
                      <el-table
                              :data="sensitivityCapitalData"
                              :cell-style="rowstyle"
                              :header-cell-style="headerstyle"
                              style="width:100%"
                      >
                        <el-table-column
                                label="Market"
                                prop="market"
                        >
                        </el-table-column>
                        <el-table-column
                                label="Detal"
                                prop="detail"
                        >
                        </el-table-column>
                        <el-table-column
                                label="Vega"
                                prop="vega"
                        >
                        </el-table-column>
                        <el-table-column
                                label="Curvature"
                                prop="curvature"
                        >
                        </el-table-column>
                        <el-table-column
                                label="Sensitivity"
                                prop="sensitivity"
                        >
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-col>
                </div>
              </el-row>

              <el-row>
                <div style="margin-top:50px">
                  <el-col :span="24">
                    <div style="padding:30px">
                      <div>
                        <span>Sensitivity Capital (Correlation Scenario. Low)</span>
                      </div>
                      <el-table
                              :data="marketCapitalData"
                              :cell-style="rowstyle"
                              :header-cell-style="headerstyle"
                              style="width:100%;"
                      >
                        <el-table-column
                                label="Regions/ Products"
                                prop="region"
                        >
                        </el-table-column>
                        <el-table-column
                                label="IR_Desks"
                                prop="irDesk"
                        >
                        </el-table-column>
                        <el-table-column
                                label="CD_Desks"
                                prop="cdDesk"
                        >
                        </el-table-column>
                        <el-table-column
                                label="Equity_Desks"
                                prop="eqDesk"
                        >
                        </el-table-column>
                        <el-table-column
                                label="Commodity_Desks"
                                prop="commoditydDesk"
                        >
                        </el-table-column>
                        <el-table-column
                                label="FX_Desks"
                                prop="fxDesk"
                        >
                        </el-table-column>
                        <el-table-column
                                label="Total"
                                prop="total"
                        >
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-col>
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
        mtomData: [
          { col1: 'Organization', col2: 'EY-AAS', co3: 'Currency', col4: 'USD' },
          { col1: 'Environment', col2: 'FRTB', co3: 'Date', col4: Date.now() },
        ],
        sensitivityCapitalData:[
          {market:'GIRR',detail:'12204655',vega:'0',curvature:'39127',sensitivity:'12243782'},
          {market:'CSR',detail:'823296',vega:'0',curvature:'0',sensitivity:'823296'},
          {market:'Equity',detail:'120201',vega:'14619',curvature:'13792',sensitivity:'148612'},
        ],
        marketCapitalData:[
          {region:'New York',  irDesk:'-',     cdDesk:940331,eqDesk:179202, commoditydDesk:'-',fxDesk:'-',     total:1119491},
          {region:'Chicago',   irDesk:'-',     cdDesk:'-',   eqDesk:'-',    commoditydDesk:'-',fxDesk:'-',     total:'-'},
          {region:'Sao Paulo', irDesk:'-',     cdDesk:'-',   eqDesk:'-',    commoditydDesk:'-',fxDesk:'-',     total:'-'},
          {region:'Americas',  irDesk:'-',     cdDesk:940331,eqDesk:179202, commoditydDesk:'-',fxDesk:'-',     total:1119491},
          {region:'Singapore', irDesk:38389097,cdDesk:'-',   eqDesk:'-',    commoditydDesk:'-',fxDesk:'-',     total:50265229},
          {region:'Tokyo',     irDesk:'-',     cdDesk:'-',   eqDesk:'-',    commoditydDesk:'-',fxDesk:30788771,total:56656241},
          {region:'Sydney',    irDesk:'-',     cdDesk:'-',   eqDesk:'-',    commoditydDesk:'-',fxDesk:56656241,total:'-'},
          {region:'Asia',      irDesk:38389097,cdDesk:'-',   eqDesk:'-',    commoditydDesk:'-',fxDesk:'-',     total:8135898},
          {region:'London',    irDesk:'-',     cdDesk:'-',   eqDesk:'-',    commoditydDesk:'-',fxDesk:76741214,total:'-'},
          {region:'Frankfurt', irDesk:'-',     cdDesk:'-',   eqDesk:'-',    commoditydDesk:'-',fxDesk:'-',     total:'-'},
        ],
        summaryData:[
          {parameter:"Sensitivity",value: 81937878},
          {parameter:"Default",value: 26983},
          {parameter:"Residual",value: 393000},
          {parameter:"Total",value: 82357861},
        ],
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
          return "height:30px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px";
        } else {
          return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
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

</style>

<style lang="scss" >

</style>
