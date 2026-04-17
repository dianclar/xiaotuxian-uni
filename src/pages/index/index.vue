<script setup lang="ts">
//
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { onLoad } from '@dcloudio/uni-app'
import {
  getbanner,
  type BannerItem,
  getnav,
  type CategoryItem,
  gethot,
  type HotItem,
} from '@/api/home'
import XtxGuess from '@/components/XtxGuess.vue'

const bannerList = ref<BannerItem[]>([])
const navList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])

onLoad(() => {
  refreshernow()
})

const guess = ref<InstanceType<typeof XtxGuess>>()

const onlower = () => {
  guess.value?.getmore()
}

const refresherstatus = ref(false)
const refreshernow = () => {
  getbanner().then(res => {
    bannerList.value = res.result
  })
  getnav().then(res => {
    navList.value = res.result
  })
  gethot().then(res => {
    hotList.value = res.result
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
    @scrolltolower="onlower"
    @refresherrefresh="refreshernow"
  >
    <!-- 轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 导航 -->
    <category-panel :list="navList" />
    <!-- 推荐> -->
    <HotPanel :list="hotList" />
    <!-- 信息流 -->
    <xtx-guess ref="guess" />
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
