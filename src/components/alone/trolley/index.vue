<template>
	<div class="box">
		<div ref="wrapper" class="wrapper">
		<div class="c">
			
			<div v-for="(item,index) in list" v-if="item.tit">
				<div class="rank">
					<img src="../../../assets/trolley/btn_checkbox_n.png" class="top-radio"/>
					<div class="lt" @click="jump_autotrophy(item.url)">
						<img src="../../../assets/trolley/ic_shop.png"/>
						<span>{{item.tit}}</span>
						<img src="../../../assets/trolley/ic_arrows_right.png"/>
					</div>
					<div class="gt" @click="jump_coupon" v-if="item.coupon">
						领券
					</div>
				</div>
				<ul class="list">
					<li v-for="(val,ind) in item.indent">
						<img src="../../../assets/trolley/btn_checkbox_n.png" class="list-radio" v-if="val.num > 0 && !val.isCheck" @click="theRadio(ind)"/>
						<img src="../../../assets/trolley/btn_checkbox_p.png" class="list-radio" v-else-if="val.num > 0 && !!val.isCheck" @click="theRadio(ind)"/>
						<div class="lt"><img :src="val.src"/><div class="hint" v-if="val.num < 1">没货</div></div>
						<div class="ct">
							<p>{{val.name}}</p>
							<p class="glup">{{val.alt}}</p>
							<p>￥{{val.price}} </p>
						</div>
						<div class="gt">×{{val.buy}}</div>
					</li>
				</ul>
			</div>
		

		        
		  </div>
		</div>
		<div class="purchase">
			<div class="left">
				<div class="radio" @click="checkAll(!checkAllFlag)">
					<img src="../../../assets/trolley/btn_checkbox_n.png" alt=""  class="circle" v-if="!checkAllFlag"/>
					<img src="../../../assets/trolley/btn_checkbox_p.png" class="circle" v-else="!checkAllFlag"/>
					<span>全选</span>
				</div>
				<div class="total">
					<p>总计：￥{{total | convert}}元</p>
					<p v-if="isFreight">(含运费)</p>
					<p v-else="!isFreight">(不含运费)</p>
				</div>
			</div>
			<div class="wind">
				结算
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll";
	export default{
		name:"trolley",
		data(){
			return {
				"list":[],
				'checkAllFlag':false,
				"total":0,
				"isFreight":false
			}
		},
		filters:{
			convert:function(val,type){
				if(!val) return "0.00";
				return val.toFixed(2);
			}
		},
		methods:{
			jump_autotrophy:function(url){
				this.$router.push(url)
			},
			jump_coupon:function(){
				this.$router.push('coupon')
			},
			checkAll:function(val){
				this.checkAllFlag=val;
				this.Picker();
			},
			theRadio:function(val){
				this.Picker(val)
			},
			Picker:function(val){
				this.total=0;
				let checkAll=true;
				for (let key in this.list) {
					for (let index in this.list[key]) {
						if(index=="indent"){
							if(val){
								if(!this.list[key][index][val].isCheck && this.list[key][index][val].num ){
									this.$set(this.list[key][index][val] , "isCheck" , true);
								}else{
									this.$set(this.list[key][index][val] , "isCheck" , false);
								}
//								console.log(this.list[key][index][val].isCheck)
								
							}else{
								for (let ind in this.list[key][index]) {
									if(this.checkAllFlag){
										this.list[key][index][ind].isCheck=true;
									}else{
										this.list[key][index][ind].isCheck=false;
									}
								}
							}
							for (let k in this.list[key][index]) {
								if(this.list[key][index][k].isCheck && this.list[key][index][k].num){
									this.total+=parseFloat(this.list[key][index][k].price)*parseFloat(this.list[key][index][k].num);
									if(this.list[key][index][k].freight){
										this.isFreight=true;
									}
								}
								if(!this.list[key][index][k].isCheck && this.list[key][index][k].num){
									checkAll=false;
								}
								if(checkAll){
									this.checkAllFlag=true;
								}else{
									this.checkAllFlag=false;
								}
							}
						}
					}
				}
			}
		},
		mounted(){
			this.$axios.get("./static/trolley/goods_list.json").then(
				(res) => {
						this.list=res.data.goods_list
						this.$nextTick(() => {
						this.scroll=new BScroll(this.$refs.wrapper,{
						   // scrollY: true,
						    click: true
						})
					})
				},
				(err) => {
					console.log(err)
				}
			)
			
		}
	}

</script>

<style lang="less" scoped>
.content{
	
}
.wrapper{
	position: absolute;
	top: 0;
	bottom: 1.41rem;
	left: 0;
	right: 0;
	overflow: hidden;
	background: #f1f1f1;	
}
	.rank,.list li{
		position: relative;
	}
	.list-radio{
		position: absolute;
		width: 0.6rem;
		height: 0.6rem;
		top: 0.97rem;
		left: 0.3rem;
	}
	.top-radio{
		position: absolute;
		width: 0.6rem;
		height: 0.6rem;
		top: 0.3rem;
		left: 0.3rem;
	}
	.box{
		width: 100%;
		position: absolute;
		top: 1.44rem;
		left: 0;
		right: 0;
		bottom: 1.44rem;
		.rank{
			width: 100%;
			display: flex;
			display: -webkit-flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding-left: 1.2rem;
			line-height: 1.2rem;
			background: #FFF;
			border-bottom:0.03rem #e1e1e1 solid;
			font-size: 0.42rem;
			.lt{
				display: flex;
				display: -webkit-flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				font-size: 0.42rem;
				font-weight: bold;
				img:nth-child(1){
					width: 0.54rem;
					height: 0.5rem;
				}
				img:last-child{
					width: 0.26rem;
					height: 0.42rem;
				}
				span{
					margin: 0 0.34rem;
				}
			}
			.gt{
				font-size: 0.46rem;
				padding: 0 0.26rem;
				color: #ff0096;
				font-weight: bold;
			}
		}
		.list{
			width: 100%;
			overflow: hidden;
			list-style: none;
			li{
				width: 100%;	
				display: flex;
				display: -webkit-flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				height: 2.54rem;
				border-bottom: 0.06rem #e0e0e0 solid;
				padding: 0 0.4rem 0 1.1rem;
				.lt{
					position:relative;
					img{
						width: 2.08rem;
						height: 2.08rem;
						display: block;
					}
					.hint{
						position: absolute;
						bottom: 0;
						font-size: 0.4rem;
						color: #fffefe;
						text-align: center;
						line-height: 0.88rem;
						width: 100%;
					}
				}
				.ct{
					padding: 0 0.3rem;
					color: #9d9d9d;
					p{
						width: 6.1rem;
						text-align: left;
						margin-top: 0.1rem;
						font-size: 0.34rem;
						/*overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;*/
						&.glup{
							color: #c1c1c1;
						}
					}
				}
				.gt{
					font-size: 0.34rem;
				}
			}
		}
		.purchase{
			width: 100%;
			position: absolute;
			bottom: 0;
			display: flex;
			display: -webkit-flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			height: 1.41rem;
			border-top: 0.03rem #eaeaea solid;
			.left{
				flex: 1;
				display: flex;
				display: -webkit-flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				.radio{
					display: flex;
					display: -webkit-flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					font-size:0.44rem;
					img{
						width: 0.6rem;
						height: 0.6rem;
						margin: 0 0.3rem;
					}
				}
				.total{
					font-size: 0.4rem;
					padding-right: 0.6rem;
					text-align: left;
					p:first-child{
						color: #ff0882;
						font-weight: 700;
					}
					p:last-child{
						color: #a5a5a7;
					}
				}
			}
			.wind{
				width: 3rem;
				height: 1.41rem;
				background: #ff0e96;
				color: #fff;
				font-size: 0.5rem;
				line-height: 1.41rem;
			}
		}
	}
</style>