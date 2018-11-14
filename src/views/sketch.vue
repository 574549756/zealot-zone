<template>
  <div>
    <div class="Tab-inner-unfold">
      <h2>03</h2>
      <h1>Before Coding</h1>
    </div>
    <div class="clickBox">
      <router-link to="/" class="cross">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cross"></use>
        </svg>
      </router-link>
      <div class="preAndNext">
        <router-link to="/blog" class="pre">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </router-link>
        <div class="next">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </div>
      </div>
      <main class="inner-container">
        <skills/>
      </main>
    </div>
  </div>
</template>
<script>
import skills from "../components/TabContent/skills"
export default {
	components: {
		skills
	}
}
</script>

<style lang="scss">
.router {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 100px;
	main.inner-container {
		display: block;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: scroll;
		&::-webkit-scrollbar {
			display: none;
		}
		main.skills-container {
			color: rgb(255, 255, 255);
			display: block;
			width: 900px;
			height: 1000px;
			flex-direction: column;
			.row1 {
				border: 1px solid red;
				width: 100%;
				display: flex;
				height: 100%;
				flex: 1;
			}
		}
	}
}
</style>
