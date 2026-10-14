# 说明文档

小兔鲜项目，由 uniapp 开发，主要为学习用途

## 开始

### 创建项目

#### hbuilder 创建

选择默认模板和 vue3
小程序工具需开启服务端口
可选择窗口分离
可选择编译模式
手机调试需 id

#### 命令行创建

```
# cmd
npx degit dcloudio/uni-preset-vue#vite-ts _
cd _
pnpm i # 安装依赖
pnpm run dev:mp-weixin # 编译小程序
```

小程序工具导入 dist 目录

##### vscode 适配

// 插件
uni-create-view // 创建页面
uni-helper // uni 提示
uniapp 小程序扩展

// 配置

```
// .vscode\settings.json
"files.associations": {
    "\*.json": "jsonc" // 允许注释
}
```

```
# cmd
npx prettier --write . --list-different # 格式化全部代码
```

##### ts 适配

```
# cmd
pnpm i -D @types/wechat-miniprogram @uni-helper/uni-app-types
pnpm i -D @uni-helper/uni-ui-types
```

```
// tsconfig.json
"types": [
    "@dcloudio/types",
    "@types/wechat-miniprogram",
    "@uni-helper/uni-app-types",
    "@uni-helper/uni-ui-types"
]
```

### 目录结构

```
uniapp
    ├pages 页面文件目录
    ├static 静态资源目录
    ├unpackage 编译资源目录
    ├App.vue vue 根文件
    ├index.html 挂载文件
    ├main.js 入口文件
    ├manifest.json 打包配置文件
    ├pages.json 页面配置文件
    ├uni.promisify.adaptor.js
    └uni.scss 常用变量样式
```

### pages.json 配置

```
{
    "pages": [ // 路由及页面配置，第一个路由为入口
        {
            "path": "页面路径",
            "style": {
                "navigationStyle": "导航栏显隐",
                "navigationBarTextStyle": "状态栏颜色",
                "navigationBarTitleText": "标题内容"
            }
        }
    ],
    "tabBar": { // 底栏配置，路径需在 pages 注册，至少需要俩个
        "selectedColor": "选中标题颜色",
            {
                "pagePath": "底栏路径",
                "text": "底栏标题"
                "iconPath": "图标"
                "selectedIconPath": "选中图标"
            }
    },
    "subPackages": [ // 子包配置
    {
        "root": "子包根目录",
        "pages": [ // 子包页面配置
            {
                "path": "子包页面路径",
                "style": {
                    ...
                }
            }
        ]
    },
    "preloadRule": { // 子包预加载配置
        "触发开始加载页面": {
            network: "预加载网络",
            packages: ["预加载子包根目录"]
        }
    }
  ],
    "globalStyle": { // 默认配置
        "navigationBarTextStyle": "标题颜色",
        "navigationBarTitleText": "标题内容",
        "navigationBarBackgroundColor": "标题背景",
        "backgroundColor": "背景颜色"
    },
    "uniIdRouter": {} // uniid 路由
}
```

### 配置组件库

```
// cmd
pnpm i @dcloudio/uni-ui
```

```
// pages.json
"easycom": {
    "autoscan": true,
    "custom": {
        "^uni-(.\*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue" // 自动引入组件规则
    }
},
```

### pinia 持久化

```
// stores
persist: {
    storage: {
        getItem(key) {
            return uni.getStorageSync(key)
        },
        setItem(key, value) {
            uni.setStorageSync(key, value)
        },
    },
},
```

### 差异开发

```
// js
// #ifdef MP-WEIXIN || WEB || APP
// #endif
<!-- template -->
<!-- #ifdef 平台 -->
<!-- #endif -->
```

小程序不支持\*选择器
WEB 默认 scoped

### 分包

将资源分为多个包，减少首屏加载时间，预下载分包可提升进入分包页面的速度
配置分包参考上方 pages.json 配置 说明的 subPackages、preloadRule

### 打包项目

```
# cmd
npx @dcloudio/uvm *.*.* # 生成 uvm 依赖配置文件为指定版本，慎用
pnpm build:mp-weixin # 微信小程序
pnpm build:h5 # 浏览器
```

```
// manifest.json
"h5": {
    "router": {
        "base": "./" // 配置打包路径
    }
},
```

微信开发者工具上传 => 微信公众平台审核发布选择版本
APP 端 使用 HBuilderX 打包

### uniCloud

通过 js 开发服务端，提供云数据库等功能
登陆 uniCloud => 认证身份 => 建立服务空间 => 云数据库创建表
HBuilderX 根目录创建 uniCloud => 关联服务空间 => database 下载表结构 DB Schema 

### uni 小技能

#### 小程序大图查看

```
uni.previewImage({
    urls: [] // 所有大图
    current: url // 当前大图
})
```

#### 获取安全区域

const { safeAreaInsets } = uni.getSystemInfoSync()

#### 获取骨架屏

开发工具导航栏=>页面信息=>生成骨架屏
web 和 app 需要引入样式

#### 页面传参

onLoad 方法可以接受 url 参数，pages.json 里注册的页面才有 onLoad 方法
pages.json 里注册的页面的 defineProps 方法也可以接受 url 参数

#### 获取手机号

uni.login()

<button
open-type="getPhoneNumber"
@getphonenumber="onGetPhoneNumber" />

#### 获取图片

uni.chooseMedia()

#### 动态标题

```
uni.setNavigationBarTitle({
    title: "标题"
})
```

#### 滚动容器

<scroll-view
scroll-y // 允许纵向滚动
scroll-x // 允许横向滚动
refresher-enabled // 开启下拉刷新
:refresher-triggered="" // 下拉刷新状态
@scrolltolower="" // 滚动到底部时
@refresherrefresh="" // 下拉刷新时 />

#### 侧滑菜单

uni-swipe-action
uni-swipe-action-item
template #right // 侧滑菜单内容

#### 获取页面栈

getCurrentPages()

#### 微信小程序滚动动画

```
this.animate(
    'css选择器',
    [{}, // 初始css样式
     {}], // 结束css样式
    动画时长,
    {
      scrollSource: '滚动容器css选择器',
      timeRange: 时长倍率,
      startScrollOffset: 开始滚动位置,
      endScrollOffset: 结束滚动位置,
    }
  )
```

#### 倒计时组件

```
<uni-countdown
    :second="秒数"
    :show-day="显示天"
    :show-colon="显示冒号"
    @timeup="完成时"
/>
```

#### 复制

uni.setClipboardData({ data: "内容" })
