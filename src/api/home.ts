import { get, post } from '@/utils/request'

// 获取广告
export const getAd = () => {
  return get('/home/banner')
}
