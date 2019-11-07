<template>
  <el-row style="margin-left: 2px">
    <!-- <el-col :span="8"
      v-for="index in 12">
      <ve-line 
        :data="chartData0"
        :settings="chartSettings"
        v-bind="pubSettings"
        :extend="extend11"
        width = "200px"
        height = "160px"
      ></ve-line>
    </el-col> -->
    <el-col :span="8">
      <ve-line 
        :data="chartData0"
        :settings="chartSettings"
        v-bind="pubSettings0"
        :extend="extend11"
         width = "cpufigurewidth"
        :height = "cpufigureheight"
      ></ve-line>
    </el-col>
    <el-col :span="8">
      <ve-line 
        :data="chartData1"
        :settings="chartSettings"
        v-bind="pubSettings1"
        :extend="extend11"
        width = "cpufigurewidth"
        :height = "cpufigureheight"
      ></ve-line>
    </el-col>
    <el-col :span="8">
      <ve-line 
        :data="chartData2"
        :settings="chartSettings"
        v-bind="pubSettings2"
        :extend="extend11"
        width = "cpufigurewidth"
        :height = "cpufigureheight"
      ></ve-line>
    </el-col>
    <el-col :span="8">
      <ve-line 
        :data="chartData3"
        :settings="chartSettings"
        v-bind="pubSettings3"
        :extend="extend11"
        width = "cpufigurewidth"
        :height = "cpufigureheight"
      ></ve-line>
    </el-col>
    <el-col :span="8">
      <ve-line 
        :data="chartData4"
        :settings="chartSettings"
        v-bind="pubSettings4"
        :extend="extend11"
        width = "cpufigurewidth"
        :height = "cpufigureheight"
      ></ve-line>
    </el-col>
    <el-col :span="8">
      <ve-line 
        :data="chartData5"
        :settings="chartSettings"
        v-bind="pubSettings5"
        :extend="extend11"
        width = "cpufigurewidth"
        :height = "cpufigureheight"
      ></ve-line>
    </el-col>
    <el-col :span="8">
      <ve-line 
        :data="chartData6"
        :settings="chartSettings"
        v-bind="pubSettings6"
        :extend="extend11"
        width = "cpufigurewidth"
        :height = "cpufigureheight"
      ></ve-line>
    </el-col>
    <el-col :span="8">
      <ve-line 
        :data="chartData7"
        :settings="chartSettings"
        v-bind="pubSettings7"
        :extend="extend11"
        width = "cpufigurewidth"
        :height = "cpufigureheight"
      ></ve-line>
    </el-col>
    <el-col :span="8">
      <ve-line 
        :data="chartData8"
        :settings="chartSettings"
        v-bind="pubSettings8"
        :extend="extend11"
        width = "cpufigurewidth"
        :height = "cpufigureheight"
      ></ve-line>
    </el-col>
    <el-col :span="8">
      <ve-line 
        :data="chartData9"
        :settings="chartSettings"
        v-bind="pubSettings9"
        :extend="extend11"
        width = "cpufigurewidth"
        :height = "cpufigureheight"
      ></ve-line>
    </el-col>
    <el-col :span="8">
      <ve-line 
        :data="chartData10"
        :settings="chartSettings"
        v-bind="pubSettings10"
        :extend="extend11"
        width = "cpufigurewidth"
        :height = "cpufigureheight"
      ></ve-line>
    </el-col>
    <el-col :span="8">
      <ve-line 
        :data="chartData11"
        :settings="chartSettings"
        v-bind="pubSettings11"
        :extend="extend11"
        width = "cpufigurewidth"
        :height = "cpufigureheight"
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
      legend:{
        textStyle:{color:'#FFFFFF'}
      },
      xAxis: {
          nameTextStyle: {
              color: '#FFFFFF',
          },
          axisLine:{
            lineStyle:{
               color: '#FFFFFF',
              }

          },
      },
      yAxis: {
          nameTextStyle: {
              color: '#FFFFFF',
            },
          axisLine:{
            lineStyle:{
               color: '#FFFFFF',
              }

          },
      },      
      color: ['grey'],
    };
    
    return {
      // ************************************** 图1 **************************************
      // cpuStat: new Array(12),
      chartData0: [], //这个很奇怪
      chartData1: {},
      chartData2: {},
      chartData3: {},
      chartData4: {},
      chartData5: {},
      chartData6: {},
      chartData7: {},
      chartData8: {},
      chartData9: {},
      chartData10: {},
      chartData11: {},

      intervalRoutine: null,
      cpufigureheight: '80px',
      cpufigurewidth: '150px',

      chartSettings :{
        area: true,
        labelMap: {
          'value': 'CPU Core1',
        },
      },

    };
  },

  methods:{
    getCPUs() {
      self = this;
      cpus().then(res => {
        // console.log(Object.keys(res).length);
        // this.cpuStat = res;
        var tmpDate = new Date();
        for(var j=0; j<Object.keys(res).length; j++){
          // this.chartData[j].rows.shift()
          // this.chartData[j].rows.push({ "time": tmpDate.getTime(), "value": res[j]})
          // this.$refs.charts[j].echarts.resize()
          this['chartData'+j].rows.shift()
          this['chartData'+j].rows.push({ "time": tmpDate.getTime(), "value": res[j]})
          // console.log(this['chartData'+j]);
        }
      }).catch(function(err){
        console.log('please reset backend')
        clearInterval(self.intervalRoutine);
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
      for(var j=0; j<12; j++){
        this['chartData'+j] = {
          columns: ["time", "value"],
          rows: []
        };
        // this['pubSettings'+j] = this.pubSettings;  // 这样写不行，会产生闭包问题
        this['pubSettings'+j] = {
          title: { 
            text: " ", 
            textStyle: {color: "white", fontSize: 8} 
          },
          //  控制图的显示位置
          grid: {
            // left: 'left',
            // top: 'top',
            left: '1%',
            right: '5%',
            top: '1%',
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
        }
        this['pubSettings'+j].title.text = "Core"+(j+1)
        // this['pubSettings'+j].title.text.push("Core"+j)
        // console.log(this['chartData'+j]);
        for(var i=100; i>0; i--) {
          this['chartData'+j].rows.push({ "time": tmpDate.getTime()-i*1000, "value": Math.random()})
        }
      }
    }

  },
  mounted: function() {
    // console.log(this.$refs.charts[0].echarts)
  },
  created: function() {
    // this.initData();
    this.initData1();
    this.intervalRoutine = setInterval(this.getCPUs, 1000);
  }, 

};
</script>


<style lang="scss" scoped>

</style>
