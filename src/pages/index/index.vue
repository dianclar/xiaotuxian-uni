<script setup lang="ts">
//
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { getbanner, type BannerItem } from '@/api/home'

const bannerList = ref<BannerItem[]>([])

onLoad(() => {
  getbanner().then(res => {
    bannerList.value = res.result
  })
})
</script>

<template>
  <custom-navbar />
  <XtxSwiper :list="bannerList" />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
