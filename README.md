# 说明文档

小兔鲜项目，由 uniapp 开发，主要为学习用途

## 开始

### 创建项目

#### hbuilder 创建

选择默认模板和 vue3
小程序工具需开启服务端口
可选择窗口分离
手机调试需 id

#### 命令行创建

// cmd
npx degit dcloudio/uni-preset-vue#vite-ts _
cd _
npm i # 安装依赖
npm run dev:mp-weixin # 编译小程序

小程序工具导入 dist 目录

##### vscode 适配

// 插件
uni-create-view // 创建页面
uni-helper // uni 提示
uniapp 小程序扩展

// 配置
"files.associations": {
"\*.json": "jsonc" // 允许注释
}
npx prettier --write . --list-different # 格式化全部代码

##### ts 适配

// cmd
npm i -D @types/wechat-miniprogram @uni-helper/uni-app-types
npm i -D @uni-helper/uni-ui-types

// tsconfig.json
"types": [
"@dcloudio/types",
"@types/wechat-miniprogram",
"@uni-helper/uni-app-types",
"@uni-helper/uni-ui-types"
]

### 目录结构

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

### pages.json 配置

{
"pages": [ // 路由及页面配置，第一个路由为入口
{
"path": "页面路径",
"style": {
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
"globalStyle": { // 默认配置
"navigationBarTextStyle": "标题颜色",
"navigationBarTitleText": "标题内容",
"navigationBarBackgroundColor": "标题背景",
"backgroundColor": "背景颜色"
},
"uniIdRouter": {} // uniid 路由
}

### 配置组件库

// cmd
npm i @dcloudio/uni-ui

// pages.json
"easycom": {
"autoscan": true,
"custom": {
"^uni-(.\*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
}
},

### pinia 持久化

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

### 杂项

uni.previewImage({ // 小程序大图查看
urls: [] // 所有大图
current: url // 当前大图
})
