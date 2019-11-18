<template>
    <div class="box-card" style="height:400px">
        <el-row>
        <div class="my-block">
            <el-col :span="4">
                <el-col :span="7">
                    <div class="left-col1">产品类型</div>
                </el-col>
                <el-col :span="17">
                    <div class="left-col1" >
                        <el-select
                                filterable
                                allow-create
                                default-first-option
                                class="oneContorls" v-model="bondCompareForm.positionCombination" placeholder="选择组合">
                            <el-option
                                    :key="全部"
                                    :label="全部"
                                    :value="全部"
                            ></el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-col>
            <el-col :span="4">
                <el-col :span="7">
                    <div class="left-col1">期限 </div>
                </el-col>
                <el-col :span="17">
                    <div class="left-col1" >
                        <el-input
                                class="oneControls"
                                v-model="bondCompareForm.periodInterval"
                        >
                        </el-input>
                    </div>
                </el-col>
            </el-col>
            <el-col :span="4">
                <el-col :span="7">
                    <div class="left-col1">主体评级</div>
                </el-col>
                <el-col :span="17">
                    <div class="left-col1" >
                        <el-select
                                filterable
                                allow-create
                                default-first-option
                                class="oneContorls"
                                v-model="bondCompareForm.ranking" placeholder="请选择">
                            <el-option
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
                <el-col :span="7">
                    <div class="left-col1">是否含权</div>
                </el-col>
                <el-col :span="17">
                    <div class="left-col1" >
                        <el-select
                                filterable
                                allow-create
                                default-first-option
                                class="oneContorls" v-model="bondCompareForm.privilege" placeholder="选择">
                            <el-option
                                    :key="否"
                                    :label="否"
                                    :value="否"
                            ></el-option>
                            <el-option
                                    :key="是"
                                    :label="是"
                                    :value="是"
                            ></el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-col>
            <el-col :span="4">
                <el-col :span="7">
                    <div class="left-col1">有无担保</div>
                </el-col>
                <el-col :span="17">
                    <div class="left-col1" >
                        <el-select
                                filterable
                                allow-create
                                default-first-option
                                class="oneContorls" v-model="bondCompareForm.guarantee" placeholder="选择组合">
                            <el-option
                                    :key="无"
                                    :label="无"
                                    :value="无"
                            ></el-option>
                            <el-option
                                    :key="有"
                                    :label="有"
                                    :value="有"
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
        <el-row style="margin-top:30px">
        <d2-crud
                style="margin:auto;height:450px;width:95%;overflow: auto"
                ref="d2CrudBC"
                :columns="bondCompareCols"
                :data="bondCompareData"
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
                bondCompareForm:{
                    productTypeSelect:'全部',
                    periodInterval:'2.7Y ± 12M',
                    ranking:'AAA',
                    privilege:'是',
                    guarantee:'有',

                },
                ratingOptions:ratingOptions,

                bondCompareCols:[
                    {"key":"剩余期限","title":"剩余期限"},
                    {"key":"代码","title":"代码"},
                    {"key":"简称","title":"简称"},
                    {"key":"发行日","title":"发行日"},
                    {"key":"票面利率","title":"票面利率"},
                    {"key":"发行量","title":"发行量"},
                    {"key":"Bid","title":"Bid"},
                    {"key":"Bid Vol.","title":"Bid Vol."},
                    {"key":"Ask","title":"Ask"},
                    {"key":"Ask Vol.","title":"Ask Vol."},
                    {"key":"PV01","title":"PV01"},
                    {"key":"久期","title":"久期"},
                    {"key":"VaR","title":"VaR"},
                ],
                bondCompareData:[
                    {"剩余期限":"2.01","代码":"180021","简称":"18国债21","发行日":"2018/10/11","票面利率":"3.17","发行量":"1651500000","Bid":"100.758","Bid Vol.":"200000","Ask":"100.813","Ask Vol.":"400000","PV01":"48424","久期":"2.1","VaR":"-48272"},
                    {"剩余期限":"2.75","代码":"1705193","简称":"17江苏债","发行日":"2017/7/12","票面利率":"3.83","发行量":"140000000","Bid":"102.172","Bid Vol.":"100000","Ask":"102.224","Ask Vol.":"350000","PV01":"28473","久期":"2.81","VaR":"2948"},
                    {"剩余期限":"3.62","代码":"180408","简称":"18农发08","发行日":"2018/5/25","票面利率":"4.37","发行量":"895300000","Bid":"103.241","Bid Vol.":"5000000","Ask":"103.577","Ask Vol.":"6000000","PV01":"69573","久期":"2.71","VaR":"-29382"},
                    {"剩余期限":"2.51","代码":"170007","简称":"17国债07","发行日":"2022/4/13","票面利率":"3.13","发行量":"110000000","Bid":"100.581","Bid Vol.":"10000","Ask":"100.651","Ask Vol.":"15000","PV01":"11261","久期":"2.6","VaR":"15321"},

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
