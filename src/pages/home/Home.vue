<template>
	
	<div>
	<index-header />
	<swiper />
	</div>
</template>
<script>
	import header from './header.vue';
	import swiper from './swiper.vue';
	// import { swiper, swiperSlide } from 'vue-awesome-swiper';
	export default {
		name: "home",
		data() {
			return {
				msg: "home"
			}
		},
		components: {
			"index-header" : header,
			"swiper" : swiper
		}
	}
</script>
<style>
</style>