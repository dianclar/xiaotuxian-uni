<script setup lang="ts">
import { getAd } from '@/api/home'
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: '111',
        })
      "
      size="mini"
      plain
      type="primary">
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">
      清理用户信息
    </button>
    <button @tap="getAd()" size="mini" plain type="warn">请求</button>
  </view>
</template>

<style lang="scss">
//
</style>
