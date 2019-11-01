import Vue from 'vue'
import VueI18n from 'vue-i18n'

import cn from './lang/cn'
import en from './lang/en'
import jp from './lang/jp'
import sp from './lang/sp'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'cn',
  messages: {
    cn,
    en,
    jp,
    sp

    // cn: cn,
    // en: en,
    // jp: jp,
    // sp: sp
  }
})
