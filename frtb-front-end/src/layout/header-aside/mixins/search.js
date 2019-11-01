import { mapState, mapMutations } from 'vuex'

import hotkeys from 'hotkeys-js'

export default {
  components: {
    'd2-panel-search': () => import('../components/panel-search')
  },
  mounted () {
    // 绑定搜索功能快捷键 [ 打开 ]
    hotkeys(this.searchHotkey.open, event => {
      event.preventDefault()
      this.searchPanelOpen()
    })
    // 绑定搜索功能快捷键 [ 关闭 ]
    hotkeys(this.searchHotkey.close, event => {
      event.preventDefault()
      this.searchPanelClose()
    })
  },
  beforeDestroy () {
    hotkeys.unbind(this.searchHotkey.open)
    hotkeys.unbind(this.searchHotkey.close)
  },
  computed: {
    ...mapState('d2admin', {
      searchActive: state => state.search.active,
      searchHotkey: state => state.search.hotkey
    })
  },
  methods: {
    ...mapMutations({
      searchToggle: 'd2admin/search/toggle',
      searchSet: 'd2admin/search/set'
    }),
    /**
     * 接收点击搜索按钮
     */
    handleSearchClick () {
      console.log('**************1 handleSearchClick')
      console.log(this.$store)
      console.log(this.$store.commit)
      // console.log(this.searchToggle())
      this.searchToggle()
      console.log('**************2 handleSearchClick')
      if (this.searchActive) {
        // console.log(this.$refs.panelSearch.focus())
        this.$refs.panelSearch.focus()
      }
    },
    searchPanelOpen () {
      if (!this.searchActive) {
        this.searchSet(true)
        this.$refs.panelSearch.focus()
      }
    },
    // 关闭搜索面板
    searchPanelClose () {
      if (this.searchActive) {
        this.searchSet(false)
      }
    }
  }
}
