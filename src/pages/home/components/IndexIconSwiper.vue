<template>
	<swiper :options="swiperOption" ref="mySwiper" class="icon-swiper-wrap">
		<swiper-slide v-for="(item, index) in swiperInfo" :key="index">
			<ul class="icon-swiper" >
				<li class="icon-swiper-item" v-for="innerItem in item" :key="innerItem.id">
					<router-link :to="innerItem.link">
						<img :src="innerItem.url" alt="" class="item-img">
						<p class="item-text">{{innerItem.title}}</p>
					</router-link>
				</li>
			</ul>
		</swiper-slide>
		<div class="swiper-pagination icon-swiper-dot" slot="pagination"></div>
	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	export default {
		data() {
      		return {
      			notNextTick: true,
        		swiperOption: {
	          		direction: 'horizontal',
	          		autoHeight: true,
	          		pagination: '.swiper-pagination',
	          		paginationClickable: true,
	          		observeParents: true,
	          		num: 0
        		}
      		}
	    },
	    computed: {
	    	swiperInfo() {
	    		const result = [];
	    		if(!this.$store.state.home.iconSwiperInfo) {
	    			console.log("1 没数据")
	    		}else{
	    			this.$store.state.home.iconSwiperInfo.forEach((value, index) => {
		    			let page = Math.floor(index / 8);
		    			if (!result[page]) {
		    				result[page] = [];
		    			}
		    			result[page].push(value);
		    		});
		    		return result;
	    		}
	    		
	    	}
	    },
	    components: {
	    	swiper,
	    	swiperSlide
	    }
	}
</script>

<style>
	.icon-swiper-wrap {
		height: 3.7rem;
	}
	.icon-swiper {
		position: relative;
		overflow: hidden;
	    padding-top: .1rem;
	    background-color: #fff;
	    width: 100%;
	    height: 3.7rem;
	    z-index: 2;
	}
	.icon-swiper-item {
		float: left;
	    width: 25%;
	    height: 1.3rem;
	    padding-top: .3rem;
	    text-align: center;
	}
	.item-img {
		display: inline-block;
	    border-radius: 20px;
	    width: .66rem;
	    height: .66rem;
	}
	.item-text {
		margin-top: .2rem;
	    color: #212121;
	    font-size: .28rem;
	}
	.icon-swiper-dot .swiper-pagination-bullet-active{
		background: #00bcd4;
	}
	
</style>