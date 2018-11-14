<template>
  <div id="app">
    <div class="container">
      <resumeBoard/>
    </div>
  </div>
</template>

<script>
import "./assets/reset.scss"
import resumeBoard from "./components/resumeBoard"
import router from "./router"
import topBar from "./components/topBar"
import store from "./store"

let pageWidth = window.innerWidth
styleTag.innerHTML = "html{font-size:" + pageWidth / 10 + "px;}"

export default {
	name: "App",
	components: {
		resumeBoard
	},
	store
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
	@return $px/$designWidth * 10 + rem;
}

.icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
p {
	color: #d2cfce;
	font-weight: 600;
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	background: url("./assets/Rose2kTiny.jpg") no-repeat center;
	background-size: cover;

	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>