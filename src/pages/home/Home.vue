<template>
	<div>
		<index-header />
		<swiper />
		<indexIconSwiper/>
		<activity />
	</div>
</template>
<script>
	import header from './components/Header'
	import swiper from './components/Swiper'
	import indexIconSwiper from './components/IndexIconSwiper'
	import activity from './components/Activity'
	import axios from 'axios'
	import {AJAX_GET_DATA} from './types.js'
	import { mapState, mapActions } from 'vuex'
	// import { swiper, swiperSlide } from 'vue-awesome-swiper';

	export default {
		name: "home",
		data() {
			return {
				iconSwiperInfo: []
			}
		},
		mounted() {
			this.$store.dispatch(AJAX_GET_DATA);
		},
		components: {
			"indexHeader" : header,
			"swiper" : swiper,
			"activity" : activity,
			"indexIconSwiper" : indexIconSwiper
		}

	}
</script>
<style>
</style>