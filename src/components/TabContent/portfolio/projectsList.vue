<template>
  <main class="projectsList">
    <div class="projectInner" v-for="project in projects">
      <img :src="`/img/projectImgs/${project.projectImg}`" alt="projectImg">
    </div>
  </main>
</template>

<script>
export default {
	props: ["projects"]
}
</script>

<style lang="scss">
.projectsList {
	width: 900px;
}
img {
	width: 100%;
	height: 100%;
}
.projectsList {
	display: flex;
	flex-wrap: wrap;
	.projectInner {
		display: flex;
		width: 50%;
	}
}
</style>
