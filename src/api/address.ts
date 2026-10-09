import { type PageResult, get, post, put, del } from '@/utils/request'
import type { AddressParams, AddressItem } from '@/types/address'
export type * from '@/types/address'

// 添加收货地址
export const postMemberAddressAPI = (d: AddressParams) => {
  return post('/member/address', d)
}

// 获取收货地址列表
export const getMemberAddressAPI = () => {
  return get<AddressItem[]>('/member/address')
}

// 获取收货地址详情
export const getMemberAddressByIdAPI = (id: string) => {
  return get<AddressItem[]>('/member/address/' + id)
}

// 修改收货地址
export const putMemberAddressByIdAPI = (id: string, d: AddressParams) => {
  return put('/member/address/' + id, d)
}

// 删除收货地址
export const deleteMemberAddressByIdAPI = (id: string) => {
  return del('/member/address/' + id)
}
