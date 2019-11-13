<template>
  <d2-container :filename="filename" type="full" class="page" better-scroll>
    <d2-grid-layout
            v-bind="layout">
          <div class="box-card" style="height:1272px">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="外汇资产头寸分析" name="foreignPosition">
                <el-row>
                <div class="my-block">
                    <el-col :span="5">
                        <el-col :span="8">
                            <div class="left-col1">评估日</div>
                        </el-col>
                        <el-col :span="16">
                            <div class="left-col1" >
                                <el-date-picker
                                        class="oneContorls"
                                        placeholder="选择日期"
                                        type="date"
                                        v-model="cashPositionForm.pricingDate">
                                </el-date-picker>
                            </div>
                        </el-col>

                    </el-col>
                    <el-col :span="5">
                        <el-col :span="8">
                            <div class="left-col1">投资组合</div>
                        </el-col>
                        <el-col :span="16">
                            <div class="left-col1" >
                                <el-select
                                        filterable
                                        allow-create
                                        default-first-option
                                        class="oneContorls" v-model="cashPositionForm.positionCombination" placeholder="选择组合">
                                    <el-option
                                            class="oneContorls"
                                            v-for="item in positionCombinationOptions"
                                            :key="item.key"
                                            :label="item.label"
                                            :value="item.value"
                                    ></el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="5">
                        <el-col :span="8">
                            <div class="left-col1">交易对手</div>
                        </el-col>
                        <el-col :span="16">
                            <div class="left-col1" >
                                <el-select
                                        filterable
                                        allow-create
                                        default-first-option
                                        class="oneContorls" v-model="cashPositionForm.jiaoYiDuiShou" placeholder="选择组合">
                                    <el-option
                                            class="oneContorls"
                                            v-for="item in jiaoYiDuiShouOptions"
                                            :key="item.key"
                                            :label="item.label"
                                            :value="item.value"
                                    ></el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="5">
                        <el-col :span="8">
                            <div class="left-col1">货币对</div>
                        </el-col>
                        <el-col :span="16">
                            <div class="left-col1" >
                                <el-select
                                        filterable
                                        allow-create
                                        default-first-option
                                        class="oneContorls" v-model="cashPositionForm.currencyPair" placeholder="选择组合">
                                    <el-option
                                            class="oneContorls"
                                            v-for="item in currencyPairOptions"
                                            :key="item.key"
                                            :label="item.label"
                                            :value="item.value"
                                    ></el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="4">
                        <div class="left-col1" >
                            <el-button class="oneControls" type="info"@click="cashAnalysis">分析</el-button>
                        </div>
                    </el-col>
                </div>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <div style="margin:50px 0 50px 10px">头寸金额 （USD/CNY）</div>
                        <div>
                        <d2-crud
                                style="margin:auto;height:450px;width:95%;overflow: auto"
                                ref="d2Crud8"
                                :columns="cashPostionCols"
                                :data="cashPostionData"
                                :options="options"/>
                        </div>
                    </el-col>
<!--                    <el-col :span="2">-->
<!--                        <div style="color:transparent">a</div>-->
<!--                    </el-col>-->
                    <el-col :span="12">
                        <div style="margin:50px 0 50px 10px">汇率 （USD/CNY）</div>
                        <div>
                            <d2-crud
                                    style="margin:auto;height:450px;width:95%;overflow: auto"
                                    ref="d2Crud9"
                                    width="95%"
                                    :columns="exchangeRateCols"
                                    :data="exchangeRateData"
                                    :options="options"/>
                        </div>
                    </el-col>
                </el-row>
                <div style="margin-top:20px">
                <el-row>
                    <el-col :span="11">
                         <div id="leftCashChart" style="width:95%;height:400px"></div>
                    </el-col>
                    <el-col :span="2">
                        <div style="color:transparent">a</div>
                    </el-col>
                    <el-col :span="11">
                        <div id="rightCashChart" style="width:95%;height:400px"></div>
                    </el-col>
                </el-row>
                </div>
            </el-tab-pane>
            <el-tab-pane label="债券资产头寸分析" name="boundPosition">
                <el-row>
                    <div class="my-block">
                        <el-col :span="4">
                            <el-col :span="7">
                                <div class="left-col1">评估日</div>
                            </el-col>
                            <el-col :span="17">
                                <div class="left-col1" >
                                    <el-date-picker
                                            class="oneContorls"
                                            placeholder="选择日期"
                                            type="date"
                                            v-model="cashPositionForm.pricingDate">
                                    </el-date-picker>
                                </div>
                            </el-col>
                        </el-col>
                        <el-col :span="4">
                            <el-col :span="7">
                                <div class="left-col1">投资组合</div>
                            </el-col>
                            <el-col :span="17">
                                <div class="left-col1" >
                                    <el-select
                                            filterable
                                            allow-create
                                            default-first-option
                                            class="oneContorls" v-model="cashPositionForm.positionCombination" placeholder="选择组合">
                                        <el-option
                                                class="oneContorls"
                                                v-for="item in positionCombinationOptions"
                                                :key="item.key"
                                                :label="item.label"
                                                :value="item.value"
                                        ></el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-col>
                        <el-col :span="4">
                            <el-col :span="7">
                                <div class="left-col1">债券代码</div>
                            </el-col>
                            <el-col :span="17">
                                <div class="left-col1" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            :precision=6
                                            v-model="cashPositionForm.boundCode"
                                    >
                                    </el-input-number>
                                </div>
                            </el-col>
                        </el-col>
                        <el-col :span="4">
                            <el-col :span="7">
                                <div class="left-col1">债券类型</div>
                            </el-col>
                            <el-col :span="17">
                                <div class="left-col1" >
                                    <el-select
                                            filterable
                                            allow-create
                                            default-first-option
                                            class="oneContorls" v-model="cashPositionForm.boundType" placeholder="选择组合">
                                        <el-option
                                                class="oneContorls"
                                                v-for="item in bondCombinationOptions"
                                                :key="item.key"
                                                :label="item.label"
                                                :value="item.value"
                                        ></el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-col>
                        <el-col :span="4">
                            <el-col :span="7">
                                <div class="left-col1">评级</div>
                            </el-col>
                            <el-col :span="17">
                                <div class="left-col1" >
                                    <el-select
                                            filterable
                                            allow-create
                                            default-first-option
                                            class="oneContorls" v-model="cashPositionForm.boundRating" placeholder="选择组合">
                                        <el-option
                                                class="oneContorls"
                                                v-for="item in ratingOptions"
                                                :key="item.key"
                                                :label="item.label"
                                                :value="item.value"
                                        ></el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-col>
                        <el-col :span="4">
                            <div class="left-col1" >
                                <el-button class="oneControls" type="info"@click="cashAnalysis">分析</el-button>
                            </div>
                        </el-col>
                    </div>
                </el-row>
                <el-row>
                    <div style="margin-top: 20px">
                        <d2-crud
                                style="margin:auto;width:95%;height:800px;overflow: auto"
                                ref="d2Crud1"
                                :columns="bondPostionCols"
                                :data="bondPostionData"
                                :options="options"/>
                    </div>
                </el-row>



            </el-tab-pane>
            <el-tab-pane label="资产汇总头寸分析" name="capPosition">
                <el-row>
                    <div class="my-block">
                        <el-col :span="5">
                            <el-col :span="8">
                                <div class="left-col1">评估日</div>
                            </el-col>
                            <el-col :span="16">
                                <div class="left-col1" >
                                    <el-date-picker
                                            class="oneContorls"
                                            placeholder="选择日期"
                                            type="date"
                                            v-model="cashPositionForm.pricingDate">
                                    </el-date-picker>
                                </div>
                            </el-col>

                        </el-col>
                        <el-col :span="5">
                            <el-col :span="8">
                                <div class="left-col1">投资组合</div>
                            </el-col>
                            <el-col :span="16">
                                <div class="left-col1" >
                                    <el-select
                                            filterable
                                            allow-create
                                            default-first-option
                                            class="oneContorls" v-model="cashPositionForm.positionCombination" placeholder="选择组合">
                                        <el-option
                                                class="oneContorls"
                                                v-for="item in positionCombinationOptions"
                                                :key="item.key"
                                                :label="item.label"
                                                :value="item.value"
                                        ></el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-col>
                        <el-col :span="5">
                            <el-col :span="8">
                                <div class="left-col1">交易品种</div>
                            </el-col>
                            <el-col :span="16">
                                <div class="left-col1" >
                                    <el-select
                                            filterable
                                            allow-create
                                            default-first-option
                                            class="oneContorls" v-model="cashPositionForm.tradingType" placeholder="选择组合">
                                        <el-option
                                                class="oneContorls"
                                                v-for="item in productTypeCombinationOptions"
                                                :key="item.key"
                                                :label="item.label"
                                                :value="item.value"
                                        ></el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-col>
                        <el-col :span="5">
                            <div class="left-col1" style="color:transparent">a</div>
                        </el-col>
                        <el-col :span="4">
                            <div class="left-col1" >
                                <el-button class="oneControls" type="info"@click="cashAnalysis">分析</el-button>
                            </div>
                        </el-col>
                    </div>
                </el-row>
                <div style="margin-top: 20px" v-if="cashPositionForm.tradingType==='汇率类'">
                    <div style="text-align: center;">
                        FX Delta
                    </div>
                    <d2-crud
                            style="margin:auto;width:95%;height:450px;overflow: auto"
                            ref="d2Crud2"
                            :columns="capitalPostionColsDelta"
                            :data="capitalPostionDataDelta"
                            :options="options"/>
                    <div style="text-align: center;">
                        FX Gamma
                    </div>
                    <d2-crud
                            style="margin:auto;width:95%;height:450px;overflow: auto"
                            ref="d2Crud3"
                            :columns="capitalPostionColsGamma"
                            :data="capitalPostionDataGamma"
                            :options="options"/>
                    <div style="text-align: center;">
                        FX Vega
                    </div>
                    <d2-crud
                            style="margin:auto;width:95%;height:450px;overflow: auto"
                            ref="d2Crud4"
                            :columns="capitalPostionColsVega"
                            :data="capitalPostionDataVega"
                            :options="options"/>
                </div>
                <div style="margin-top: 20px" v-if="cashPositionForm.tradingType==='利率类'">
                    <div style="text-align: center;">
                        PV01
                    </div>
                    <d2-crud
                            style="margin:auto;width:95%;height:415px;overflow: auto"
                            ref="d2Crud5"
                            :columns="interestPositionPVCols"
                            :data="interestPositionPVData"
                            :options="options"
                     />
                    <div style="text-align: center;">
                        IR Gamma
                    </div>
                    <d2-crud
                            style="margin:auto;width:95%;height:415px;overflow: auto"
                            ref="d2Crud6"
                            :columns="interestPostionGammaCols"
                            :data="interestPostionGammaData"
                            :options="options"/>
                    <div style="text-align: center;">
                        IR Vega
                    </div>
                    <d2-crud
                            style="margin:auto;width:95%;height:415px;overflow: auto"
                            ref="d2Crud7"
                            :columns="interestPositionVegaCols"
                            :data="interestPositionVegaData"
                            :options="options"/>
                </div>
            </el-tab-pane>
          </el-tabs>

        </div>
<!--      </d2-grid-item>-->
    </d2-grid-layout>
  </d2-container>
</template>

<script>

import {

} from '@api/index'
import {
    positionCombinationOptions,
    jiaoYiDuiShouOptions,
    currencyPairOptions,
    bondCombinationOptions,
    productTypeCombinationOptions,
    ratingOptions
} from '../UIPara/UIPara'
import {
    cashPositionForm
} from '../UIPara/FRTBParam'

import echarts from 'echarts'

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
        rowHeight: 42,
        isDraggable: false,
        isResizable: false,
        isMirrored: false,
        verticalCompact: true,
        margin: [2, 3],
        useCssTransforms: true
      },
        positionCombinationOptions: positionCombinationOptions,
        jiaoYiDuiShouOptions: jiaoYiDuiShouOptions,
        currencyPairOptions:currencyPairOptions,
        cashPositionForm:cashPositionForm,


        bondCombinationOptions:bondCombinationOptions,
        productTypeCombinationOptions:productTypeCombinationOptions,
        ratingOptions:ratingOptions,

        activeName:'foreignPosition',
        cashPostionCols:[
            {
                title:'Tenor',
                key:'Tenor',
                //width:'80px'
            },
            {
                title:'Buy Amount',
                key:'Buy Amount',
                //width:'80px'
            },
            {
                title:'Sell Amount',
                key:'Sell Amount',
                //width:'80px'
            }
        ],
        exchangeRateCols:[
            {
                title:'Tenor',
                key:'Tenor',
                //width:'80px'
            },
            {
                title:'Bid',
                key:'Bid',
                //width:'80px'
            },
            {
                title:'Ask',
                key:'Ask',
                //width:'80px'
            },
            {
                title:'Implied IR',
                key:'Implied IR',
                //width:'80px'
            },
        ],
        cashPostionData:[
                {"Tenor":"ON","Buy Amount":"","Sell Amount":"10,000,000.00"},
                {"Tenor":"TN","Buy Amount":"","Sell Amount":"2,000,000.00"},
                {"Tenor":"SPOT","Buy Amount":"300,000,000.00","Sell Amount":""},
                {"Tenor":"SN","Buy Amount":"","Sell Amount":"300,000,000.00"},
                {"Tenor":"1W","Buy Amount":"","Sell Amount":""},
                {"Tenor":"1M","Buy Amount":"","Sell Amount":""},
                {"Tenor":"2M","Buy Amount":"","Sell Amount":""},
                {"Tenor":"3M","Buy Amount":"20,000,000.00","Sell Amount":""},
                {"Tenor":"4M","Buy Amount":"","Sell Amount":""},
                {"Tenor":"5M","Buy Amount":"","Sell Amount":""},
                {"Tenor":"6M","Buy Amount":"","Sell Amount":"50,000,000.00"},
                {"Tenor":"9M","Buy Amount":"","Sell Amount":""},
                {"Tenor":"1Y","Buy Amount":"","Sell Amount":""}
                ],
        exchangeRateData:[
                {"Tenor":"ON","Bid":"6.5","Ask":"6.5","Implied IR":"0.4571"},
                {"Tenor":"TN","Bid":"-0.9","Ask":"0.1","Implied IR":"0.4641"},
                {"Tenor":"SPOT","Bid":"6.8755","Ask":"6.8815","Implied IR":""},
                {"Tenor":"SN","Bid":"-0.86","Ask":"0.14","Implied IR":"0.531"},
                {"Tenor":"1W","Bid":"-3","Ask":"-2","Implied IR":"0.721"},
                {"Tenor":"1M","Bid":"-5.49","Ask":"-3.49","Implied IR":"1.2179"},
                {"Tenor":"2M","Bid":"-8","Ask":"-7","Implied IR":"1.2291"},
                {"Tenor":"3M","Bid":"-11.5","Ask":"-8.5","Implied IR":"1.3601"},
                {"Tenor":"4M","Bid":"-23.5","Ask":"-18.5","Implied IR":"1.4289"},
                {"Tenor":"5M","Bid":"-39.5","Ask":"-31.5","Implied IR":"1.5102"},
                {"Tenor":"6M","Bid":"-117","Ask":"-107","Implied IR":"1.6283"},
                {"Tenor":"9M","Bid":"-197.5","Ask":"-187.5","Implied IR":"1.7391"},
                {"Tenor":"1Y","Bid":"-284","Ask":"-274","Implied IR":"1.821"}],
        options:{
            border: true,
            rowStyle(row) {
                if (row.rowIndex % 2 === 0) {
                    return "height:30px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px";
                } else {
                    return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
                }
            },
            headerCellStyle(row) {
                return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
            },
        },
        optionsSpan:{
            border: true,
            spanMethod ({ row, column, rowIndex, columnIndex }) {
                var colspannum=1
                var rowspannum=1
                if (columnIndex === 0) {
                    rowspannum=parseInt(row.Curr_span)
                    if(rowspannum ===0 ){
                        colspannum=0
                    }
                    return{
                        rowspan:rowspannum,
                        colspan:colspannum
                    }
                } //endif
            },//end span
            rowStyle(row) {
                if (row.rowIndex % 2 === 0) {
                    return "height:30px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px";
                } else {
                    return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
                }
            },
            headerCellStyle(row) {
                return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
            },
        },
        echartOptionLeft : {
            title: {
                textStyle:{
                    color: "white",
                },
            },
            legend:{
                show:true,
                y:'top',
                orient:'horizontal',
                textStyle:{
                    color:"white",
                    fontSize:16
                }
            },
            tooltip: {
                trigger: 'axis',
            },
            grid: {
                left: '3%',
                right: '1%',
                bottom: '15%',
                top:'10%',
                containLabel: true
            },
            xAxis: {
                name: '时间',
                nameLocation:'center',
                nameGap:30,
                textStyle:{
                    color:"white",
                    fontSize:16
                },
                type: 'category',
                splitLine: {
                    show: false
                },
                nameTestStyle:{
                    color:'#FFFFFF'
                },
                axisLine:{
                    lineStyle:{
                        color:'white',  //坐标轴的颜色
                        width:1,
                    },
                },
            },
            yAxis: {
                name: '汇率',
                nameLocation:'center',
                nameGap:30,
                min:5,
                type: 'value',
                //boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                },
                axisLabel:{
                    formatter:'{value}'
                },
                axisLine:{
                    lineStyle:{
                        color:'white',  //坐标轴的颜色
                        width:1,
                    }
                },
                nameTestStyle:{
                    color:'#FFFFFF'
                },
            },
            series: [
                {
                    name:'汇率',
                    type:'line',
                    data:[
                        ['10:00','6.5'],
                        ['12:00','6.72'],
                        ['14:00','6.6'],
                        ['20:00','6.6'],
                    ]
                },
            ]

        },
        echartOptionRight : {
            title: {
                textStyle:{
                    color: "white",
                },
            },
            legend:{
                show:true,
                y:'top',
                orient:'horizontal',
                textStyle:{
                    color:"white",
                    fontSize:16
                }
            },
            tooltip: {
                trigger: 'axis',
            },
            grid: {
                left: '3%',
                right: '1%',
                bottom: '15%',
                top:'10%',
                containLabel: true
            },
            xAxis: {
                name: '时间',
                nameLocation:'center',
                nameGap:30,
                textStyle:{
                    color:"white",
                    fontSize:16
                },
                type: 'category',
                splitLine: {
                    show: false
                },
                nameTestStyle:{
                    color:'#FFFFFF'
                },
                axisLine:{
                    lineStyle:{
                        color:'white',  //坐标轴的颜色
                        width:1,
                    },
                },
            },
            yAxis: {
                name: '汇率',
                nameLocation:'center',
                nameGap:30,
                type: 'value',
                min:5,
                //boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                },
                axisLabel:{
                    formatter:'{value}'
                },
                axisLine:{
                    lineStyle:{
                        color:'white',  //坐标轴的颜色
                        width:1,
                    }
                },
                nameTestStyle:{
                    color:'#FFFFFF'
                },
            },
            series: [
                {
                    name:'Bid',
                    type:'line',
                    data:[
                        ['10:00','6.5'],
                        ['12:00','6.72'],
                        ['14:00','6.6'],
                        ['20:00','6.6'],
                    ]
                },
                {
                    name:'Ask',
                    type:'line',
                    data:[
                        ['10:00','6.5'],
                        ['12:00','6.9'],
                        ['14:00','6.8'],
                        ['20:00','6.82'],
                    ]
                },
            ]

        },
        bondPostionCols:[
            {key:"all",title:""},
            {key:"投资组合",title:"投资组合"},
            {key:"评级",title:"评级"},
            {key:"交易日",title:"交易日"},
            {key:"到期日",title:"到期日"},
            {key:"币种",title:"币种"},
            {key:"面额",title:"面额"},
            {key:"市场净价",title:"市场净价"},
            {key:"全价市值",title:"全价市值"},
            {key:"比例",title:"比例"},
            {key:"息票率(%)",title:"息票率(%)"},
            {key:"收益率(%)",title:"收益率(%)"},
            {key:"收益率(%)（Long）",title:"收益率(%)（Long）"},
            {key:"收益率(%)（Short)",title:"收益率(%)（Short)"},
            {key:"待偿期",title:"待偿期"},
            {key:"PV01",title:"PV01"},
            {key:"麦氏久期",title:"麦氏久期"},
            {key:"麦氏久期(Long)",title:"麦氏久期(Long)"},
            {key:"麦氏久期(Short)",title:"麦氏久期(Short)"},
            {key:"修正久期",title:"修正久期"},
            {key:"凸性",title:"凸性"},
            {key:"麦氏凸性",title:"麦氏凸性"},
            {key:"VaR",title:"VaR"},
        ],
        bondPostionData:[
            {"all":"合计","投资组合":"","评级":"","交易日":"","到期日":"","币种":"","面额":"280,000,000.00","市场净价":"","全价市值":"282,312,000.00","比例":"","息票率(%)":"","收益率(%)":"","收益率(%)（Long）":"","收益率(%)（Short)":"","待偿期":"","PV01":"","麦氏久期":"","麦氏久期(Long)":"","麦氏久期(Short)":"","修正久期":"","凸性":"","麦氏凸性":"","VaR":""},
            {"all":"投资组合1","投资组合":"","评级":"","交易日":"","到期日":"","币种":"","面额":"30,000,000.00","市场净价":"","全价市值":"30,297,000.00","比例":"","息票率(%)":"","收益率(%)":"","收益率(%)（Long）":"","收益率(%)（Short)":"","待偿期":"","PV01":"","麦氏久期":"","麦氏久期(Long)":"","麦氏久期(Short)":"","修正久期":"","凸性":"","麦氏凸性":"","VaR":""},
            {"all":"","投资组合":"130001","评级":"AAA","交易日":"2019/3/6","到期日":"2020/3/6","币种":"CNY","面额":"10,000,000.00","市场净价":"101.93","全价市值":"10,193,000.00","比例":"10%","息票率(%)":"2.51","收益率(%)":"2.67","收益率(%)（Long）":"2.67","收益率(%)（Short)":"","待偿期":"0.39","PV01":"-293.53","麦氏久期":"0.41","麦氏久期(Long)":"0.41","麦氏久期(Short)":"0.41","修正久期":"0.4","凸性":"0.512","麦氏凸性":"0.499","VaR":"-13,059"},
            {"all":"","投资组合":"1280131","评级":"AA","交易日":"2019/3/1","到期日":"2021/3/1","币种":"CNY","面额":"20,000,000.00","市场净价":"100.52","全价市值":"20,104,000.00","比例":"20%","息票率(%)":"3.15","收益率(%)":"3.43","收益率(%)（Long）":"3.43","收益率(%)（Short)":"","待偿期":"1.38","PV01":"-610.43","麦氏久期":"1.402","麦氏久期(Long)":"1.402","麦氏久期(Short)":"1.402","修正久期":"1.356","凸性":"1.728","麦氏凸性":"1.671","VaR":"-24,203"},
            {"all":"投资组合2","投资组合":"","评级":"","交易日":"","到期日":"","币种":"","面额":"250,000,000.00","市场净价":"","全价市值":"252,015,000.00","比例":"","息票率(%)":"","收益率(%)":"","收益率(%)（Long）":"","收益率(%)（Short)":"","待偿期":"","PV01":"","麦氏久期":"","麦氏久期(Long)":"","麦氏久期(Short)":"","修正久期":"","凸性":"","麦氏凸性":"","VaR":""},
            {"all":"","投资组合":"101456039","评级":"A","交易日":"2016/12/8","到期日":"2019/12/8","币种":"CNY","面额":"100,000,000.00","市场净价":"99.87","全价市值":"99,870,000.00","比例":"100%","息票率(%)":"4.6","收益率(%)":"4.78","收益率(%)（Long）":"4.77","收益率(%)（Short)":"4.79","待偿期":"0.15","PV01":"-3764.69","麦氏久期":"0.152","麦氏久期(Long)":"0.152","麦氏久期(Short)":"0.152","修正久期":"0.145","凸性":"0.201","麦氏凸性":"0.192","VaR":"-9,428"},
            {"all":"","投资组合":"130422","评级":"AA","交易日":"2018/10/15","到期日":"2020/10/15","币种":"CNY","面额":"150,000,000.00","市场净价":"101.43","全价市值":"152,145,000.00","比例":"75%","息票率(%)":"3.46","收益率(%)":"3.98","收益率(%)（Long）":"3.98","收益率(%)（Short)":"3.98","待偿期":"1.01","PV01":"-5029.56","麦氏久期":"1.032","麦氏久期(Long)":"1.032","麦氏久期(Short)":"1.032","修正久期":"0.993","凸性":"1.31","麦氏凸性":"1.26","VaR":"-14,203"},
        ],

        capitalPostionColsDelta: [
                {key:"Tenor",title:"Tenor"},
                {key:"AUD",title:"AUD"},
                {key:"CAD",title:"CAD"},
                {key:"CHF",title:"CHF"},
                {key:"CNY",title:"CNY"},
                {key:"EUR",title:"EUR"},
                {key:"JPY",title:"JPY"},
                {key:"SGD",title:"SGD"},
        ],
        capitalPostionDataDelta:[
            {"Tenor":"Total","AUD":"-3063870","CAD":"-21993604","CHF":"399071","CNY":"228815656","EUR":"-2998931","JPY":"-268844475","SGD":"-1180369"},
            {"Tenor":"1M","AUD":"-2998384","CAD":"-21846249","CHF":"176181","CNY":"564003267","EUR":"-2867865","JPY":"-260072026","SGD":"-1311492"},
            {"Tenor":"3M","AUD":"-65486","CAD":"-147355","CHF":"222890","CNY":"2535517","EUR":"-131066","JPY":"-16496219","SGD":"131123"},
            {"Tenor":"6M","AUD":"","CAD":"","CHF":"","CNY":"19994591","EUR":"","JPY":"2839654","SGD":""},
            {"Tenor":"9M","AUD":"","CAD":"","CHF":"","CNY":"44579828","EUR":"","JPY":"4884116","SGD":""},
            {"Tenor":"1Y","AUD":"","CAD":"","CHF":"","CNY":"-406491452","EUR":"","JPY":"","SGD":""},
            {"Tenor":"2Y","AUD":"","CAD":"","CHF":"","CNY":"4193905","EUR":"","JPY":"","SGD":""},

        ],

        capitalPostionColsGamma: [
            {key:"Tenor",title:"Tenor"},
            {key:"AUD",title:"AUD"},
            {key:"CAD",title:"CAD"},
            {key:"CHF",title:"CHF"},
            {key:"CNY",title:"CNY"},
            {key:"EUR",title:"EUR"},
            {key:"JPY",title:"JPY"},
            {key:"SGD",title:"SGD"},
        ],
        capitalPostionDataGamma:[
            {"Tenor":"Total","AUD":"-167647","CAD":"-100302","CHF":"-26561","CNY":"-40784","EUR":"70537","JPY":"55772","SGD":"14765"},
            {"Tenor":"1M","AUD":"-7450","CAD":"-2655","CHF":"-1783","CNY":"-3012","EUR":"42105","JPY":"33288","SGD":"8817"},
            {"Tenor":"3M","AUD":"-11585","CAD":"-5025","CHF":"-2532","CNY":"-4028","EUR":"-2070","JPY":"-1637","SGD":"-433"},
            {"Tenor":"6M","AUD":"-19604","CAD":"-7479","CHF":"-4920","CNY":"-7205","EUR":"-69712","JPY":"-55106","SGD":"-14606"},
            {"Tenor":"9M","AUD":"-26497","CAD":"-9902","CHF":"-6298","CNY":"-10297","EUR":"99050","JPY":"78305","SGD":"20745"},
            {"Tenor":"1Y","AUD":"-56038","CAD":"-28768","CHF":"-11028","CNY":"-16242","EUR":"1164","JPY":"922","SGD":"242"},
            {"Tenor":"2Y","AUD":"-46473","CAD":"-46473","CHF":"","CNY":"","EUR":"","JPY":"","SGD":""},

        ],
        capitalPostionColsVega: [
            {key:"Vol",title:"Vol"},
            {key:"AUD",title:"AUD"},
            {key:"CAD",title:"CAD"},
            {key:"CHF",title:"CHF"},
            {key:"CNY",title:"CNY"},
            {key:"EUR",title:"EUR"},
            {key:"JPY",title:"JPY"},
            {key:"SGD",title:"SGD"},
        ],
        capitalPostionDataVega:[
            {"Vol":"Total","AUD":"62002","CAD":"86168","CHF":"56636","CNY":"137026","EUR":"25900","JPY":"4888","SGD":"67105"},
            {"Vol":"0.5","AUD":"13958","CAD":"","CHF":"41102","CNY":"2411","EUR":"","JPY":"2543","SGD":""},
            {"Vol":"0.75","AUD":"19572","CAD":"3574","CHF":"10402","CNY":"42104","EUR":"","JPY":"","SGD":"32452"},
            {"Vol":"1","AUD":"28472","CAD":"","CHF":"5132","CNY":"5102","EUR":"2455","JPY":"2345","SGD":"34653"},
            {"Vol":"5","AUD":"","CAD":"82594","CHF":"","CNY":"2847","EUR":"","JPY":"","SGD":""},
            {"Vol":"6","AUD":"","CAD":"","CHF":"","CNY":"84562","EUR":"23445","JPY":"","SGD":""},
        ],
        interestPositionPVCols:[
            {
                key:'Tenor',title:'Tenor'
            },
            {
                title:'CNY',
                children:[
                    {key:"totalCNY",title:""},
                    {key:"CNY FR007",title:"CNY FR007"},
                    {key:"CNY SHIBOR",title:"CNY SHIBOR"},
                    {key:"CNY FX ONSHORE",title:"CNY FX ONSHORE"},
                   ]
            },
            {
                title:'USD',
                children:[
                    {key:"totalUSD",title:" "},
                    {key:"USD LIBOR",title:"USD LIBOR"},
                    {key:"USD FX ONSHORE",title:"USD FX ONSHORE"},
                ]
            }
        ],
        interestPositionPVData:[
            {"Tenor":"ON","totalCNY":"-127","CNY FR007":"-52","CNY SHIBOR":"-23","CNY FX ONSHORE":"-52","totalUSD":"-641","USD LIBOR":"-507","USD FX ONSHORE":"-134"},
            {"Tenor":"1W","totalCNY":"-227","CNY FR007":"-84","CNY SHIBOR":"-58","CNY FX ONSHORE":"-85","totalUSD":"1406","USD LIBOR":"1112","USD FX ONSHORE":"294"},
            {"Tenor":"1M","totalCNY":"-744","CNY FR007":"-265","CNY SHIBOR":"-178","CNY FX ONSHORE":"-301","totalUSD":"4209","USD LIBOR":"3328","USD FX ONSHORE":"881"},
            {"Tenor":"3M","totalCNY":"-1157","CNY FR007":"-502","CNY SHIBOR":"-253","CNY FX ONSHORE":"-402","totalUSD":"-206","USD LIBOR":"-163","USD FX ONSHORE":"-43"},
            {"Tenor":"6M","totalCNY":"-1959","CNY FR007":"-747","CNY SHIBOR":"-492","CNY FX ONSHORE":"-720","totalUSD":"-6970","USD LIBOR":"-5510","USD FX ONSHORE":"-1460"},
            {"Tenor":"9M","totalCNY":"-2648","CNY FR007":"-990","CNY SHIBOR":"-629","CNY FX ONSHORE":"-1029","totalUSD":"9904","USD LIBOR":"7830","USD FX ONSHORE":"2074"},
            {"Tenor":"1Y","totalCNY":"-5602","CNY FR007":"-2876","CNY SHIBOR":"-1102","CNY FX ONSHORE":"-1624","totalUSD":"116","USD LIBOR":"92","USD FX ONSHORE":"24"},
            {"Tenor":"2Y","totalCNY":"-4647","CNY FR007":"-4647","CNY SHIBOR":"","CNY FX ONSHORE":"","totalUSD":"","USD LIBOR":"","USD FX ONSHORE":""},
            {"Tenor":"3Y","totalCNY":"-6302","CNY FR007":"-6302","CNY SHIBOR":"","CNY FX ONSHORE":"","totalUSD":"","USD LIBOR":"","USD FX ONSHORE":""},
            {"Tenor":"5Y","totalCNY":"-8584","CNY FR007":"-8584","CNY SHIBOR":"","CNY FX ONSHORE":"","totalUSD":"","USD LIBOR":"","USD FX ONSHORE":""},
            {"Tenor":"10Y","totalCNY":"-11865","CNY FR007":"-11865","CNY SHIBOR":"","CNY FX ONSHORE":"","totalUSD":"","USD LIBOR":"","USD FX ONSHORE":""},
        ],
        interestPostionGammaCols:[
            {
                key:'Tenor',title:'Tenor'
            },
            {
                title:'CNY',
                children:[
                    {key:"totalCNY",title:""},
                    {key:"CNY FR007",title:"CNY FR007"},
                    {key:"CNY SHIBOR",title:"CNY SHIBOR"},
                    {key:"CNY FX ONSHORE",title:"CNY FX ONSHORE"},
                ]
            },
            {
                title:'USD',
                children:[
                    {key:"totalUSD",title:" "},
                    {key:"USD LIBOR",title:"USD LIBOR"},
                    {key:"USD FX ONSHORE",title:"USD FX ONSHORE"},
                ]
            }
        ],
        interestPostionGammaData:[
                {"Tenor":"O/N","totalCNY":"-1284","CNY FR007":"-523","CNY SHIBOR":"-234","CNY FX ONSHORE":"-527","totalUSD":"-6420","USD LIBOR":"-5071","USD FX ONSHORE":"-1349"},
                {"Tenor":"1W","totalCNY":"-2279","CNY FR007":"-842","CNY SHIBOR":"-585","CNY FX ONSHORE":"-852","totalUSD":"14070","USD LIBOR":"11128","USD FX ONSHORE":"2942"},
                {"Tenor":"1M","totalCNY":"-7450","CNY FR007":"-2655","CNY SHIBOR":"-1783","CNY FX ONSHORE":"-3012","totalUSD":"42105","USD LIBOR":"33288","USD FX ONSHORE":"8817"},
                {"Tenor":"3M","totalCNY":"-11585","CNY FR007":"-5025","CNY SHIBOR":"-2532","CNY FX ONSHORE":"-4028","totalUSD":"-2070","USD LIBOR":"-1637","USD FX ONSHORE":"-433"},
                {"Tenor":"6M","totalCNY":"-19604","CNY FR007":"-7479","CNY SHIBOR":"-4920","CNY FX ONSHORE":"-7205","totalUSD":"-69712","USD LIBOR":"-55106","USD FX ONSHORE":"-14606"},
                {"Tenor":"9M","totalCNY":"-26497","CNY FR007":"-9902","CNY SHIBOR":"-6298","CNY FX ONSHORE":"-10297","totalUSD":"99050","USD LIBOR":"78305","USD FX ONSHORE":"20745"},
                {"Tenor":"1Y","totalCNY":"-56038","CNY FR007":"-28768","CNY SHIBOR":"-11028","CNY FX ONSHORE":"-16242","totalUSD":"1164","USD LIBOR":"922","USD FX ONSHORE":"242"},
                {"Tenor":"2Y","totalCNY":"-46473","CNY FR007":"-46473","CNY SHIBOR":"","CNY FX ONSHORE":"","totalUSD":"","USD LIBOR":"","USD FX ONSHORE":""},
                {"Tenor":"3Y","totalCNY":"-63023","CNY FR007":"-63023","CNY SHIBOR":"","CNY FX ONSHORE":"","totalUSD":"","USD LIBOR":"","USD FX ONSHORE":""},
                {"Tenor":"5Y","totalCNY":"-85848","CNY FR007":"-85848","CNY SHIBOR":"","CNY FX ONSHORE":"","totalUSD":"","USD LIBOR":"","USD FX ONSHORE":""},
                {"Tenor":"10Y","totalCNY":"-118656","CNY FR007":"-118656","CNY SHIBOR":"","CNY FX ONSHORE":"","totalUSD":"","USD LIBOR":"","USD FX ONSHORE":""},
        ],
        interestPositionVegaCols:[
            {
                key:'Vol',title:'Vol'
            },
            {
                title:'CNY',
                children:[
                    {key:"totalCNY",title:""},
                     {key:"CNY SHIBOR",title:"CNY SHIBOR"},
                ]
            },
            {
                title:'USD',
                children:[
                    {key:"totalUSD",title:" "},
                    {key:"USD LIBOR",title:"USD LIBOR"},
                ]
            }
        ],
        interestPositionVegaData:[
            {"Vol":"Total","totalCNY":"2447","CNY SHIBOR":"2447","totalUSD":"358","USD LIBOR":"358"},
            {"Vol":"0.65","totalCNY":"1139","CNY SHIBOR":"1139","totalUSD":"","USD LIBOR":""},
            {"Vol":"0.9","totalCNY":"1308","CNY SHIBOR":"1308","totalUSD":"","USD LIBOR":""},
            {"Vol":"1","totalCNY":"","CNY SHIBOR":"","totalUSD":"411","USD LIBOR":"411"},
            {"Vol":"5","totalCNY":"","CNY SHIBOR":"","totalUSD":"-104","USD LIBOR":"-104"},
            {"Vol":"6","totalCNY":"","CNY SHIBOR":"","totalUSD":"51","USD LIBOR":"51"},
        ],
        echartsleft: null,
        echartsright: null,


    }
  },
  mounted () {
      this.echartsleft = echarts.init(document.getElementById('leftCashChart'));
      this.echartsleft.setOption(this.echartOptionLeft);

      this.echartsright=echarts.init(document.getElementById('rightCashChart'));
      this.echartsright.setOption(this.echartOptionRight)
  },
  methods: {
    // ****************************
      handleClick(){
          console.log('handle click')
      },
      cashAnalysis(){

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
    .d2-crud .el-table--enable-row-hover .el-table__body tr:hover>td{
        background-color: #222222;
    }
</style>
