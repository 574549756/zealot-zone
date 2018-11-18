<template>
  <main class="skills-container">
    <swiper v-if="!$route.params.id" v-bind:projects="$store.state.aboutMe.portfolio"/>
    <projectsList v-if="!$route.params.id" :projects="$store.state.aboutMe.portfolio"/>
    <router-view></router-view>
  </main>
</template>
<script>
import swiper from "./portfolio/swiper"
import projectsList from "./portfolio/projectsList"
export default {
	components: {
		swiper,
		projectsList
	}
}
</script>
<style lang="scss">
.skills-container {
	position: relative;
}
.slider {
	margin-bottom: 60px;
}
.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
</style>
