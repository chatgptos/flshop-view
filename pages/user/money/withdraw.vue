<template>
	<view class="wanl-withdraw">
		<view class="edgeInsetTop"> </view>
		<view class="padding-tb-bj" @tap="$flbooth.to('/pages/user/bank/bank?choice=1')">
			<view class="bank" v-if="bankData">
				<image :src="`/static/images/bank/${bankData.bankCode}.png`"></image>
				<view class="content">
					<text>{{bankData.bankName}}</text>
					<view class="wanl-gray">
						<text>尾号 {{getCode(bankData.cardCode)}} {{getType(bankData.cardType)}}</text>
					</view>
				</view>
				<view class="action">
					<text class="wlIcon-fanhui2"></text>
				</view>
			</view>
			<view class="bank" v-else>
				<view class="content" style="height: 80rpx; line-height: 80rpx;">
					<text>选择提现账户</text>
				</view>
				<view class="action">
					<text class="wlIcon-fanhui2"></text>
				</view>
			</view>
		</view>
		
		<view class="padding-bj bg-white money">
			<view class="text-lg">
				<text>提现金额</text>
				<text class="text-sm wanl-gray" v-if="servicefee > 0">（费率 {{servicefee/10}}%）</text>
			</view>
			<view class="margin-tb-bj price">
				<view class="symbol">
					<text>￥</text>
				</view>
				<input type="digit" maxlength="5" focus @input="replaceInput"/>
				<view class="text-lg wanl-gray-light" @tap="emptyInput" v-if="money">
					<text class="wlIcon-shibai"></text>
				</view>
			</view>
			<view class="solid-top padding-top-bj">
				<block v-if="servicefee > 0">
					<text class="wanl-gray-light">服务费</text>
					<text class="text-price text-orange margin-left-xs">{{servicemoney}}</text>
					<text class="wanl-gray-light">，</text>
				</block>
				<text class="wanl-gray-light">可用余额</text>
				<text class="wanl-gray-light margin-lr-xs text-price">{{usermoney}}</text>
				<text class="text-orange" v-if="usermoney > 0" @tap="moneyAll">全部</text>
			</view>
		</view>
		<view class="padding-bj margin-top">
			<!-- 1.0.5升级 -->
			<button class="mix-btn wanl-bg-redorange" :loading="loading" :disabled="loading" @tap="withdraw">提现</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bankData: null,
				usermoney: 0,
				money: null,
				servicemoney: 0,
				servicefee: 0,
				loading: false
			};
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			async loadData() {
				this.$api.post({
					url: '/flbooth/pay/initialWithdraw',
					success: res => {
						//更新全局金额
						this.setMoney(res.money);
						//获取提现账户
						this.bankData = res.bank;
						// 服务费
						this.servicefee = res.servicefee;
					}
				});
			},
			withdraw(){
				// 1.0.5升级 修复针对多次点击
				if(this.loading) return;
				this.loading = true;
				// 1.0.6升级
				let money = parseFloat(this.money),
					usermoney = parseFloat(this.usermoney);
				if(!this.bankData){
					this.$flbooth.msg('请选择账号');
					return;
				}
				if(money <= 0){
					this.$flbooth.msg('请填写正确金额');
					return;
				}
				if(money > usermoney){
					this.$flbooth.msg('提现金额不能超过 ' + usermoney + ' 元');
					return;
				}
				this.$api.post({
					url: '/flbooth/pay/withdraw',
					data: {
						money: money,
						account_id: this.bankData.id
					},
					success: res => {
						this.setMoney(res);
						// 1.0.5升级
						this.loading = false;
						// 跳转成功
						this.$flbooth.to('/pages/page/success?type=withdraw');
					}
				});
			},
			setMoney(money){
				this.usermoney = money;
				this.$store.commit('user/setUserInfo', {money: money});
			},
			replaceInput(e){
				this.money = e.target.value;
				this.servicemoney = e.target.value > 0 ? (e.target.value*this.servicefee/1000).toFixed(2) : 0;
			},
			emptyInput(){
				this.money = null;
			},
			moneyAll(){
				this.money = this.usermoney;
			},
			getCode(str){
				str = str.replace(/\s+/g,"");
				return str.substring(str.length-4);
			},
			getType(key){
				return ['储蓄卡', '信用卡'][key];
			}
		}
	}
</script>

<style>
	
	.wanl-withdraw .money .symbol{
		font-size: 60rpx;
		margin-right: 10rpx;
	}
	
	.wanl-withdraw .money .price{
		display: flex;
		align-items: center;
	}
	.wanl-withdraw .money .price input{
		/* #ifdef MP */
		height: 100rpx;
		min-height: 100rpx;
		/* #endif */
		width: 100%;
		font-size: 100rpx;
	}
	
	.wanl-withdraw .bank{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #ffffff;
		padding: 20rpx 25rpx;
	}
	.wanl-withdraw .bank image{
		width: 100rpx;
		height: 100rpx;
		margin-right: 25rpx;
	}
	.wanl-withdraw .bank .content{
		flex: 1;
	}
	.wanl-withdraw .bank .action{
		
	}
</style>
