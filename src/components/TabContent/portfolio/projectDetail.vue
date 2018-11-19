<template>
  <div class="banner">
    <router-link to="/project" class="clickArea-backToProject">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cross"></use>
      </svg>
    </router-link>
    <div class="banner-inner">
      <p>{{currentProject}}</p>
      <img :src="`/img/projectImgs/${currentProject.projectImg}`" alt="projectImg">
      <div class="detail-projectInfo">
        <header class="infoTitle">
          <h1>{{currentProject.name.split(' ')[0]}}</h1>
          <h2>{{currentProject.name.split(' ')[1]}}</h2>
          <div class="slider-techStackIcon">
            <svg class="icon" aria-hidden="true" v-for="projectIcon in currentProject.projectIcons">
              <use v-bind:xlink:href="`#icon-${projectIcon}`"></use>
            </svg>
          </div>
        </header>
      </div>
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
			return result[0]
		}
	}
}
</script>

<style lang="scss">
.banner {
	padding: 30px 0;
	z-index: 10;
	background: #222020;
	display: flex;
	flex: 1;
	justify-content: center;
	position: relative;
	.clickArea-backToProject {
		position: absolute;
		right: 0;
		top: 0;
		svg {
			width: 30px;
			height: 30px;
		}
	}
	.banner-inner {
		display: flex;
		flex-direction: column;
		flex: 1;
		background: #222020;
		.detail-projectInfo {
			.infoTitle {
				display: flex;
				justify-content: flex-start;
				align-items: flex-end;
				.slider-techStackIcon {
					margin-left: 30px;
					display: flex;
					flex-wrap: wrap;
					justify-content: flex-start;
					align-items: flex-end;
					svg {
						padding: 1px;
						width: 30px;
						height: 30px;
						background: #b34242d5;
						margin-right: 10px;
						border: 1px solid #b34242d5;
						align-items: center;
						border-radius: 13px;
						margin-bottom: 8px;
					}
				}
				h1 {
					margin: 0;
				}
			}
		}
	}
}
</style>
