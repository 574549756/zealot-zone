<template>
  <header class="slider">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="project in projects">
        <img :src="`/img/projectImgs/${project.projectImg}`" alt="projectImg">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </header>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import "../../../assets/swiper/swiper.min.css"

export default {
	props: ["projects"],
	components: {
		swiper,
		swiperSlide
	},
	data() {
		return {
			imgPath: "../../../assets/projectImg",
			swiperOption: {
				observer: true,
				observeParents: true,
				spaceBetween: 30,
				centeredSlides: true,
				runCallbacksOnInit: false,
				loop: true,
				swiping: false,
				autoplay: {
					delay: 3500,
					disableOnInteraction: false
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
					dynamicBullets: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				}
			}
		}
	},
	methods: {
		callback() {}
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper
		}
	}
}
</script>
<style lang="scss">
img {
	width: 100%;
}
.slider {
	height: 400px;
}
.swiper-container {
	width: 100%;
	height: 100%;
}

.swiper-slide {
	text-align: center;
	font-size: 18px;

	/* Center slide text vertically */
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23b34242d5'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23b34242d5'%2F%3E%3C%2Fsvg%3E");
}
.swiper-pagination-bullet-active {
	background: #b34242d5;
}
</style>
