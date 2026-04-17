import { get, post } from '@/utils/request'
import type { BannerItem } from '@/types/home'
export type * from '@/types/home'

// 获取轮播图
export const getbanner = (d?: { distributionSite: number }) => {
  return get<BannerItem[]>('/home/banner', d)
}
