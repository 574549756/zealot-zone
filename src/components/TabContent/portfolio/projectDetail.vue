<template>
  <div class="banner">
    <div class="banner-inner">
      <router-link to="/project">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cross"></use>
        </svg>
      </router-link>
      <p>{{currentProject}}</p>
    </div>
  </div>
</template>
<script>
export default {
	mounted() {},
	computed: {
		currentProject() {
			var projectId = this.$route.params.id
			const result = this.$store.state.aboutMe.portfolio.filter(
				project => project.id === projectId
			)
			return result
		}
	}
}
</script>

<style lang="scss">
.banner {
	z-index: 10;
	background: #222020;
	display: flex;
	flex: 1;
	justify-content: center;
	.banner-inner {
		display: flex;
		flex: 1;
		background: #222020;
	}
}
</style>
