<template>
  <el-row style="margin-left: 2px">
    <el-col :span="24">
      <!-- <ve-line
        :data="chartDataAll"
        :settings="chartSettings"
         v-bind="pubSettings0"
        :extend="extend11"
         width = "cpufigurewidth"
        :height = "cpufigureheight"
      ></ve-line> -->

        <div id='resource' style='width:400px;height:320px'>

      </div>
    </el-col>
  </el-row>
</template>

<script>
import {
  cpus,
} from "@api/index";

import echarts from 'echarts'
export default {
  //mixins: [list],
  data() {
    return {
      // ************************************** 图1 **************************************
      // cpuStat: new Array(12),
      chartDataAll: [], //这个很奇怪
      intervalRoutine: null,
      cpufigureheight: '380px',
      cpufigurewidth: '80%',

      myechats:null,

      dataTemp: [],

      valueTemp:Math.random() * 1000,


      option : {
      title: {
          //text: 'CPU资源',
          textStyle:{
              color: "white",
          }
      },
      legend:{
        show:true,
        textStyle:{
          color:"white"
        }
      },
      tooltip: {
          trigger: 'axis'
      },
      // tooltip: {
      //     trigger: 'axis',
      //     formatter: function (params) {
      //         params = params[0];
      //         var date = new Date(params.name);
      //         return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
      //     },
      //     axisPointer: {
      //         animation: false
      //     }
      // },
      grid: {
          left: '0%',
          right: '2%',
          bottom: '0%',
		  top:'25%',
          containLabel: true
      },
      xAxis: {
          type: 'time',
          splitLine: {
              show: false
          },
          nameTestStyle:{
            color:'#FFFFFF'
          },
          axisLine:{
            lineStyle:{
              color:'white',  //坐标轴的颜色
              width:1,
            },
          },
          //data: ['2019/10/01','2019/10/05','2019/10/06','2019/10/10'],
        //data: []
      },
      yAxis: {
          type: 'value',
          //boundaryGap: [0, '100%'],
          splitLine: {
              show: false
          },
          axisLine:{
            lineStyle:{
              color:'white',  //坐标轴的颜色
              width:1,
            }
          },
          nameTestStyle:{
            color:'#FFFFFF'
          },
      },
      series: []
      // [
      //     {
      //         name:'邮件营销',
      //         type:'line',
      //         stack: '总量',
      //         data:[120, 132, 101, 134, 90, 230, 210]
      //     },
      //     {
      //         name:'联盟广告',
      //         type:'line',
      //         stack: '总量',
      //         data:[220, 182, 191, 234, 290, 330, 310]
      //     },
      //     {
      //         name:'视频广告',
      //         type:'line',
      //         stack: '总量',
      //         data:[150, 232, 201, 154, 190, 330, 410]
      //     },
      //     {
      //         name:'直接访问',
      //         type:'line',
      //         stack: '总量',
      //         data:[320, 332, 301, 334, 390, 330, 320]
      //     },
      //     {
      //         name:'搜索引擎',
      //         type:'line',
      //         stack: '总量',
      //         data:[820, 932, 901, 934, 1290, 1330, 1320]
      //     }
      // ]
  },

      };
    },

  methods:{
    getCPUs() {
      self = this;

      console.log(this['chartDataAll'],'data')

      cpus().then(res => {
        // console.log(Object.keys(res).length);
        // this.cpuStat = res;
        var tmpDate = new Date();
        this['chartDataAll'].rows.shift()
        var arow = {"time": tmpDate.getTime()};

        for(var j=0; j<Object.keys(res).length; j++){
          var strValue='value'+j;
          arow[strValue]= res[j];
        }

         this['chartDataAll'].rows.push(arow)

        // for(var j=0; j<Object.keys(res).length; j++){
        //   // this.chartData[j].rows.shift()
        //   // this.chartData[j].rows.push({ "time": tmpDate.getTime(), "value": res[j]})
        //   // this.$refs.charts[j].echarts.resize()

        //   this['chartDataAll'].rows.shift()

        //   this['chartData'+j].rows.shift()
        //   this['chartData'+j].rows.push({ "time": tmpDate.getTime(), "value": res[j]})
        //   // console.log(this['chartData'+j]);
        // }
      }).catch(function(err){
        console.log('please reset backend')
        clearInterval(self.intervalRoutine);
      });

    },


    initData2(){
      var tmpDate = new Date();
	  var timestamp=tmpDate.getTime();

      for(var i=0;i<12;i++){

        var aSeries={name:'core'+i,type:'line',data:[]};

        for(var j=3;j>0;j--){
          aSeries.data.push([timestamp-j*1000,Math.random()*1000]);
        }

        this.option.series.push(aSeries);
      }
      console.log(this.option,'option')
    },

  },
  mounted: function() {
    // console.log(this.$refs.charts[0].echarts)
    this.myechats = echarts.init(document.getElementById('resource'));
    this.myechats.setOption(this.option);

  },
  created: function() {
    this.initData2();
    this.intervalRoutine = setInterval(this.getCPUs, 1000);
  },

};
</script>


<style lang="scss" scoped>

</style>
