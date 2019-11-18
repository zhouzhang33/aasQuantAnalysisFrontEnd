<template xmlns:el-col="http://www.w3.org/1999/html">
  <d2-container :filename="filename" type="full" class="page" better-scroll>
    <d2-grid-layout
            v-bind="layout"
            @layout-updated="layoutUpdatedHandler">
      <div>
        <el-col :span="6">
          <div class='box-card' style="height:890px">
            <el-row>
<<<<<<< HEAD
              <div class='box-card' style="height:790px">
                <div class="box-card-title">
                  查询条件
                </div>
                <el-row>
                  <el-col :span="8">
                      <div class="left-col1-attr">投组</div>
                      <div class="left-col2-attr">货币</div>
                      <div class="left-col1-attr">起始日</div>
                      <div class="left-col2-attr">结束日</div>
                      <div class="left-col1-attr">交易品种</div>
                      <div class="left-col2-attr">展示方式</div>
                    </el-col>
                  <el-col :span="16">
                      <div class="left-col1-attr">
                        <el-select
                                filterable
                                allow-create
                                default-first-option
                                class="oneContorls-attr"
                                placeholder="请选择">
                          <el-option
                                  v-for="item in touzuOptions"
                                  :key="item.key"
                                  :label="item.label"
                                  :value="item.value"
                          ></el-option>
                        </el-select>
                      </div>
                      <div class="left-col2-attr">
                        <el-select
                                filterable
                                allow-create
                                default-first-option
                                class="oneControls-attr"
                                placeholder="请选择">
                          <el-option
                                  v-for="item in currencyOptions"
                                  :key="item.key"
                                  :label="item.label"
                                  :value="item.value"
                          ></el-option>
                        </el-select>
                      </div>
                      <div class="left-col1-attr">
                        <el-date-picker
                                class="oneControls-attr"
                                placeholder="选择日期"
                                type="date">
                        </el-date-picker>
                      </div>
                      <div class="left-col2-attr">
                        <el-date-picker
                                class="oneControls-attr"
                                placeholder="选择日期"
                                type="date"
                        >
                        </el-date-picker>
                      </div>
                      <div class="left-col1-attr">
                        <el-select
                                filterable
                                allow-create
                                default-first-option
                                class="oneContorls-attr"
                                v-model="productStatus.isUsed"
                                placeholder="请选择">
                          <el-option
                                  v-for="item in productTypes"
                                  :key="item.key"
                                  :label="item.label"
                                  :value="item.value"
                          ></el-option>
                        </el-select>
                      </div>
                      <div class="left-col2-attr">
                        <el-select
                                filterable
                                allow-create
                                default-first-option
                                class="oneContorls-attr"
                                v-model="productStatus.htDisplay"
                                placeholder="请选择">
                          <el-option
                                  v-for="item in displayOptions"
                                  :key="item.key"
                                  :label="item.label"
                                  :value="item.value"
                          ></el-option>
                        </el-select>
                      </div>
                    </el-col>
                </el-row>
=======
              <div class="box-card-title">
                查询条件
>>>>>>> branch 'master' of http://114.67.93.212:8721/gitlab/aas/aas.git
              </div>
<<<<<<< HEAD
            </el-row>
            <el-row>
              <el-col span="12">
                <el-button type="info" class="box-card" @click="calPLResults">查询</el-button>
              </el-col>
              <el-col span="12">
                <el-button type="info" class="box-card" @click="clearPLResults">清空</el-button>
              </el-col>
            </el-row>
          </el-col>

          <el-col :span="18">
            <el-row>
              <div style="margin-top:10px">
                <el-col :span="24">
                  <div style="padding:30px">
                    <div class="box-card-title" v-show="productStatus.htDisplay === '损失分布数据表'">
                      <span>损益分布数据表</span>
                    </div>
                    <div class="box-card" style="height:790px" v-show="displayData === false && productStatus.htDisplay === '损失分布数据表'">
                      <el-table
                              :border="true"
                              :data="IniGeneralData"
                              :cell-style="rowstyle"
                              :header-cell-style="headerstyle"
                              @select=""
                              style="width:100%"
                      >
                        <el-table-column
                                fixed
                                type="selection"
                                width="80px"
                        >
                        </el-table-column>
                        <el-table-column
                                label="投组群组"
                                prop="投组群组"
                        >
                        </el-table-column>
                        <el-table-column
                                label="总损益"
                                prop="总损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="已实现损益"
                                prop="已实现损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="浮动盈亏"
                                prop="浮动盈亏"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日日损益"
                                prop="结束日日损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日月损益"
                                prop="结束日月损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日年损益"
                                prop="结束日年损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日已实现损益"
                                prop="结束日已实现损益"
                        >
                        </el-table-column>
                      </el-table>
                    </div>
                    <div class="box-card" style="height:790px" v-show="productStatus.isUsed==='' && productStatus.htDisplay === '损失分布数据表' && displayData === true">
                      <el-table
                              :border="true"
                              :data="IniGeneralData"
                              :cell-style="rowstyle"
                              :header-cell-style="headerstyle"
                              style="width:100%"
                      >
                        <el-table-column
                                fixed
                                type="selection"
                                width="80px"
                        >
                        </el-table-column>
                        <el-table-column
                                label="投组群组"
                                prop="投组群组"
                        >
                        </el-table-column>
                        <el-table-column
                                label="总损益"
                                prop="总损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="已实现损益"
                                prop="已实现损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="浮动盈亏"
                                prop="浮动盈亏"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日日损益"
                                prop="结束日日损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日月损益"
                                prop="结束日月损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日年损益"
                                prop="结束日年损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日已实现损益"
                                prop="结束日已实现损益"
                        >
                        </el-table-column>
                      </el-table>
                    </div>
                    <div class="box-card" style="height:790px" v-show="productStatus.isUsed==='FXFWDSwap' && productStatus.htDisplay === '损失分布数据表'&& displayData === true">
                      <el-table
                              :border="true"
                              :data="GeneralDataSwap"
                              :cell-style="rowstyle"
                              :header-cell-style="headerstyle"
                              style="width:100%"
                              @select="interestialogTableVisible=true"
                              height="790"
                      >
                        <el-table-column
                                fixed
                                type="selection"
                                width="80px"
                        >
                        </el-table-column>
                        <el-table-column
                                label="投组群组"
                                prop="投组群组"
                        >
                        </el-table-column>
                        <el-table-column
                                label="总损益"
                                prop="总损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="已实现损益"
                                prop="已实现损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="浮动盈亏"
                                prop="浮动盈亏"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日日损益"
                                prop="结束日日损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日月损益"
                                prop="结束日月损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日年损益"
                                prop="结束日年损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日已实现损益"
                                prop="结束日已实现损益"
                        >
                        </el-table-column>
                      </el-table>
                    </div>
                    <div class="box-card" style="height:790px" v-show="productStatus.isUsed==='FXEuropeanOption' && productStatus.htDisplay === '损失分布数据表'&& displayData === true">
                      <el-table
                              :border="true"
                              :data="GeneralDataEuroOpt"
                              :cell-style="rowstyle"
                              :header-cell-style="headerstyle"
                              style="width:100%"
                              @select="interestialogTableVisible=true"
                              height="790"
                      >
                        <el-table-column
                                fixed
                                type="selection"
                                width="80px"
                        >
                        </el-table-column>
                        <el-table-column
                                label="投组群组"
                                prop="投组群组"
                        >
                        </el-table-column>
                        <el-table-column
                                label="总损益"
                                prop="总损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="已实现损益"
                                prop="已实现损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="浮动盈亏"
                                prop="浮动盈亏"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日日损益"
                                prop="结束日日损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日月损益"
                                prop="结束日月损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日年损益"
                                prop="结束日年损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日已实现损益"
                                prop="结束日已实现损益"
                        >
                        </el-table-column>
                      </el-table>
                    </div>
                    <div class="box-card" style="height:790px" v-show="productStatus.isUsed==='IRSCCS' && productStatus.htDisplay === '损失分布数据表'&& displayData === true">
                      <el-table
                              :border="true"
                              :data="GeneralDataIRSCCS"
                              :cell-style="rowstyle"
                              :header-cell-style="headerstyle"
                              style="width:100%"
                              @select="interestialogTableVisible=true"
                              height="790"
                      >
                        <el-table-column
                                fixed
                                type="selection"
                                width="80px"
                        >
                        </el-table-column>
                        <el-table-column
                                label="投组群组"
                                prop="投组群组"
                        >
                        </el-table-column>
                        <el-table-column
                                label="总损益"
                                prop="总损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="已实现损益"
                                prop="已实现损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="浮动盈亏"
                                prop="浮动盈亏"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日日损益"
                                prop="结束日日损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日月损益"
                                prop="结束日月损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日年损益"
                                prop="结束日年损益"
                        >
                        </el-table-column>
                        <el-table-column
                                label="结束日已实现损益"
                                prop="结束日已实现损益"
                        >
                        </el-table-column>
                      </el-table>
                    </div>
=======
                <el-col :span="8">
                  <div class="left-col1-attr">投组</div>
                  <div class="left-col2-attr">货币</div>
                  <div class="left-col1-attr">起始日</div>
                  <div class="left-col2-attr">结束日</div>
                  <div class="left-col1-attr">交易品种</div>
                  <div class="left-col2-attr">展示方式</div>
                </el-col>
                <el-col :span="16">
                  <div class="left-col1-attr">
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneControls-attr"
                            v-model="productStatus.investPair"
                            placeholder="请选择">
                      <el-option
                              v-for="item in touzuOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col2-attr">
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneControls-attr"
                            v-model="productStatus.currency"
                            placeholder="请选择">
                      <el-option
                              v-for="item in currencyOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col1-attr">
                    <el-date-picker
                            class="oneControls-attr"
                            placeholder="选择日期"
                            v-model="productStatus.startDate"
                            type="date">
                    </el-date-picker>
                  </div>
                  <div class="left-col2-attr">
                    <el-date-picker
                            class="oneControls-attr"
                            placeholder="选择日期"
                            v-model="productStatus.endDate"
                            type="date"
                    >
                    </el-date-picker>
                  </div>
                  <div class="left-col1-attr">
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneControls-attr"
                            v-model="productStatus.isUsed"
                            placeholder="请选择">
                      <el-option
                              v-for="item in productTypes"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="left-col2-attr">
                    <el-select
                            filterable
                            allow-create
                            default-first-option
                            class="oneControls-attr"
                            v-model="productStatus.htDisplay"
                            placeholder="请选择">
                      <el-option
                              v-for="item in displayOptions"
                              :key="item.key"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
>>>>>>> branch 'master' of http://114.67.93.212:8721/gitlab/aas/aas.git
                  </div>
                </el-col>
            </el-row>
            <el-row>
<<<<<<< HEAD
              <div v-show="productStatus.htDisplay != ''">
                <el-col span="8">
                  <div v-show="productStatus.isUsed === 'FXFWDSwap'">
                    <el-button type="info" class="box-card-attr" @click="showDPPartSWAP">结束日损益占比分析</el-button>
                  </div>
                  <div v-show="productStatus.isUsed === 'FXEuropeanOption'">
                    <el-button type="info" class="box-card-attr" @click="showDPPartEUROPT">结束日损益占比分析</el-button>
                  </div>
                  <div v-show="productStatus.isUsed === 'IRSCCS'">
                    <el-button type="info" class="box-card-attr" @click="showDPPartIRS">结束日损益占比分析</el-button>
                  </div>
                  <div v-show="productStatus.isUsed === 'Bond'">
                    <el-button type="info" class="box-card-attr" @click="showDPPartBond">结束日损益占比分析</el-button>
                  </div>
                  <div v-show="productStatus.isUsed === 'Swaption'">
                    <el-button type="info" class="box-card-attr" @click="showDPPartSWPT">结束日损益占比分析</el-button>
                  </div>
                  <div v-show="productStatus.isUsed === 'FXDigitalOption'">
                    <el-button type="info" class="box-card-attr" @click="showDPPartDigital">结束日损益占比分析</el-button>
                  </div>
=======
              <div class="my-block" style="margin-top:50px">
<!--                <el-col :span="4">-->
<!--                  <div style="color:transparent">a</div>-->
<!--                </el-col>-->
                <el-col :span="12">
                  <el-button type="info" class="oneControls-attr" @click="calPLResults">查询</el-button>
>>>>>>> branch 'master' of http://114.67.93.212:8721/gitlab/aas/aas.git
                </el-col>
                <el-col :span="12">
                  <el-button type="info" class="oneControls-attr" @click="clearPLResults">清空</el-button>
                </el-col>
              </div>
            </el-row>
          </div>
        </el-col>

          <el-col :span="18">
            <div class="box-card" style="height:890px">
              <el-row>
                <div>
                   <div style="padding:30px">
                      <div class="box-card-title-white" v-show="productStatus.htDisplay === '损失分布数据表'">
                        <span>损益分布数据表</span>
                      </div>
                      <div class="box-card" style="height:790px" v-show="displayData === false && productStatus.htDisplay === '损失分布数据表'">
                        <el-table
                                :border="true"
                                :data="IniGeneralData"
                                :cell-style="rowstyle"
                                :header-cell-style="headerstyle"
                                @select=""
                                style="width:100%"
                        >
                          <el-table-column
                                  fixed
                                  type="selection"
                                  width="80px"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="投组群组"
                                  prop="投组群组"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="总损益"
                                  prop="总损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="已实现损益"
                                  prop="已实现损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="浮动盈亏"
                                  prop="浮动盈亏"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日日损益"
                                  prop="结束日日损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日月损益"
                                  prop="结束日月损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日年损益"
                                  prop="结束日年损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日已实现损益"
                                  prop="结束日已实现损益"
                          >
                          </el-table-column>
                        </el-table>
                      </div>
                      <div class="box-card" style="height:790px" v-show="productStatus.isUsed==='' && productStatus.htDisplay === '损失分布数据表' && displayData === true">
                        <el-table
                                :border="true"
                                :data="IniGeneralData"
                                :cell-style="rowstyle"
                                :header-cell-style="headerstyle"
                                style="width:100%"
                        >
                          <el-table-column
                                  fixed
                                  type="selection"
                                  width="80px"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="投组群组"
                                  prop="投组群组"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="总损益"
                                  prop="总损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="已实现损益"
                                  prop="已实现损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="浮动盈亏"
                                  prop="浮动盈亏"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日日损益"
                                  prop="结束日日损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日月损益"
                                  prop="结束日月损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日年损益"
                                  prop="结束日年损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日已实现损益"
                                  prop="结束日已实现损益"
                          >
                          </el-table-column>
                        </el-table>
                      </div>
                      <div class="box-card" style="height:790px" v-show="productStatus.isUsed==='FXFWDSwap' && productStatus.htDisplay === '损失分布数据表'&& displayData === true">
                        <el-table
                                :border="true"
                                :data="GeneralDataSwap"
                                :cell-style="rowstyle"
                                :header-cell-style="headerstyle"
                                style="width:100%"
                                @select="interestialogTableVisible=true"
                                height="790"
                        >
                          <el-table-column
                                  fixed
                                  type="selection"
                                  width="80px"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="投组群组"
                                  prop="投组群组"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="总损益"
                                  prop="总损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="已实现损益"
                                  prop="已实现损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="浮动盈亏"
                                  prop="浮动盈亏"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日日损益"
                                  prop="结束日日损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日月损益"
                                  prop="结束日月损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日年损益"
                                  prop="结束日年损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日已实现损益"
                                  prop="结束日已实现损益"
                          >
                          </el-table-column>
                        </el-table>
                      </div>
                      <div class="box-card" style="height:790px" v-show="productStatus.isUsed==='FXEuropeanOption' && productStatus.htDisplay === '损失分布数据表'&& displayData === true">
                        <el-table
                                :border="true"
                                :data="GeneralDataEuroOpt"
                                :cell-style="rowstyle"
                                :header-cell-style="headerstyle"
                                style="width:100%"
                                @select="interestialogTableVisible=true"
                                height="790"
                        >
                          <el-table-column
                                  fixed
                                  type="selection"
                                  width="80px"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="投组群组"
                                  prop="投组群组"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="总损益"
                                  prop="总损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="已实现损益"
                                  prop="已实现损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="浮动盈亏"
                                  prop="浮动盈亏"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日日损益"
                                  prop="结束日日损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日月损益"
                                  prop="结束日月损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日年损益"
                                  prop="结束日年损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日已实现损益"
                                  prop="结束日已实现损益"
                          >
                          </el-table-column>
                        </el-table>
                      </div>
                      <div class="box-card" style="height:790px" v-show="productStatus.isUsed==='IRSCCS' && productStatus.htDisplay === '损失分布数据表'&& displayData === true">
                        <el-table
                                :border="true"
                                :data="GeneralDataIRSCCS"
                                :cell-style="rowstyle"
                                :header-cell-style="headerstyle"
                                style="width:100%"
                                @select="interestialogTableVisible=true"
                                height="790"
                        >
                          <el-table-column
                                  fixed
                                  type="selection"
                                  width="80px"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="投组群组"
                                  prop="投组群组"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="总损益"
                                  prop="总损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="已实现损益"
                                  prop="已实现损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="浮动盈亏"
                                  prop="浮动盈亏"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日日损益"
                                  prop="结束日日损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日月损益"
                                  prop="结束日月损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日年损益"
                                  prop="结束日年损益"
                          >
                          </el-table-column>
                          <el-table-column
                                  label="结束日已实现损益"
                                  prop="结束日已实现损益"
                          >
                          </el-table-column>
                        </el-table>
                      </div>
                    </div>
                </div>
              </el-row>
              <el-row>
                <div v-show="productStatus.htDisplay != ''">
                  <div class="my-block" style="margin-left:50px">
                    <el-col :span="8">
                      <div v-show="productStatus.isUsed === 'FXFWDSwap'">
                        <el-button type="info" class="box-card-attr" @click="showDPPartSWAP">结束日损益占比分析</el-button>
                      </div>
                      <div v-show="productStatus.isUsed === 'FXEuropeanOption'">
                        <el-button type="info" class="box-card-attr" @click="showDPPartEUROPT">结束日损益占比分析</el-button>
                      </div>
                      <div v-show="productStatus.isUsed === 'IRSCCS'">
                        <el-button type="info" class="box-card-attr" @click="showDPPartIRS">结束日损益占比分析</el-button>
                      </div>
                      <div v-show="productStatus.isUsed === 'Bond'">
                        <el-button type="info" class="box-card-attr" @click="showDPPartBond">结束日损益占比分析</el-button>
                      </div>
                      <div v-show="productStatus.isUsed === 'Swaption'">
                        <el-button type="info" class="box-card-attr" @click="showDPPartSWPT">结束日损益占比分析</el-button>
                      </div>
                      <div v-show="productStatus.isUsed === 'FXDigitalOption'">
                        <el-button type="info" class="box-card-attr" @click="showDPPartDigital">结束日损益占比分析</el-button>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <el-button type="info" class="box-card-attr" @click="showContinousDP">区间连续日损益分析</el-button>
                    </el-col>
                    <el-col :span="8">
                      <el-button type="info" class="box-card-attr" @click="showPNL">区间损益归因分析</el-button>
                    </el-col>
                  </div>
                </div>
              </el-row>
            </div>
          </el-col>
        </div>

        <div>
          <el-dialog
            title="结束日损益占比分析"
            :visible.sync="DPPartVisibleSWAP"
            :append-to-body="true"
            @opened="DPPartGraphOpenSWAP"
            width="70%"
          >
            <div class='box-card' style="height:100%">
              <div class="box-card-title"> {{ dialogNameDPPart }}</div>
            </div>
            <div v-if="DPPartSWAP===true">
              <div>
                <el-table
                        :border="true"
                        :data="DPPartDataSWAP"
                        :cell-style="rowstyle"
                        :header-cell-style="headerstyle"
                >
                  <el-table-column
                          label="数据类型"
                          prop="数据类型"
                  >
                  </el-table-column>
                  <el-table-column
                          label="外汇远掉期结束日损益"
                          prop="外汇远掉期结束日损益"
                  >
                  </el-table-column>
                  <el-table-column
                          label="结束日总损益"
                          prop="结束日总损益"
                  >
                  </el-table-column>
                </el-table>
              </div>
              <div class="box-card" style="height:500px">
                <div id="DPPartChartSWAP" style="margin:auto;width:700px;height:400px"></div>
              </div>
            </div>
          </el-dialog>
        </div>

        <div>
          <el-dialog
                  title="区间连续日损益分析"
                  :visible.sync="ContinousDPVisible"
                  :append-to-body="true"
                  @opened="ConDPGraphOpenSWAP1"
                  width="70%"
          >
            <div class='box-card' style="height:100%">
              <div class="box-card-title"> {{ dialogNameConDP }}</div>
            </div>
            <div v-if="ContinousDP===true">
              <div>
                <el-table
                        :border="true"
                        :data="ConDPSWAP1"
                        :cell-style="rowstyle"
                        :header-cell-style="headerstyle"
                >
                  <el-table-column
                          label="数据类型"
                          prop="数据类型"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-04"
                          prop="2019-11-04"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-05"
                          prop="2019-11-05"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-06"
                          prop="2019-11-06"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-07"
                          prop="2019-11-07"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-08"
                          prop="2019-11-08"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-09"
                          prop="2019-11-09"
                  >
                  </el-table-column>
                  <el-table-column
                          label="2019-11-10"
                          prop="2019-11-10"
                  >
                  </el-table-column>
                </el-table>
              </div>
              <div class="box-card" style="height:500px">
                <div id="ConDPChartSWAP1" style="margin:auto;width:700px;height:400px"></div>
              </div>
            </div>
          </el-dialog>
        </div>
        <div>
          <el-dialog
                  title="区间损益归因分析"
                  :visible.sync="PnlVisible"
                  :append-to-body="true"
                  width="70%"
          >
            <div class='box-card' style="height:100%">
              <div class="box-card-title"> {{ dialogNamePNL }}</div>
            </div>
            <div v-if="Pnl===true">
              <div>
                <el-table
                        :border="true"
                        :data="PNLSWAP1"
                        :cell-style="rowstyle"
                        :header-cell-style="headerstyle"
                >
                  <el-table-column
                          label="投组"
                          prop="投组"
                  >
                  </el-table-column>
                  <el-table-column
                          label="货币"
                          prop="货币"
                  >
                  </el-table-column>
                  <el-table-column
                          label="浮动盈亏"
                          prop="浮动盈亏"
                  >
                  </el-table-column>
                  <el-table-column
                          label="期限影响"
                          prop="期限影响"
                  >
                  </el-table-column>
                  <el-table-column
                          label="汇率影响"
                          prop="汇率影响"
                  >
                  </el-table-column>
                  <el-table-column
                          label="利率影响"
                          prop="利率影响"
                  >
                  </el-table-column>
                  <el-table-column
                          label="残差"
                          prop="残差"
                  >
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-dialog>
        </div>
<!--      </d2-grid-item>-->
    </d2-grid-layout>
  </d2-container>
</template>

<script>

import {
  intepolationTypeOptions,
  currencyOptions,
  productTypes,
  echartDPPartOptionSWAP,
  echartConPDSWAP1} from '../UIPara/UIPara'

import {displayOptions,
        touzuOptions} from './UIPara'
import echarts from 'echarts'
import Calendar from 'vue-calendar-component'

export default {
  components: {
    Calendar
  },
  data: function () {
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
        rowHeight: 30,
        isDraggable: false,
        isResizable: false,
        isMirrored: false,
        verticalCompact: true,
        margin: [2, 3],
        useCssTransforms: true
      },
      ContinousDPVisible:false,
      ContinousDP:false,
      DPPartVisibleSWAP:false,
      DPPartSWAP:false,
      DPPartVisibleEUROPT:false,
      DPPartEUROPT:false,
      DPPartVisibleIRS:false,
      DPPartIRS:false,
      DPPartVisibleBond:false,
      DPPartBond:false,
      DPPartVisibleSWPT:false,
      DPPartSWPT:false,
      DPPartVisibleDigital:false,
      DPPartDigital:false,
      PnlVisible:false,
      Pnl:false,
      showtable:true,
      displayData:false,
      touzuOptions:touzuOptions,
      currencyOptions:currencyOptions,
      productTypes:productTypes,
      displayOptions:displayOptions,
      echartDPPartOptionSWAP:echartDPPartOptionSWAP,
      echartConPDSWAP1:echartConPDSWAP1,
      currentRow: null,
      myechart:null,
      dialogNameDPPart:null,
      dialogNameConDP:null,
      dialogNamePNL:null,

    productStatus: {
        isUsed: '',
        htDisplay:'',
        investPair:'TRADING',
        currency:'人民币',
        startDate:Date.now(),
        endDate:Date.now(),
      },

      IniGeneralData:[
        {"投组群组":"","总损益":"","已实现损益":"","浮动盈亏":"","结束日日损益":"","结束日月损益":"","结束日年损益":"","结束日已实现损益":""},
      ],
      GeneralDataSwap:[
        {"投组群组":"FXSWAP-TRD-001","总损益":"65566990.15","已实现损益":"4390749.77","浮动盈亏":"61176240.38","结束日日损益":"9366712.88","结束日月损益":"281001386.37","结束日年损益":"16522881518.83","结束日已实现损益":"627249.97"},
        {"投组群组":"FXSWAP-TRD-002","总损益":"70035371.72","已实现损益":"11580806.34","浮动盈亏":"58454565.38","结束日日损益":"10005053.10","结束日月损益":"300151593.09","结束日年损益":"17648913673.87","结束日已实现损益":"1654400.91"},
        {"投组群组":"FXSWAP-TRD-003","总损益":"77966750.18","已实现损益":"21837973.58","浮动盈亏":"56128776.59","结束日日损益":"11138107.17","结束日月损益":"334143215.04","结束日年损益":"19647621044.36","结束日已实现损益":"3119710.51"},
        {"投组群组":"FXSWAP-TRD-004","总损益":"35783431.23","已实现损益":"4703604.52","浮动盈亏":"31079826.70","结束日日损益":"5111918.75","结束日月损益":"153357562.40","结束日年损益":"9017424669.02","结束日已实现损益":"671943.50"},
        {"投组群组":"FXSWAP-TRD-005","总损益":"62041950.52","已实现损益":"44724642.30","浮动盈亏":"17317308.22","结束日日损益":"8863135.79","结束日月损益":"265894073.66","结束日年损益":"15634571531.18","结束日已实现损益":"6389234.61"},
        {"投组群组":"FXSWAP-TRD-006","总损益":"57277275.18","已实现损益":"39891622.21","浮动盈亏":"17385652.97","结束日日损益":"8182467.88","结束日月损益":"245474036.47","结束日年损益":"14433873344.49","结束日已实现损益":"5698803.17"},
        {"投组群组":"FXSWAP-TRD-007","总损益":"56419491.47","已实现损益":"17311881.65","浮动盈亏":"39107609.82","结束日日损益":"8059927.35","结束日月损益":"241797820.57","结束日年损益":"14217711849.63","结束日已实现损益":"2473125.95"},
        {"投组群组":"FXSWAP-TRD-008","总损益":"22723439.79","已实现损益":"17074628.38","浮动盈亏":"5648811.41","结束日日损益":"3246205.68","结束日月损益":"97386170.55","结束日年损益":"5726306828.12","结束日已实现损益":"2439232.63"},
        {"投组群组":"FXSWAP-TRD-009","总损益":"83219605.29","已实现损益":"8439686.73","浮动盈亏":"74779918.56","结束日日损益":"11888515.04","结束日月损益":"356655451.26","结束日年损益":"20971340534.19","结束日已实现损益":"1205669.53"},
        {"投组群组":"FXSWAP-TRD-010","总损益":"27491544.28","已实现损益":"10331747.14","浮动盈亏":"17159797.14","结束日日损益":"3927363.47","结束日月损益":"117820904.07","结束日年损益":"6927869159.02","结束日已实现损益":"1475963.88"},
        {"投组群组":"FXSWAP-TRD-011","总损益":"29004375.64","已实现损益":"10479132.99","浮动盈亏":"18525242.64","结束日日损益":"4143482.234","结束日月损益":"13724091.77","结束日年损益":"164689101.3","结束日已实现损益":"3985629.23"},
        {"投组群组":"FXSWAP-TRD-012","总损益":"16611746.5","已实现损益":"16611746.5","浮动盈亏":"0.00","结束日日损益":"0.00","结束日月损益":"27347852.54","结束日年损益":"328174230.4","结束日已实现损益":"0.00"},
        {"投组群组":"FXSWAP-TRD-013","总损益":"3917817.283","已实现损益":"3946992.732","浮动盈亏":"-29175.44947","结束日日损益":"559688.1833","结束日月损益":"43616978.45","结束日年损益":"523403741.4","结束日已实现损益":"401835.18"},
        {"投组群组":"FXSWAP-TRD-014","总损益":"7201252.145","已实现损益":"475910.5846","浮动盈亏":"6725341.56","结束日日损益":"1028750.306","结束日月损益":"25042223.78","结束日年损益":"300506685.4","结束日已实现损益":"870897.31"},
        {"投组群组":"FXSWAP-TRD-015","总损益":"23067446.67","已实现损益":"20608565.37","浮动盈亏":"2458881.303","结束日日损益":"3295349.525","结束日月损益":"15209947.69","结束日年损益":"182519372.2","结束日已实现损益":"3137496.52"},
        {"投组群组":"FXSWAP-TRD-016","总损益":"10085847.36","已实现损益":"-8773195.443","浮动盈亏":"18859042.8","结束日日损益":"1440835.337","结束日月损益":"26949388.89","结束日年损益":"323392666.7","结束日已实现损益":"1282982.34"},
        {"投组群组":"FXSWAP-TRD-017","总损益":"19236636.17","已实现损益":"30187476.43","浮动盈亏":"-10950840.26","结束日日损益":"2748090.881","结束日月损益":"14908250.68","结束日年损益":"178899008.1","结束日已实现损益":"2590237.88"},
        {"投组群组":"FXSWAP-TRD-018","总损益":"7564024.105","已实现损益":"2697081.802","浮动盈亏":"4866942.303","结束日日损益":"1080574.872","结束日月损益":"42777539.76","结束日年损益":"513330477.1","结束日已实现损益":"922721.87"},
        {"投组群组":"FXSWAP-TRD-019","总损益":"12938378.44","已实现损益":"-3302106.155","浮动盈亏":"16240484.6","结束日日损益":"1848339.777","结束日月损益":"7608047.62","结束日年损益":"91296571.43","结束日已实现损益":"1690486.78"},
        {"投组群组":"FXSWAP-TRD-020","总损益":"12273258.58","已实现损益":"-1629637.894","浮动盈亏":"13902896.48","结束日日损益":"1753322.655","结束日月损益":"36679768.11","结束日年损益":"440157217.4","结束日已实现损益":"1595469.65"},
        {"投组群组":"FXSWAP-TRD-021","总损益":"20839191.38","已实现损益":"35542916.53","浮动盈亏":"-14703725.15","结束日日损益":"2977027.34","结束日月损益":"1045542.99","结束日年损益":"12546515.93","结束日已实现损益":"2819174.34"},
        {"投组群组":"FXSWAP-TRD-022","总损益":"77966750.18","已实现损益":"21837973.58","浮动盈亏":"56128776.59","结束日日损益":"11138107.17","结束日月损益":"334143215.04","结束日年损益":"19647621044.36","结束日已实现损益":"3119710.51"},
        {"投组群组":"FXSWAP-TRD-023","总损益":"35783431.23","已实现损益":"4703604.52","浮动盈亏":"31079826.70","结束日日损益":"5111918.75","结束日月损益":"153357562.40","结束日年损益":"9017424669.02","结束日已实现损益":"671943.50"},
        {"投组群组":"FXSWAP-TRD-024","总损益":"62041950.52","已实现损益":"44724642.30","浮动盈亏":"17317308.22","结束日日损益":"8863135.79","结束日月损益":"265894073.66","结束日年损益":"15634571531.18","结束日已实现损益":"6389234.61"},
        {"投组群组":"FXSWAP-TRD-025","总损益":"57277275.18","已实现损益":"39891622.21","浮动盈亏":"17385652.97","结束日日损益":"8182467.88","结束日月损益":"245474036.47","结束日年损益":"14433873344.49","结束日已实现损益":"5698803.17"},
        {"投组群组":"FXSWAP-TRD-026","总损益":"22723439.79","已实现损益":"17074628.38","浮动盈亏":"5648811.41","结束日日损益":"3246205.68","结束日月损益":"97386170.55","结束日年损益":"5726306828.12","结束日已实现损益":"2439232.63"},

      ],
      GeneralDataEuroOpt:[
        {"投组群组":"FXEUROPT-TRD-001","总损益":"26492436.88","已实现损益":"21261818.19","浮动盈亏":"5230618.684","结束日日损益":"4653196.969","结束日月损益":"139595909.1","结束日年损益":"1698416894","结束日已实现损益":"3910812.734"},
        {"投组群组":"FXEUROPT-TRD-002","总损益":"24411479.46","已实现损益":"14339420.98","浮动盈亏":"10072058.47","结束日日损益":"4316589.766","结束日月损益":"129497693","结束日年损益":"1575555265","结束日已实现损益":"3007885.181"},
        {"投组群组":"FXEUROPT-TRD-003","总损益":"22904171.91","已实现损益":"15740403.92","浮动盈亏":"7163767.988","结束日日损益":"3315921.519","结束日月损益":"99477645.57","结束日年损益":"1210311354","结束日已实现损益":"789703.3857"},
        {"投组群组":"FXEUROPT-TRD-004","总损益":"24220998.98","已实现损益":"6823541.583","浮动盈亏":"17397457.4","结束日日损益":"4031147.596","结束日月损益":"120934427.9","结束日年损益":"1471368873","结束日已实现损益":"1255138.597"},
        {"投组群组":"FXEUROPT-TRD-005","总损益":"21934887.65","已实现损益":"12646699.87","浮动盈亏":"9288187.785","结束日日损益":"4104050.301","结束日月损益":"123121509","结束日年损益":"1497978360","结束日已实现损益":"2040251.686"},
        {"投组群组":"FXEUROPT-TRD-006","总损益":"22447544.21","已实现损益":"2934724.399","浮动盈亏":"19512819.81","结束日日损益":"3666938.921","结束日月损益":"110008167.6","结束日年损益":"1338432706","结束日已实现损益":"1309242.333"},
        {"投组群组":"FXEUROPT-TRD-007","总损益":"26275953.31","已实现损益":"12064880.14","浮动盈亏":"14211073.17","结束日日损益":"4084106.371","结束日月损益":"122523191.1","结束日年损益":"1490698825","结束日已实现损益":"2298423.806"},
        {"投组群组":"FXEUROPT-TRD-008","总损益":"25393079.87","已实现损益":"21479919.35","浮动盈亏":"3913160.526","结束日日损益":"4251470.092","结束日月损益":"127544102.8","结束日年损益":"1551786584","结束日已实现损益":"3800631.6"},
        {"投组群组":"FXEUROPT-TRD-009","总损益":"20062648.86","已实现损益":"4649474.594","浮动盈亏":"15413174.26","结束日日损益":"2892041.047","结束日月损益":"86761231.4","结束日年损益":"1055594982","结束日已实现损益":"2623437.433"},
        {"投组群组":"FXEUROPT-TRD-010","总损益":"27440263.56","已实现损益":"10275668.6","浮动盈亏":"17164594.96","结束日日损益":"4680193.551","结束日月损益":"140405806.5","结束日年损益":"1708270646","结束日已实现损益":"2338317.607"},
        {"投组群组":"FXEUROPT-TRD-011","总损益":"23343636.41","已实现损益":"11495622.43","浮动盈亏":"11848013.98","结束日日损益":"3667633.273","结束日月损益":"110028998.2","结束日年损益":"1338686145","结束日已实现损益":"1184009.178"},
        {"投组群组":"FXEUROPT-TRD-012","总损益":"22872841.13","已实现损益":"15419174.05","浮动盈亏":"7453667.081","结束日日损益":"4210834.463","结束日月损益":"126325033.9","结束日年损益":"1536954579","结束日已实现损益":"3818595.521"},
        {"投组群组":"FXEUROPT-TRD-013","总损益":"21934887.65","已实现损益":"12646699.87","浮动盈亏":"9288187.785","结束日日损益":"4104050.301","结束日月损益":"123121509","结束日年损益":"1497978360","结束日已实现损益":"2040251.686"},
        {"投组群组":"FXEUROPT-TRD-014","总损益":"22447544.21","已实现损益":"2934724.399","浮动盈亏":"19512819.81","结束日日损益":"3666938.921","结束日月损益":"110008167.6","结束日年损益":"1338432706","结束日已实现损益":"1309242.333"},
        {"投组群组":"FXEUROPT-TRD-015","总损益":"26275953.31","已实现损益":"12064880.14","浮动盈亏":"14211073.17","结束日日损益":"4084106.371","结束日月损益":"122523191.1","结束日年损益":"1490698825","结束日已实现损益":"2298423.806"},
        {"投组群组":"FXEUROPT-TRD-016","总损益":"25393079.87","已实现损益":"21479919.35","浮动盈亏":"3913160.526","结束日日损益":"4251470.092","结束日月损益":"127544102.8","结束日年损益":"1551786584","结束日已实现损益":"3800631.6"},
        {"投组群组":"FXEUROPT-TRD-017","总损益":"20062648.86","已实现损益":"4649474.594","浮动盈亏":"15413174.26","结束日日损益":"2892041.047","结束日月损益":"86761231.4","结束日年损益":"1055594982","结束日已实现损益":"2623437.433"},
        {"投组群组":"FXEUROPT-TRD-018","总损益":"26492436.88","已实现损益":"21261818.19","浮动盈亏":"5230618.684","结束日日损益":"4653196.969","结束日月损益":"139595909.1","结束日年损益":"1698416894","结束日已实现损益":"3910812.734"},
        {"投组群组":"FXEUROPT-TRD-019","总损益":"24411479.46","已实现损益":"14339420.98","浮动盈亏":"10072058.47","结束日日损益":"4316589.766","结束日月损益":"129497693","结束日年损益":"1575555265","结束日已实现损益":"3007885.181"},
        {"投组群组":"FXEUROPT-TRD-020","总损益":"22904171.91","已实现损益":"15740403.92","浮动盈亏":"7163767.988","结束日日损益":"3315921.519","结束日月损益":"99477645.57","结束日年损益":"1210311354","结束日已实现损益":"789703.3857"},
        {"投组群组":"FXEUROPT-TRD-021","总损益":"24220998.98","已实现损益":"6823541.583","浮动盈亏":"17397457.4","结束日日损益":"4031147.596","结束日月损益":"120934427.9","结束日年损益":"1471368873","结束日已实现损益":"1255138.597"},
        {"投组群组":"FXEUROPT-TRD-022","总损益":"21934887.65","已实现损益":"12646699.87","浮动盈亏":"9288187.785","结束日日损益":"4104050.301","结束日月损益":"123121509","结束日年损益":"1497978360","结束日已实现损益":"2040251.686"},
        {"投组群组":"FXEUROPT-TRD-023","总损益":"22447544.21","已实现损益":"2934724.399","浮动盈亏":"19512819.81","结束日日损益":"3666938.921","结束日月损益":"110008167.6","结束日年损益":"1338432706","结束日已实现损益":"1309242.333"},
        {"投组群组":"FXEUROPT-TRD-024","总损益":"23343636.41","已实现损益":"11495622.43","浮动盈亏":"11848013.98","结束日日损益":"3667633.273","结束日月损益":"110028998.2","结束日年损益":"1338686145","结束日已实现损益":"1184009.178"},
        {"投组群组":"FXEUROPT-TRD-025","总损益":"22447544.21","已实现损益":"2934724.399","浮动盈亏":"19512819.81","结束日日损益":"3666938.921","结束日月损益":"110008167.6","结束日年损益":"1338432706","结束日已实现损益":"1309242.333"},

      ],
      GeneralDataIRSCCS:[
        {"投组群组":"IRSCCS-TRD-001","总损益":"13217103.13","已实现损益":"4189798.611","浮动盈亏":"9027304.515","结束日日损益":"2625973.83","结束日月损益":"78779214.91","结束日年损益":"958480448.1","结束日已实现损益":"1832245.29"},
        {"投组群组":"IRSCCS-TRD-002","总损益":"12356488.86","已实现损益":"5278924.306","浮动盈亏":"7077564.557","结束日日损益":"1859199.231","结束日月损益":"55775976.92","结束日年损益":"678607719.2","结束日已实现损益":"1683411.32"},
        {"投组群组":"IRSCCS-TRD-003","总损益":"7308876.679","已实现损益":"7123912.867","浮动盈亏":"184963.8119","结束日日损益":"1224904.865","结束日月损益":"36747145.94","结束日年损益":"447090275.6","结束日已实现损益":"854351.1287"},
        {"投组群组":"IRSCCS-TRD-004","总损益":"24938554.67","已实现损益":"9902687.28","浮动盈亏":"15035867.39","结束日日损益":"4132971.456","结束日月损益":"123989143.7","结束日年损益":"1508534581","结束日已实现损益":"3729051.675"},
        {"投组群组":"IRSCCS-TRD-005","总损益":"13638809.42","已实现损益":"8788015.911","浮动盈亏":"4850793.512","结束日日损益":"2216086.459","结束日月损益":"66482593.76","结束日年损益":"808871557.4","结束日已实现损益":"1005554.771"},
        {"投组群组":"IRSCCS-TRD-006","总损益":"12818142.39","已实现损益":"6931668.907","浮动盈亏":"5886473.483","结束日日损益":"2749329.909","结束日月损益":"82479897.27","结束日年损益":"1003505417","结束日已实现损益":"794047.1197"},
        {"投组群组":"IRSCCS-TRD-007","总损益":"3341229.288","已实现损益":"9073142.244","浮动盈亏":"-5731912.956","结束日日损益":"957849.9509","结束日月损益":"28735498.53","结束日年损益":"349615232.1","结束日已实现损益":"625452.0718"},
        {"投组群组":"IRSCCS-TRD-008","总损益":"20233195.78","已实现损益":"3863202.259","浮动盈亏":"16369993.52","结束日日损益":"3681154.829","结束日月损益":"110434644.9","结束日年损益":"1343621513","结束日已实现损益":"2025815.322"},
        {"投组群组":"IRSCCS-TRD-009","总损益":"23355082.88","已实现损益":"3479683.099","浮动盈亏":"19875399.78","结束日日损益":"4184644.958","结束日月损益":"125539348.7","结束日年损益":"1527395410","结束日已实现损益":"2353219.245"},
        {"投组群组":"IRSCCS-TRD-010","总损益":"29893893.44","已实现损益":"878147.1345","浮动盈亏":"29015746.31","结束日日损益":"5218679.049","结束日月损益":"156560371.5","结束日年损益":"1904817853","结束日已实现损益":"4510020.874"},
        {"投组群组":"IRSCCS-TRD-011","总损益":"16393762.47","已实现损益":"6309503.694","浮动盈亏":"10084258.77","结束日日损益":"3202699.559","结束日月损益":"96080986.76","结束日年损益":"1168985339","结束日已实现损益":"3196590.638"},
        {"投组群组":"IRSCCS-TRD-012","总损益":"27503160.49","已实现损益":"9944114.877","浮动盈亏":"17559045.61","结束日日损益":"4593482.649","结束日月损益":"137804479.5","结束日年损益":"1676621167","结束日已实现损益":"2842566.86"},
        {"投组群组":"IRSCCS-TRD-013","总损益":"24385502.17","已实现损益":"9164633.575","浮动盈亏":"15220868.6","结束日日损益":"3701865.658","结束日月损益":"111055969.7","结束日年损益":"1351180965","结束日已实现损益":"2443678.164"},
        {"投组群组":"IRSCCS-TRD-014","总损益":"2560680.282","已实现损益":"350548.2896","浮动盈亏":"2210131.992","结束日日损益":"1161708.781","结束日月损益":"34851263.42","结束日年损益":"424023704.9","结束日已实现损益":"689497.799"},
        {"投组群组":"IRSCCS-TRD-015","总损益":"25437947.3","已实现损益":"4169155.863","浮动盈亏":"21268791.43","结束日日损益":"4074182.476","结束日月损益":"122225474.3","结束日年损益":"1487076604","结束日已实现损益":"3668350.112"},
        {"投组群组":"IRSCCS-TRD-016","总损益":"11597268.12","已实现损益":"8338038.577","浮动盈亏":"3259229.542","结束日日损益":"1721375.847","结束日月损益":"51641275.4","结束日年损益":"628302184","结束日已实现损益":"597364.0446"},
        {"投组群组":"IRSCCS-TRD-017","总损益":"22637362.63","已实现损益":"8497769.926","浮动盈亏":"14139592.7","结束日日损益":"3604053.115","结束日月损益":"108121593.4","结束日年损益":"1315479387","结束日已实现损益":"3248950.489"},
        {"投组群组":"IRSCCS-TRD-018","总损益":"28949821","已实现损益":"7278131.281","浮动盈亏":"21671689.72","结束日日损益":"4983080.645","结束日月损益":"149492419.4","结束日年损益":"1818824436","结束日已实现损益":"4857001.02"},
        {"投组群组":"IRSCCS-TRD-019","总损益":"3261632.871","已实现损益":"2678964.813","浮动盈亏":"582668.0587","结束日日损益":"1437790.223","结束日月损益":"43133706.68","结束日年损益":"524793431.3","结束日已实现损益":"813324.5277"},
        {"投组群组":"IRSCCS-TRD-020","总损益":"6353846.751","已实现损益":"8517220.548","浮动盈亏":"-2163373.798","结束日日损益":"1288856.344","结束日月损益":"38665690.33","结束日年损益":"470432565.6","结束日已实现损益":"395762.1969"},
        {"投组群组":"IRSCCS-TRD-021","总损益":"16667020.99","已实现损益":"2388080.698","浮动盈亏":"14278940.29","结束日日损益":"2670035.303","结束日月损益":"80101059.08","结束日年损益":"974562885.4","结束日已实现损益":"2625744.33"},
        {"投组群组":"IRSCCS-TRD-022","总损益":"19482586.69","已实现损益":"2732264.312","浮动盈亏":"16750322.38","结束日日损益":"3134587.797","结束日月损益":"94037633.91","结束日年损益":"1144124546","结束日已实现损益":"3084381.454"},
        {"投组群组":"IRSCCS-TRD-023","总损益":"19234712.83","已实现损益":"8427474.474","浮动盈亏":"10807238.36","结束日日损益":"3267214.411","结束日月损益":"98016432.32","结束日年损益":"1192533260","结束日已实现损益":"2466165.298"},
        {"投组群组":"IRSCCS-TRD-024","总损益":"25227267.79","已实现损益":"2334177.077","浮动盈亏":"22893090.71","结束日日损益":"4430805.647","结束日月损益":"132924169.4","结束日年损益":"1617244061","结束日已实现损益":"3670952.74"},
        {"投组群组":"IRSCCS-TRD-025","总损益":"9609463.258","已实现损益":"8242276.356","浮动盈亏":"1367186.901","结束日日损益":"1958697.884","结束日月损益":"58760936.53","结束日年损益":"714924727.8","结束日已实现损益":"1314950.103"},
        {"投组群组":"IRSCCS-TRD-026","总损益":"2556232.618","已实现损益":"8244821.318","浮动盈亏":"-5688588.7","结束日日损益":"970799.7296","结束日月损益":"29123991.89","结束日年损益":"354341901.3","结束日已实现损益":"614255.4562"},
        {"投组群组":"IRSCCS-TRD-027","总损益":"26012290.68","已实现损益":"6634495.382","浮动盈亏":"19377795.3","结束日日损益":"4189247.725","结束日月损益":"125677431.7","结束日年损益":"1529075419","结束日已实现损益":"2859489.349"},
        {"投组群组":"IRSCCS-TRD-028","总损益":"11233079.62","已实现损益":"5017521.718","浮动盈亏":"6215557.904","结束日日损益":"1682530.883","结束日月损益":"50475926.5","结束日年损益":"614123772.5","结束日已实现损益":"1665469.494"},
        {"投组群组":"IRSCCS-TRD-029","总损益":"21771141.51","已实现损益":"2574371.539","浮动盈亏":"19196769.97","结束日日损益":"3718478.057","结束日月损益":"111554341.7","结束日年损益":"1357244491","结束日已实现损益":"3688006.853"},
        {"投组群组":"IRSCCS-TRD-030","总损益":"15757451.01","已实现损益":"3961820.606","浮动盈亏":"11795630.41","结束日日损益":"3137352.27","结束日月损益":"94120568.1","结束日年损益":"1145133579","结束日已实现损益":"2108990.952"},
        {"投组群组":"IRSCCS-TRD-031","总损益":"11834018.5","已实现损益":"3507148.461","浮动盈亏":"8326870.042","结束日日损益":"2399698.58","结束日月损益":"71990957.39","结束日年损益":"875889981.5","结束日已实现损益":"941550.1986"},
        {"投组群组":"IRSCCS-TRD-032","总损益":"22776831.42","已实现损益":"6921814.609","浮动盈亏":"15855016.81","结束日日损益":"3904442.466","结束日月损益":"117133274","结束日年损益":"1425121500","结束日已实现损益":"2025838.466"},
        {"投组群组":"IRSCCS-TRD-033","总损益":"24473494.9","已实现损益":"9805028.338","浮动盈亏":"14668466.57","结束日日损益":"4423843.629","结束日月损益":"132715308.9","结束日年损益":"1614702925","结束日已实现损益":"3211287.497"},
        {"投组群组":"IRSCCS-TRD-034","总损益":"17902357.14","已实现损益":"3051941.035","浮动盈亏":"14850416.11","结束日日损益":"3392869.366","结束日月损益":"101786081","结束日年损益":"1238397319","结束日已实现损益":"2570844.116"},
        {"投组群组":"IRSCCS-TRD-035","总损益":"3808109.856","已实现损益":"4240698.338","浮动盈亏":"-432588.4815","结束日日损益":"1197849.013","结束日月损益":"35935470.39","结束日年损益":"437214889.7","结束日已实现损益":"641200.1247"},
        {"投组群组":"IRSCCS-TRD-036","总损益":"12085149.16","已实现损益":"7422782.996","浮动盈亏":"4662366.161","结束日日损益":"1915915.266","结束日月损益":"57477457.97","结束日年损益":"699309071.9","结束日已实现损益":"572651.6343"},
        {"投组群组":"IRSCCS-TRD-037","总损益":"13638809.42","已实现损益":"8788015.911","浮动盈亏":"4850793.512","结束日日损益":"2216086.459","结束日月损益":"66482593.76","结束日年损益":"808871557.4","结束日已实现损益":"1005554.771"},
        {"投组群组":"IRSCCS-TRD-038","总损益":"12818142.39","已实现损益":"6931668.907","浮动盈亏":"5886473.483","结束日日损益":"2749329.909","结束日月损益":"82479897.27","结束日年损益":"1003505417","结束日已实现损益":"794047.1197"},
        {"投组群组":"IRSCCS-TRD-039","总损益":"3341229.288","已实现损益":"9073142.244","浮动盈亏":"-5731912.956","结束日日损益":"957849.9509","结束日月损益":"28735498.53","结束日年损益":"349615232.1","结束日已实现损益":"625452.0718"},
        {"投组群组":"IRSCCS-TRD-040","总损益":"20233195.78","已实现损益":"3863202.259","浮动盈亏":"16369993.52","结束日日损益":"3681154.829","结束日月损益":"110434644.9","结束日年损益":"1343621513","结束日已实现损益":"2025815.322"},
        {"投组群组":"IRSCCS-TRD-041","总损益":"23355082.88","已实现损益":"3479683.099","浮动盈亏":"19875399.78","结束日日损益":"4184644.958","结束日月损益":"125539348.7","结束日年损益":"1527395410","结束日已实现损益":"2353219.245"},
        {"投组群组":"IRSCCS-TRD-042","总损益":"29893893.44","已实现损益":"878147.1345","浮动盈亏":"29015746.31","结束日日损益":"5218679.049","结束日月损益":"156560371.5","结束日年损益":"1904817853","结束日已实现损益":"4510020.874"},
        {"投组群组":"IRSCCS-TRD-043","总损益":"16393762.47","已实现损益":"6309503.694","浮动盈亏":"10084258.77","结束日日损益":"3202699.559","结束日月损益":"96080986.76","结束日年损益":"1168985339","结束日已实现损益":"3196590.638"},
        {"投组群组":"IRSCCS-TRD-044","总损益":"27503160.49","已实现损益":"9944114.877","浮动盈亏":"17559045.61","结束日日损益":"4593482.649","结束日月损益":"137804479.5","结束日年损益":"1676621167","结束日已实现损益":"2842566.86"},
        {"投组群组":"IRSCCS-TRD-045","总损益":"24385502.17","已实现损益":"9164633.575","浮动盈亏":"15220868.6","结束日日损益":"3701865.658","结束日月损益":"111055969.7","结束日年损益":"1351180965","结束日已实现损益":"2443678.164"},
        {"投组群组":"IRSCCS-TRD-046","总损益":"2560680.282","已实现损益":"350548.2896","浮动盈亏":"2210131.992","结束日日损益":"1161708.781","结束日月损益":"34851263.42","结束日年损益":"424023704.9","结束日已实现损益":"689497.799"},
        {"投组群组":"IRSCCS-TRD-047","总损益":"25437947.3","已实现损益":"4169155.863","浮动盈亏":"21268791.43","结束日日损益":"4074182.476","结束日月损益":"122225474.3","结束日年损益":"1487076604","结束日已实现损益":"3668350.112"},
        {"投组群组":"IRSCCS-TRD-048","总损益":"11597268.12","已实现损益":"8338038.577","浮动盈亏":"3259229.542","结束日日损益":"1721375.847","结束日月损益":"51641275.4","结束日年损益":"628302184","结束日已实现损益":"597364.0446"},
        {"投组群组":"IRSCCS-TRD-049","总损益":"22637362.63","已实现损益":"8497769.926","浮动盈亏":"14139592.7","结束日日损益":"3604053.115","结束日月损益":"108121593.4","结束日年损益":"1315479387","结束日已实现损益":"3248950.489"},
        {"投组群组":"IRSCCS-TRD-050","总损益":"2556232.618","已实现损益":"8244821.318","浮动盈亏":"-5688588.7","结束日日损益":"970799.7296","结束日月损益":"29123991.89","结束日年损益":"354341901.3","结束日已实现损益":"614255.4562"},

      ],
      DPPartDataSWAP:[
        {"数据类型":"损益","外汇远掉期结束日损益":"100664868.23 ","结束日总损益":"694240470.50 "},
      ],
      ConDPSWAP1:[
        {"数据类型":"日损益","2019-11-04":" 114541139.82 ","2019-11-05":" 132930453.39  ","2019-11-06":" -143007454.34 ","2019-11-07":" -148637255.10 ","2019-11-08":" 192681678.90 ","2019-11-09":" 342483656.85 ","2019-11-10":" 100664868.23 "},
        {"数据类型":"累计损益","2019-11-04":" 114541139.82","2019-11-05":" 247471593.21  ","2019-11-06":" 104464138.88 ","2019-11-07":" -44173116.23 ","2019-11-08":" 148508562.67 ","2019-11-09":" 378782167.23 ","2019-11-10":" 721265824.08 "},

      ],
      PNLSWAP1:[
        {"投组":"FXSWAP-TRADING","货币":"CNY","浮动盈亏":"61176240.38","期限影响":"1357554.762","汇率影响":"40784160.26","利率影响":"19034525.3659938 ","残差":"0.00"},

      ],
      options: {
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
      },//end option
    }
  },
  mounted () {
  },
  methods: {
    // ****************************
    DPPartGraphOpenSWAP(){
      this.myechart = echarts.init(document.getElementById('DPPartChartSWAP'));
      this.myechart.setOption(this.echartDPPartOptionSWAP);
    },
    ConDPGraphOpenSWAP1(){
      this.myechart = echarts.init(document.getElementById('ConDPChartSWAP1'));
      this.myechart.setOption(this.echartConPDSWAP1);
    },
    calPLResults () {
      if (this.displayData === false){
        this.displayData = true;
      }
    },
    clearPLResults () {
      if (this.displayData === true){
        this.displayData = false;
      }
    },
    clickSwaption(){
      this.clickSwaption()
    },
    rowstyle(row){
      if (row.rowIndex % 2 === 0) {
        return "height:30px; background-color:#312E30;  text-align: left;color: white; border:0px; font-size: 16px";
      } else {
        return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
      }
    },
    headerstyle(row) {
      return "height:30px; background-color:#454754;  text-align: left;color: white; border:0px; font-size: 16px";
    },
    layoutUpdatedHandler (newLayout) {
      console.group('layoutUpdatedHandler')
      newLayout.forEach(e => {
        console.log(`{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`)
      })
      console.groupEnd()
    },
    showContinousDP(){
      this.ContinousDPVisible = true;
      this.ContinousDP = true;
      this.dialogNameConDP = '区间连续日损益';
    },
    showDPPartSWAP(){
      this.DPPartVisibleSWAP = true;
      this.DPPartSWAP = true;
      this.dialogNameDPPart = '结束日损益占比';
    },
    showDPPartEUROPT(){
      this.DPPartVisibleEUROPT = true;
      this.DPPartEUROPT = true;
      this.dialogNameDPPart = '结束日损益占比';
    },
    showDPPartIRS(){
      this.DPPartVisibleIRS = true;
      this.DPPartIRS = true;
      this.dialogNameDPPart = '结束日损益占比';
    },
    showDPPartBond(){
      this.DPPartVisibleBond = true;
      this.DPPartBond = true;
      this.dialogNameDPPart = '结束日损益占比';
    },
    showDPPartSWPT(){
      this.DPPartVisibleSWPT = true;
      this.DPPartSWPT = true;
      this.dialogNameDPPart = '结束日损益占比';
    },
    showDPPartDigital(){
      this.DPPartVisibleDigital = true;
      this.DPPartDigital = true;
      this.dialogNameDPPart = '结束日损益占比';
    },
    showPNL(){
      this.PnlVisible = true;
      this.Pnl = true;
      this.dialogNamePNL = '区间损益归因';
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

.right-col-attr{
  height:80px;
  background:transparent;
  margin:auto;
  line-height: 200px;
  vertical-align: center;

}
.controls-a-line-attr{
  margin:0px 60px 60px 20px;
}
.controls-a-line-attr-btm{
  margin:50px 60px 60px 500px;
}
.left-col1-attr{
  height:40px;
  background:#312E30;
  margin:5px 0px 5px 0px;
  padding-left:20px;
  line-height: 40px;
  vertical-align: center;
  font-size:16px;
  color:white;
}
.left-col2-attr{
  height:40px;
  background:#454754;;
  margin:5px 0px 5px 0px;
  padding-left:20px;
  line-height: 40px;
  vertical-align: center;
  font-size:16px;
  color:white;
}
.oneControls-attr {
  width:190px;
}
.tradeInfoButton-attr{
  width:190px;
}
.box-card-attr {
  /*<!--!*margin: 5px;*!-->*/
  /*<!--border-radius: 5px;-->*/
  /*<!--padding: 5px;-->*/
  /*<!--//background-color: #2c2c41;-->*/
  /*<!--background-color: #333333;-->*/
  /*<!--color: white;-->*/
  /*<!--margin: -100px 2px 0px 350px;-->*/

}
</style>

<style lang="scss" >

</style>
