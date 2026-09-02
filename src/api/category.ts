import { type PageResult, get, post } from '@/utils/request'
import type { CategoryTopItem } from '@/types/category'
export type * from '@/types/category'

// 小程序分类
export const getCategoryTop = () => {
  return get<CategoryTopItem[]>('/category/top')
}
