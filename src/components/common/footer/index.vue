<template>
	<div class="foot">
   	 	<router-link to="/buy" tag="dl">
   	 		<dt></dt>
   	 		<dd>购卖</dd>
   	 	</router-link>
	    <router-link to="/found" tag="dl">
	    	<dt></dt>
   	 		<dd>找尖货</dd>
	    </router-link>
	    <router-link to="/circle" tag="dl">
	    	<dt></dt>
   	 		<dd>圈儿</dd>
	    </router-link>
	    <router-link to="/trolley" tag="dl">
	    	<dt></dt>
   	 		<dd>购物车</dd>
	    </router-link>
	    <router-link to="/my" tag="dl">
	    	<dt></dt>
   	 		<dd>我的</dd>
	    </router-link>
   </div>
</template>

<script>
	export default{
		name:"foot",
		data(){
			return{}
		},
		methods:{
			
		},
		mounted(){
			let dl=document.getElementsByTagName("dl");
			for(let i=0;i<dl.length;i++){
				dl[i].addEventListener("click",(e) => {
					if(e.currentTarget.nodeName=="DL"){
						for(let j=0;j<dl.length;j++){
							dl[j].firstChild.style.backgroundPositionX="0";
							dl[j].style.color="#868a8d";
						}
						e.currentTarget.firstChild.style.backgroundPositionX="-1.0rem";
						e.currentTarget.style.color="black";
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.foot{
		width: 100%;
		height: 1.44rem;
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		display: -webkit-flex;
		justify-content: space-around;
		color: #868a8d;
		border-top: 0.01rem solid #c1c1c1;
		font-size: 0.3rem;
	}
	dl{
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding-top: 0.2rem;
	}
	dd{
		font-size: 0.3rem;
		font-weight: bold;
		text-align: center;
	}
	.foot dl dt{
		background-size: 1.68rem 2.91rem !important;
	}
	dl:nth-child(1){
		dt{
			width: 0.77rem;
			height: 0.43rem;
			background: url(../../../../static/foot_img/1.png) no-repeat 0 -1.80rem;
			/*margin-top: 0.23rem;*/
		}
		dd{
			width: 0.7rem;
			text-align: center;
			/*margin-top: 0.2rem;*/
		}
	}
	dl:nth-child(2){
		dt{
			width: 0.55rem;
			height: 0.43rem;
			background: url(../../../../static/foot_img/1.png) no-repeat 0 -0.6rem;
			/*margin-top: 0.22rem;
			margin-left: 0.06rem;*/
		}
		dd{
			/*margin-top: 0.18rem;*/
		}
	}
	dl:nth-child(3){
		dt{
			width: 0.55rem;
			height: 0.55rem;
			background: url(../../../../static/foot_img/1.png) no-repeat -0rem -1.20rem;
			/*margin-top: 0.15rem;*/
		}
		dd{
			text-align: center;
			/*margin-top: 0.15rem;*/
		}
	}
	dl:nth-child(4){
		dt{
			width: 0.68rem;
			height: 0.43rem;
			background: url(../../../../static/foot_img/1.png) no-repeat 0 -0rem;
			/*margin-top: 0.24rem;*/
		}
		dd{
			text-align: center;
			/*margin-top: 0.17rem;*/
		}
	}
	dl:nth-child(5){
		dt{
			width: 0.52rem;
			height: 0.52rem;
			background: url(../../../../static/foot_img/1.png) no-repeat 0 -2.38rem;
			/*margin-top: 0.16rem;*/
		}
		dd{
			text-align: center;
			/*margin-top: 0.14rem;*/
		}
	}
	.foot .high{
		color: black;
		dt{
			background-position-x: -1.0rem;
		}
	}
</style>