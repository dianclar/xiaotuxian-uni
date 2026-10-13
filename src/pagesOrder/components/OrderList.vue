<script setup lang="ts">
import { OrderState } from '@/api/order'
import { orderStateList } from '@/api/order'
import { getMemberOrderAPI } from '@/api/order'
import type { OrderItem } from '@/api/order'
import { onMounted, ref } from 'vue'
import { putMemberOrderReceiptByIdAPI, deleteMemberOrderAPI } from '@/api/order'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

// 定义 porps
const props = defineProps<{
  orderState: number
}>()

// 请求参数
const queryParams = {
  page: 1,
  pageSize: 3,
  orderState: props.orderState,
}

// 获取订单列表
const maxpage = ref(0)
const orderList = ref<OrderItem[]>([])
const getMemberOrderData = async () => {
  const res = await getMemberOrderAPI(queryParams)
  orderList.value = res.result.items
  maxpage.value = res.result.pages
}

onMounted(() => {
  getMemberOrderData()
})

const getmore = () => {
  if (!maxpage.value) return
  queryParams.page++
  if (queryParams.page > maxpage.value)
    return uni.showToast({
      icon: 'none',
      title: '没有更多数据了',
    })
  getMemberOrderAPI(queryParams).then(res => {
    orderList.value = [...orderList.value, ...res.result.items]
  })
}

// 确认收货
const onOrderConfirm = (query: AnyObject) => {
  // 二次确认弹窗
  uni.showModal({
    content: '为保障您的权益，请收到货并确认无误后，再确认收货',
    success: async success => {
      if (success.confirm) {
        const res = await putMemberOrderReceiptByIdAPI(query.id)
        queryParams.page = 1
        getMemberOrderData()
      }
    },
  })
}

// 删除订单
const onOrderDelete = async (query: AnyObject) => {
  uni.showModal({
    content: '确定删除订单吗？',
    success: async success => {
      if (success.confirm) {
        await deleteMemberOrderAPI({ ids: [query.id] })
        queryParams.page = 1
        getMemberOrderData()
      }
    },
  })
}
</script>

<template>
  <scroll-view
    scroll-y
    class="orders"
    @scrolltolower="getmore"
  >
    <view
      class="card"
      v-for="order in orderList"
      :key="order.id"
    >
      <!-- 订单信息 -->
      <view class="status">
        <text class="date">{{ order.createTime }}</text>
        <!-- 订单状态文字 -->
        <text>{{ orderStateList[order.orderState] }}</text>
        <!-- 待评价/已完成/已取消 状态: 展示删除订单 -->
        <text
          v-if="order.orderState >= OrderState.DaiPingJia"
          class="icon-delete"
        ></text>
      </view>
      <!-- 商品信息，点击商品跳转到订单详情，不是商品详情 -->
      <navigator
        v-for="item in order.skus"
        :key="item.id"
        class="goods"
        :url="`/pagesOrder/detail?id=${order.id}`"
        hover-class="none"
      >
        <view class="cover">
          <image
            mode="aspectFit"
            :src="item.image"
          ></image>
        </view>
        <view class="meta">
          <view class="name ellipsis">{{ item.name }}</view>
          <view class="type">{{ item.attrsText }}</view>
        </view>
      </navigator>
      <!-- 支付信息 -->
      <view class="payment">
        <text class="quantity">共{{ order.totalNum }}件商品</text>
        <text>实付</text>
        <text class="amount">
          <text class="symbol">¥</text>{{ order.payMoney }}</text
        >
      </view>
      <!-- 订单操作按钮 -->
      <view class="action">
        <!-- 待付款状态：显示去支付按钮 -->
        <template v-if="order.orderState === OrderState.DaiFuKuan">
          <view
            class="button primary"
            @tap="uni.navigateTo({ url: `/pagesOrder/detail?id=${order.id}` })"
            >去支付</view
          >
        </template>
        <template v-else>
          <navigator
            class="button secondary"
            :url="`/pagesOrder/new?orderId=` + order.id"
            hover-class="none"
          >
            再次购买
          </navigator>
          <!-- 待收货状态: 展示确认收货 -->
          <view
            v-if="order.orderState === OrderState.DaiShouHuo"
            class="button primary"
            @tap="onOrderConfirm(order)"
            >确认收货</view
          >
          <!-- 待评价状态: 展示去评价 -->
          <view
            class="button"
            v-if="order?.orderState === OrderState.DaiPingJia"
          >
            去评价
          </view>
          <!-- 待评价/已完成/已取消 状态: 展示删除订单 -->
          <view
            class="button delete"
            style="border-color: #f00; color: #f00"
            v-if="
              order?.orderState === OrderState.DaiPingJia ||
              order?.orderState === OrderState.YiWanCheng ||
              order?.orderState === OrderState.YiQuXiao
            "
            @tap="onOrderDelete(order)"
          >
            删除订单
          </view>
        </template>
      </view>
    </view>
    <!-- 底部提示文字 -->
    <view
      class="loading-text"
      :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }"
    >
      {{ queryParams.page > maxpage ? '没有更多数据了' : '加载更多...' }}
    </view>
  </scroll-view>
</template>
