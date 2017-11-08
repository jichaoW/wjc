<template>
	
	<div>
	<index-header />
	<swiper />
	<indexHotRecommend />
	</div>
</template>
<script>
	import header from './header.vue';
	import swiper from './swiper.vue';
	// import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import indexHotRecommend from './indexHotRecommend.vue';
	export default {
		name: "home",
		data() {
			return {
				msg: "home"
			}
		},
		components: {
			"indexHeader" : header,
			"swiper" : swiper,
			"indexHotRecommend" : indexHotRecommend
		}
	}
</script>
<style>
</style> 