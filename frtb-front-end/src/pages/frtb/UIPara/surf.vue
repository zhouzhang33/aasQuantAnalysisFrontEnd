<template>

      <div class="box-card" style="margin:auto;height:530px;width:90%">
<!--        <div class="box-card-title">-->
<!--          {{ curvename  }}-->
<!--        </div>-->
        <div id='surfcurve' style='margin:auto;width:600px;height:500px'></div>
      </div>
<!--      </d2-grid-item>-->

</template>

<script>

import {
  pricing,
  calcFxFWD
} from '@api/index'

import echarts from 'echarts'
import 'echarts-gl'

export default {
  components: {

  },
  data () {
    return {
      filename: __filename,
       props: ['curvename'],
      layout: {
        layout: [
          { 'x': 0, 'y': 0, 'w':  3, 'h': 13,'i': '0' },
          { 'x': 0, 'y': 13, 'w': 3, 'h': 15.5, 'i': '1' },
          { 'x': 3, 'y': 0, 'w': 6,  'h': 13, 'i': '2' },
          { 'x': 9, 'y': 0, 'w': 3,  'h': 13, 'i': '3' },
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
    //这里是图标的options
      myechartSurf:null,
      echartSurfOption:{
        tooltip: {},
        backgroundColor: 'transparent',
        visualMap: {
          show: false,
          dimension: 2,
          min: -1,
          max: 1,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          }
        },
        xAxis3D: {
          type: 'value',
          nameTextStyle:{
            color:'white'
          },
          axisLine:{
            lineStyle:{
              color:'white'
            }
          }
        },
        yAxis3D: {
          type: 'value',
          nameTextStyle:{
            color:'white'
          },
          axisLine:{
            lineStyle:{
              color:'white'
            }
          }
        },
        zAxis3D: {
          type: 'value',
          nameTextStyle:{
            color:'white'
          },
          axisLine:{
            lineStyle:{
              color:'white'
            }
          }
        },
        grid3D: {
          viewControl: {
            // projection: 'orthographic'
          },
          height:'95%'
        },
        series: [{
          type: 'surface',
          wireframe: {
            // show: false
          },
          equation: {
            x: {
              step: 0.05
            },
            y: {
              step: 0.05
            },
            z: function (x, y) {
              if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
                return '-';
              }
              return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
            }
          }
        }]
      },
    }
  },
  mounted () {
    this.myechartSurf=echarts.init(document.getElementById('surfcurve'));
    this.myechartSurf.setOption(this.echartSurfOption);
  },
  methods: {
    // ****************************
    setEchartOptions(data){
      this.myechats.setOption(this.echartSurfOption);
      this.myechats.setOption({
        series: [{
          data: data
        }]
      });
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

</style>

<style lang="scss" >

</style>
