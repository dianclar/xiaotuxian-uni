# 说明文档

小兔鲜项目，由uniapp开发，主要为学习用途

## 开始

### 创建项目

#### hbuilder创建

选择默认模板和vue3
小程序工具需开启服务端口
可选择窗口分离
手机调试需id

### 目录结构
uniapp
├pages						页面文件目录
├static						静态资源目录
├unpackage					编译资源目录
├App.vue 					vue根文件
├index.html					挂载文件
├main.js					入口文件
├manifest.json				打包配置文件
├pages.json					页面配置文件
├uni.promisify.adaptor.js
└uni.scss					常用变量样式

### pages.json配置

{
	"pages": [ // 路由及页面配置，第一个路由为入口
		{
			"path": "页面路径",
			"style": {
				"navigationBarTitleText": "标题内容"
			}
		}
	],
	"tabBar": { // 底栏配置，路径需在pages注册，至少需要俩个
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
	"uniIdRouter": {} // uniid路由
}
