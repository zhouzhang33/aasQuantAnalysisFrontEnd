<template>
    <d2-container  type="full" class="page" better-scroll>
        <d2-grid-layout
                v-bind="layout"
                @layout-updated="layoutUpdatedHandler">
            <div class="my-collaps">
                <div class="box-card">
                    <el-collapse v-model="collapsActiveName" accordion>
                        <el-collapse-item title="期权一输入" name="leg1">

                            <el-col :span="12">
                                <div class="box-card-title">
                                    <span>交易要素</span>
                                </div>
                                <div class="my-block">
                                    <el-col :span="12">
                                        <el-col :span="12">
                                            <div class="left-col1">货币对</div>
                                            <div class="left-col2">买卖方向</div>
                                            <div class="left-col1">期权类型</div>
                                            <div class="left-col2">交易日</div>
                                            <div class="left-col1">到期日</div>
                                            <div class="left-col2">交割日</div>
                                        </el-col>
                                        <el-col :span="12">
                                            <div class="left-col1">
                                                <el-select
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg1Form.currencyPair"
                                                        placeholder="请选择">
                                                    <el-option
                                                            v-for="item in currencyPairOptions"
                                                            :key="item.key"
                                                            :label="item.label"
                                                            :value="item.value"
                                                    ></el-option>
                                                </el-select>
                                            </div>
                                            <div class="left-col2">
                                                <el-select
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg1Form.direction"
                                                        placeholder="请选择">
                                                    <el-option
                                                            v-for="item in tradingDirectionOptions"
                                                            :key="item.key"
                                                            :label="item.label"
                                                            :value="item.value"
                                                    ></el-option>
                                                </el-select>
                                            </div>
                                            <div class="left-col1">
                                                <el-select
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg1Form.optionType"
                                                        placeholder="请选择">
                                                    <el-option
                                                            v-for="item in callPutOptions"
                                                            :key="item.key"
                                                            :label="item.label"
                                                            :value="item.value"
                                                    ></el-option>
                                                </el-select>
                                            </div>
                                            <div class="left-col2">
                                                <el-date-picker
                                                        class="oneContorls"
                                                        placeholder="选择日期"
                                                        type="date"
                                                        v-model="europeanOptionLeg1Form.tradeDate">
                                                </el-date-picker>
                                            </div>
                                            <div class="left-col1">
                                                <el-date-picker
                                                        class="oneContorls"
                                                        placeholder="选择日期"
                                                        type="date"
                                                        v-model="europeanOptionLeg1Form.expireDate">
                                                </el-date-picker>
                                            </div>
                                            <div class="left-col2">
                                                <el-date-picker
                                                        class="oneContorls"
                                                        placeholder="选择日期"
                                                        type="date"
                                                        v-model="europeanOptionLeg1Form.jiaoGeDate">
                                                </el-date-picker>
                                            </div>
                                        </el-col>
                                    </el-col>
                                    <!--                           第二列 -->
                                    <el-col :span="12">
                                        <el-col :span="12">
                                            <div class="left-col1">本币期权金额</div>
                                            <div class="left-col2">外币期权金额</div>
                                            <div class="left-col1">波动率(%)</div>
                                            <div class="left-col2">行权价</div>
                                            <div class="left-col1">期权费</div>
                                            <div class="left-col2" style="color:transparent">a</div>
                                        </el-col>
                                        <el-col :span="12">
                                            <div class="left-col1">
                                                <el-input-number
                                                        :controls="false"
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg1Form.benbiQiQuanJingE"
                                                >
                                                </el-input-number>
                                            </div>
                                            <div class="left-col2">
                                                <el-input-number
                                                        :controls="false"
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg1Form.waibiQiQuanJingE"
                                                >
                                                </el-input-number>
                                            </div>
                                            <div class="left-col1">
                                                <el-input-number
                                                        :controls="false"
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg1Form.volatility"
                                                >
                                                </el-input-number>
                                            </div>
                                            <div class="left-col2">
                                                <el-input-number
                                                        :controls="false"
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg1Form.xingQuanJia"
                                                >
                                                </el-input-number>
                                            </div>
                                            <div class="left-col1">
                                                <el-input-number
                                                        :controls="false"
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg1Form.qiQuanFei"
                                                >
                                                </el-input-number>
                                            </div>
                                            <div class="left-col2" style="color:transparent">a</div>
                                        </el-col>
                                    </el-col>
                                </div>
                            </el-col>
                            <!--            定价参数-->
                            <el-col :span="6">
                                <div class="box-card-title">
                                    <span>定价参数</span>
                                </div>
                                <div class="my-block">
                                    <el-col :span="12">
                                        <div class="left-col1">计息天数方式</div>
                                        <div class="left-col2">营业日规则</div>
                                        <div class="left-col1">波动率曲面插值方法</div>
                                        <div class="left-col2">折现曲线插值方法</div>
                                        <div class="left-col1" style="color:transparent">a</div>
                                        <div class="left-col2" style="color:transparent">a</div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="left-col1">
                                            <el-select
                                                    class="oneContorls"
                                                    v-model="europeanOptionLeg1Form.jiXiTianShuFangshi"
                                                    placeholder="请选择">
                                                <el-option
                                                        v-for="item in jiXiTianShuFangshiOptions"
                                                        :key="item.key"
                                                        :label="item.label"
                                                        :value="item.value"
                                                ></el-option>
                                            </el-select>
                                        </div>

                                        <div class="left-col2">
                                            <el-select
                                                    class="oneContorls"
                                                    v-model="europeanOptionLeg1Form.yingYeRiGuiZe"
                                                    placeholder="请选择">
                                                <el-option
                                                        v-for="item in yingYeRiGuiZeOptions"
                                                        :key="item.key"
                                                        :label="item.label"
                                                        :value="item.value"
                                                ></el-option>
                                            </el-select>
                                        </div>
                                        <div class="left-col1">
                                            <el-select
                                                    class="oneContorls"
                                                    v-model="europeanOptionLeg1Form.boDonglvQuMianChaZhi"
                                                    placeholder="请选择">
                                                <el-option
                                                        v-for="item in boDonglvQuMianChaZhiOptions"
                                                        :key="item.key"
                                                        :label="item.label"
                                                        :value="item.value"
                                                ></el-option>
                                            </el-select>
                                        </div>
                                        <div class="left-col2">
                                            <el-select
                                                    class="oneContorls"
                                                    v-model="europeanOptionLeg1Form.zheXianQuxianChaZhi"
                                                    placeholder="请选择">
                                                <el-option
                                                        v-for="item in zheXianQuxianChaZhiOptions"
                                                        :key="item.key"
                                                        :label="item.label"
                                                        :value="item.value"
                                                ></el-option>
                                            </el-select>
                                        </div>
                                        <div class="left-col1" style="color:transparent">a</div>
                                        <div class="left-col2" style="color:transparent">a</div>
                                    </el-col>
                                </div>
                            </el-col>
                            <!--            市场数据-->
                            <el-col :span="6">
                                <div class="box-card-title">
                                    <span>市场数据</span>
                                </div>
                                <div class="my-block">
                                    <el-col :span="12">
                                        <div class="left-col1">外币利率曲线</div>
                                        <div class="left-col2">本币利率曲线</div>
                                        <div class="left-col1">外币到期利率</div>
                                        <div class="left-col2">本币到期利率</div>
                                        <div class="left-col1" style="color:transparent">a</div>
                                        <div class="left-col2" style="color:transparent">a</div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="left-col1">
                                            <el-select class="oneContorls"
                                                       v-model="europeanOptionLeg1Form.waiBiLiLvCurve"
                                                       placeholder="选择曲线名称">
                                                <el-option
                                                        class="oneContorls"
                                                        v-for="item in currency1EarningCurveOptions"
                                                        :key="item.key"
                                                        :label="item.label"
                                                        :value="item.value"
                                                ></el-option>
                                            </el-select>
                                        </div>
                                        <div class="left-col2">
                                            <el-select class="oneContorls"
                                                       v-model="europeanOptionLeg1Form.benBiLiLvCurve"
                                                       placeholder="选择曲线名称">
                                                <el-option
                                                        v-for="item in currency2EarningCurveOptions"
                                                        :key="item.key"
                                                        :label="item.label"
                                                        :value="item.value"
                                                ></el-option>
                                            </el-select>
                                        </div>
                                        <div class="left-col1">
                                            <el-input-number
                                                    :controls="false"
                                                    class="oneContorls"
                                                    v-model="europeanOptionLeg1Form.waiBiDaoQiYuanQiLiLv"
                                            >
                                            </el-input-number>
                                        </div>
                                        <div class="left-col2">
                                            <el-input-number
                                                    :controls="false"
                                                    class="oneContorls"
                                                    v-model="europeanOptionLeg1Form.benBiDaoQiYuanQiLiLv"
                                            >
                                            </el-input-number>
                                        </div>
                                        <div class="left-col1" style="color:transparent">a</div>
                                        <div class="left-col2" style="color:transparent">a</div>

                                    </el-col>
                                </div>

                            </el-col>


                        </el-collapse-item>
                        <el-collapse-item title="期权二输入" name="leg2">

                            <el-col :span="12">
                                <div class="box-card-title">
                                    <span>交易要素</span>
                                </div>
                                <div class="my-block">
                                    <el-col :span="12">
                                        <el-col :span="12">
                                            <div class="left-col1">货币对</div>
                                            <div class="left-col2">买卖方向</div>
                                            <div class="left-col1">期权类型</div>
                                            <div class="left-col2">交易日</div>
                                            <div class="left-col1">到期日</div>
                                            <div class="left-col2">交割日</div>
                                        </el-col>
                                        <el-col :span="12">
                                            <div class="left-col1">
                                                <el-select
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg2Form.currencyPair"
                                                        placeholder="请选择">
                                                    <el-option
                                                            v-for="item in currencyPairOptions"
                                                            :key="item.key"
                                                            :label="item.label"
                                                            :value="item.value"
                                                    ></el-option>
                                                </el-select>
                                            </div>
                                            <div class="left-col2">
                                                <el-select
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg2Form.direction"
                                                        placeholder="请选择">
                                                    <el-option
                                                            v-for="item in tradingDirectionOptions"
                                                            :key="item.key"
                                                            :label="item.label"
                                                            :value="item.value"
                                                    ></el-option>
                                                </el-select>
                                            </div>
                                            <div class="left-col1">
                                                <el-select
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg2Form.optionType"
                                                        placeholder="请选择">
                                                    <el-option
                                                            v-for="item in callPutOptions"
                                                            :key="item.key"
                                                            :label="item.label"
                                                            :value="item.value"
                                                    ></el-option>
                                                </el-select>
                                            </div>
                                            <div class="left-col2">
                                                <el-date-picker
                                                        class="oneContorls"
                                                        placeholder="选择日期"
                                                        type="date"
                                                        v-model="europeanOptionLeg2Form.tradeDate">
                                                </el-date-picker>
                                            </div>
                                            <div class="left-col1">
                                                <el-date-picker
                                                        class="oneContorls"
                                                        placeholder="选择日期"
                                                        type="date"
                                                        v-model="europeanOptionLeg2Form.expireDate">
                                                </el-date-picker>
                                            </div>
                                            <div class="left-col2">
                                                <el-date-picker
                                                        class="oneContorls"
                                                        placeholder="选择日期"
                                                        type="date"
                                                        v-model="europeanOptionLeg2Form.jiaoGeDate">
                                                </el-date-picker>
                                            </div>
                                        </el-col>
                                    </el-col>
                                    <!--                           第二列 -->
                                    <el-col :span="12">
                                        <el-col :span="12">
                                            <div class="left-col1">本币期权金额</div>
                                            <div class="left-col2">外币期权金额</div>
                                            <div class="left-col1">波动率(%)</div>
                                            <div class="left-col2">行权价</div>
                                            <div class="left-col1">期权费</div>
                                            <div class="left-col2" style="color:transparent">a</div>
                                        </el-col>
                                        <el-col :span="12">
                                            <div class="left-col1">
                                                <el-input-number
                                                        :controls="false"
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg2Form.benbiQiQuanJingE"
                                                >
                                                </el-input-number>
                                            </div>
                                            <div class="left-col2">
                                                <el-input-number
                                                        :controls="false"
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg2Form.waibiQiQuanJingE"
                                                >
                                                </el-input-number>
                                            </div>
                                            <div class="left-col1">
                                                <el-input-number
                                                        :controls="false"
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg2Form.volatility"
                                                >
                                                </el-input-number>
                                            </div>
                                            <div class="left-col2">
                                                <el-input-number
                                                        :controls="false"
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg2Form.xingQuanJia"
                                                >
                                                </el-input-number>
                                            </div>
                                            <div class="left-col1">
                                                <el-input-number
                                                        :controls="false"
                                                        class="oneContorls"
                                                        v-model="europeanOptionLeg2Form.qiQuanFei"
                                                >
                                                </el-input-number>
                                            </div>
                                            <div class="left-col2" style="color:transparent">a</div>
                                        </el-col>
                                    </el-col>
                                </div>
                            </el-col>
                            <!--            定价参数-->
                            <el-col :span="6">
                                <div class="box-card-title">
                                    <span>定价参数</span>
                                </div>
                                <div class="my-block">
                                    <el-col :span="12">
                                        <div class="left-col1">计息天数方式</div>
                                        <div class="left-col2">营业日规则</div>
                                        <div class="left-col1">波动率曲面插值方法</div>
                                        <div class="left-col2">折现曲线插值方法</div>
                                        <div class="left-col1" style="color:transparent">a</div>
                                        <div class="left-col2" style="color:transparent">a</div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="left-col1">
                                            <el-select
                                                    class="oneContorls"
                                                    v-model="europeanOptionLeg2Form.jiXiTianShuFangshi"
                                                    placeholder="请选择">
                                                <el-option
                                                        v-for="item in jiXiTianShuFangshiOptions"
                                                        :key="item.key"
                                                        :label="item.label"
                                                        :value="item.value"
                                                ></el-option>
                                            </el-select>
                                        </div>

                                        <div class="left-col2">
                                            <el-select
                                                    class="oneContorls"
                                                    v-model="europeanOptionLeg2Form.yingYeRiGuiZe"
                                                    placeholder="请选择">
                                                <el-option
                                                        v-for="item in yingYeRiGuiZeOptions"
                                                        :key="item.key"
                                                        :label="item.label"
                                                        :value="item.value"
                                                ></el-option>
                                            </el-select>
                                        </div>
                                        <div class="left-col1">
                                            <el-select
                                                    class="oneContorls"
                                                    v-model="europeanOptionLeg2Form.boDonglvQuMianChaZhi"
                                                    placeholder="请选择">
                                                <el-option
                                                        v-for="item in boDonglvQuMianChaZhiOptions"
                                                        :key="item.key"
                                                        :label="item.label"
                                                        :value="item.value"
                                                ></el-option>
                                            </el-select>
                                        </div>
                                        <div class="left-col2">
                                            <el-select
                                                    class="oneContorls"
                                                    v-model="europeanOptionLeg2Form.zheXianQuxianChaZhi"
                                                    placeholder="请选择">
                                                <el-option
                                                        v-for="item in zheXianQuxianChaZhiOptions"
                                                        :key="item.key"
                                                        :label="item.label"
                                                        :value="item.value"
                                                ></el-option>
                                            </el-select>
                                        </div>
                                        <div class="left-col1" style="color:transparent">a</div>
                                        <div class="left-col2" style="color:transparent">a</div>
                                    </el-col>
                                </div>
                            </el-col>
                            <!--            市场数据-->
                            <el-col :span="6">
                                <div class="box-card-title">
                                    <span>市场数据</span>
                                </div>
                                <div class="my-block">
                                    <el-col :span="12">
                                        <div class="left-col1">外币利率曲线</div>
                                        <div class="left-col2">本币利率曲线</div>
                                        <div class="left-col1">外币到期利率</div>
                                        <div class="left-col2">本币到期利率</div>
                                        <div class="left-col1" style="color:transparent">a</div>
                                        <div class="left-col2" style="color:transparent">a</div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="left-col1">
                                            <el-select class="oneContorls"
                                                       v-model="europeanOptionLeg2Form.waiBiLiLvCurve"
                                                       placeholder="选择曲线名称">
                                                <el-option
                                                        class="oneContorls"
                                                        v-for="item in currency1EarningCurveOptions"
                                                        :key="item.key"
                                                        :label="item.label"
                                                        :value="item.value"
                                                ></el-option>
                                            </el-select>
                                        </div>
                                        <div class="left-col2">
                                            <el-select class="oneContorls"
                                                       v-model="europeanOptionLeg2Form.benBiLiLvCurve"
                                                       placeholder="选择曲线名称">
                                                <el-option
                                                        v-for="item in currency2EarningCurveOptions"
                                                        :key="item.key"
                                                        :label="item.label"
                                                        :value="item.value"
                                                ></el-option>
                                            </el-select>
                                        </div>
                                        <div class="left-col1">
                                            <el-input-number
                                                    :controls="false"
                                                    class="oneContorls"
                                                    v-model="europeanOptionLeg2Form.waiBiDaoQiYuanQiLiLv"
                                            >
                                            </el-input-number>
                                        </div>
                                        <div class="left-col2">
                                            <el-input-number
                                                    :controls="false"
                                                    class="oneContorls"
                                                    v-model="europeanOptionLeg2Form.benBiDaoQiYuanQiLiLv"
                                            >
                                            </el-input-number>
                                        </div>
                                        <div class="left-col1" style="color:transparent">a</div>
                                        <div class="left-col2" style="color:transparent">a</div>
                                    </el-col>
                                </div>
                            </el-col>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
            <div class="box-card" style="height:105px">
                <div class="box-card-title">利率曲线</div>
                <div style="margin:20px 0px 20px 5px">
                    <el-col :span="6">
                        <el-button type="info" class="curvebutton" @click="showWaibiInterestCurve">查看本币远期利率曲线</el-button>
                    </el-col>

                    <el-col :span="6">
                        <el-button type="info" class="curvebutton" @click="showWaibiInterestCurve">查看外币远期利率曲线</el-button>
                    </el-col>

                    <el-col :span="6">
                        <el-button type="info" class="curvebutton">查看汇率远期曲线</el-button>
                    </el-col>

                    <el-col :span="6">
                        <el-button type="info" class="curvebutton" @click="showVolatilityCurve">查看波动率曲面</el-button>

                    </el-col>
                </div>
            </div>
            <div class="box-card" style="height:255px">
                <div class="box-card-title">
                    <span>计算结果</span>
                </div>
                <div style="margin:20px 0px 20px 5px">
                    <el-row>
                        <el-col :span="6"><el-button type="info" class="curvebutton">计算NPV</el-button></el-col>
                        <el-col :span="6"><el-button type="info" class="curvebutton">倒算行权价</el-button></el-col>
                        <el-col :span="6"><el-button type="info" class="curvebutton">清空</el-button></el-col>
                        <el-col :span="6"><el-button type="info" class="curvebutton" @click="switchLegs">交换输入</el-button></el-col>
                    </el-row>
                </div>

                <div>
                    <el-col :span="8">
                        <div class="my-block">
                            <el-col :span="8">
                                <div class="left-col1">NPV</div>
                                <div class="left-col2" style="color:transparent">a</div>
                                <div class="left-col1" style="color:transparent">a</div>
                            </el-col>
                            <el-col :span="16">
                                <div class="left-col1" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            disabled
                                            v-model="europeanResultLeg1.NPV"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col2" style="color:transparent">a</div>
                                <div class="left-col1" style="color:transparent">a</div>
                            </el-col>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="my-block">
                            <el-col :span="8">
                                <div class="left-col1">Delta</div>
                                <div class="left-col2">Gamma</div>
                                <div class="left-col1" style="color:transparent">a</div>
                            </el-col>
                            <el-col :span="16">
                                <div class="left-col1" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            disabled
                                            v-model="europeanResultLeg1.Delta"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col2" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            disabled
                                            v-model="europeanResultLeg1.Gamma"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col1" style="color:transparent">a</div>
                            </el-col>
                        </div>
                    </el-col>

                    <el-col :span="8">
                        <div class="my-block">
                            <el-col :span="8">
                                <div class="left-col1">Vega</div>
                                <div class="left-col2">Theta</div>
                                <div class="left-col1">Rho</div>
                            </el-col>
                            <el-col :span="16">
                                <div class="left-col1" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            disabled
                                            v-model="europeanResultLeg1.Vega"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col2" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            disabled
                                            v-model="europeanResultLeg1.Theta"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col1" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            disabled
                                            v-model="europeanResultLeg1.Rho"
                                    >
                                    </el-input-number>
                                </div>
                            </el-col>
                        </div>
                    </el-col>
                </div>
            </div>
            <el-col :span="12">
                <div class="box-card" style="height:200px">
                    <div class="box-card-title">
                        <el-checkbox-button v-model="DeltaHedgeCalc" @click="clickDeltaHedgeCalc">
                            Delta Hedge
                        </el-checkbox-button>
                    </div>
                    <div v-show="DeltaHedgeCalc === true">
                        <div style="margin:20px 0px 20px 5px">
                            <el-col :span="5">
                                <span class="left-col1">Spot Hedge头寸</span>
                            </el-col>
                            <el-col :span="5">
                                <span class="left-col1" >
                                <el-input-number
                                        :controls="false"
                                        class="oneContorls1"
                                        disabled
                                        v-model="europeanResultDeltaHedge.spotHedge"
                                >
                                </el-input-number>
                                </span>
                            </el-col>

                            <el-col :span="2">
                                <el-tag >
                                    {{ europeanResultDeltaHedge.currencyUnit }}
                                </el-tag>
                            </el-col>

                        </div>
                        <div class="my-block" style="margin-top:10px">
                            <el-col :span="5">
                                <span class="left-col1">Forward Hedge头寸</span>
                            </el-col>

                            <el-col :span="5">
                                <span class="left-col1">
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls1"
                                            disabled
                                            v-model="europeanResultDeltaHedge.forwardHedge"
                                    >
                                    </el-input-number>
                                </span>
                            </el-col>
                            <el-col :span="1">

                                <el-tag>
                                    {{ europeanResultVegaHedge.currencyUnit }}
                                </el-tag>

                            </el-col>

                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="box-card" style="height:200px">
                    <div class="box-card-title" >
                        <el-checkbox-button v-model="VegaHedgeCalc" @click="clickVegaHedgeCalc">
                            Vega Hedge
                        </el-checkbox-button>
                    </div>
                    <div v-show="VegaHedgeCalc === true">
                        <div style="margin:20px 0px 20px 5px">
                            <el-col :span="4">
                                <div class="left-col1">期权1类型</div>
                                <div class="left-col2">期权2类型</div>
                            </el-col>
                            <el-col :span="7">
                                <div class="left-col1" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls1"
                                            disabled
                                            v-model="europeanResultVegaHedge.option1Type"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col2" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls1"
                                            disabled
                                            v-model="europeanResultVegaHedge.option2Type"
                                    >
                                    </el-input-number>
                                </div>
                            </el-col>

                        </div>
                        <div class="my-block" style="margin-top:10px">
                            <el-col :span="4">
                                <div class="left-col1">期权1本金</div>
                                <div class="left-col2">期权2本金</div>
                            </el-col>
                            <el-col :span="5">
                                <div class="left-col1">
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls1"
                                            disabled
                                            v-model="europeanResultVegaHedge.option1Amount"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col2">
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls1"
                                            disabled
                                            v-model="europeanResultVegaHedge.option2Amount"
                                    >
                                    </el-input-number>
                                </div>
                            </el-col>
                            <el-col :span="2">
                                <div class="left-col1">
                                    <el-tag>
                                        {{ europeanResultVegaHedge.currencyUnit }}
                                    </el-tag>
                                </div>
                                <div class="left-col2">
                                    <el-tag>
                                        {{ europeanResultVegaHedge.currencyUnit }}
                                    </el-tag>
                                </div>
                            </el-col>
                        </div>
                    </div>


                </div>
            </el-col>

            <div>
                <el-dialog
                        title="利率曲线"
                        :visible.sync="interestialogTableVisible"
                        :append-to-body="true"
                        width="70%"

                >
                    <div class='box-card' style="height:100%">
                        <div class="box-card-title"> {{ dialogName }}</div>
                        <div v-if="showtable === true">
                            <el-table
                                    :data="interestCurveData"
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
                        <div v-else>
                            <div style="margin-top:20px">
                                <survecurve :curvename="dialogName" style="width:99%;height:100%"/>
                            </div>
                        </div>
                    </div>
                </el-dialog>
            </div>


        </d2-grid-layout>
    </d2-container>
</template>

<script>
  import {
    pricing,
    calcFxFWD,
    getInterestCurve

  } from '@api/index'
  import echarts from 'echarts'
  import 'echarts-gl'
  import {
      currencyPairOptions,
      callPutOptions,
      zheXianQuxianChaZhiOptions,
      boDonglvQuMianChaZhiOptions,
      yingYeRiGuiZeOptions,
      jiXiTianShuFangshiOptions,
      currency1EarningCurveOptions,
      currency2EarningCurveOptions,
      intepolationTypeOptions,
      tradingDirectionOptions,
      echartOption,
      echartSurfoption
  } from '../UIPara/UIPara'
  import survecurve from '../UIPara/surf'

  export default {
    components: {
        survecurve
    },
    data () {
      return {
        filename: "europeanOption",
        layout: {
          layout: [
            { 'x': 0, 'y': 0, 'w': 3, 'h': 13, 'i': '0' },
            { 'x': 0, 'y': 13, 'w': 3, 'h': 15.5, 'i': '1' },
            { 'x': 3, 'y': 0, 'w': 6, 'h': 13, 'i': '2' },
            { 'x': 9, 'y': 0, 'w': 3, 'h': 13, 'i': '3' },
            { 'x': 3, 'y': 13, 'w': 9, 'h': 15.5, 'i': '4' },
          ],
          colNum: 12,
          rowHeight: 31,
          isDraggable: false,
          isResizable: false,
          isMirrored: false,
          verticalCompact: true,
          margin: [2, 3],
          useCssTransforms: true
        },
        collapsActiveName:'leg1',
        recordSelected: '',
        recordList: [
          { key: 'record1', label: 'record1', value: 'record1' }
        ],
        huiLvYuanQiCurveData: [{
              date: '2016-05-02',
              rate: '7',

          }, {
              date: '2017-05-04',
              rate: '7.1',

          }, {
              date: '2018-05-01',
              rate: '7.2',

          }, {
              date: '2019-05-03',
              rate: '7.3',

          }],
         benBiYuanQiCurveData: [{
              date: '2016-05-02',
              rate: '6',

          }, {
              date: '2017-05-04',
              rate: '6.1',

          }, {
              date: '2018-05-01',
              rate: '6.2',

          }, {
              date: '2019-05-03',
              rate: '6.3',

          }],
          waiBiYuanQiCurveData: [{
              date: '2016-05-02',
              rate: '8',

          }, {
              date: '2017-05-04',
              rate: '8.1',

          }, {
              date: '2018-05-01',
              rate: '8.2',

          }, {
              date: '2019-05-03',
              rate: '8.3',

          }],
          interestialogTableVisible:false,
        europeanOptionLeg1Form:{
            currencyPair:'USD/CNY',
            direction:'Buy',
            optionType:'Call',
            tradeDate: Date.now(),
            expireDate: Date.now(),
            jiaoGeDate: Date.now(),
            benbiQiQuanJingE:'',
            waibiQiQuanJingE:'',
            volatility:'0.01987',
            xingQuanJia:'',
            qiQuanFei:'',
            jiXiTianShuFangshi: 'ACT/365',
            yingYeRiGuiZe: '调整至下一营业日',
            boDonglvQuMianChaZhi:'Linear of delta',
            zheXianQuxianChaZhi:'Linear log normal',
            waiBiLiLvCurve:'美元隐含利率曲线',
            benBiLiLvCurve:'人名币FR007收益利率曲线',
            benBiDaoQiYuanQiLiLv:'',
            waiBiDaoQiYuanQiLiLv:'',
        },
          europeanOptionLeg2Form:{
              currencyPair:'USD/CNY',
              direction:'Buy',
              optionType:'Call',
              tradeDate: Date.now(),
              expireDate: Date.now(),
              jiaoGeDate: Date.now(),
              benbiQiQuanJingE:'',
              waibiQiQuanJingE:'',
              volatility:'0.01987',
              xingQuanJia:'',
              qiQuanFei:'',
              jiXiTianShuFangshi: 'ACT/365',
              yingYeRiGuiZe: '调整至下一营业日',
              boDonglvQuMianChaZhi:'Linear of delta',
              zheXianQuxianChaZhi:'Linear log normal',
              waiBiLiLvCurve:'美元隐含利率曲线',
              benBiLiLvCurve:'人名币FR007收益利率曲线',
              benBiDaoQiYuanQiLiLv:'',
              waiBiDaoQiYuanQiLiLv:'',
          },
          DeltaHedgeCalc:true,
          VegaHedgeCalc:false,
          europeanResultDeltaHedge:{
              spotHedge:'',
              forwardHedge:'',
              currencyUnit:'CNY'
          },
          europeanResultVegaHedge:{
              option1Type:'',
              option2Type:'',
              option1Amount:'',
              option2Amount:'',
              currencyUnit:'CNY'
          },
          europeanResultVegaHedge:{
              option1Type:'',
              option1Amount:'',
              option2Type:'',
              option2Amount:'',
              currencyUnit:'CNY'
          },
          europeanResultLeg1:{
              NPV:'',
              Delta:'',
              Gamma:'',
              Vega:'',
              Theta:'',
              Rho:'',
          },
          europeanResultLeg2:{
              NPV:'',
              Delta:'',
              Gamma:'',
              Vega:'',
              Theta:'',
              Rho:'',
          },
        europeanResult1:{
          fwd:'1.19289/1.19291',
          fwdPoint:'.7588/.7588',
          vol:'7.27/8.68 %',
          cost:'1831.00/2192.00',
          counterQty:'1.2M USD',
          delta:'50.43/50.53 %',
          gamma:'.80132',
          vega:'.00025',
          theta:'-.00103',
          DTE:'1 DAY',
          fromATMPercent:'0.00 %',
          probPercent:'40.32 %',
          premiumDate:'May 09,2018',
          deliveryDate:'May 10 2018',
          greeksDelta:'50.48%',
          greeksGamma:'80132',
          greekPSI:'-.00002',
          greekRho:'00002',
          greekTheta:'-.00103',
          greekVega:'.00025',
        },
        InputDataTableOpt: {height: '290'},
        myechats:null,
        myechartSurf:null,

        currencyPairOptions:currencyPairOptions,
        callPutOptions:callPutOptions,
        zheXianQuxianChaZhiOptions:zheXianQuxianChaZhiOptions,
        boDonglvQuMianChaZhiOptions:boDonglvQuMianChaZhiOptions,
        yingYeRiGuiZeOptions:yingYeRiGuiZeOptions,
        jiXiTianShuFangshiOptions:jiXiTianShuFangshiOptions,
        currency1EarningCurveOptions:currency1EarningCurveOptions,
        currency2EarningCurveOptions:currency2EarningCurveOptions,
        intepolationTypeOptions:intepolationTypeOptions,
        tradingDirectionOptions:tradingDirectionOptions,
        echartOption:echartOption,
        echartSurfoption:echartSurfoption,
        interestCurveData:null,
          showtable:true,
          dialogName:'',
      }
    },
    mounted () {
      // //console.log(this.echartSurfoption)
      // this.myechartSurf=echarts.init(document.getElementById('marketSurf'));
      // this.myechartSurf.setOption(this.echartSurfoption);
      //
      // this.myechats = echarts.init(document.getElementById('resource'));
      // this.myechats.setOption(this.echartOption);


    },
    methods: {
      // ****************************
       clickVegaHedgeCalc(){
           if(this.VegaHedgeCalc===true) {
               this.VegaHedgeCalc = false;
           }
           else {
               this.VegaHedgeCalc = true;
           }
        },
        clickDeltaHedgeCalc(){
            if(this.DeltaHedgeCalc===true) {
                this.DeltaHedgeCalc = false;
            }
            else {
                this.DeltaHedgeCalc = true;
            }
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
      switchLegs()
      {
           if(this.collapsActiveName=== 'leg1'){
               this.collapsActiveName='leg2';
           }else{
               this.collapsActiveName='leg1';
           }
      },
//api
        showWaibiInterestCurve(){
            var self = this;
            getInterestCurve('USD_OIS').then(res => {
                self.interestCurveData = res.list;

                // self.MarketDataLeg1.forEach(onerow => {
                //     console.log( parseFloat(onerow['利率']),'floatnummber' )
                //     data.push([onerow['日期'],parseFloat(onerow['利率'])])
                // });
                self.dialogName='外币利率曲线';


            });

            // this.interestCurveData=this.interestWaiBiCurveData
            this.interestialogTableVisible=true;
            this.showtable=true
        },
        showBenbiInterestCurve(){
            var self = this;
            getInterestCurve('CNY_Repo7D').then(res => {
                self.interestCurveData = res.list;

            });
            this.dialogName='本币利率曲线';
            // this.interestCurveData=this.interestWaiBiCurveData
            this.interestialogTableVisible=true;
            this.showtable=true
        },
        showVolatilityCurve(){
            this.interestialogTableVisible=true;
            this.showtable=false;
            this.dialogName='波动率曲面';
        }
//end methods
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
        font-size:16px;
        color:white;
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
        font-size:16px;
        color:white;
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
    .curve-title{
        font-size:16px;
        text-align: center;
    }
    .curvebutton{
        width:200px;
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
    .my-collaps .el-collapse-item__header.is-active {
        border-bottom-color: transparent;
        background: #333333;
        color: white;
        font-size: 20px;
    }
    .my-collaps .el-collapse-item__header {
        font-size: 20px;
        background: #333333;
        color: white;
        border-bottom: 1px solid transparent;
    }
    .my-collaps .el-collapse-item__wrap {
        background: #333333;
       overflow: hidden;
       border-bottom: 1px solid transparent;
    }
    .my-collaps .el-collapse {
        border-top: 0px solid #EBEEF5;
        border-bottom: 0px solid #EBEEF5;
        border-radius: 5px;
        /*padding: 5px;*/
        //background-color: #2c2c41;

        color: white;
        margin: 2px 2px 0px 2px;
    }
</style>
