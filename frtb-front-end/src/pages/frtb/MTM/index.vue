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
              <div class='box-card' style="height:925px;">
                <el-row>
                  <el-col :span="5">
                    <span>FRTB</span>
                  </el-col>
                  <el-col :span="18">
                    <div>
                      <span>Mark to Market Report</span>
                    </div>
                    <div style="margin-top:50px">
                      <el-table
                              :data="mtomData"
                              :show-header=false
                              :cell-style="rowstyleInfo"
                              :header-cell-style="headerstyle"
                              style="width:100%;height:100px"
                      >
                        <el-table-column
                                label="temp1"
                                prop="col1"
                        >
                        </el-table-column>
                        <el-table-column
                                label="temp2"
                                prop="col2"
                        >
                        </el-table-column>
                        <el-table-column
                                label="temp3"
                                prop="col3"
                        >
                        </el-table-column>
                        <el-table-column
                                label="temp4"
                                prop="col4"
                        >
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <div style="margin-top:50px;padding:30px">
                    <el-table
                            :show-header=true
                            border
                            :data=mTomReportData
                            :cell-style="rowstyle"
                            :header-cell-style="headerstyle"
                            style="width:100%"
                    >
                      <el-table-column
                              label="Source System"
                              prop="sourceSystem"
                      >
                      </el-table-column>
                      <el-table-column
                              label="Source ID"
                              prop="sourceID"
                      >
                      </el-table-column>
                      <el-table-column
                              label="Product"
                              prop="product"
                      >
                      </el-table-column>
                      <el-table-column
                              label="Book"
                              prop="book"
                      >
                      </el-table-column>
                      <el-table-column
                              label="Counterparty"
                              prop="counterparty"
                      >
                      </el-table-column>
                    </el-table>
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
      mTomReportData: [
        {sourceSystem:'Demo',sourceID:'BondCorporate 1630',product:'BondCorporate',book:'BondCorporate_NewYork',counterparty:'EFM_Small105'},
        {sourceSystem:'Demo',sourceID:'BondCorporate 1669',product:'BondCorporate',book:'BondCorporate_NewYork',counterparty:'EFM_Small105'},
        {sourceSystem:'Demo',sourceID:'BondCorporate 1720',product:'BondCorporate',book:'BondCorporate_NewYork',counterparty:'EFM_Small105'},
        {sourceSystem:'Demo',sourceID:'BondCorporate 1857',product:'BondCorporate',book:'BondCorporate_NewYork',counterparty:'EFM_Small105'},
        {sourceSystem:'Demo',sourceID:'BondCorporate 1883',product:'BondCorporate',book:'BondCorporate_NewYork',counterparty:'EFM_Small105'},
        {sourceSystem:'Demo',sourceID:'BondCorporate 1925',product:'BondCorporate',book:'BondCorporate_NewYork',counterparty:'EFM_Small105'},
        {sourceSystem:'Demo',sourceID:'BondCorporate 1967',product:'BondCorporate',book:'BondCorporate_NewYork',counterparty:'EFM_Small105'},
        {sourceSystem:'Demo',sourceID:'BondCorporate 1993',product:'BondCorporate',book:'BondCorporate_NewYork',counterparty:'EFM_Small105'},
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

</style>

<style lang="scss" >

</style>
