<template>
    <d2-container :filename="filename" type="full" class="page" better-scroll>
        <d2-grid-layout
                v-bind="layout"
                @layout-updated="layoutUpdatedHandler">
            <div class='box-card' style="height:60px">
                <div class="my-block">
                    <el-col :span="8">
                        <el-col :span="8">
                            <div class="left-col1">互换类型</div>
                        </el-col>
                        <el-col :span="16">
                            <div class="left-col1">
                                <el-select
                                        placeholder="请选择记录"
                                        v-model="recordSelected"
                                        class="oneControls"
                                >
                                    <el-option
                                            :key="item.key"
                                            :label="item.label"
                                            :value="item.value"
                                            v-for="item in recordList"
                                    ></el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="16">
                        <div class="left-col1">
                            <el-button type="infor">
                                清空记录
                            </el-button>
                        </div>
                    </el-col>
                </div>
            </div>
            <div class="box-card" style="height:60px">
                <div class="my-block">
                    <el-col :span="8">
                        <el-col :span="8">
                            <div class="left-col1">估值日</div>
                        </el-col>
                        <el-col :span="16">
                            <div class="left-col1">
                                <el-date-picker
                                        class="oneControls"
                                        placeholder="选择日期"
                                        type="date"
                                        v-model="irsccsFormLeg1.guZhiRi">
                                </el-date-picker>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="8">
                        <el-col :span="8">
                            <div class="left-col1">起息日</div>
                        </el-col>
                        <el-col :span="16">
                            <div class="left-col1">
                                <el-date-picker
                                        class="oneControls"
                                        placeholder="选择日期"
                                        type="date"
                                        v-model="irsccsFormLeg1.qiXiRi">
                                </el-date-picker>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="8">
                        <el-col :span="8">
                            <div class="left-col1">到期日</div>
                        </el-col>
                        <el-col :span="16">
                            <div class="left-col1">
                                <el-date-picker
                                        class="oneControls"
                                        placeholder="选择日期"
                                        type="date"
                                        v-model="irsccsFormLeg1.daoQiRi">
                                </el-date-picker>
                            </div>
                        </el-col>
                    </el-col>
                </div>
            </div>
            <div class="box-card" style="border:solid 1px #FFE600 ">
                <el-tabs v-model="activeName"  @tab-click="handlePanelClick">
                    <el-tab-pane label="主页" name="main">
                        <div style="height:615px">
                            <div>
                                <div class='box-card' style="height:470px">
                                    <div class="box-card-title" >
                                        <span>交易要素</span>
                                    </div>
                                    <el-row>
                                        <div>
                                            <el-col :span="11">
                                                <el-col :span="12">
                                                    <el-col :span="8">
                                                        <div class="left-col1">收付方向</div>
                                                        <div class="left-col2">本金金额(万)</div>
                                                        <div class="left-col1" style="color:transparent">a</div>
                                                        <div class="left-col2">息票类型</div>
                                                        <div class="left-col1">付息频率</div>
                                                        <div class="left-col2">息票乘数</div>
                                                        <div class="left-col1">息票率乘数</div>
                                                        <div class="left-col2">首次付息日</div>
                                                    </el-col>
                                                    <el-col :span="16">
                                                        <div class="left-col1">
                                                            <el-select class="oneControls"
                                                                       placeholder="请选择"
                                                                       v-model="irsccsFormLeg1.direction">
                                                                <el-option
                                                                        :key="item.key"
                                                                        :label="item.label"
                                                                        :value="item.value"
                                                                        v-for="item in directionOptions"
                                                                ></el-option>
                                                            </el-select>
                                                        </div>
                                                        <div class="left-col2">
                                                            <el-input-number
                                                                    :controls="false"
                                                                    class="oneControls"
                                                                    v-model="irsccsFormLeg1.Amount"
                                                            >
                                                            </el-input-number>
                                                        </div>
                                                        <div class="left-col1" style="color:transparent">a</div>
                                                        <div class="left-col2">
                                                            <el-select class="oneControls"
                                                                       placeholder="请选择"
                                                                       v-model="irsccsFormLeg1.xiPiaoLeiXing">
                                                                <el-option
                                                                        :key="item.key"
                                                                        :label="item.label"
                                                                        :value="item.value"
                                                                        v-for="item in xiPiaoLeiXingOptions"
                                                                ></el-option>
                                                            </el-select>
                                                        </div>
                                                        <div class="left-col1">
                                                            <el-select class="oneControls"
                                                                       placeholder="请选择"
                                                                       v-model="irsccsFormLeg1.fuXiPingLv">
                                                                <el-option
                                                                        :key="item.key"
                                                                        :label="item.label"
                                                                        :value="item.value"
                                                                        v-for="item in fuXiPingLvOptions"
                                                                ></el-option>
                                                            </el-select>
                                                        </div>
                                                        <div class="left-col2" >
                                                            <el-input-number
                                                                    :controls="false"
                                                                    class="oneContorls"
                                                                    v-model="irsccsFormLeg1.xiPiaoLv"
                                                            >
                                                            </el-input-number>
                                                        </div>
                                                        <div class="left-col1" >
                                                            <el-input-number
                                                                    :controls="false"
                                                                    class="oneContorls"
                                                                    v-model="irsccsFormLeg1.xiPiaoLvChengShu"
                                                            >
                                                            </el-input-number>
                                                        </div>
                                                        <div class="left-col2" >
                                                            <el-date-picker
                                                                    class="oneContorls"
                                                                    placeholder="选择日期"
                                                                    type="date"
                                                                    v-model="irsccsFormLeg1.shouCiFuXiRi">
                                                            </el-date-picker>
                                                        </div>
                                                    </el-col>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-col :span="8">
                                                        <div class="left-col1" style="color:transparent">a</div>
                                                        <div class="left-col2"> 币种</div>
                                                        <div class="left-col1" style="color:transparent">a</div>
                                                        <div class="left-col2" style="color:transparent">a</div>
                                                        <div class="left-col1"> 计息方式</div>
                                                        <div class="left-col2" style="color:transparent">a</div>
                                                        <div class="left-col1"> 利差</div>
                                                        <div class="left-col2"> 尾付息日</div>
                                                    </el-col>
                                                    <el-col :span="16">
                                                        <div class="left-col1" style="color:transparent">a</div>
                                                        <div class="left-col2">
                                                            <el-select class="oneControls"
                                                                       placeholder="请选择"
                                                                       v-model="irsccsFormLeg1.biZhong">
                                                                <el-option
                                                                        :key="item.key"
                                                                        :label="item.label"
                                                                        :value="item.value"
                                                                        v-for="item in currencyOptions"
                                                                ></el-option>
                                                            </el-select>
                                                        </div>
                                                        <div class="left-col1" style="color:transparent">a</div>
                                                        <div class="left-col2" style="color:transparent">a</div>
                                                        <div class="left-col1">
                                                            <el-select class="oneControls"
                                                                       placeholder="请选择"
                                                                       v-model="irsccsFormLeg1.jiXiFangShi">
                                                                <el-option
                                                                        :key="item.key"
                                                                        :label="item.label"
                                                                        :value="item.value"
                                                                        v-for="item in jiXiFangShiOptions"
                                                                ></el-option>
                                                            </el-select>
                                                        </div>
                                                        <div class="left-col2" style="color:transparent">a</div>
                                                        <div class="left-col1" >
                                                            <el-input-number
                                                                    :controls="false"
                                                                    class="oneContorls"
                                                                    v-model="irsccsFormLeg1.liCha"
                                                            >
                                                            </el-input-number>
                                                        </div>
                                                        <div class="left-col2" >
                                                            <el-date-picker
                                                                    class="oneContorls"
                                                                    placeholder="选择日期"
                                                                    type="date"
                                                                    v-model="irsccsFormLeg1.weiciFuxiRi">
                                                            </el-date-picker>
                                                        </div>
                                                    </el-col>
                                                </el-col>
                                            </el-col>
                                            <el-col :span="1">
                                                <div class="dividerStyle">a</div>
                                                <div class="dividerStyle">a</div>
                                                <div class="dividerStyle">a</div>
                                                <div class="dividerStyle">a</div>
                                                <div class="dividerStyle">a</div>
                                                <div class="dividerStyle">a</div>
                                                <div class="dividerStyle">a</div>
                                                <div class="dividerStyle">a</div>
                                            </el-col>
                                            <el-col :span="11">
                                                <el-col :span="12">
                                                    <el-col :span="8">
                                                        <div class="left-col1">收付方向</div>
                                                        <div class="left-col2">本金金额(万)</div>
                                                        <div class="left-col1" style="color:transparent">a</div>
                                                        <div class="left-col2">息票类型</div>
                                                        <div class="left-col1">付息频率</div>
                                                        <div class="left-col2">息票乘数</div>
                                                        <div class="left-col1">息票率乘数</div>
                                                        <div class="left-col2">首次付息日</div>
                                                    </el-col>
                                                    <el-col :span="16">
                                                        <div class="left-col1">
                                                            <el-select class="oneControls"
                                                                       placeholder="请选择"
                                                                       v-model="irsccsFormLeg1.direction">
                                                                <el-option
                                                                        :key="item.key"
                                                                        :label="item.label"
                                                                        :value="item.value"
                                                                        v-for="item in directionOptions"
                                                                ></el-option>
                                                            </el-select>
                                                        </div>
                                                        <div class="left-col2">
                                                            <el-input-number
                                                                    :controls="false"
                                                                    class="oneControls"
                                                                    v-model="irsccsFormLeg1.Amount"
                                                            >
                                                            </el-input-number>
                                                        </div>
                                                        <div class="left-col1" style="color:transparent">a</div>
                                                        <div class="left-col2">
                                                            <el-select class="oneControls"
                                                                       placeholder="请选择"
                                                                       v-model="irsccsFormLeg1.xiPiaoLeiXing">
                                                                <el-option
                                                                        :key="item.key"
                                                                        :label="item.label"
                                                                        :value="item.value"
                                                                        v-for="item in xiPiaoLeiXingOptions"
                                                                ></el-option>
                                                            </el-select>
                                                        </div>
                                                        <div class="left-col1">
                                                            <el-select class="oneControls"
                                                                       placeholder="请选择"
                                                                       v-model="irsccsFormLeg1.fuXiPingLv">
                                                                <el-option
                                                                        :key="item.key"
                                                                        :label="item.label"
                                                                        :value="item.value"
                                                                        v-for="item in fuXiPingLvOptions"
                                                                ></el-option>
                                                            </el-select>
                                                        </div>
                                                        <div class="left-col2" >
                                                            <el-input-number
                                                                    :controls="false"
                                                                    class="oneContorls"
                                                                    v-model="irsccsFormLeg1.xiPiaoLv"
                                                            >
                                                            </el-input-number>
                                                        </div>
                                                        <div class="left-col1" >
                                                            <el-input-number
                                                                    :controls="false"
                                                                    class="oneContorls"
                                                                    v-model="irsccsFormLeg1.xiPiaoLvChengShu"
                                                            >
                                                            </el-input-number>
                                                        </div>
                                                        <div class="left-col2" >
                                                            <el-date-picker
                                                                    class="oneContorls"
                                                                    placeholder="选择日期"
                                                                    type="date"
                                                                    v-model="irsccsFormLeg1.shouCiFuXiRi">
                                                            </el-date-picker>
                                                        </div>
                                                    </el-col>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-col :span="8">
                                                        <div class="left-col1" style="color:transparent">a</div>
                                                        <div class="left-col2"> 币种</div>
                                                        <div class="left-col1" style="color:transparent">a</div>
                                                        <div class="left-col2" style="color:transparent">a</div>
                                                        <div class="left-col1"> 计息方式</div>
                                                        <div class="left-col2" style="color:transparent">a</div>
                                                        <div class="left-col1"> 利差</div>
                                                        <div class="left-col2"> 尾付息日</div>
                                                    </el-col>
                                                    <el-col :span="16">
                                                        <div class="left-col1" style="color:transparent">a</div>
                                                        <div class="left-col2">
                                                            <el-select class="oneControls"
                                                                       placeholder="请选择"
                                                                       v-model="irsccsFormLeg1.biZhong">
                                                                <el-option
                                                                        :key="item.key"
                                                                        :label="item.label"
                                                                        :value="item.value"
                                                                        v-for="item in currencyOptions"
                                                                ></el-option>
                                                            </el-select>
                                                        </div>
                                                        <div class="left-col1" style="color:transparent">a</div>
                                                        <div class="left-col2" style="color:transparent">a</div>
                                                        <div class="left-col1">
                                                            <el-select class="oneControls"
                                                                       placeholder="请选择"
                                                                       v-model="irsccsFormLeg1.jiXiFangShi">
                                                                <el-option
                                                                        :key="item.key"
                                                                        :label="item.label"
                                                                        :value="item.value"
                                                                        v-for="item in jiXiFangShiOptions"
                                                                ></el-option>
                                                            </el-select>
                                                        </div>
                                                        <div class="left-col2" style="color:transparent">a</div>
                                                        <div class="left-col1" >
                                                            <el-input-number
                                                                    :controls="false"
                                                                    class="oneContorls"
                                                                    v-model="irsccsFormLeg1.liCha"
                                                            >
                                                            </el-input-number>
                                                        </div>
                                                        <div class="left-col2" >
                                                            <el-date-picker
                                                                    class="oneContorls"
                                                                    placeholder="选择日期"
                                                                    type="date"
                                                                    v-model="irsccsFormLeg1.weiciFuxiRi">
                                                            </el-date-picker>
                                                        </div>
                                                    </el-col>
                                                </el-col>
                                            </el-col>

                                        </div>
                                    </el-row>
                                </div>
                                <div class='box-card' style="height:145px">
                                    <el-col :span="11">
                                        <div class="box-card-title" >
                                            <span>定价要素</span>
                                        </div>
                                        <div class="my-block">
                                            <el-col :span="12">
                                                <el-col :span="8">
                                                    <div class="left-col1">计息基准</div>
                                                    <div class="left-col2">节假日</div>
                                                </el-col>
                                                <el-col :span="16">
                                                    <div class="left-col1" >
                                                        <el-select class="oneControls"
                                                                   placeholder="请选择"
                                                                   v-model="irsccsFormLeg1.jiXiJiZhun">
                                                            <el-option
                                                                    :key="item.key"
                                                                    :label="item.label"
                                                                    :value="item.value"
                                                                    v-for="item in jiXiTianShuFangshiOptions"
                                                            ></el-option>
                                                        </el-select>
                                                    </div>
                                                    <div class="left-col2" >
                                                        <el-select class="oneControls"
                                                                   placeholder="请选择"
                                                                   v-model="irsccsFormLeg1.jieJiaRi">
                                                            <el-option
                                                                    :key="item.key"
                                                                    :label="item.label"
                                                                    :value="item.value"
                                                                    v-for="item in jieJiaRiOptions"
                                                            ></el-option>
                                                        </el-select>
                                                    </div>
                                                </el-col>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-col :span="8">
                                                    <div class="left-col1">营业日调整</div>
                                                    <div class="left-col2" style="color:transparent">a</div>
                                                </el-col>
                                                <el-col :span="16">
                                                    <div class="left-col1" >
                                                        <el-select class="oneControls"
                                                                   placeholder="请选择"
                                                                   v-model="irsccsFormLeg1.yingYeRiTiaoZheng">
                                                            <el-option
                                                                    :key="item.key"
                                                                    :label="item.label"
                                                                    :value="item.value"
                                                                    v-for="item in yingYeRiTiaoZhengOptions"
                                                            ></el-option>
                                                        </el-select>
                                                    </div>
                                                    <div class="left-col2" style="color:transparent">a</div>
                                                </el-col>
                                            </el-col>
                                        </div>
                                    </el-col>
                                    <el-col :span="1">
                                        <div class="dividerStyle">a</div>
                                        <div class="dividerStyle">a</div>
                                        <div class="dividerStyle">a</div>
                                    </el-col>
                                    <el-col :span="11">
                                        <div class="box-card-title" >
                                            <span>定价要素</span>
                                        </div>
                                        <div class="my-block">
                                            <el-col :span="12">
                                                <el-col :span="8">
                                                    <div class="left-col1">计息基准</div>
                                                    <div class="left-col2">节假日</div>
                                                </el-col>
                                                <el-col :span="16">
                                                    <div class="left-col1" >
                                                        <el-select class="oneControls"
                                                                   placeholder="请选择"
                                                                   v-model="irsccsFormLeg1.jiXiJiZhun">
                                                            <el-option
                                                                    :key="item.key"
                                                                    :label="item.label"
                                                                    :value="item.value"
                                                                    v-for="item in jiXiTianShuFangshiOptions"
                                                            ></el-option>
                                                        </el-select>
                                                    </div>
                                                    <div class="left-col2" >
                                                        <el-select class="oneControls"
                                                                   placeholder="请选择"
                                                                   v-model="irsccsFormLeg1.jieJiaRi">
                                                            <el-option
                                                                    :key="item.key"
                                                                    :label="item.label"
                                                                    :value="item.value"
                                                                    v-for="item in jieJiaRiOptions"
                                                            ></el-option>
                                                        </el-select>
                                                    </div>
                                                </el-col>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-col :span="8">
                                                    <div class="left-col1">营业日调整</div>
                                                    <div class="left-col2" style="color:transparent">a</div>
                                                </el-col>
                                                <el-col :span="16">
                                                    <div class="left-col1" >
                                                        <el-select class="oneControls"
                                                                   placeholder="请选择"
                                                                   v-model="irsccsFormLeg1.yingYeRiTiaoZheng">
                                                            <el-option
                                                                    :key="item.key"
                                                                    :label="item.label"
                                                                    :value="item.value"
                                                                    v-for="item in yingYeRiTiaoZhengOptions"
                                                            ></el-option>
                                                        </el-select>
                                                    </div>
                                                    <div class="left-col2" style="color:transparent">a</div>
                                                </el-col>
                                            </el-col>
                                        </div>
                                    </el-col>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="利率曲线" name="interestCurve">
                        <div style="height:615px">
                          <twocurves></twocurves>
                        </div>
                    </el-tab-pane>

                </el-tabs>

            </div>
            <div class="box-card" style="height:105px">
                <div class="box-card-title" >
                    <span>计算结果</span>
                </div>

                <div class="my-block">
                    <el-col :span="6">
                        <el-col :span="8">
                            <div class="left-col1">
                                <el-button class="oneContorls">
                                    计算
                                </el-button>
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="left-col1" >
                                <el-select class="oneContorls" v-model="irsccsResultForm.calculationTarget" placeholder="请选择">
                                    <el-option
                                            v-for="item in targetOptions"
                                            :key="item.key"
                                            :label="item.label"
                                            :value="item.value"
                                    ></el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="6">
                        <el-col :span="8">
                            <div class="left-col1">NPV</div>

                        </el-col>
                        <el-col :span="16">
                            <div class="left-col1" >
                                <el-input-number
                                        class="oneContorls"
                                        :controls="false"
                                        v-model="irsccsResultForm.NPV"
                                >
                                </el-input-number>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="6">
                        <el-col :span="8">
                            <div class="left-col1">应计利息</div>
                        </el-col>
                        <el-col :span="16">
                            <div class="left-col1" >
                                <el-input-number
                                        class="oneContorls"
                                        :controls="false"
                                        v-model="irsccsResultForm.yinJiLiXi"
                                >
                                </el-input-number>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="6">
                        <el-col :span="8">
                            <div class="left-col1">DV01</div>
                        </el-col>
                        <el-col :span="16">
                            <div class="left-col1" >
                                <el-input-number
                                        class="oneContorls"
                                        :controls="false"
                                        v-model="irsccsResultForm.DV01"
                                >
                                </el-input-number>
                            </div>
                        </el-col>
                    </el-col>
                </div>
            </div>
            <div class="box-card" style="height:145px">
                <el-col :span="11">
                    <div class="box-card-title" >
                        <span> {{ irsccsFormLeg1. direction}}端  </span>
                    </div>
                    <div class="my-block">
                        <el-col :span="12">
                            <el-col :span="8">
                                <div class="left-col1">NPV</div>
                                <div class="left-col2">DV01</div>
                            </el-col>
                            <el-col :span="16">
                                <div class="left-col1" >
                                    <el-input-number
                                            class="oneContorls"
                                            :controls="false"
                                            v-model="irsccsResultForm.NPVLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col2" >
                                    <el-input-number
                                            class="oneContorls"
                                            :controls="false"
                                            v-model="irsccsResultForm.DV01Leg1"
                                    >
                                    </el-input-number>
                                </div>
                            </el-col>
                        </el-col>
                        <el-col :span="12">
                            <el-col :span="8">
                                <div class="left-col1">应计利息</div>
                                <div class="left-col2" style="color:transparent">a</div>
                            </el-col>
                            <el-col :span="16">
                                <div class="left-col1" >
                                    <el-input-number
                                            class="oneContorls"
                                            :controls="false"
                                            v-model="irsccsResultForm.yinJiLiXiLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col2" style="color:transparent">a</div>
                            </el-col>
                        </el-col>
                    </div>
                </el-col>
                <el-col :span="1">
                    <div class="dividerStyle">a</div>
                    <div class="dividerStyle">a</div>
                    <div class="dividerStyle">a</div>
                </el-col>
                <el-col :span="11">
                    <div class="box-card-title" >
                        <span> {{ irsccsFormLeg2. direction}}端  </span>
                    </div>
                    <div class="my-block">
                        <el-col :span="12">
                            <el-col :span="8">
                                <div class="left-col1">NPV</div>
                                <div class="left-col2">DV01</div>
                            </el-col>
                            <el-col :span="16">
                                <div class="left-col1" >
                                    <el-input-number
                                            class="oneContorls"
                                            :controls="false"
                                            v-model="irsccsResultForm.NPVLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col2" >
                                    <el-input-number
                                            class="oneContorls"
                                            :controls="false"
                                            v-model="irsccsResultForm.DV01Leg1"
                                    >
                                    </el-input-number>
                                </div>
                            </el-col>
                        </el-col>
                        <el-col :span="12">
                            <el-col :span="8">
                                <div class="left-col1">应计利息</div>
                                <div class="left-col2" style="color:transparent">a</div>
                            </el-col>
                            <el-col :span="16">
                                <div class="left-col1" >
                                    <el-input-number
                                            class="oneContorls"
                                            :controls="false"
                                            v-model="irsccsResultForm.yinJiLiXiLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col2" style="color:transparent">a</div>
                            </el-col>
                        </el-col>
                    </div>
                </el-col>
            </div>
            <el-dialog
                    title="利率曲线"
                    :visible.sync="showCurveDiag"
                    :append-to-body="true"
                    width="100%"

            >
                <twocurves/>
            </el-dialog>
        </d2-grid-layout>
    </d2-container>
</template>

<script>


  import Calendar from 'vue-calendar-component'
  import {
    currencyOption,
    tradeLocationOption,
    resetNominalCapitalOption,
    nominalCapitalResetStatusOption,
    tradeDirectionOption,
    interestSettingOption,
    payFreqOption,
    interestBaselineOption,
    interestAdjustmentOption,
    resetDateAdjustmentOption,
    resetFreqOption,
    interestTypeOption,
    actualPayDateAdjOption,
    endPeriodSpanOption,
    floatingInterestDirOption,
    floatingInterestRateOption,
    calculationMethodOption
  } from './UIPara'
  import twocurves from './curve/twoCurves.vue'
  import test from './curve/twoCurves'
  export default {
    components: {
        twocurves,
        test
    },
    data () {
      return {
        filename: __filename,
        layout: {
          layout: [
            { 'x': 0, 'y': 0, 'w': 3, 'h': 13, 'i': '0' },
            { 'x': 0, 'y': 13, 'w': 3, 'h': 15.5, 'i': '1' },
            { 'x': 3, 'y': 0, 'w': 6, 'h': 13, 'i': '2' },
            { 'x': 9, 'y': 0, 'w': 3, 'h': 13, 'i': '3' },
            { 'x': 3, 'y': 13, 'w': 9, 'h': 15.5, 'i': '4' },
          ],
          colNum: 12,
          rowHeight: 34,
          isDraggable: false,
          isResizable: false,
          isMirrored: false,
          verticalCompact: true,
          margin: [2, 3],
          useCssTransforms: true
        },
        recordSelected: '',
        recordList: [
          { key: 'record1', label: 'record1', value: 'record1' }
        ],
        templateSelected: '',
        templateList:[
          { key: 'tempalte1', label: 'tempalte1', value: 'tempalte1' }
        ],
        activeTabName:'交易要素输入',
        irsccsFormLeg1:{
            direction: '收取利息',
            Amount:'',
            biZhong:'',
            xiPiaoLeiXing:'',
            fuXiPingLv:'',
            jiXiFangShi:'',
            xiPiaoLv:'',
            xiPiaoLvChengShu:'',
            shouCiFuXiRi:'',
            liCha:'',
            weiciFuxiRi:'',
            canKaoLiLv:'',
            dingPanRiTiaoZheng:'',
            jiXiJiZhun:'',
            yingYeRiTiaoZheng:'',
            jieJiaRi:'',
            guZhiRi:'',
            qiXiRi:'',
            daoQiRi:'',
        },
          irsccsFormLeg2:{
              direction: '支付利息',
              Amount:'',
              biZhong:'',
              xiPiaoLeiXing:'',
              fuXiPingLv:'',
              jiXiFangShi:'',
              xiPiaoLv:'',
              xiPiaoLvChengShu:'',
              shouCiFuXiRi:'',
              liCha:'',
              weiciFuxiRi:'',
              canKaoLiLv:'',
              dingPanRiTiaoZheng:'',
              jiXiJiZhun:'',
              yingYeRiTiaoZheng:'',
              jieJiaRi:'',
              guZhiRi:'',
              qiXiRi:'',
              daoQiRi:'',
          },

        irsccsResultForm:{
          NPV: '1',
          DV01: '1',
          yinJiLiXi:'',
          NPVLeg1: '1',
          DV01Leg1: '1',
          yinJiLiXiLeg1:'',
          NPVLeg2: '1',
          DV01Leg2: '1',
          yinJiLiXiLeg2:'',
          calculationTarget:'',
        },
          activeName:'main',
          curveName:'InterestCurve',
          showCurveDiag:false,


      }
    },
    mounted () {
    },
    methods: {
      // ****************************
      handlePanelClick(tab, event) {
            console.log(tab, event);
     },
        showInterestCurve() {
        this.showCurveDiag=true;
        },
      rowstyle (row) {
        if (row.rowIndex % 2 === 0) {
          return 'height:50px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px'
        } else {
          return 'height:50px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px'
        }
      },
      rowstyleInfo (row) {
        if (row.rowIndex % 2 === 0) {
          return 'height:50px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px'
        } else {
          return 'height:50px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px'
        }
      },
      headerstyle (row) {
        return 'height:50px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px'
      },
      // 测试代码
      layoutUpdatedHandler (newLayout) {
        //console.group("layoutUpdatedHandler");
        newLayout.forEach(e => {
          console.log(
            `{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`
          )
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
        this.log(
          'resizedHandler',
          `i: ${i}, newH: ${newH}, newW: ${newW}, newHPx: ${newHPx}, newWPx: ${newWPx}`
        )
      },
      movedHandler (i, newX, newY) {
        this.log('movedHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
      },
//api

///end method
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

                &:hover {
                    opacity: 1;
                }
            }
        }
    }
    .dividerStyle{
        height:45px;
        margin: auto;
        background:#FFE600;
        width:5px;
        color:transparent;
        /*margin:5px 0px 5px 0px;*/
    }
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

</style>

<style lang="scss">
    .box-card .el-form-item__label {
        font-size: 16px;
        color: white;
    }

    .box-card .el-radio__label {
        font-size: 16px;
        padding-left: 10px;
        color: white;
    }

    .box-card .el-form--inline .el-form-item {
        margin-right: 0px;
    }

    .box-card .el-input-number .el-input__inner {
        text-align: left;
    }
    .box-card .el-tabs__item {
        height: 40px !important;
        line-height: 40px !important;
        color: white !important;
        font-size: 20px !important;

    }
</style>
