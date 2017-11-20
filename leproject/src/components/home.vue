<template>
	<div id="home">
		<div class="heads">
			<span class="span1">桐乡</span>
			<h2>一传十传百</h2>
			<span class="span2" @click="tiaozhuan"><i class="iconfont icon-xiaoren"></i>我的</span>
		</div>

		<div class="search">
			<router-link to="/search" tag="div" class="lelesearch">
				<i></i>
				<span>输入商家名字/商家名称获取优惠</span>
			</router-link>
		</div>


		<div class="banner">
			<swipe class="my-swipe">
			  <swipe-item class="slide1">
			  	<img src="../assets/banner1.jpg" alt="">
			  </swipe-item>
			  <swipe-item class="slide2">
			  	<img src="../assets/banner3.jpg" alt="">
			  </swipe-item>
			  <swipe-item class="slide3">
			  	<img src="../assets/banner2.jpg" alt="">
			  </swipe-item>
			</swipe>
		</div>

		<div class="introduce">
			<ul>
				<li v-for="data,index in introlist" v-if="index%2 !=0" @click="clickIntro(data.ename)">
					<p class="pimg">
						<img :src="data.icon_url" alt="">
					</p>
					<p class="pname">
						{{data.name}}
					</p>

				</li>
			</ul>
		</div>

		<div class="detail">
			<p>本周推荐</p>
			<ul>
				<li v-for="data in datalist" @click="handelClick(data.id)">
					<div class="detaildiv">
						<div class="divimg">
							<img :src="data.image_240" alt="">
						</div>
						<div class="divmsg">
							<p class="p1"><i>{{data.city_name}}</i><span>{{data.store_name}}{{data.msg_name}}</span></p>

							<p class="p2">{{data.subtitle}}</p>
							<p class="p3">
							<span class="s1"><i>￥</i>{{data.price}}</span>/ 
							<span class="s2">{{data.origin_price}}</span>
							<span class="s3"><i class="iconfont icon-xiaoren" style="font-size: 10px;padding-right:3px;"></i>{{data.buy_num}}</span>
							</p>
						</div>
						
					</div>
				</li>
			</ul>
		</div>

		<div class="cheap">
				<router-link to="/search" tag="div" class="lelesearch">	
								查看所有优惠
				</router-link>
		    	<div class="ding" @click="clickTop">
		    		点击置顶
		    	</div>
		</div>

		<!-- 引入子组件 -->
		<foot></foot>

	</div>

</template>

<script>

import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from 'vue-swipe';

import axios from "axios";

//引入子组件 
import foot from "@/components/comment/foot";

import router from "@/router";//他会自动找index文件

import { Indicator } from 'mint-ui';


export default {

  name: 'home',

  data () {
    return {
    	introlist:[],
    	datalist:[],
    }
  },
  mounted(){
  	Indicator.open('Loading...');
	axios.get('/index.php?act=index&op=index&ajax=1').then(res=>{
		// console.log(res.data);
		console.log(res.data.category);
		// console.log(res.data.data);

		this.introlist=res.data.category;
		this.datalist=res.data.data;

		Indicator.close();
	})

  },

  // 点击跳转到详情页面
  methods:{
  	handelClick(id){
  		router.push(`/detail?id=${id}`);
  	},
  	clickTop(){
  		var scrollToTop = window.setInterval(function() {
  		    var pos = window.pageYOffset;
  		    if ( pos > 0 ) {
  		        window.scrollTo( 0, pos - 100 ); // how far to scroll on each step
  		    } else {
  		        window.clearInterval( scrollToTop );
  		    }
  		}, 16);
  	},
  	tiaozhuan(){
  		router.push(`/login`);
  	},

  	clickIntro(name){
  		router.push(`/detaillist?id=${name}`);
  	}
  },


  components:{
  	'swipe':Swipe,
  	'swipe-item':SwipeItem, //有横杠的需要写成字符串的相识
  	foot:foot,
  }
  

};
</script>

<style src="@/assets/iconfont/iconfont.css"></style>

<style lang="scss" scoped>
.heads{
	width:100%;
	height:0.88rem;
	background:#F64744;
	position:fixed;
	top:0;
	z-index: 99999;
	display:flex;
	justify-content:space-between;
	h2{
		width:3.1rem;
		color:#fff;
		font-size: 16px;
		text-align:center;
		line-height: 0.88rem;
	}
	.span1{font-size: 14px;color:#fff;line-height: 0.88rem;padding-left:0.2rem;
		i{padding-left:0.1rem;padding-top:0.1rem;}
	}
	.span2{font-size: 14px;color:#fff;line-height: 0.88rem;padding-right:0.2rem;
		i{padding-right:0.1rem;}
	}
}


.search{
	width:100%;
	height:0.64rem;
	padding-top:1.08rem;
	margin-bottom: 0.2rem;
	.lelesearch{
		margin:0 auto;
		font-size:14px;
		display:block;
		width:95%;
		border-radius: 3px;
		height: 0.64rem;
		border: 1px solid #e0e0e0;
		color:#666;
		text-decoration: none;
		line-height:0.64rem;
		position: relative;
		i{
			float:left;
			display:block;
			width:0.4rem;
			height:0.4rem;
			position:absolute;
			left:0.2rem;
			top:0.12rem;
			background:url("../assets/homesearch.png") no-repeat;
			background-size: 100% auto;
		}
		span{
			margin-left:33px;
		}
	}
}

.banner{
	height:2.24rem;
	background-color: #eee;
	padding-top:0.2rem;
	.my-swipe {
	  margin:0 auto;
	  width:96%;	
	  height: 2.24rem;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
	  img{
	  	width:100%;
	  	height:100%;
	  }
	}
	.slide1 {
	  background-color: #0089dc;
	  color: #fff;
	}

	.slide2 {
	  background-color: #ffd705;
	  color: #000;
	}

	.slide3 {
	  background-color: #ff2d4b;
	  color: #fff;
	}
}

.introduce{
	font-size: 14px;
	width:100%;
	height:3.14rem;
	margin-top:0.2rem;
	ul{
		width:100%;
		height:100%;
		box-sizing: border-box;	
		list-style: none;
		li{
			float:left;
			width:25%;
			height:1.54rem;
			box-sizing: border-box;
			border:1px solid #e0e0e0;
			flex-wrap:wrap;
			.pimg{
				width:100%;
				height:0.8rem;
				margin-top:0.2rem;
				img{
					width:0.8rem;
					height:0.8rem;
					margin-left:0.5rem;
				}
			}
			.pname{
				margin-top:0.1rem;
				text-align: center;
				font-size: 12px;
				color:#333;
			}
		}
	}
}


.detail{
	width:100%;
	padding-top:0.2rem;
	p{
		height:0.78rem;
		font-size: 14px;
		color:#333;
		padding-left:0.16rem;
		line-height:0.78rem;
		border-top:1px solid #e0e0e0;
		border-bottom:1px solid #e0e0e0;
	}
	li{
		width:100%;
		height:2.04rem;
		border-bottom: 1px solid #e0e0e0;
		font-size: 14px;
		.detaildiv{
			width:7.18rem;
			height:1.6rem;
			padding:10px 8px;
			.divimg{
				float:left;
				img{
					width:2.36rem;
					height:1.58rem;
				}
				margin-right:0.14rem;
			}
			.divmsg{
				p{
					border:0;
					height:0.4rem;
					line-height:0.4rem;
				}
				.p1{
					i{
						display:block;
						float:right;
						font-style: normal;
						color:#999;
						font-size: 12px;
					}
					span{
						// padding-left:7px;
						display:block;
						width:3.2rem;
						float:left;
						font-size: 16px;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}

				}
				.p2{
					span{

						// margin-left:7px;
					}
					
					color:#666;
					font-size: 12px;
				}
				.p3{
					margin-top:0.35rem;
					.s1{
						i{
							font-size: 16px;
							color:#F64744;
							font-style: normal;
							font-weight: 900;
						}
						font-size:22px;
						color:#F64744;
						padding-right:0.1rem;
					}
					.s2{
						text-decoration: line-through;
						font-size: 12px;
						color:#999;
					}
					.s3{
						float:right;
						font-size: 12px;
						color:#999;
					}
				}
			}
		}
	}
}



.cheap{
	width:100%;
	height:0.82rem;
	background-color: #e0e0e0;
	font-size: 14px;
	display:flex;
	justify-content:space-around;
	padding-top:0.2rem;
	color:#296da1;
	.lelesearch{
		width:4.3rem;
		height:0.62rem;
		background-color: #fff;
		border-radius: 3px;
		text-align: center;
		line-height: 0.62rem;
		font-size: 16px
	}
	.ding{
		width:1.6rem;
		height:0.62rem;
		background-color: #fff;
		border-radius: 3px;
		text-align: center;
		line-height: 0.62rem;
		font-size: 16px
	}
}


</style>