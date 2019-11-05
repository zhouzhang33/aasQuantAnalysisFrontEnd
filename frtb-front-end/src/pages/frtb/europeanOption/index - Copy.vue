<template>
    <d2-container  type="full" class="page" better-scroll>
        <d2-grid-layout
                v-bind="layout"
                @layout-updated="layoutUpdatedHandler">
            <!--      <d2-grid-item-->
            <!--              @move="moveHandler"-->
            <!--              @moved="movedHandler"-->
            <!--              @resize="resizeHandler"-->
            <!--              @resized="resizedHandler"-->
            <!--              >-->

            <div class='box-card' style="height:1100px">
                <el-row>
                    <el-col :span="24">
                        <span class="controls-a-line">Trade Date</span>
                        <span class="controls-a-line">
                        <el-date-picker
                                class="oneControls"
                                placeholder="选择日期"
                                type="date"
                                v-model="europeanOptionForm.tradeDate">
                        </el-date-picker>
                  </span>
                        <span class="controls-a-line">Spot Date</span>
                        <span class="controls-a-line">
                        <el-date-picker
                                class="oneControls"
                                placeholder="选择日期"
                                type="date"
                                v-model="europeanOptionForm.spotData">
                        </el-date-picker>
                  </span>

                        <span class="controls-a-line">Currency Pair</span>
                        <span class="controls-a-line">
                        <el-select class="oneControls" placeholder="请选择货币对" v-model="europeanOptionForm.currencyPair">
                          <el-option
                                  :key="item.key"
                                  :label="item.label"
                                  :value="item.value"
                                  v-for="item in currencyPairOption"
                          ></el-option>
                        </el-select>
                  </span>

                        <span class="controls-a-line">Optimal Type</span>
                        <span class="controls-a-line">
                        <el-select class="oneControls" placeholder="请选择Option type"
                                   v-model="europeanOptionForm.optionType">
                          <el-option
                                  :key="item.key"
                                  :label="item.label"
                                  :value="item.value"
                                  v-for="item in optionType"
                          ></el-option>
                        </el-select>
                  </span>
                        <span class="controls-a-line">
                    <el-button
                            type="primary"
                    >
                      Calculate
                    </el-button>
                  </span>

                        <span class="controls-a-line" style="margin-left:50px">
                     到期价格区间
                   </span>

                        <span class="controls-a-line">
                        <el-input-number
                                :controls="false"
                                class="oneControls"
                                v-model="europeanOptionForm.priceIntervalMin"
                        >
                        </el-input-number>
                  </span>
                        <el-tag>--</el-tag>
                        <span class="controls-a-line">
                        <el-input-number
                                :controls="false"
                                class="oneControls"
                                v-model="europeanOptionForm.priceIntervalMax"
                        >
                        </el-input-number>
                  </span>

                        <span class="controls-a-line">
                    <el-button
                            type="primary"
                    >
                      生成收益图
                    </el-button>
                  </span>
                    </el-col>
                </el-row>


                <el-row>
                    <el-col :span="12">
                        <div class="box-card-content">
                            <el-col :span="6">
                                <div class="left-col1"> Info</div>
                                <div class="left-col2"> Direction:</div>
                                <div class="left-col1"> CALL/PUT:</div>
                                <div class="left-col2"> Delivery:</div>
                                <div class="left-col1"> Expiry:</div>
                                <div class="left-col2"> Strike:</div>
                                <div class="left-col1"> Notional ccy1:</div>
                                <div class="left-col2"> Notional ccy2:</div>
                                <div class="left-col1"> Volatility:</div>
                                <div class="left-col2"> Market Data</div>
                                <div class="left-col1"> SportRate:</div>
                                <div class="left-col2"> Forward Point:</div>
                                <div class="left-col1"> Forward Rate:</div>
                                <div class="left-col2"> rd:</div>
                                <div class="left-col1"> rf:</div>
                                <div class="left-col2"> Premium:</div>
                                <div class="left-col1"> Pips:</div>
                                <div class="left-col2"> Term:</div>
                                <div class="left-col1"> Amount ccy1:</div>
                                <div class="left-col2"> Amount ccy2:</div>

                                <el-col :span="6">
                                    <div class="left-col1"> Greeks:</div>
                                </el-col>
                                <el-col :span="6">
                                    <div>
                                        <el-select v-model="europeanOptionForm.greeksOptions1" placeholder="请选择货币对">
                                            <el-option
                                                    v-for="item in greekOptions1"
                                                    :key="item.key"
                                                    :label="item.label"
                                                    :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div>
                                        <el-select v-model="europeanOptionForm.greeksOptions2" placeholder="请选择货币对">
                                            <el-option
                                                    v-for="item in greekOptions2"
                                                    :key="item.key"
                                                    :label="item.label"
                                                    :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div>
                                        <el-select v-model="europeanOptionForm.greeksOptionUnit" placeholder="请选择货币对">
                                            <el-option
                                                    v-for="item in unitOptions"
                                                    :key="item.key"
                                                    :label="item.label"
                                                    :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </div>
                                </el-col>

                                <el-col :span="18">
                                    <div class="left-col2"> SportRate:</div>
                                </el-col>
                                <el-col :span="6">
                                    <div>
                                        <el-select v-model="europeanOptionForm.greeksOptionUnit" placeholder="请选择货币对">
                                            <el-option
                                                    v-for="item in unitOptions"
                                                    :key="item.key"
                                                    :label="item.label"
                                                    :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </div>
                                </el-col>
                                <!--2 hang                                 -->
                                <el-col :span="18">
                                    <div class="left-col"> Forward Delta:</div>
                                </el-col>
                                <el-col :span="6">
                                    <div>
                                        <el-select v-model="europeanOptionForm.forwardDeltaUnit" placeholder="请选择货币对">
                                            <el-option
                                                    v-for="item in unitOptions"
                                                    :key="item.key"
                                                    :label="item.label"
                                                    :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </div>
                                </el-col>
                                <!--3 hang                                 -->
                                <el-col :span="18">
                                    <div class="left-col1"> Gamma:</div>
                                </el-col>
                                <el-col :span="6">
                                    <div>
                                        <el-select v-model="europeanOptionForm.gammUnit" placeholder="请选择货币对">
                                            <el-option
                                                    v-for="item in unitOptions"
                                                    :key="item.key"
                                                    :label="item.label"
                                                    :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </div>
                                </el-col>
                                <!--4 hang                                 -->
                                <el-col :span="18">
                                    <div class="left-col2"> Vega:</div>
                                </el-col>
                                <el-col :span="6">
                                    <div>
                                        <el-select v-model="europeanOptionForm.vegaUnit" placeholder="请选择货币对">
                                            <el-option
                                                    v-for="item in unitOptions"
                                                    :key="item.key"
                                                    :label="item.label"
                                                    :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </div>
                                </el-col>
                                <!--5 hang                                 -->
                                <el-col :span="18">
                                    <div class="left-col1"> Theta:</div>
                                </el-col>
                                <el-col :span="6">
                                    <div>
                                        <el-select v-model="europeanOptionForm.thetaUnit" placeholder="请选择货币对">
                                            <el-option
                                                    v-for="item in unitOptions"
                                                    :key="item.key"
                                                    :label="item.label"
                                                    :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </div>
                                </el-col>
                            </el-col>

                            <el-col :span="6">
                                <div class="left-col1" style="color:transparent">a</div>
                                <div class="left-col2" style="color:transparent">a</div>
                                <div class="left-col1" style="color:transparent">a</div>
                                <div class="left-col2" style="color:transparent">a</div>
                                <div class="left-col1" style="color:transparent">a</div>
                                <div class="left-col2" style="color:transparent">a</div>
                                <div class="left-col1" style="color:transparent">a</div>
                                <div class="left-col2" style="color:transparent">a</div>
                                <div class="left-col1" style="color:transparent">a</div>
                                <div class="left-col2" style="color:transparent">a</div>
                                <div class="left-col1" style="color:transparent">a</div>
                                <div class="left-col2" style="color:transparent">a</div>
                                <div class="left-col1" style="color:transparent">a</div>
                                <div class="left-col2" style="color:transparent">a</div>
                                <div class="left-col1" style="color:transparent">a</div>
                                <div class="left-col2" style="color:transparent">a</div>
                                <div class="left-col1" style="color:transparent">a</div>
                                <div class="left-col2" style="color:transparent">a</div>
                                <div class="left-col1" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.amountCcy1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col2" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.amountCcy2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col1" style="color:transparent">a</div>
                                <div class="left-col2" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.spotDelta"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col1" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.forwardDelta"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col2" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.gamma"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col1" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.vega"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="left-col2" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.theta"
                                    >
                                    </el-input-number>
                                </div>
                            </el-col>
                            <!--                     leg1-->
                            <el-col :span="6">
                                <div class="middle-col" style="color:transparent">
                                    a
                                </div>


                                <div class="middle-col">
                                    <el-select class="oneContorls" v-model="europeanOptionForm.directionLeg1" placeholder="请选择方向">
                                        <el-option
                                                v-for="item in directionOptions"
                                                :key="item.key"
                                                :label="item.label"
                                                :value="item.value"
                                        ></el-option>
                                    </el-select>
                                </div>
                                <div class="middle-col">
                                    <el-select class="oneContorls" v-model="europeanOptionForm.callPutLeg1" placeholder="请选择Call/Put">
                                        <el-option
                                                v-for="item in callPutOptions"
                                                :key="item.key"
                                                :label="item.label"
                                                :value="item.value"
                                        ></el-option>
                                    </el-select>
                                </div>
                                <div class="middle-col">
                                    <el-col :span="12">
                                        <el-select class="twoContorls" v-model="europeanOptionForm.deliveryLeg1" placeholder="请选择">
                                            <el-option
                                                    v-for="item in deliveryOptions"
                                                    :key="item.key"
                                                    :label="item.label"
                                                    :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-date-picker
                                                class="twoContorls"
                                                placeholder="选择日期"
                                                type="date"
                                                v-model="europeanOptionForm.deliveryDateLeg1">
                                        </el-date-picker>
                                    </el-col>
                                </div>
                                <div class="middle-col">
                                    <el-date-picker
                                            class="oneContorls"
                                            placeholder="选择日期"
                                            type="date"
                                            v-model="europeanOptionForm.expiryDateLeg1">
                                    </el-date-picker>
                                </div>
                                <div class="middle-col">
                                    <el-col :span="12">
                                        <el-select class="twoControls" v-model="europeanOptionForm.strikeSelectLeg1" placeholder="请选择">
                                            <!--                                     <el-option-->
                                            <!--                                             v-for="item in deliveryOptions"-->
                                            <!--                                             :key="item.key"-->
                                            <!--                                             :label="item.label"-->
                                            <!--                                             :value="item.value"-->
                                            <!--                                     ></el-option>-->
                                        </el-select>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-input-number
                                                :controls="false"
                                                class="twoControls"
                                                v-model="europeanOptionForm.strikeLeg1"
                                        >
                                        </el-input-number>
                                    </el-col>
                                </div>
                                <div class="oneContorls" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.notionalCCY1Leg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.notionalCCY2Leg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.volatilityLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col2" >
                                    <div style="color:transparent">a</div>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.spotRateLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.forwardPointLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.forwardRateLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col">
                                    <el-col :span="12">
                                        <el-select  class="twoControls" v-model="europeanOptionForm.rdSelectLeg1" placeholder="请选择">
                                            <el-option
                                                    v-for="item in rdOptions"
                                                    :key="item.key"
                                                    :label="item.label"
                                                    :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-input-number
                                                :controls="false"
                                                class="twoControls"
                                                v-model="europeanOptionForm.rdLeg1"
                                        >
                                        </el-input-number>
                                    </el-col>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.rfLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col2" >
                                    <div style="color:transparent">a</div>
                                </div>

                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.pipsLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.termLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.amountCcy1Leg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.amountCcy2Leg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col2" >
                                    <div style="color:transparent">a</div>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.spotDeltaLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.forwardDeltaLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.gammaLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.vegaLeg1"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.thetaLeg1"
                                    >
                                    </el-input-number>
                                </div>
                            </el-col>

                            <el-col :span="6">
                                <div class="middle-col" style="color:transparent">
                                    a
                                </div>


                                <div class="middle-col">
                                    <el-select class="oneContorls" v-model="europeanOptionForm.directionLeg2" placeholder="请选择方向">
                                        <el-option
                                                v-for="item in directionOptions"
                                                :key="item.key"
                                                :label="item.label"
                                                :value="item.value"
                                        ></el-option>
                                    </el-select>
                                </div>
                                <div class="middle-col">
                                    <el-select class="oneContorls" v-model="europeanOptionForm.callPutLeg2" placeholder="请选择Call/Put">
                                        <el-option
                                                v-for="item in callPutOptions"
                                                :key="item.key"
                                                :label="item.label"
                                                :value="item.value"
                                        ></el-option>
                                    </el-select>
                                </div>
                                <div class="middle-col">
                                    <el-col :span="12">
                                        <el-select class="twoControls" v-model="europeanOptionForm.deliveryLeg2" placeholder="请选择">
                                            <el-option
                                                    v-for="item in deliveryOptions"
                                                    :key="item.key"
                                                    :label="item.label"
                                                    :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-date-picker
                                                class="twoControls"
                                                placeholder="选择日期"
                                                type="date"
                                                v-model="europeanOptionForm.deliveryDateLeg2">
                                        </el-date-picker>
                                    </el-col>
                                </div>
                                <div class="middle-col">
                                    <el-date-picker
                                            class="oneContorls"
                                            placeholder="选择日期"
                                            type="date"
                                            v-model="europeanOptionForm.expiryDateLeg2">
                                    </el-date-picker>
                                </div>
                                <div class="middle-col">
                                    <el-col :span="12">
                                        <el-select class="twoControls" v-model="europeanOptionForm.strikeSelectLeg2" placeholder="请选择">
                                            <!--                                     <el-option-->
                                            <!--                                             v-for="item in deliveryOptions"-->
                                            <!--                                             :key="item.key"-->
                                            <!--                                             :label="item.label"-->
                                            <!--                                             :value="item.value"-->
                                            <!--                                     ></el-option>-->
                                        </el-select>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-input-number
                                                :controls="false"
                                                class="twoControls"
                                                v-model="europeanOptionForm.strikeLeg2"
                                        >
                                        </el-input-number>
                                    </el-col>
                                </div>
                                <div class="oneContorls" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.notionalCCY1Leg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.notionalCCY2Leg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.volatilityLeg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col2" >
                                    <div style="color:transparent">a</div>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.spotRateLeg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.forwardPointLeg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.forwardRateLeg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col">
                                    <el-col :span="12">
                                        <el-select  class="twoControls" v-model="europeanOptionForm.rdSelectLeg2" placeholder="请选择">
                                            <el-option
                                                    v-for="item in rdOptions"
                                                    :key="item.key"
                                                    :label="item.label"
                                                    :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-input-number
                                                :controls="false"
                                                class="twoControls"
                                                v-model="europeanOptionForm.rdLeg2"
                                        >
                                        </el-input-number>
                                    </el-col>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.rfLeg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col2" >
                                    <div style="color:transparent">a</div>
                                </div>

                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.pipsLeg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.termLeg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.amountCcy1Leg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.amountCcy2Leg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col2" >
                                    <div style="color:transparent">a</div>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.spotDeltaLeg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.forwardDeltaLeg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.gammaLeg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.vegaLeg2"
                                    >
                                    </el-input-number>
                                </div>
                                <div class="middle-col" >
                                    <el-input-number
                                            :controls="false"
                                            class="oneContorls"
                                            v-model="europeanOptionForm.thetaLeg2"
                                    >
                                    </el-input-number>
                                </div>
                            </el-col>

                            <!--左边1/2-->
                        </div>
                    </el-col>


                    <el-col :span='6'>
                        <div style="margin-top:20px;margin-left:20px">
                            <div>
                              <span>
                                  Leg Analytics
                              </span>
                            </div>
                            <div style="margin-top:20px">
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>Fwd</span>
                                    </el-col>
                                    <el-col :span="12">
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.fwd }}
                                    </el-button>
                                    </el-col>
                                </div>
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>Fwd Points</span>
                                    </el-col>
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.fwdPoint }}
                                    </el-button>
                                </div>
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>Vol</span>
                                    </el-col>
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.vol }}
                                    </el-button>
                                </div>
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>Cost</span>
                                    </el-col>
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.cost }}
                                    </el-button>
                                </div>
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>counterQty</span>
                                    </el-col>
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.counterQty }}
                                    </el-button>
                                </div>
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>Delta</span>
                                    </el-col>
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.delta }}
                                    </el-button>
                                </div>
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>Gamma</span>
                                    </el-col>
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.gamma }}
                                    </el-button>
                                </div>
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>Vega</span>
                                    </el-col>
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.vega }}
                                    </el-button>
                                </div>
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>Theta</span>
                                    </el-col>
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.theta }}
                                    </el-button>
                                </div>
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>DTE</span>
                                    </el-col>
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.DTE }}
                                    </el-button>
                                </div>
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>% from ATM</span>
                                    </el-col>
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.fromATMPercent }}
                                    </el-button>
                                </div>
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>Prob %</span>
                                    </el-col>
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.probPercent }}
                                    </el-button>
                                </div>
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>Premium Date </span>
                                    </el-col>
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.premiumDate }}
                                    </el-button>
                                </div>
                                <div class="right-col">
                                    <el-col :span="12">
                                    <span>Delivery Date %</span>
                                    </el-col>
                                    <el-button type="info" class="leg-ana-button">
                                        {{ europeanResult.deliveryDate }}
                                    </el-button>
                                </div>
                                <!--                              leg analytics close-->
                            </div>

                            <div style="margin-top:20px">
                                <div>
                                  <span>
                                      Greeks
                                  </span>
                                </div>
                                <div style="margin-top:20px">
                                <el-col :span="12">
                                    <div class="right-col">
                                        <el-col :span="12">
                                        <span>Delta</span>
                                        </el-col>
                                        <el-col :span="12">
                                        <el-button type="info" class="leg-greek-button">
                                            {{ europeanResult.greeksDelta }}
                                        </el-button>
                                        </el-col>
                                    </div>
                                    <div class="right-col">
                                        <el-col :span="12">
                                        <span>PSI</span>
                                        </el-col>
                                        <el-col :span="12">
                                        <el-button type="info" class="leg-greek-button">
                                            {{ europeanResult.greekPSI }}
                                        </el-button>
                                        </el-col>
                                    </div>
                                    <div class="right-col">
                                        <el-col :span="12">
                                        <span>Theta</span>
                                        </el-col>
                                        <el-col :span="12">
                                        <el-button type="info" class="leg-greek-button">
                                            {{ europeanResult.greekTheta }}
                                        </el-button>
                                        </el-col>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="right-col">
                                        <el-col :span="12">
                                        <span>Gamma</span>
                                        </el-col>
                                        <el-col :span="12">
                                        <el-button type="info" class="leg-greek-button">
                                            {{ europeanResult.greeksGamma }}
                                        </el-button>
                                        </el-col>
                                    </div>
                                    <div class="right-col">
                                        <el-col :span="12">
                                        <span>Rho</span>
                                        </el-col>
                                        <el-col :span="12">
                                        <el-button type="info" class="leg-greek-button">
                                            {{ europeanResult.greekRho }}
                                        </el-button>
                                        </el-col>
                                    </div>
                                    <div class="right-col">
                                        <el-col :span="12">
                                        <span>Vega</span>
                                        </el-col>
                                        <el-col :span="12">
                                        <el-button type="info" class="leg-greek-button">
                                            {{ europeanResult.greekVega }}
                                        </el-button>
                                        </el-col>
                                    </div>
                                </el-col>
                                </div>
                            </div>
                        </div>
                    </el-col>
<!--echart-->
                    <el-col :span='6'>
                        <div style="margin-top:20px;margin-left:20px">
                            <div>
                              <span>
                                  收益图
                              </span>
                            </div>
                            <div id='resource' style='margin:5px;width:100%;height:400px'>
                            </div>
                        </div>
                        <div style="margin-top:20px;margin-left:20px">
                            <div>
                              <span>
                                  市场数据
                              </span>
                            </div>
                            <div id='marketSurf' style='margin:5px;width:100%;height:400px'>
                            </div>
                        </div>
                    </el-col>

                </el-row>


            </div>



        </d2-grid-layout>
    </d2-container>
</template>

<script>

  import {
    pricing,
    calcFxFWD
  } from '@api/index'
  import Calendar from 'vue-calendar-component'
  import echarts from 'echarts'
  import 'echarts-gl'
  import {echartSurfoption,echartOption,directionOptions,callPutOptions,deliveryOptions,rdOptions,currencyPair,optionType,unitOptions,greekOptions1,greekOptions2 } from './UIPara'

  export default {
    components: {
      Calendar
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
          rowHeight: 36,
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
        europeanOptionForm:{
          tradeDate: Date.now(),
           spotData: Date.now(),
          currencyPair:'',
          optionType:'',
          priceIntervalMin:'',
          priceIntervalMax:'',
          royaltyIncluded:'',
          directionLeg1:'',
          callPutLeg1:'',
          deliveryLeg1:'',
          deliveryDateLeg1:Date.now(),
          expiryDateLeg1:Date.now(),
          strikeSelectLeg1:'',
          strikeLeg1:'',
          notionalCCY1Leg1:'',
          notionalCCY2Leg1:'',
          volatilityLeg1:'',
          spotRateLeg1:'',
          forwardPointLeg1:'',
          forwardRateLeg1:'',
          rdLeg1:'',
          rdSelectLeg1:'',
          rfLeg1:'',
          pipsLeg1:'',
          termLeg1:'',
          amountCcy1Leg1:'',
          amountCcy2Leg1:'',
          spotDeltaLeg1:'',
          forwardDeltaLeg1:'',
          gammaLeg1:'',
          vegaLeg1:'',
          thetaLeg1:'',
          //leg2
          directionLeg2:'',
          deliveryLeg2:'',
          deliveryDateLeg2:Date.now(),
          expiryDateLeg2:Date.now(),
          strikeSelectLeg2:'',
          strikeLeg2:'',
          notionalCCY1Leg2:'',
          notionalCCY2Leg2:'',
          volatilityLeg2:'',
          spotRateLeg2:'',
          forwardPointLeg2:'',
          forwardRateLeg2:'',
          rdLeg2:'',
          rdSelectLeg2:'',
          rfLeg2:'',
          pipsLeg2:'',
          termLeg2:'',
          amountCcy1Leg2:'',
          amountCcy2Leg2:'',
          spotDeltaLeg2:'',
          forwardDeltaLeg2:'',
          gammaLeg2:'',
          vegaLeg2:'',
          thetaLeg2:'',

          amountCcy1:'',
          amountCcy2:'',
          greeksOptions1:'',
          greeksOptions2:'',
          greeksOptionUnit:'',
          spotDelta:'',
          spotDeltaOptionUnit:'',
          forwardDeltaUnit:'',
          forwardDelta:'',
          gamma:'',
          gammUnit:'',
          vega:'',
          vegaUnit:'',
          theta:'',
          thetaUnit:'',
        },
        europeanResult:{
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
        echartOption:echartOption,

        currencyPairOption:currencyPair,
        optionType:optionType,
        directionOptions:directionOptions,
        callPutOptions:callPutOptions,
        deliveryOptions:deliveryOptions,
        rdOptions:rdOptions,
        optionType:optionType,
        unitOptions:unitOptions,
        greekOptions1:greekOptions1,
        greekOptions2:greekOptions2,
        echartSurfoption:echartSurfoption,
        }
    },
    mounted () {
      console.log(this.echartSurfoption)
      this.myechartSurf=echarts.init(document.getElementById('marketSurf'));
      this.myechartSurf.setOption(this.echartSurfoption);

      this.myechats = echarts.init(document.getElementById('resource'));
      this.myechats.setOption(this.echartOption);


    },
    methods: {
      // ****************************
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
        margin:10px 5px 5px 10px;
    }
    .oneControls {
        width: 135px;
    }
    .left-col2{
        height:40px;
        background:#454754;;
        margin:auto;
        line-height: 40px;
        vertical-align: center;
    }
    .left-col1{
        height:40px;
        background:#312E30;
        margin:auto;
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
        width:217px;
    }
    .leg-ana-button {
             width:150px;
             height:35px;
         }
    .leg-greek-button {
        width:80px;
        height:35px;
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
</style>
