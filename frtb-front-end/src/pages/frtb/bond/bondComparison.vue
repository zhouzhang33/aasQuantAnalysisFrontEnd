<template>
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
                                class="oneContorls" v-model="cashPositionForm.positionCombination" placeholder="选择组合">
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
                    <div class="left-col1">期限 {{ bondCompare.period }}</div>
                </el-col>
                <el-col :span="17">
                    <div class="left-col1" >
                        <el-input
                                class="oneContorls"
                                v-model="bondForm.bondCode"
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
                                v-model="bondForm.liLvFangShi" placeholder="请选择">
                            <el-option
                                    v-for="item in xiPiaoLeiXingOptions"
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
                                class="oneContorls" v-model="cashPositionForm.boundType" placeholder="选择组合">
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
                                class="oneContorls" v-model="cashPositionForm.boundRating" placeholder="选择组合">
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
</template>

<script>
    export default {
        name: "bondComparison"

    }
</script>

<style scoped>

</style>
