<template>
  <div class="skillsRadar">
    <div class="skillsIcon">
      <svg class="vue" aria-hidden="true">
        <use xlink:href="#icon-vuejs"></use>
      </svg>
      <svg class="node" aria-hidden="true">
        <use xlink:href="#icon-node-js"></use>
      </svg>
      <svg class="http" aria-hidden="true">
        <use xlink:href="#icon-http"></use>
      </svg>
      <svg class="cli" aria-hidden="true">
        <use xlink:href="#icon-minglinghang"></use>
      </svg>
      <svg class="html" aria-hidden="true">
        <use xlink:href="#icon-html"></use>
      </svg>
      <svg class="javascript" aria-hidden="true">
        <use xlink:href="#icon-socialjavascript"></use>
      </svg>
    </div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <div class="row-rightSkills">
      <div class="skillsJavaScript">
        <el-progress :percentage="toNumber(75)" :width="50" type="circle" color="#b34242d5"></el-progress>
        <svg class="javascript" aria-hidden="true">
          <use xlink:href="#icon-socialjavascript"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts")
// 引入柱状图组件
require("echarts/lib/chart/radar")
// 引入提示框和title组件
require("echarts/lib/component/tooltip")
require("echarts/lib/component/title")
export default {
	name: "hello",
	data() {
		return {
			msg: "Welcome to Your Vue.js App"
		}
	},
	mounted() {
		console.log("画图了")
		this.drawLine()
	},
	methods: {
		toNumber(number) {
			return number + 0
		},
		drawLine() {
			// 基于准备好的dom，初始化echarts实例
			let myChart = echarts.init(
				document.getElementById("myChart"),
				"dark"
			)
			// 绘制图表
			myChart.setOption({
				backgroundColor: "#222020",
				title: {},
				tooltip: {},
				legend: {},
				radar: {
					name: {
						textStyle: {
							color: "rgba(238, 197, 102,0)"
						}
					},
					shape: "circle",
					splitArea: {
						show: false
					},
					splitLine: {
						lineStyle: {
							color: [
								"rgba(102, 102, 102, 0.1)",
								"rgba(102, 102, 102, 0.2)",
								"rgba(102, 102, 102, 0.4)",
								"rgba(102, 102, 102, 0.6)",
								"rgba(102, 102, 102, 0.8)",
								"rgba(102, 102, 102, 1)"
							].reverse()
						}
					},
					axisLine: {
						lineStyle: {
							color: "rgba(102, 102, 102, 0.5)"
						}
					},
					indicator: [
						{ name: "Node.js", max: 100 },
						{ name: "CLI", max: 100 },
						{ name: "VUE", max: 100 },
						{ name: "JavaScript", max: 100 },
						{ name: "HTML", max: 100 },
						{ name: "HTTP", max: 100 }
					]
				},
				series: [
					{
						type: "radar",
						symbol: "none",
						lineStyle: {
							width: 1,
							opacity: 0.8
						},
						areaStyle: {
							normal: {
								opacity: 0.6,
								color: "#b34242d5"
							}
						},
						data: [
							{
								value: [30, 50, 60, 80, 85, 60],
								name: ""
							}
						]
					}
				]
			})
		}
	}
}
</script>

<style lang="scss">
.skillsRadar {
	margin-top: 50px;
	position: relative;
	display: flex;
	.header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 30px 0 20px 0;
		h3 {
			color: white;
			margin: 0 0 10px 4vw;
		}
		.breakLine {
			align-self: center;
			background-color: #bcbcbe;
			height: 1px;
			width: 25vw;
			z-index: 100;
			position: relative;

			&::before {
				position: absolute;
				top: -1px;
				display: block;
				content: "";
				align-self: flex-start;
				background: #f56c6c;
				height: 3px;
				width: 4.25vw;
			}
		}
	}
	.row-rightSkills {
		display: flex;
		.skillsJavaScript {
			svg {
				fill: #f8f8f8;
				height: 50px;
				width: 50px;
			}
		}
	}
	.skillsIcon {
		z-index: 10;
		left: 50px;
		top: 50px;
		position: absolute;
		svg {
			position: absolute;
			fill: #f3f3f5;
			width: 26px;
			height: 26px;
			background: #b34242d5;
			border-radius: 13px;
			border: 2px solid #b34242d5;
		}
		.vue {
			top: 150px;
			left: -25px;
		}
		.cli {
			left: -25px;
			top: 25px;
		}
		.node {
			left: 87px;
			top: -40px;
		}
		.http {
			fill: #f3f3f5;
			left: 200px;
			top: 25px;
		}
		.javascript {
			left: 87px;
			top: 215px;
		}
		.html {
			left: 200px;
			top: 150px;
		}
		.css {
			left: 136px;
			top: 135px;
		}
	}
}
</style>