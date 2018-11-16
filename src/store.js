import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		selectTab: {
			about: false,
			project: false,
			blog: false,
			ability: false,
			normal: true
		},
		aboutMe: {
			personalInfo: {},
			connection: [],
			skillsLeft: [
				{
					icon: "socialjavascript",
					content:
						"在不使用框架的前提下能够使用原生 JS 常用 API 完成部分需求。熟悉 jQuery 常用API，能使用jQuery制作网站、轮播、tab组件等",
					progress: 80
				}
			],
			skills: [
				{
					icon: "html",
					content:
						"熟练编写语义化 HTML 能使用 HTML5 CSS3 独立制作精美网页，掌握CSS3动画、过渡效果、响应式等常用技术",
					progress: 80
				},
				{
					icon: "node-js",
					content:
						"了解 Node.js 的一些知识，能够使用 Node.js 搭建小型服务器，根据请求的 URL 返回指定数据。能够使用express进行ssr项目的搭建。",
					progress: 30
				},
				{
					icon: "language-css",
					content:
						"移动端页面 会使用 rem、vw/vh 等技术制作适配手机设备的页面，能够在项目中使用 Scss 预处理工具",
					progress: 80
				},
				{
					icon: "vuejs",
					content:
						"熟悉Vue常用功能如：组件、Vue-Router、vuex、双向绑定、数据响应原理等",
					progress: 60
				},
				{
					icon: "http",
					content:
						"了解 HTTP 基础知识，了解常见状态码的含义，能够根据请求查看响应。",
					progress: 60
				}
			],
			jobExperience: []
		}
	},
	mutations: {},
	actions: {}
})
