<template>
	<div>
		<div class="title">热销推荐</div>
		<div class="list">
			<ul>
				<li class="list-item">
					<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="">
					<div class="list-item-text">
						<h3>故宫</h3>
						<p>东方宫殿建筑代表，世界宫殿建筑典范</p>
						<p><b>￥</b><span>20</span>起</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="bottom">查看所有产品</div>
	</div>
</template>
	
<script>
	export default {
		name: "indexHotRecommend"
	}

</script>
<style scoped>
	.title {
		width: 100%;
		height: .82rem;
		font-size: .28rem;
		color: black;
		background: #f5f5f5;
		display: flex;
		line-height: .82rem;
		padding-left: .26rem;
	}
	.list ul {
		

	}
	.list-item {
		display: flex;
		align-items: center;
		width: 100%;
		border-bottom: 1px solid #f5f5f5;
	}
	.list-item img {
		width: 1.4rem;
		height: 1.4rem;
		padding: .24rem;
	}
	.list-item-text {
		margin-left:-.04rem;
	}
	.list-item-text h3{
		font-size: .3rem;
		line-height: .48rem;
		color: #000;
	}
	.list-item-text p{
		font-size: .28rem;
		line-height: .52rem;
		color: #9e9e9e;
	}
	.list-item-text p:nth-of-type(1) {
		width: 4.32rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.list-item-text p b,.list-item-text p span {
		color: #ff8300;
	} 
	.list-item-text p span {
		font-size: .36rem;
    	padding: 0 .04rem;
	}
	.bottom {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: .88rem;
		color: #00afc7;
		font-size: .28rem;
	}
</style>
