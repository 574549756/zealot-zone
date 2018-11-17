<template>
  <header class="slider">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>
        <router-link to="/">aaaaa</router-link>
      </swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
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
	components: {
		swiper,
		swiperSlide
	},
	data() {
		return {
			swiperOption: {
				observer: true,
				observeParents: true,
				spaceBetween: 30,
				centeredSlides: true,
				runCallbacksOnInit: false,
				loop: true,
				swiping: false,
				autoplay: {
					delay: 2500,
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
.slider {
	height: 300px;
}
.swiper-container {
	width: 100%;
	height: 100%;
}
.swiper-slide {
	text-align: center;
	font-size: 18px;
	background: gray;
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
</style>
