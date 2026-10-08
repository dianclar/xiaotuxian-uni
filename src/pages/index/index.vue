<script setup lang="ts">
//
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import pageske from './components/pageske.vue'
import { useGuessList } from '@/composables/index'

import {
  getbanner,
  type BannerItem,
  getnav,
  type CategoryItem,
  gethot,
  type HotItem,
} from '@/api/home'

const bannerList = ref<BannerItem[]>([])
const navList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])

onLoad(() => {
  getdata()
})

const { guessRef, onScrolltolower } = useGuessList()

const refresherstatus = ref(true)
const getdata = async () => {
  refresherstatus.value = true
  guessRef.value?.resetdata()
  Promise.all([
    getbanner().then(res => {
      bannerList.value = res.result
    }),
    getnav().then(res => {
      navList.value = res.result
    }),
    gethot().then(res => {
      hotList.value = res.result
    }),
  ]).then(() => {
    refresherstatus.value = false
  })
}
</script>

<template>
  <!-- 标题 -->
  <custom-navbar />
  <scroll-view
    scroll-y
    style="flex: 1"
    refresher-enabled
    :refresher-triggered="refresherstatus"
    @scrolltolower="onScrolltolower"
    @refresherrefresh="getdata"
  >
    <!-- 骨架屏 -->
    <pageske v-if="refresherstatus" />
    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 导航 -->
      <category-panel :list="navList" />
      <!-- 推荐> -->
      <HotPanel :list="hotList" />
      <!-- 信息流 -->
    </template>
    <xtx-guess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
//
page,
body {
  background: #f1f1f1;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
