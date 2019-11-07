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
        <div>
          <el-col :span="6">
            <div class="left-column">
              <div class='box-card' style="height:900px">
                <div class="box-card-title">
                  日期设定
                </div>
                <Calendar
                        style="font-size: 12px !important">
                </Calendar>
              </div>
            </div>
          </el-col>

        </div>
<!--      </d2-grid-item>-->
    </d2-grid-layout>
  </d2-container>
</template>

<script>

import {
  pricing,
  calcFxFWD
} from '@api/index'
import Calendar from 'vue-calendar-component'

export default {
  components: {
    Calendar
  },
  data () {
    return {
      filename: __filename,
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
    }
  },
  mounted () {
  },
  methods: {
    // ****************************
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
