export default {
  namespaced: true,
  state: {
    // 语言
    value: '' // medium small mini
  },
  actions: {
    /**
     * @description 设置尺寸
     * @param {Object} state vuex state
     * @param {String} lang
     */
    set ({ state, dispatch }, lang) {
      return new Promise(async resolve => {
        // store 赋值
        state.value = lang
        // 持久化
        await dispatch('d2admin/db/set', {
          dbName: 'sys',
          path: 'lang.value',
          value: state.value,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * @description 从持久化数据读取尺寸设置
     * @param {Object} state vuex state
     */
    load ({ state, dispatch }) {
      return new Promise(async resolve => {
        // store 赋值
        state.value = await dispatch('d2admin/db/get', {
          dbName: 'sys',
          path: 'lang.value',
          defaultValue: 'cn',
          user: true
        }, { root: true })
        // end
        resolve()
      })
    }
  }
}
