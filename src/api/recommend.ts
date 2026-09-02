import { type PageResult, get, post } from '@/utils/request'
import type { HotResult } from '@/types/recommend'

// 特惠推荐
export const getdata = (
  url: string,
  d?: {
    page: number
    pageSize: number
    subType?: string
  }
) => {
  return get<HotResult>(url, d)
}
