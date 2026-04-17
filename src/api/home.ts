import { type PageResult, get, post } from '@/utils/request'
import type { BannerItem, CategoryItem, HotItem, GuessItem } from '@/types/home'
export type * from '@/types/home'

// 获取轮播图
export const getbanner = (d?: { distributionSite: number }) => {
  return get<BannerItem[]>('/home/banner', d)
}

// 获取导航
export const getnav = () => {
  return get<CategoryItem[]>('/home/category/mutli')
}

// 获取热门
export const gethot = () => {
  return get<HotItem[]>('/home/hot/mutli')
}

// 获取信息流
export const getinfomore = (d?: { page: number; pageSize: number }) => {
  return get<PageResult<GuessItem>>('/home/goods/guessLike', d)
}
