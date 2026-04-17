import { useMemberStore } from '@/stores'

const BASEURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpconfig = {
  // 请求拦截器
  invoke(requestdata: UniApp.RequestOptions) {
    if (!requestdata.url.startsWith('http'))
      requestdata.url = BASEURL + requestdata.url
    // 超时时间
    requestdata.timeout = 39000
    // 请求头
    const token = useMemberStore().profile?.token
    requestdata.header = {
      ...requestdata.header,
      'source-client': 'miniapp',
      Authorization: token, // token
    }
  },
}
uni.addInterceptor('request', httpconfig)
uni.addInterceptor('uploadFile', httpconfig)

const request = (data: any) => {
  return new Promise((resolve, reject) => {
    uni.request({
      ...data,
      // 响应拦截器
      success(res: any) {
        if ((res.statusCode + '').startsWith('2')) return resolve(res.data)
        if (res.statusCode == 401) {
          useMemberStore().clearProfile()
          uni.navigateTo({
            url: '/pages/login/login',
          })
          uni.showToast({
            title: res.data.msg || '请先登录',
            icon: 'none',
          })
          return reject(res)
        }
        uni.showToast({
          title: res.data.msg || '访问错误',
          icon: 'none',
        })
        reject(res)
      },
      fail(err: any) {
        uni.showToast({
          title: '网络错误',
          icon: 'none',
        })
        reject(err)
      },
    })
  })
}

type Response<T> = {
  code: number
  msg: string
  result: T
}
export type PageResult<T> = {
  /** 列表数据 */
  items: T[]
  /** 总条数 */
  counts: number
  /** 当前页数 */
  page: number
  /** 总页数 */
  pages: number
  /** 每页条数 */
  pageSize: number
}

export const get = <T>(url: string, data?: any) => {
  return request({
    url,
    data,
    method: 'GET',
  }) as Promise<Response<T>>
}
export const post = <T>(url: string, data?: any) => {
  return request({
    url,
    data,
    method: 'POST',
  }) as Promise<Response<T>>
}
