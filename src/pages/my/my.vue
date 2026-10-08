<script setup lang="ts">
import { getbanner } from '@/api/home'
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button @tap="uni.navigateTo({ url: '/pages/login/login' })">登陆</button>
  </view>
</template>

<style lang="scss">
//
</style>
