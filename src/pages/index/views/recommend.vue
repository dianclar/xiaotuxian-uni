<script setup lang="ts">
import { getdata } from '@/api/recommend'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { HotResult } from '@/api/recommend'
// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
const prop = defineProps<{ type: string }>()
const item = hotMap.find(item => item.type === prop.type)
uni.setNavigationBarTitle({ title: item!.title })

const data = ref<
  HotResult & {
    subTypes: (HotResult['subTypes'][number] & { more: boolean })[] 
  }
>()
onLoad(() => {
  getdata(item!.url, { page: 31, pageSize: 10 }).then(res => {
    data.value = {
      ...res.result,
      subTypes: res.result.subTypes.map(i => ({ ...i, more: true })),
    }
    console.log(data.value)
  })
})

const subTypeact = ref(0)

const onlower = () => {
  const nowpage = data.value?.subTypes[subTypeact.value]
  if (nowpage!.goodsItems.page >= nowpage!.goodsItems.pages) {
    nowpage!.more = false
    return uni.showToast({
      title: '没有了',
      icon: 'none',
    })
  }
  nowpage!.goodsItems.page++
  getdata(item!.url, {
    subType: nowpage!.id,
    page: nowpage!.goodsItems.page,
    pageSize: nowpage!.goodsItems.pageSize,
  }).then(res => {
    nowpage!.goodsItems.items = [
      ...nowpage!.goodsItems.items,
      ...res.result.subTypes[subTypeact.value].goodsItems.items,
    ]
  })
}
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="data?.bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        class="text"
        :class="{ active: index == subTypeact }"
        v-for="(i, index) in data?.subTypes"
        :key="i.id"
        @tap="subTypeact = index"
        >{{ i.title }}</text
      >
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      scroll-y
      class="scroll-view"
      v-for="(i, index) in data?.subTypes"
      :key="i.id"
      v-show="index == subTypeact"
      @scrolltolower="onlower"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in i.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image
            class="thumb"
            :src="goods.picture"
          ></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ i.more ? '加载中...' : '没有了' }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
