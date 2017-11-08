<template>
	<div class="activity-list">
		<ul class="activity-location">
			<li class="around">
				<span class="iconfont icon-dingwei"></span>
				定位失败
			</li>
			<li class="near-sight">
				<span class="iconfont icon-diqiu_"></span>
				5折泡温泉
			</li>
		</ul>
		<ul class="activity-item-con">
			<li class="activity-item activity1"></li>
			<li class="activity-item activity2"></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'activity'
	}
</script>

<style>
	.activity-list {
		overflow: hidden;
	}
	.activity-location {
		overflow: hidden;
		width: 100%;
		background: #fff;
		border-top: .01rem solid #ccc;
	}
	.around, .near-sight {
		overflow: hidden;
		float: left;
		width: 49%;
	    height: .98rem;
	    font-size: .28rem;
	    color: #212121;
	    line-height: .98rem;
	    text-align: center;
	}
	.around {
		border-right: .01rem solid #ccc;
	}
	.icon-dingwei, .icon-diqiu_ {
	    color: #616161;
	    font-size: .32rem;
	}
	.activity-item-con {
		overflow: hidden;
		width: 100%;
	    margin-top: .2rem;
	    background-color: #fff;
		border-top: .01rem solid #ccc;
		border-bottom: .01rem solid #ccc;
	}
	.activity-item {
		float: left;
		width: 49%;
		position: relative;
	    height: 1.4rem;
	    line-height: 1.4rem;
	    color: #212121;
	    font-size: .28rem;
	}
	.activity1 {
		background: url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) center center no-repeat;
    	background-size: auto 100%;
    	border-right: .01rem solid #ccc;
	}
	.activity2 {
		background: url(http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png) center center no-repeat;
    	background-size: auto 100%;
	}
	

</style>