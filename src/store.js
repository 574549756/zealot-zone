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
			skills: [],
			jobExperience: []
		}
	},
	mutations: {},
	actions: {}
})
