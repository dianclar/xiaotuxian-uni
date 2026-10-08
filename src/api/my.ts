import { type PageResult, get, put } from '@/utils/request'
import type { ProfileDetail } from '@/types/my'
export type * from '@/types/my'

// 获取个人信息
export const getMemberProfileAPI = () => {
  return get<ProfileDetail>('/member/profile')
}

type ProfileParams = Pick<
  ProfileDetail,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  /** 省份编码 */
  provinceCode?: string
  /** 城市编码 */
  cityCode?: string
  /** 区/县编码 */
  countyCode?: string
}
// 修改个人信息
export const putMemberProfileAPI = (data: ProfileParams) => {
  return put<ProfileDetail>('/member/profile', data)
}
