import Vue from "vue"
import Router from "vue-router"
import about from "./views/about"
import project from "./views/project"
import blog from "./views/blog"
import sketch from "./views/sketch"

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
			component: project
		},
		{
			path: "/blog",
			name: "blog",
			component: blog
		}
	]
})
