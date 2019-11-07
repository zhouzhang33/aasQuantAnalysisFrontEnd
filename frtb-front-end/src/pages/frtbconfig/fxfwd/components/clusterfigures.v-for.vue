<template>
  <el-row style="margin-left: 2px">
    <el-col :span="8"
    v-for="(item, index) in chartData">
      <ve-line 
        ref="charts"
        :data="chartData[index]"
        :settings="chartSettings11"
        v-bind="pubSetting11"
        :extend="extend11"
        width = "200px"
        height = "160px"
      ></ve-line>
    </el-col>

    <el-col :span="8">
      <ve-line 
        :data="chartData1" 
        :settings="chartSettings11"
        v-bind="pubSetting11"
        :extend="extend11"
        width = "200px"
        height = "160px"
      ></ve-line>
    </el-col>

  </el-row>
</template>

<script>
import {
  cpus,
} from "@api/index";
import list from "@/pages/demo/charts/list/_mixin/list.js";
export default {
  mixins: [list],
  data() {
    this.extend11 = {
      series: {
        showSymbol: false,
        animation: false,
      },
      color: ['blue'],
    };
    
    return {
      // ************************************** 图1 **************************************
      // cpuStat: new Array(12),
      chartData: [
        {
          columns: ["time", "value"],
          rows: []
        },
      ],
      chartData1: 
        {
          columns: ["time", "value"],
          rows: [
            {"time": 1566291635977, "value": 10},
            {"time": 1566291645977, "value": 20},
            {"time": 1566291655977, "value": 10},
          ]
        },

      chartSettings11 :{
        area: true,
        labelMap: {
          'value': 'CPU Core1',
        },
      },
      pubSetting11: {
        title: { 
          text: "CPU Core1", 
          textStyle: {color: "black", fontSize: 10} 
        },
        //  控制图的显示位置
        grid: {
          // left: 'left',
          // top: 'top',
          left: '1%',
          right: '5%',
          top: '0%',
          bottom: '30%',
          containLabel: false
        },
        legend: {
          show: false,
          x: "left",
          y: "bottom",
        },
        xAxis:[{
          // show: true,
          // splitNumber: 5,
          type:'time',
          // splitLine: [{
          //   show: true
          // }]
        }],
        yAxis:[{
          // show: true,
          splitNumber: 2,
          type: 'value',
          min:0,
          max:100,
          // splitLine: [{
          //   show: true
          // }]
        }],
      },

    };
  },

  methods:{
    getCPUs() {
      cpus().then(res => {
        // console.log(Object.keys(res).length);
        // this.cpuStat = res;
        var tmpDate = new Date();
        for(var j=0; j<12; j++){
          this.chartData[j].rows.shift()
          this.chartData[j].rows.push({ "time": tmpDate.getTime(), "value": res[j]})
          this.$refs.charts[j].echarts.resize()
          // console.log({ "time": tmpDate.getTime(), "value": res[j]})
        }
        this.chartData1.rows.shift()
        this.chartData1.rows.push({ "time": tmpDate.getTime(), "value": res[1]})
        console.log(this.chartData)
        
      });

    },
    initData(){
      var tmpDate = new Date();
      for(var j=0; j<12; j++){
        this.chartData[j] = {
          columns: ["time", "value"],
          rows: []
        }
        for(var i=100; i>0; i--) {
          this.chartData[j].rows.push({ "time": tmpDate.getTime()-i*1000, "value": Math.random()+j})
        }
      }
      // console.log(this.chartData)
    },
    initData1(){
      var tmpDate = new Date();
      // console.log(this.chartData1)
      for(var i=100; i>0; i--) {
        this.chartData1.rows.push({ "time": tmpDate.getTime()-i*1000, "value": Math.random()+20})
      }
    }

  },
  mounted: function() {
    console.log(this.$refs.charts[0].echarts)
  },
  created: function() {
    this.initData();
    this.initData1();
    this.getCPUs();
    setInterval(this.getCPUs, 1000);
  }, 

};
</script>


<style lang="scss" scoped>

</style>
