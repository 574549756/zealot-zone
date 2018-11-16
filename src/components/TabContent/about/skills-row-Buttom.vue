<template>
  <main class="skillsButtom">
    <div class="skillsContent">
      <el-progress :percentage="toNumber(70)" :width="50" type="circle" color="#b34242d5"></el-progress>
      <svg class="skillsIcon" aria-hidden="true">
        <use xlink:href="#icon-socialjavascript"></use>
      </svg>
      <div class="skillsDiscription">
        <p>在不使用框架的前提下能够使用原生 JS 常用 API 完成部分需求。熟悉 jQuery 常用API，能使用jQuery制作网站、轮播、tab组件等</p>
      </div>
    </div>
    <div class="skillsContent">
      <el-progress :percentage="toNumber(80)" :width="50" type="circle" color="#b34242d5"></el-progress>
      <svg class="skillsIcon" aria-hidden="true">
        <use xlink:href="#icon-html"></use>
      </svg>
      <div class="skillsDiscription">
        <p>熟练编写语义化 HTML 能使用 HTML5 CSS3 独立制作精美网页，掌握CSS3动画、过渡效果、响应式等常用技术</p>
      </div>
    </div>
    <div class="skillsContent">
      <el-progress :percentage="toNumber(30)" :width="50" type="circle" color="#b34242d5"></el-progress>
      <svg class="skillsIcon" aria-hidden="true">
        <use xlink:href="#icon-node-js"></use>
      </svg>
      <div class="skillsDiscription">
        <p>了解 Node.js 的一些知识，能够使用 Node.js 搭建小型服务器，根据请求的 URL 返回指定数据。能够使用express进行ssr项目的搭建。</p>
      </div>
    </div>
    <div class="skillsContent">
      <el-progress :percentage="toNumber(30)" :width="50" type="circle" color="#b34242d5"></el-progress>
      <svg class="skillsIcon" aria-hidden="true">
        <use xlink:href="#icon-node-js"></use>
      </svg>
      <div class="skillsDiscription">
        <p>了解 Node.js 的一些知识，能够使用 Node.js 搭建小型服务器，根据请求的 URL 返回指定数据。能够使用express进行ssr项目的搭建。</p>
      </div>
    </div>
    <div class="skillsContent">
      <el-progress :percentage="toNumber(30)" :width="50" type="circle" color="#b34242d5"></el-progress>
      <svg class="skillsIcon" aria-hidden="true">
        <use xlink:href="#icon-node-js"></use>
      </svg>
      <div class="skillsDiscription">
        <p>了解 Node.js 的一些知识，能够使用 Node.js 搭建小型服务器，根据请求的 URL 返回指定数据。能够使用express进行ssr项目的搭建。</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
	methods: {
		toNumber(number) {
			return number + 0
		}
	}
}
</script>

<style lang="scss">
.skillsButtom {
	height: 100%;
	width: 60%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-between;
	.skillsContent {
		width: 100%;
		padding: 10px;
		border-left: 2px solid #c75454;
		border-right: 2px solid rgb(26, 26, 26);
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
		display: flex;
		position: relative;
		margin-bottom: 20px;
		.el-progress__text {
			display: none;
		}
		.el-progress.el-progress--circle {
			height: 50px;
		}
		.skillsIcon {
			position: absolute;
			left: 25px;
			top: 25px;
			fill: #f8f8f8;
			height: 20px;
			width: 20px;
		}
		.skillsDiscription {
			margin-left: 20px;
			p {
				font-weight: normal;
				color: #b9b9b9;
				text-align: left;
			}
		}
	}
}
</style>
