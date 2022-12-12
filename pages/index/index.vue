<template>
	<view class="content">
		<button @click="onFetch">点击测试请求</button>
	</view>
</template>

<script>
	import IndexService from '../../service/index/indexService.js'
	// 首页接口请求
	const indexService = IndexService.new()
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {},
		methods: {
			onFetch() {
				const resultCallback = (data, error) => {
					console.log({
						data, error
					})
				}
				console.log(indexService.getIndexInfo({}, resultCallback), '232323')
			},
			
			onclickToAabout() {
				let url = '/pages/about/about'
				uni.redirectTo({
					url: url,
					fail: arg => {
						console.log(arg)
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
