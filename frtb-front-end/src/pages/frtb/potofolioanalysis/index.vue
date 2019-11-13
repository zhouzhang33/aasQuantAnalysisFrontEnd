<template>
  <d2-container :filename="filename" type="full" class="page" better-scroll>
    <d2-grid-layout
            v-bind="layout">
          <div class="box-card" style="height:900px">
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
                    <el-col :span="11">
                        <div>头寸金额 （USD/CNY）</div>
                        <div>
                        <d2-crud
                                style="height:400px;overflow: auto"
                                ref="d2Crud"
                                :columns="cashPostionCols"
                                :data="cashPostionData"
                                :options="options"/>
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div style="color:transparent">a</div>
                    </el-col>
                    <el-col :span="11">
                        <div>汇率 （USD/CNY）</div>
                        <div>
                            <d2-crud
                                    style="height:400px;overflow: auto"
                                    ref="d2Crud"
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
                                <div class="left-col1">债券代码</div>
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
                            <div class="left-col1" >
                                <el-button class="oneControls" type="info"@click="cashAnalysis">分析</el-button>
                            </div>
                        </el-col>
                    </div>
                </el-row>
                <el-row>
                    <div style="margin-top: 20px">
                        <d2-crud
                                style="height:400px;overflow: auto"
                                ref="d2Crud"
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
                            style="height:260px;overflow: auto"
                            ref="d2Crud"
                            :columns="capitalPostionColsDelta"
                            :data="capitalPostionDataDelta"
                            :options="options"/>
                    <div style="text-align: center;">
                        FX Gamma
                    </div>
                    <d2-crud
                            style="height:260px;overflow: auto"
                            ref="d2Crud"
                            :columns="capitalPostionColsGamma"
                            :data="capitalPostionDataGamma"
                            :options="options"/>
                    <div style="text-align: center;">
                        FX Vega
                    </div>
                    <d2-crud
                            style="height:260px;overflow: auto"
                            ref="d2Crud"
                            :columns="capitalPostionColsVega"
                            :data="capitalPostionDataVega"
                            :options="options"/>
                </div>
                <div style="margin-top: 20px" v-if="cashPositionForm.tradingType==='利率类'">
                    <d2-crud
                            style="height:400px;overflow: auto"
                            ref="d2Crud"
                            :columns="interestPositionCols"
                            :data="interestPositionData"
                            :options="options"/>
                </div>
                <el-row>

                </el-row>
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
        rowHeight: 30,
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
            {"key":"all","title":""},
            {"key":"投资组合","title":"投资组合"},
            {"key":"评级","title":"评级"},
            {"key":"交易日","title":"交易日"},
            {"key":"到期日","title":"到期日"},
            {"key":"币种","title":"币种"},
            {"key":"面额","title":"面额"},
            {"key":"市场净价","title":"市场净价"},
            {"key":"全价市值","title":"全价市值"},
            {"key":"比例","title":"比例"},
            {"key":"息票率(%)","title":"息票率(%)"},
            {"key":"收益率(%)","title":"收益率(%)"},
            {"key":"收益率(%)（Long）","title":"收益率(%)（Long）"},
            {"key":"收益率(%)（Short)","title":"收益率(%)（Short)"},
            {"key":"待偿期","title":"待偿期"},
            {"key":"PV01","title":"PV01"},
            {"key":"麦氏久期","title":"麦氏久期"},
            {"key":"麦氏久期(Long)","title":"麦氏久期(Long)"},
            {"key":"麦氏久期(Short)","title":"麦氏久期(Short)"},
            {"key":"修正久期","title":"修正久期"},
            {"key":"凸性","title":"凸性"},
            {"key":"麦氏凸性","title":"麦氏凸性"},
            {"key":"VaR","title":"VaR"},
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
            {"key": "Tenor", "title": "Tenor"},
            {"key": "Total", "title": "Total"},
            {"key": "1M", "title": "1M"},
            {"key": "3M", "title": "3M"},
            {"key": "6M", "title": "6M"},
            {"key": "9M", "title": "9M"},
            {"key": "1Y", "title": "1Y"},
            {"key": "2Y", "title": "2Y"},
        ],
        capitalPostionDataDelta: [
            {
                "Tenor": "AUD",
                "Total": "-3063870",
                "1M": "-2998384",
                "3M": "-65486",
                "6M": "",
                "9M": "",
                "1Y": "",
                "2Y": ""
            },
            {
                "Tenor": "CAD",
                "Total": "-21993604",
                "1M": "-21846249",
                "3M": "-147355",
                "6M": "",
                "9M": "",
                "1Y": "",
                "2Y": ""
            },
            {"Tenor": "CHF", "Total": "399071", "1M": "176181", "3M": "222890", "6M": "", "9M": "", "1Y": "", "2Y": ""},
            {
                "Tenor": "CNY",
                "Total": "228815656",
                "1M": "564003267",
                "3M": "2535517",
                "6M": "19994591",
                "9M": "44579828",
                "1Y": "-406491452",
                "2Y": "4193905"
            },
            {
                "Tenor": "EUR",
                "Total": "-2998931",
                "1M": "-2867865",
                "3M": "-131066",
                "6M": "",
                "9M": "",
                "1Y": "",
                "2Y": ""
            },
            {
                "Tenor": "JPY",
                "Total": "-268844475",
                "1M": "-260072026",
                "3M": "-16496219",
                "6M": "2839654",
                "9M": "4884116",
                "1Y": "",
                "2Y": ""
            },
            {
                "Tenor": "SGD",
                "Total": "-1180369",
                "1M": "-1311492",
                "3M": "131123",
                "6M": "",
                "9M": "",
                "1Y": "",
                "2Y": ""
            },
        ],

        capitalPostionColsGamma: [
            {"key": "Tenor", "title": "Tenor"},
            {"key": "Total", "title": "Total"},
            {"key": "1M", "title": "1M"},
            {"key": "3M", "title": "3M"},
            {"key": "6M", "title": "6M"},
            {"key": "9M", "title": "9M"},
            {"key": "1Y", "title": "1Y"},
            {"key": "2Y", "title": "2Y"},
        ],
        capitalPostionDataGamma: [
            {
                "Tenor": "AUD",
                "Total": "-167647",
                "1M": "-7450",
                "3M": "-11585",
                "6M": "-19604",
                "9M": "-26497",
                "1Y": "-56038",
                "2Y": "-46473"
            },
            {
                "Tenor": "CAD",
                "Total": "-100302",
                "1M": "-2655",
                "3M": "-5025",
                "6M": "-7479",
                "9M": "-9902",
                "1Y": "-28768",
                "2Y": "-46473"
            },
            {
                "Tenor": "CHF",
                "Total": "-26561",
                "1M": "-1783",
                "3M": "-2532",
                "6M": "-4920",
                "9M": "-6298",
                "1Y": "-11028",
                "2Y": ""
            },
            {
                "Tenor": "CNY",
                "Total": "-40784",
                "1M": "-3012",
                "3M": "-4028",
                "6M": "-7205",
                "9M": "-10297",
                "1Y": "-16242",
                "2Y": ""
            },
            {
                "Tenor": "EUR",
                "Total": "70537",
                "1M": "42105",
                "3M": "-2070",
                "6M": "-69712",
                "9M": "99050",
                "1Y": "1164",
                "2Y": ""
            },
            {
                "Tenor": "JPY",
                "Total": "55772",
                "1M": "33288",
                "3M": "-1637",
                "6M": "-55106",
                "9M": "78305",
                "1Y": "922",
                "2Y": ""
            },
            {
                "Tenor": "SGD",
                "Total": "14765",
                "1M": "8817",
                "3M": "-433",
                "6M": "-14606",
                "9M": "20745",
                "1Y": "242",
                "2Y": ""
            },
        ],
        capitalPostionColsVega: [
            {"key": "Vol", "title": "Vol"},
            {"key": "Total", "title": "Total"},
            {"key": "0.5", "title": "0.5"},
            {"key": "0.75", "title": "0.75"},
            {"key": "1", "title": "1"},
            {"key": "5", "title": "5"},
            {"key": "6", "title": "6"},

        ],
        capitalPostionDataVega: [

            {"Vol": "AUD", "Total": "62002", "0.5": "13958", "0.75": "19572", "1": "28472", "5": "", "6": ""},
            {"Vol": "CAD", "Total": "86168", "0.5": "", "0.75": "3574", "1": "", "5": "82594", "6": ""},
            {"Vol": "CHF", "Total": "56636", "0.5": "41102", "0.75": "10402", "1": "5132", "5": "", "6": ""},
            {"Vol": "CNY", "Total": "137026", "0.5": "2411", "0.75": "42104", "1": "5102", "5": "2847", "6": "84562"},
            {"Vol": "EUR", "Total": "25900", "0.5": "", "0.75": "", "1": "2455", "5": "", "6": "23445"},
            {"Vol": "JPY", "Total": "4888", "0.5": "2543", "0.75": "", "1": "2345", "5": "", "6": ""},
            {"Vol": "SGD", "Total": "67105", "0.5": "", "0.75": "32452", "1": "34653", "5": "", "6": ""},

        ],

        interestPositionCols:[
            {"key":"col1","title":""},
            {"key":"col2","title":""},
            {"key":"col3","title":""},
            {"key":"col4","title":""},
            {"key":"col5","title":""},
            {"key":"col6","title":""},
            {"key":"col7","title":""},
            {"key":"col8","title":""},
            {"key":"col9","title":""},
            {"key":"col10","title":""},
            {"key":"col11","title":""},
            {"key":"col12","title":""},
            {"key":"col13","title":""},

        ],
        interestPositionData:[
            {"col1":"2","col2":"2","col3":"2","col4":"","col5":"","col6":"","col7":"PV01","col8":"","col9":"","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"","col2":"Tenor","col3":"O/N","col4":"1W","col5":"1M","col6":"3M","col7":"6M","col8":"9M","col9":"1Y","col10":"2Y","col11":"3Y","col12":"5Y","col13":"10Y"},
            // {"col1":"CNY","col2":"","col3":"-127","col4":"-227","col5":"-744","col6":"-1157","col7":"-1959","col8":"-2648","col9":"-5602","col10":"-4647","col11":"-6302","col12":"-8584","col13":"-11865"},
            // {"col1":"","col2":"CNY FR007","col3":"-52","col4":"-84","col5":"-265","col6":"-502","col7":"-747","col8":"-990","col9":"-2876","col10":"-4647","col11":"-6302","col12":"-8584","col13":"-11865"},
            // {"col1":"","col2":"CNY SHIBOR","col3":"-23","col4":"-58","col5":"-178","col6":"-253","col7":"-492","col8":"-629","col9":"-1102","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"","col2":"CNY FX ONSHORE","col3":"-52","col4":"-85","col5":"-301","col6":"-402","col7":"-720","col8":"-1029","col9":"-1624","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"USD","col2":"","col3":"-641","col4":"1406","col5":"4209","col6":"-206","col7":"-6970","col8":"9904","col9":"116","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"","col2":"USD LIBOR","col3":"-507","col4":"1112","col5":"3328","col6":"-163","col7":"-5510","col8":"7830","col9":"92","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"","col2":"USD FX ONSHORE","col3":"-134","col4":"294","col5":"881","col6":"-43","col7":"-1460","col8":"2074","col9":"24","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"","col2":"","col3":"","col4":"","col5":"","col6":"","col7":"IR Gamma","col8":"","col9":"","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"","col2":"Tenor","col3":"O/N","col4":"1W","col5":"1M","col6":"3M","col7":"6M","col8":"9M","col9":"1Y","col10":"2Y","col11":"3Y","col12":"5Y","col13":"10Y"},
            // {"col1":"CNY","col2":"","col3":"-1284","col4":"-2279","col5":"-7450","col6":"-11585","col7":"-19604","col8":"-26497","col9":"-56038","col10":"-46473","col11":"-63023","col12":"-85848","col13":"-118656"},
            // {"col1":"","col2":"CNY FR007","col3":"-523","col4":"-842","col5":"-2655","col6":"-5025","col7":"-7479","col8":"-9902","col9":"-28768","col10":"-46473","col11":"-63023","col12":"-85848","col13":"-118656"},
            // {"col1":"","col2":"CNY SHIBOR","col3":"-234","col4":"-585","col5":"-1783","col6":"-2532","col7":"-4920","col8":"-6298","col9":"-11028","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"","col2":"CNY FX ONSHORE","col3":"-527","col4":"-852","col5":"-3012","col6":"-4028","col7":"-7205","col8":"-10297","col9":"-16242","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"USD","col2":"","col3":"-6420","col4":"14070","col5":"42105","col6":"-2070","col7":"-69712","col8":"99050","col9":"1164","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"","col2":"USD LIBOR","col3":"-5071","col4":"11128","col5":"33288","col6":"-1637","col7":"-55106","col8":"78305","col9":"922","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"","col2":"USD FX ONSHORE","col3":"-1349","col4":"2942","col5":"8817","col6":"-433","col7":"-14606","col8":"20745","col9":"242","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"","col2":"","col3":"","col4":"","col5":"","col6":"","col7":"IR Vega","col8":"","col9":"","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"","col2":"Vol","col3":"Total","col4":"0.65","col5":"0.9","col6":"1","col7":"5","col8":"6","col9":"","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"CNY","col2":"","col3":"2447","col4":"1139","col5":"1308","col6":"","col7":"","col8":"","col9":"","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"","col2":"CNY SHIBOR","col3":"2447","col4":"1139","col5":"1308","col6":"","col7":"","col8":"","col9":"","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"USD","col2":"","col3":"358","col4":"","col5":"","col6":"411","col7":"-104","col8":"51","col9":"","col10":"","col11":"","col12":"","col13":""},
            // {"col1":"","col2":"USD LIBOR","col3":"358","col4":"","col5":"","col6":"411","col7":"-104","col8":"51","col9":"","col10":"","col11":"","col12":"","col13":""},
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

</style>
