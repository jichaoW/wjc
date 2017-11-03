<template>
	<div class="mp-header">
		<span class="iconfont icon-xiangzuo"></span>
		<div class="mp-header-title">
			<span class="iconfont icon-fangdajing"></span>
			<span class="mp-single-line">输入城市/景点/游玩主题</span>
		</div>
		<div class="mp-header-right">
			<span class="mp-nav-city">北京<i class="tri-down"></i></span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'header'
	}
</script>
<style>
	.mp-header{
		height: .88rem;
		background-color: #00bcd4;
		display: flex;
	}
	.icon-xiangzuo{
		float: left;
		width: .60rem;
		height: .88rem;
		line-height: .88rem;
		font-size: .44rem;
		color: #fff;
		text-align: center;
		margin-right: .2rem;
	}
	.mp-header-title{
		float: left;
		/*width: 5.38rem;*/
		flex: 1;
		height: 0.6rem;
		background-color: #fff;
		border-radius: .06rem;
		margin: .14rem 0;
		color: #e4e7ea;
		line-height: .6rem;
		position: relative;
	}
	.mp-single-line{
		position: absolute;
		left: .6rem;
		top: 0;
	}
	.icon-fangdajing{
		position: absolute;
		left: .2rem;
		top: .02rem;
	}
	.mp-header-right{
		height: .88rem;
		line-height: .88rem;
		float: right;
	}
	.mp-nav-city{
		height: .88rem;
		float: left;
		width: 1.12rem;
		position: relative;
		padding-left: .2rem;
		color: #fff;
	}
	.tri-down{
		position: absolute;
		left: .82rem;
		top: 0.4rem;
		width: 0;
		height:0;
		border-left:.12rem solid transparent;
		border-right: .12rem solid transparent;
		border-top: .12rem solid #fff;
	}
</style>