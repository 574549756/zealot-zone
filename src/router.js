import Vue from "vue"
import Router from "vue-router"
import about from "./views/about"
import project from "./views/project"
import blog from "./views/blog"
import sketch from "./views/sketch"
import projectDetail from "./components/TabContent/portfolio/projectDetail"

Vue.use(Router)

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "normal",
			component: undefined
		},
		{
			path: "/ability",
			name: "ability",
			component: sketch
		},
		{
			path: "/about",
			name: "about",
			component: about
		},
		{
			path: "/project",
			name: "project",
			component: project,
			children: [
				{
					path: "/project/detail/:id",
					name: "project",
					component: projectDetail
				}
			]
		},
		{
			path: "/blog",
			name: "blog",
			component: blog
		}
	]
})
