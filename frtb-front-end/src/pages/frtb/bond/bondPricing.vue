<template>
    <div class="box-card" style="height:500px">
        <el-row>
        <div class="my-block">
            <el-col :span="6">
                <div class="left-col1" style="color:transparent">a</div>
            </el-col>
            <el-col :span="6">
                <el-col :span="8">
                    <div class="left-col1">全价</div>
                </el-col>
                <el-col :span="16">
                    <div class="left-col1">
                        <el-input-number
                                :controls="false"
                                class="oneContorls"
                                v-model="bondPricing.price"
                                :precision=5
                        >
                        </el-input-number>

                    </div>
                </el-col>
            </el-col>
            <el-col :span="6">
                <el-col :span="8">
                    <div class="left-col1">净价</div>
                </el-col>
                <el-col :span="16">
                    <div class="left-col1">
                        <el-input-number
                                :controls="false"
                                class="oneContorls"
                                v-model="bondPricing.netprice"
                                :precision=5
                        >
                        </el-input-number>

                    </div>
                </el-col>
            </el-col>
            <el-col :span="6">
                <div class="left-col1" style="color:transparent">a</div>
            </el-col>

        </div>
    </el-row>
        <el-row style="margin-top:30px">
        <d2-crud
                style="margin:auto;height:450px;width:95%;overflow: auto"
                ref="d2CrudBC"
                :columns="bondComparePricingCols"
                :data="bondPricingCompareData"
                :options="options"/>


    </el-row>
    </div>

</template>

<script>
    import {
        ratingOptions
    } from '../UIPara/UIPara'
    export default {
        name: "bondComparison",
        data() {
            return {
                bondPricing: {
                    price:'105.4',
                    netprice:'0',
                },

                bondComparePricingCols:[
                    {"key":"trade","title":""},
                    {"key":"netprice","title":"净价"},
                    {"key":"vol","title":"交易量（万元）"},
                ],
                bondPricingCompareData:[
                    {"trade":"卖5","netprice":"105.400","vol":"2.4",},
                    {"trade":"卖4","netprice":"105.300","vol":"12.1",},
                    {"trade":"卖3","netprice":"105.290","vol":"5.0",},
                    {"trade":"卖2","netprice":"105.260","vol":"50.4",},
                    {"trade":"卖1","netprice":"105.250","vol":"2.2",},
                    {"trade":"买1","netprice":"105.210","vol":"1.1",},
                    {"trade":"买2","netprice":"105.150","vol":"195.8",},
                    {"trade":"买3","netprice":"105.010","vol":"0.5",},
                    {"trade":"买4","netprice":"105.00","vol":"4.4",},
                    {"trade":"买5","netprice":"104.900","vol":"1.0",},


                ],
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
            }
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
    .oneControlsSmall {
        width: 90px;
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
        //margin:auto;
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
    .d2-crud  .el-input__inner{
        width:180px
    }
    .d2-crud .el-table--enable-row-hover .el-table__body tr:hover>td{
        background-color: #222222;
    }
</style>
