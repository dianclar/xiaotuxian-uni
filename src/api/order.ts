import { type PageResult, get, post, put, del } from '@/utils/request'
import type { OrderPreResult } from '@/types/order'
export type * from '@/types/order'

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

//
