import { type PageResult, get, post } from '@/utils/request'
import type { GoodsResult } from '@/types/goods'
export type * from '@/types/goods'

// 小程序分类
export const getGoodsByIdAPI = (d: { id: string }) => {
  return get<GoodsResult>('/goods', d)
}
