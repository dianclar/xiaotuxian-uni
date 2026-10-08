/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'
declare module 'vue' {
  interface ComponentCustomProperties {
    uni: typeof uni // 模板使用uni
  }
  export interface GlobalComponents {
    //
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}
