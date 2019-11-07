<template>
  <d2-container :filename="filename" type="full" class="page" better-scroll>
    <d2-grid-layout
      v-bind="layout"
      @layout-updated="layoutUpdatedHandler">
      <d2-grid-item
        v-bind="layout.layout[0]"
        @resize="resizeHandler"
        @move="moveHandler"
        @resized="resizedHandler"
        @moved="movedHandler">
        <!-- <el-card shadow="never" class="page_card"> -->
          <!-- <el-tag size="mini" type="default" slot="header" >Task List</el-tag> -->
        <div class='box-card'>
          <el-tabs  v-model="activeName" @tab-click="filterChange" >
            <el-tab-pane label="Task List" name="first">
              <el-table
                :data="wrokflowTableData"
                style="width: 100%"
                :cell-style="rowstyle"
                :header-cell-style="headerstyle"
              >
                <el-table-column type="expand" label="E">
                  <!-- <span slot-scope="label"><i class="el-icon-date"></i></span> -->
                  <el-card slot-scope="props" class="table-expand-card">
                    <el-table
                      :data="props.row.expandData"
                      style="width: 100%"
                      :border="expandTableBorder">
                      <el-table-column
                        label="Calculation Description"
                        prop="calcDesc">
                      </el-table-column>
                      <el-table-column
                        label="Progress"
                        prop="progress">
                        <template slot-scope="scope">
                          <el-progress :text-inside="true" :stroke-width="12" :percentage="scope.row.progress" status="success"></el-progress>
                        </template>
                      </el-table-column>
                      <el-table-column
                        label="Details"
                        prop="details"
                        width="150">
                      </el-table-column>
                    </el-table>
                  </el-card>
                </el-table-column>
                <el-table-column
                  label="Task ID"
                  prop="id"
                  width="70">
                </el-table-column>
                <el-table-column
                  label="Task Name"
                  prop="name"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="status"
                  label="Status"
                  width="80px"
                  :filters="[{ text: 'Success', value: 'success' }, { text: 'Warning', value: 'warning' }, { text: 'Error', value: 'error' }]"
                  :filter-method="filterTag"
                  filter-placement="bottom-end">
                  <template slot-scope="scope">
                    <el-tag
                      :type="scope.row.status === 'success' ? 'success' : 'danger'"
                      close-transition size='mini'>{{scope.row.status}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Description"
                  prop="desc"
                  width="380px">
                </el-table-column>
                <el-table-column
                  label="Type"
                  prop="type"
                  width="180px">
                </el-table-column>
                <el-table-column
                  label="Started(UTC)"
                  prop="started">
                </el-table-column>
                <el-table-column
                  label="Ended(UTC)"
                  prop="ended">
                </el-table-column>
                <el-table-column
                  label="Elapsed(min)"
                  prop="elapsed"
                  width="100px">
                </el-table-column>
                <el-table-column
                  label="Dependencies"
                  prop="dep"
                  width="100px">
                </el-table-column>
                <el-table-column
                  label="RunAlone"
                  prop="runalone"
                  width="100">
                </el-table-column>
                <el-table-column
                  label="User"
                  prop="user"
                  width="100">
                </el-table-column>

              </el-table>

            </el-tab-pane>
            <el-tab-pane label="Activity Log" name="second">Activity Log</el-tab-pane>
            <el-tab-pane label="Results" name="third"></el-tab-pane>
            <el-tab-pane label="Trade Summary" name="fourth">

            </el-tab-pane>
          </el-tabs>
        </div>
        <!-- </el-card> -->
      </d2-grid-item>

    </d2-grid-layout>
  </d2-container>
</template>

<script>

import {
  aml2,
  frtbWorkFlow
} from "@api/index";
import Calendar from 'vue-calendar-component';

export default {
  components: {
    Calendar
  },
  data () {
    return {
      filename: __filename,
      layout: {
        layout: [
          { 'x': 0, 'y': 0, 'w': 14, 'h': 26, 'i': '0' },
          // { 'x': 0, 'y': 13, 'w': 7, 'h': 13.5, 'i': '1' },
          // { 'x': 7, 'y': 0, 'w': 5, 'h': 10, 'i': '2' },
          // { 'x': 7, 'y': 6, 'w': 5, 'h': 16, 'i': '3' },

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

      processes: 1,
      num_scenes: 100,
      workingflag: false,
      resultDataLoading: false,
      resultDataTableOpt: {height: '370'},

      expandTableBorder: false,
      activeName: 'first',

      marketdata: {
        dataSource: "",
        method: ""
      },
      // ************************* 表格数据 *******************
      wrokflowTableData:null,
      wrokflowTableData1: [{
        id: '20',
        name: 'LoadRates',
        status: 'success',
        desc: 'Load all private rates',
        type: 'LoadRate',
        started: '2019-08-27 11:36 AM',
        ended: '2019-08-27 11:37 AM',
        elapsed: '-',
        dep: '',
        runalone: 'false',
        user: 'System',
        expandData: [{
          calcDesc: 'MarketStandard - CD_Desks_Americas',
          progress: 100,
          details: 'View Details'
        },{
          calcDesc: 'MarketStandard - Equity_Desks_Americas',
          progress: 100,
          details: 'View Details'
        },{
          calcDesc: 'MarketStandard - FX_Desks_Asia',
          progress: 100,
          details: 'View Details'
        },{
          calcDesc: 'MarketStandard - IR_Desks_Asia',
          progress: 100,
          details: 'View Details'
        },{
          calcDesc: 'MarketStandard - Total_New_York',
          progress: 100,
          details: 'View Details'
        },{
          calcDesc: 'MarketStandard - Total_Singapre',
          progress: 100,
          details: 'View Details'
        },
        ]
      },
      {
        id: '30',
        name: 'LoadTrades',
        status: 'success',
        desc: 'Load all trades',
        type: 'LoadTrade',
        started: '2019-08-27 11:36 AM',
        ended: '2019-08-27 11:37 AM',
        elapsed: '0.18',
        dep: '',
        runalone: 'false',
        user: 'Robin',
        expandData: []
      },
      {
        id: '40',
        name: 'LoadSA',
        status: 'success',
        desc: 'Load external FRTB sensitivities, SA DRC and residual',
        type: 'LoadTrade',
        started: '2019-08-27 11:36 AM',
        ended: '2019-08-27 11:37 AM',
        elapsed: '0.18',
        dep: '',
        runalone: 'false',
        user: 'System',
        expandData: []
      },
      {
        id: '45',
        name: 'LoadDRC',
        status: 'success',
        desc: 'Load parameters for internal DRC calculation',
        type: 'LoadMarketSensitivity',
        started: '2019-08-27 11:36 AM',
        ended: '2019-08-27 11:37 AM',
        elapsed: '-',
        dep: '',
        runalone: 'false',
        user: 'System',
        expandData: []
      },
      {
        id: '50',
        name: 'ReconcileTrades',
        status: 'success',
        desc: 'Reconsile trades with front office',
        type: 'MarketToMarket',
        started: '2019-08-27 11:36 AM',
        ended: '2019-08-27 11:37 AM',
        elapsed: '0.27',
        dep: '20, 30',
        runalone: 'false',
        user: 'Robin',
        expandData: []
      },
      ]

    }
  },
  mounted () {
    this.getTableData();
  },
  methods: {
    getTableData(){
      var self = this;
      // aml2().then(res => {
      //   console.log(res.list)
      // });
      console.log('in get table')
      frtbWorkFlow().then(res => {
        self.wrokflowTableData = res.list;
      });
    },
    log (arg1 = 'log', ...logs) {
      if (logs.length === 0) {
        console.log(arg1)
      } else {
        console.group(arg1)
        logs.forEach(e => {
          console.log(e)
        })
        console.groupEnd()
      }
    },
    // 显示提示
    showInfo () {
      this.$notify({
        title: '提示',
        message: '你可以按住卡片拖拽改变位置；或者在每个卡片的右下角拖动，调整卡片大小'
      })
    },
    // 测试代码
    layoutUpdatedHandler (newLayout) {
      console.group('layoutUpdatedHandler')
      newLayout.forEach(e => {
        console.log(`{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`)
      })
      console.groupEnd()
    },
    resizeHandler (i, newH, newW) {
      this.log('resizeHandler', `i: ${i}, newH: ${newH}, newW: ${newW}`)
    },
    moveHandler (i, newX, newY) {
      this.log('moveHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
    },
    resizedHandler (i, newH, newW, newHPx, newWPx) {
      this.log('resizedHandler', `i: ${i}, newH: ${newH}, newW: ${newW}, newHPx: ${newHPx}, newWPx: ${newWPx}`)
    },
    movedHandler (i, newX, newY) {
      this.log('movedHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
    },

    filterTag(value, row) {
      return row.status === value;
    },
    filterChange(tab, event) {
      console.log(tab, event);
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
        return "height:30px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px";
      } else {
        return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
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
/*.box-card {*/
/*  margin: 0px;*/
/*  background: #fbde00;*/
/*  font: 12px Arial;*/
/*}*/
.table-expand-card {
  text-align:center;
  width: 50%;
  background-color: #333333;
  margin-left: 55px;
  margin-top: 5px;
  margin-bottom: 5px;
}

</style>

<style lang="scss" >
.el-card__header {
  padding: 5px 5px ;
  background-color: #fbde00;
}
.el-card__body {
  padding: 5px;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

</style>

