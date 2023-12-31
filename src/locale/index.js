import { createI18n } from 'vue-i18n'
import { localRead } from '@/libs/util'
import customZhTw from './lang/zh-TW'
import customEnUs from './lang/en-US'
import enUsLocale from 'view-ui-plus/src/locale/lang/en-US'
import zhTwLocale from 'view-ui-plus/src/locale/lang/zh-TW'

//根據瀏覽器系統語言設定
const navLang = navigator.language
const localLang = (navLang === 'zh-RW' || navLang === 'en-US') ? navLang : false
let lang = localLang || localRead('local') || 'zh-TW'

const messages = {
  'zh-TW': Object.assign(zhTwLocale, customZhTw),
  'en-US': Object.assign(enUsLocale, customEnUs)
}
const i18n = createI18n({
  locale: lang,
  legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  messages
})

export default i18n
