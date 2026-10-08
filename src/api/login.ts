import { type PageResult, get, post } from '@/utils/request'
import type { LoginResult } from '@/types/login'
export type * from '@/types/login'

// 小程序登录
export const postLoginWxMinAPI = (d: Record<string, any>) => {
  return post<LoginResult>('/login/wxMin', d)
}
// 小程序登录测试
export const postLoginWxMinSimpleAPI  = (d: Record<string, any>) => {
  return post<LoginResult>('/login/wxMin/simple', d)
}