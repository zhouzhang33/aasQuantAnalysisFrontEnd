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
            <div style="padding:1px">
            <el-col :span="24">
              <div class='box-card' style="height:1005px;padding:0px 10px 0px 10px">
                  <el-row>
                      <div style="margin-top:10px">
                          <!--            <el-form :inline="true" ref="swapFormBottomRef" :model="swapForm2" label-width="120px" style="width:90%" :label-position="left">-->
                          <!--              <el-form-item label="">              -->
                          <!--            </el-form>-->
                          <span class="controls-a-line">选择记录</span>
                          <span class="controls-a-line">
                      <el-select
                              placeholder="请选择记录"
                              v-model="recordSelected"
                              class="oneControlsLong"
                      >
                        <el-option
                                :key="item.key"
                                :label="item.label"
                                :value="item.value"
                                v-for="item in recordList"
                        ></el-option>
                     </el-select>
                  </span>
                          <span class="controls-a-line">
                    <el-button
                            type="infor"
                    >
                      保存记录
                    </el-button>
                  </span>
                          <span class="controls-a-line">
                    <el-button
                            type="infor"
                    >
                      删除记录
                    </el-button>
                  </span>
                          <span class="controls-a-line">
                    <el-button
                            type="infor"
                    >
                      清空记录
                    </el-button>
                  </span>

                          <span class="controls-a-line" style="margin-left:50px">
                     选择模板
                   </span>

                          <span class="controls-a-line">
                    <el-select
                            class="oneControlsLong"
                            placeholder="请选择模板"
                            v-model="templateSelected">
                      <el-option
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                              v-for="item in templateList"
                      ></el-option>
                   </el-select>
                  </span>
                      </div>
                  </el-row>

                  <el-row>
                      <div style="margin-top:10px">
                     <span class="controls-a-line">
                       名义本金金额(万）
                     </span>
                          <span class="controls-a-line">
                        <el-input-number
                                class="oneControls"
                                :controls="false"
                                v-model="irsccsForm.nominalCaptial"
                        >
                        </el-input-number>
                     </span>

                          <span class="controls-a-line">
                       币别
                     </span>
                          <span class="controls-a-line">
                        <el-select
                                class="oneControlsTiny"
                                v-model="irsccsForm.currencyType"
                                placeholder="请选择货币对">
                            <el-option
                                    v-for="item in currencyOption"
                                    :key="item.key"
                                    :label="item.label"
                                    :value="item.value"
                            ></el-option>
                        </el-select>
                     </span>
                          <span class="controls-a-line">
                       所在地
                     </span>
                          <span class="controls-a-line">
                        <el-select
                                class="oneControlsTiny"
                                v-model="irsccsForm.tradeLocation"
                                placeholder="选择所在地">
                            <el-option
                                    v-for="item in tradeLocationOption"
                                    :key="item.key"
                                    :label="item.label"
                                    :value="item.value"
                            ></el-option>
                        </el-select>
                     </span>
                          <span class="controls-a-line">
                       交易日
                     </span>
                          <span class="controls-a-line">
                        <el-date-picker
                                class="oneControls"
                                placeholder="选择日期"
                                type="date"
                                v-model="irsccsForm.tradeDate">
                        </el-date-picker>
                     </span>
                          <span class="controls-a-line">
                       起息日
                     </span>
                          <span class="controls-a-line">
                        <el-date-picker
                                class="oneControls"
                                placeholder="选择日期"
                                type="date"
                                v-model="irsccsForm.interestDate">
                        </el-date-picker>
                     </span>
                          <span class="controls-a-line">
                       到期日
                     </span>
                          <span class="controls-a-line">
                        <el-date-picker
                                class="oneControls"
                                placeholder="选择日期"
                                type="date"
                                v-model="irsccsForm.dueDate">
                        </el-date-picker>
                     </span>
                          <span class="controls-a-line">
                       评估日
                     </span>
                          <span class="controls-a-line">
                        <el-date-picker
                                class="oneControls"
                                placeholder="选择日期"
                                type="date"
                                v-model="irsccsForm.evaluationDate">
                        </el-date-picker>
                     </span>
                      </div>
                  </el-row>
                      <div style="margin:50px 5px 0px 5px">
                          <el-tabs v-model="activeTabName" style="width:100%">
                              <el-tab-pane label="交易要素输入" name="交易要素输入">
                                  <div class='box-card' style="height:500px">
                                      <el-row>
                                      <div >
                                          <span>名义本金重置</span>
                                      </div>
                                      </el-row>
                                      <el-row>
                                      <div style="margin-top:20px">
                                          <el-col :span="3">
                                              <div class="left-col1"> 名义本金重置</div>
                                              <div class="left-col1"> 重置状态</div>
                                          </el-col>
                                          <el-col :span="5">
                                              <div>
                                              <el-select class="oneControlsLong"
                                                         placeholder="请选择"
                                                         v-model="irsccsForm.resetNominalCapital">
                                                  <el-option
                                                          :key="item.key"
                                                          :label="item.label"
                                                          :value="item.value"
                                                          v-for="item in resetNominalCapitalOption"
                                                  ></el-option>
                                              </el-select>
                                              </div>
                                              <div>
                                                  <el-input-number
                                                          class="oneControlsLong"
                                                          :controls="false"
                                                          v-model="irsccsForm.nominalCapitalResetFreq"
                                                  >
                                                  </el-input-number>
                                              </div>
                                          </el-col>
                                          <el-col :span="3">
                                              <div class="left-col1"> 首次名义本金重置日</div>
                                              <div class="left-col1"> 名义本金重置比率(%)</div>
                                          </el-col>
                                          <el-col :span="5">
                                              <div>
                                                  <el-date-picker
                                                          class="oneControlsLong"
                                                          placeholder="选择日期"
                                                          type="date"
                                                          v-model="irsccsForm.firstNominalCapitalResetDate">
                                                  </el-date-picker>
                                              </div>
                                              <div>
                                                  <el-input-number
                                                          class="oneControlsLong"
                                                          :controls="false"
                                                          v-model="irsccsForm.nominalCapitalResetRatio"
                                                  >
                                                  </el-input-number>
                                              </div>
                                          </el-col>
                                          <el-col :span="3">
                                              <div class="left-col1"> 名义本金重置频率</div>
                                              <div class="left-col1"> 名义本金重置金额(万)</div>
                                          </el-col>
                                          <el-col :span="5">
                                              <div>
                                                  <el-input-number
                                                          class="oneControlsLong"
                                                          :controls="false"
                                                          v-model="irsccsForm.nominalCapitalResetFreq"
                                                  >
                                                  </el-input-number>
                                              </div>
                                              <div>
                                                  <el-input-number
                                                          class="oneControlsLong"
                                                          :controls="false"
                                                          v-model="irsccsForm.nominalCapitalResetAmount"
                                                  >
                                                  </el-input-number>
                                              </div>

                                          </el-col>
                                      </div>
                                      </el-row>
                                      <el-row>
                                          <div style="margin-top:50px">
                                          <el-col :span="12">
                                              <el-col :span="12">
                                                  <el-col :span="6">
                                                      <div class="left-col2">本方</div>
                                                      <div class="left-col2"> 利率设置</div>
                                                      <div class="left-col2"> 固定利率（%）</div>
                                                      <div class="left-col2"> 支付频率</div>
                                                      <div class="left-col2"> 计息基准</div>
                                                      <div class="left-col2"> 计息调整</div>
                                                      <div class="left-col2"> 重置日调整</div>
                                                      <div class="left-col2"> 首期起息日</div>
                                                  </el-col>
                                                  <el-col :span="18">
                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.roleSelf">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in tradeDirectionOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>
                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.interestSetting">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in interestSettingOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>
                                                      <div>
                                                          <el-input-number
                                                                  class="oneControlsLong"
                                                                  :controls="false"
                                                                  v-model="irsccsForm.fixInterestRate"
                                                          >
                                                          </el-input-number>
                                                      </div>
                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.payFreq">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in payFreqOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>
                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.interestBaseline">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in interestBaselineOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>
                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.interestAdjustment">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in interestAdjustmentOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>
                                                      <div>
                                                          <el-col :span="12">
                                                              <el-select class="oneControls"
                                                                         placeholder="请选择"
                                                                         v-model="irsccsForm.resetDateAdjustment">
                                                                  <el-option
                                                                          :key="item.key"
                                                                          :label="item.label"
                                                                          :value="item.value"
                                                                          v-for="item in resetDateAdjustmentOption"
                                                                  ></el-option>
                                                              </el-select>
                                                          </el-col>
                                                          <el-col :span="12">
                                                              <span style="margin-right:5px">前</span>
                                                              <el-input-number
                                                                      :controls="false"
                                                                      v-model="irsccsForm.resetDateAdjustmentDate"
                                                                      class="oneControlsVeryTiny"
                                                              >
                                                              </el-input-number>
                                                          </el-col>
                                                      </div>
                                                      <div>
                                                          <el-date-picker
                                                                  class="oneControlsLong"
                                                                  placeholder="选择日期"
                                                                  type="date"
                                                                  v-model="irsccsForm.firstInterestDate">
                                                          </el-date-picker>
                                                      </div>
                                                  </el-col>
                                              </el-col>

                                              <el-col :span="12">
                                                  <div class="left-col2" style="color:transparent">a</div>
                                                  <div class="left-col2" style="color:transparent">a</div>
                                                  <div class="left-col2" style="color:transparent">a</div>
                                                  <el-col :span="6">
                                                      <div class="left-col2">重置频率</div>
                                                      <div class="left-col2"> 计息方式</div>
                                                      <div class="left-col2"> 支付日调整</div>
                                                      <div class="left-col2"> 首次利率确定日</div>
                                                      <div class="left-col2"> 期末畸零天期</div>
                                                  </el-col>
                                                  <el-col :span="18">
                                                  <div>
                                                      <el-select class="oneControlsLong"
                                                                 placeholder="请选择"
                                                                 v-model="irsccsForm.resetFreq">
                                                          <el-option
                                                                  :key="item.key"
                                                                  :label="item.label"
                                                                  :value="item.value"
                                                                  v-for="item in resetFreqOption"
                                                          ></el-option>
                                                      </el-select>
                                                  </div>
                                                  <div>
                                                      <el-select class="oneControlsLong"
                                                                 placeholder="请选择"
                                                                 v-model="irsccsForm.interestType">
                                                          <el-option
                                                                  :key="item.key"
                                                                  :label="item.label"
                                                                  :value="item.value"
                                                                  v-for="item in interestTypeOption"
                                                          ></el-option>
                                                      </el-select>
                                                  </div>
                                                  <div>
                                                      <el-select class="oneControlsLong"
                                                                 placeholder="请选择"
                                                                 v-model="irsccsForm.actualPayDateAdj">
                                                          <el-option
                                                                  :key="item.key"
                                                                  :label="item.label"
                                                                  :value="item.value"
                                                                  v-for="item in actualPayDateAdjOption"
                                                          ></el-option>
                                                      </el-select>
                                                  </div>

                                                  <div>
                                                      <el-date-picker
                                                              class="oneControlsLong"
                                                              placeholder="选择日期"
                                                              type="date"
                                                              v-model="irsccsForm.firstDeterminedInterestDate">
                                                      </el-date-picker>
                                                  </div>
                                                  <div>
                                                      <el-select class="oneControlsLong"
                                                                 placeholder="请选择"
                                                                 v-model="irsccsForm.endPeriodSpan">
                                                          <el-option
                                                                  :key="item.key"
                                                                  :label="item.label"
                                                                  :value="item.value"
                                                                  v-for="item in endPeriodSpanOption"
                                                          ></el-option>
                                                      </el-select>
                                                  </div>
                                                  </el-col>
                                              </el-col>
                                          </el-col>

                                          <el-col :span="12">
                                              <el-col :span="12">
                                                  <el-col :span="6">
                                                      <div class="left-col2">本方</div>
                                                      <div class="left-col2"> 利率设置</div>
                                                      <div class="left-col2"> 浮动方向</div>
                                                      <div class="left-col2"> 支付频率</div>
                                                      <div class="left-col2"> 计息基准</div>
                                                      <div class="left-col2"> 计息调整</div>
                                                      <div class="left-col2"> 重置日调整</div>
                                                      <div class="left-col2"> 首期起息日</div>
                                                  </el-col>
                                                  <el-col :span="18">
                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.roleSelf2">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in tradeDirectionOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>
                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.interestSetting2">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in interestSettingOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>


                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.floatingInterestDir2">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in floatingInterestDirOption"
                                                              ></el-option>
                                                          </el-select>                                                       .

                                                      </div>


                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.payFreq2">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in payFreqOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>
                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.interestBaseline2">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in interestBaselineOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>
                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.interestAdjustment2">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in interestAdjustmentOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>
                                                      <div>
                                                          <el-col :span="12">
                                                              <el-select class="oneControls"
                                                                         placeholder="请选择"
                                                                         v-model="irsccsForm.resetDateAdjustment2">
                                                                  <el-option
                                                                          :key="item.key"
                                                                          :label="item.label"
                                                                          :value="item.value"
                                                                          v-for="item in resetDateAdjustmentOption"
                                                                  ></el-option>
                                                              </el-select>
                                                          </el-col>
                                                          <el-col :span="12">
                                                              <span style="margin-right:5px">前</span>
                                                              <el-input-number
                                                                      :controls="false"
                                                                      v-model="irsccsForm.resetDateAdjustmentDate2"
                                                                      class="oneControlsVeryTiny"
                                                              >
                                                              </el-input-number>
                                                          </el-col>
                                                      </div>
                                                      <div>
                                                          <el-date-picker
                                                                  class="oneControlsLong"
                                                                  placeholder="选择日期"
                                                                  type="date"
                                                                  v-model="irsccsForm.firstInterestDate2">
                                                          </el-date-picker>
                                                      </div>
                                                  </el-col>
                                              </el-col>

                                              <el-col :span="12">
                                                  <div class="left-col2" style="color:transparent">a</div>
                                                  <div class="left-col2" style="color:transparent">a</div>
                                                  <el-col :span="6">
                                                      <div class="left-col2"> 浮动利率(%)</div>
                                                      <div class="left-col2"> 重置频率</div>
                                                      <div class="left-col2"> 计息方式</div>
                                                      <div class="left-col2"> 支付日调整</div>
                                                      <div class="left-col2"> 首次利率确定日</div>
                                                      <div class="left-col2"> 期末畸零天期</div>
                                                  </el-col>
                                                  <el-col :span="18">


                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.floatingInterestRate2">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in floatingInterestRateOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>


                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.resetFreq2">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in resetFreqOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>
                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.interestType2">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in interestTypeOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>
                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.actualPayDateAdj2">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in actualPayDateAdjOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>

                                                      <div>
                                                          <el-date-picker
                                                                  class="oneControlsLong"
                                                                  placeholder="选择日期"
                                                                  type="date"
                                                                  v-model="irsccsForm.firstDeterminedInterestDate2">
                                                          </el-date-picker>
                                                      </div>
                                                      <div>
                                                          <el-select class="oneControlsLong"
                                                                     placeholder="请选择"
                                                                     v-model="irsccsForm.endPeriodSpan2">
                                                              <el-option
                                                                      :key="item.key"
                                                                      :label="item.label"
                                                                      :value="item.value"
                                                                      v-for="item in endPeriodSpanOption"
                                                              ></el-option>
                                                          </el-select>
                                                      </div>
                                                  </el-col>
                                              </el-col>

                                          </el-col>
                                        </div>
                                      </el-row>
                                  </div>
                              </el-tab-pane>
                              <el-tab-pane label="折现零息曲线">折现零息曲线</el-tab-pane>
                              <el-tab-pane label="远期推导曲线">角色管理</el-tab-pane>
                              <el-tab-pane label="现金流">定时任务补偿</el-tab-pane>
                              <el-tab-pane label="情景分析">现金流</el-tab-pane>
                          </el-tabs>
                      </div>
                  <el-row>

                      <div style="margin-top:50px">
                          <el-col :span="5"><div style="color:transparent">a</div></el-col>
                          <el-select class="controls-a-line"
                                     placeholder="请选择"
                                     v-model="irsccsForm.calculationMethod">
                              <el-option
                                      :key="item.key"
                                      :label="item.label"
                                      :value="item.value"
                                      v-for="item in calculationMethodOption"
                              ></el-option>
                          </el-select>
                          <el-button class="controls-a-line">试算</el-button>
                          <span class="controls-a-line">NPV</span>
                          <el-input-number
                                  :controls="false"
                                  v-model="irsccsForm.resetDateAdjustmentDate2"
                                  class="controls-a-line"
                          >
                          </el-input-number>
                          <span class="controls-a-line">DV</span>
                          <el-input-number
                                  :controls="false"
                                  v-model="irsccsForm.resetDateAdjustmentDate2"
                                  class="controls-a-line"
                          >
                          </el-input-number>
                      </div>

                  </el-row>

               <el-row>
                   <div style="margin-top:50px">
                   <el-col :span="8">
                       <div class="left-col1">货币1端: 本方</div>
                       <div>
                            <div>
                                <el-col :span="6">
                                    <div class="left-col1">NP1:</div>
                                    <div class="left-col1">DV01:</div>
                                </el-col>
                                <el-col :span="18" class="oneControlsLong" >
                                    <el-input-number
                                            :controls="false"
                                            v-model="irsccsForm.NPVCurrency1End"
                                            class="oneControls"
                                    >
                                    </el-input-number>
                                    <el-input-number
                                            :controls="false"
                                            v-model="irsccsForm.DVCurrency1End"
                                            class="oneControls"
                                    >
                                    </el-input-number>
                                </el-col>
                            </div>
                       </div>
                   </el-col>

                   <el-col :span="8">
                       <div class="left-col1">货币2端: 本方</div>
                       <div>
                           <div>
                               <el-col :span="6">
                                   <div class="left-col1">NP1:</div>
                                   <div class="left-col1">DV01:</div>
                               </el-col>
                               <el-col :span="18" class="oneControlsLong" >
                                   <el-input-number
                                           :controls="false"
                                           v-model="irsccsForm.NPVCurrency2End"
                                           class="oneControls"
                                   >
                                   </el-input-number>
                                   <el-input-number
                                           :controls="false"
                                           v-model="irsccsForm.DVCurrency2End"
                                           class="oneControls"
                                   >
                                   </el-input-number>
                               </el-col>
                           </div>
                       </div>
                   </el-col>

                   <el-col :span="8">
                       <div class="left-col1">汇总</div>
                       <div>
                           <div>
                               <el-col :span="6">
                                   <div class="left-col1">NP1:</div>
                                   <div class="left-col1">DV01:</div>
                               </el-col>
                               <el-col :span="18" class="oneControlsLong" >
                                   <el-input-number
                                           :controls="false"
                                           v-model="irsccsForm.NPVCurrencyAll"
                                           class="oneControls"
                                   >
                                   </el-input-number>
                                   <el-input-number
                                           :controls="false"
                                           v-model="irsccsForm.DVCurrencyAll"
                                           class="oneControls"
                                   >
                                   </el-input-number>
                               </el-col>
                           </div>
                       </div>
                   </el-col>
                   </div>
               </el-row>








              </div>
            </el-col>
        </div>
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

  export default {
    components: {
      Calendar
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
          rowHeight: 32.5,
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

        irsccsForm:{
          nominalCaptial:'',
          currencyType:'人民币',
          tradeLocation:'中国',
          tradeDate: Date.now(),
          interestDate:Date.now(),
          dueDate:Date.now(),
          evaluationDate:Date.now(),
          resetNominalCapital:'否',
          firstNominalCapitalResetDate:Date.now(),
          nominalCapitalResetFreq:'0.1',
          nominalCapitalResetStatus:'正常',
          nominalCapitalResetRatio:'10',
          nominalCapitalResetAmount:'1000',
          roleSelf:'收取',
          interestSetting:'固定利率',
          fixInterestRate:'4.1',
          payFreq:'1Y',
          interestBaseline:'ACT/365',
          interestAdjustment:'实际天数调整',
          resetDateAdjustment:'本期初',
          resetDateAdjustmentDate:'1',
          firstInterestDate:Date.now(),
          resetFreq:'1D',
          interestType:'单利',
          actualPayDateAdj:'经调整的下一营业日',
          firstDeterminedInterestDate:Date.now(),
          endPeriodSpan:'自成一期',
          roleSelf2:'支付',
          interestSetting2:'浮动利率',
          floatingInterestDir2:'正浮动',
          payFreq2:'1Y',
          interestBaseline2:'ACT/365',
          interestAdjustment2:'实际天数调整',
          resetDateAdjustment2:'本期初',
          resetDateAdjustmentDate2:'1',
          firstInterestDate2:Date.now(),
          resetFreq2:'1D',
          interestType2:'单利',
          actualPayDateAdj2:'经调整的下一营业日',
          firstDeterminedInterestDate2:Date.now(),
          endPeriodSpan2:'自成一期',
          calculationMethod:'本币交易法'
        },
        irsccsResultForm:{
          NPV: '1',
          DV: '01',
          NPVCurrency1End: '1',
          DVCurrency1End: '2',
          NPVCurrency2End: '3',
          DVCurrency2End: '4',
          NPVCurrencyAll: '5',
          DVCurrencyAll: '6',
        }


      }
    },
    mounted () {
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
    .form-num {
        width: 220px;
    }
    .oneControlsLong {
        width: 250px;
    }
    .oneControls {
        width: 135px;
    }
    .oneControlTiny {
        width: 80px;
    }
    .left-col1{
        height:40px;
        line-height: 40px;
        vertical-align: center;
        margin-left:50px;
    }
    .left-col2{
        height:40px;
        line-height: 40px;
        vertical-align: center;
    }
    .oneControlsVeryTiny{
        width:60px;
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
