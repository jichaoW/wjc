<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
		<div class="img-con">
    		<img class="img-banner" src="https://img1.qunarzz.com/p/tts3/1708/3c/582ab57a6bbe0802.jpg_r_640x420x90_67fd9407.jpg" alt="">
    	</div>
    </swiper-slide>
    <swiper-slide>
		<div class="img-con">
    		<img class="img-banner" src="https://img1.qunarzz.com/p/tts9/1604/f6/20ea2d18972be1f7.jpg_r_640x420x90_5c00bf53.jpg" alt="">
    	</div>
    </swiper-slide>
    
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
   
  </swiper>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	export default {
    name: 'carrousel',
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          autoplay: 3000,
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          observeParents: true,
        }
      }
    },
    components: {
    	 swiper,
    	 swiperSlide
    }
  }
</script>
<style scoped>
 @import '../../../node_modules/swiper/dist/css/swiper.min.css';
	.img-con{
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	.img-banner{
		width: 100%;
	}
	.swiper-pagination-bullet{

	} 
	.swiper-pagination-bullet-active{
		background: red;
	}
</style>