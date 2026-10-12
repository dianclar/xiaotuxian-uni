import { type PageResult, get, post, put, del } from '@/utils/request'
import type {
  OrderPreResult,
  OrderCreateParams,
  OrderResult,
} from '@/types/order'
export * from '@/types/order'

//  填写订单-获取预付订单
export const getMemberOrderPreAPI = () => {
  return get<OrderPreResult>('/member/order/pre')
}

//  填写订单-获取立即购买订单
export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return get<OrderPreResult>('/member/order/pre/now', data)
}

// 填写订单-再次购买
export const getMemberOrderRepurchaseByIdAPI = (id: string) => {
  return get<OrderPreResult>('/member/order/repurchase/' + id)
}

//  提交订单
export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return post<{ id: string }>('/member/order', data)
}

// 获取订单详情
export const getMemberOrderByIdAPI = (id: string) => {
  return get<OrderResult>('/member/order/' + id)
}

// 获取微信支付参数
export const getPayWxPayMiniPayAPI = (d: AnyObject) => {
  return get<WechatMiniprogram.RequestPaymentOption>('/pay/wxpay/miniPay', d)
}

// 模拟支付-内测版
export const getPayMockAPI = (d: AnyObject) => {
  return get('/pay/mock', d)
}
