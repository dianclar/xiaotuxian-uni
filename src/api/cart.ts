import { type PageResult, get, post, put, del } from '@/utils/request'
import type { CartItem } from '@/types/cart'
export type * from '@/types/cart'

//  加入购物车
export const postMemberCartAPI = (d: { skuId: string; count: number }) => {
  return post('/member/cart', d)
}

//  获取购物车列表
export const getMemberCartAPI = () => {
  return get<CartItem[]>('/member/cart')
}

//  删除/清空购物车单品
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return del('/member/cart', data)
}

//   修改购物车单品
export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: { selected?: boolean; count?: number }
) => {
  return put(`/member/cart/${skuId}`, data)
}

//   购物车全选/取消全选
export const putMemberCartSelectedAPI = (data: { selected: boolean }) => {
  return put('/member/cart/selected', data)
}
