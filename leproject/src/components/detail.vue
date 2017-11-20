<template>
	<div id="detail">
		<div class="heads">
			<span class="span1" @click="handelHome()"><i class="iconfont icon-back"></i></span>
			<h2>优惠详情</h2>
			<span class="span2" @click="handelHome()"><i class="iconfont icon-fangzi-copy"></i></span>
		</div>

		<div class="image">
			<img :src="url" alt="" >
		</div>
		<div class="price">
			<p class="p1">
				<span class="s1"><i>￥</i>{{price}}</span>/
				<span class="s2">{{origin_price}}</span>
			</p>
			<p class="p2">
				立即购买
			</p>
		</div>

		<div class="title">
			<p class="p1">{{store_name}}{{store_name}}</p>
			<p class="p2">{{subtitle}}</p>
		</div>

		<div class="nummber">
			<p><i class="iconfont icon-xiaoren" style="font-size: 10px;padding-right:3px;"></i>{{number}}人已购买</p>
		</div>

		<div class="pingjia">
			<p><img src="../assets/pingjia.png" alt="">暂无评价</p>
		</div>

		<div class="dizhi">
			<div class="dizhichil">
				<div class="left">
					<p class="p1"><img src="../assets/dingwei.png" alt="">{{store_name}}</p>
					<p class="p2">{{address}}</p>
				</div>
				<div class="right">
					<p class="p1"><img src="../assets/dianhua.png" alt=""></p>
				</div>
			</div>
		</div>

		<!-- 套餐介绍 -->
		<div class="introduce">
			<div class="introchild" v-for="data in table_list">
				<dl>
					<dt>
						<p>
							<span class="s1">{{data.name}}</span>
							<span class="s3"><i>￥</i>{{data.origin_price}}</span>
							<span class="s2"><i>￥</i>{{data.price}}</span>	
						</p>
					</dt>
					<dd class="onlydata" v-if="data.data[0].title">
						{{data.data[0].title}}
					</dd>
					<dd v-for="list in data.data[0].list">
						<span class="span1">{{list.name}}</span>
						<span class="span2">{{list.amount}}</span>
						<span class="span3">{{list.price}}元</span>
					</dd>
				</dl>

				<ul>
					<li v-for="detail,index in data.info">
						{{index+1}}.&nbsp;&nbsp;{{detail}}
					</li>
				</ul>
			</div>
		</div>

		<!-- 查看详情 -->
		<div class="detail">
			<p>查看详情<i class="iconfont icon-more"></i></p>
		</div>

		<!-- 消费提示 -->
		<div class="shop">
			<p>消费提示</p>
			<div class="shopchild" v-for="data in buyinfo_list">
				<h3>{{data.title}}</h3>
				<ul>
					<li v-for="list in data.info">
						-{{list}}
					</li>
				</ul>
			</div>
		</div>

		<!-- 免费下载 -->
		<div class="xiazai">
			<p>免费下载</p>
		</div>

		<!-- 其他商店信息 -->
		<div class="othershop">
			<p class="onlyp">其他商店信息</p>
			<p v-for="list in youhui_other" class="otherp">
				<span class="leftspan">{{list.subtitle}}</span>
				<span class="rightspan"><i>￥</i>{{list.price}}</span>
			</p>
		</div>

		<!-- 引入子组件 -->
		<foot></foot>
	</div>
</template>

<script>
// 首先引入axios模块
import axios from "axios";

//引入子组件 
import foot from "@/components/comment/foot";

import router from "@/router";//他会自动找index文件

import { Indicator } from 'mint-ui';


export default {

  name: 'detail',

  data () {
    return {
    	url:"",
    	price:"",
    	origin_price:"",
    	msg_name:"",
    	store_name:"",
    	subtitle:"",
    	number:"",
    	address:"",
    	table_list:[],
    	buyinfo_list:[],
    	youhui_other:[],
    };
  },

  components:{
  	foot:foot,
  },
  methods:{
  	handelHome(){
  		router.push(`/home`);
  	},
  },
  // 渲染页面的时候获得id值，并进行数据查找
  mounted(){
  	var scrollToTop = window.setInterval(function() {
  	    var pos = window.pageYOffset;
  	    if ( pos > 0 ) {
  	        window.scrollTo( 0, pos - 1000 ); // how far to scroll on each step
  	    } else {
  	        window.clearInterval( scrollToTop );
  	    }
  	}, 16);
  	
  	Indicator.open('Loading...');

  	console.log(this.$route.query.id)
  	axios.get(`/index.php?act=deal&op=index&id=${this.$route.query.id}&ajax=1`).then(res=>{
  		
  		this.url=res.data.youhui_info.image_1280;
  		this.price=res.data.youhui_info.price;
  		this.origin_price=res.data.youhui_info.origin_price;
  		this.store_name=res.data.youhui_info.store_name;
  		this.msg_name=res.data.youhui_info.msg_name;
  		this.subtitle=res.data.youhui_info.subtitle;
  		this.number=res.data.youhui_info.buy_num;
  		this.address=res.data.store.address;

  		// table_list获得数据
  		this.table_list=res.data.table_list;

  		// 提示信息
  		this.buyinfo_list=res.data.buyinfo_list;

  		// 其他商店信息
  		this.youhui_other=res.data.youhui_other;

  		Indicator.close();
  	})
  }

};
</script>
<style src="@/assets/iconfont1/iconfont.css"></style>
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
			font-size: 20px;
			text-align:center;
			line-height: 0.88rem;
		}
		.span1{font-size: 14px;color:#fff;line-height: 0.88rem;
			i{padding-left:0.1rem;padding-top:0.1rem;font-size: 35px}
		}
		.span2{font-size: 14px;color:#fff;line-height: 0.88rem;padding-right:0.15rem;
			i{padding-right:0.1rem;font-size: 24px}
		}
		
	}

	.image{
		width:100%;
		height:3.8rem;
		padding-top:0.88rem;
		text-align: center;
		img{
			width:85%;
			height:100%;
		}
	}

	.price{
		width:100%;
		height:1.14rem;
		font-size: 14px;
		border-bottom: 1px solid #e0e0e0;
		display:flex;
		justify-content:space-between;
		line-height:1.14rem;
		color:#999;
		.p1{
			.s1{
				i{
					font-style: normal;
					font-size: 18px;
					color:#F64744;
					padding-left:0.1rem;
				};
				font-size:30px;
				color:#F64744;
				padding-right:0.1rem;
			}
			.s2{
				text-decoration: line-through;
			}
		}
		.p2{
			width:2rem;
			height:0.8rem;
			border-radius: 5px;
			background-color:#F64744;		
			font-size: 16px;
			color:#fff;
			line-height: 0.8rem;
			text-align: center;
			margin-top:0.16rem;
			margin-right:10px;
		}
	}
	.title{
		width:100%;
		height:0.96rem;
		font-size: 14px;
		padding-top:0.24rem;
		padding-bottom:12px;
		border-bottom:1px solid #e0e0e0;
		.p1{
			
			line-height: 0.54rem;
			font-size: 20px;
			padding-left:0.2rem;
		}
		.p2{
			line-height: 0.42rem;
			padding-left:0.2rem;
		}
	}

	.nummber{
		width:100%;
		height:0.72rem;
		border-bottom: 1px solid #e0e0e0;
		padding-top:0.28rem;
		p{
			width:94%;
			height:0.5rem;
			margin:0 auto;
			font-size: 12px;
			color:#999;
		}
	}

	.pingjia{
		width:100%;
		height:0.68rem;
		font-size: 14px;
		padding-top:10px;
		border-bottom:1px solid #e0e0e0;
		margin-bottom: 0.2rem;
		p{
			width:94%;
			margin:0 auto;
			height:0.48rem;
			color:#999;
			img{
				width:30%;
				height:0.32rem;
				margin-right:0.1rem;

			}
		}
	}

	.dizhi{
		width:100%;
		height:1.48rem;
		padding-top:0.26rem;
		border-top:1px solid #e0e0e0;
		border-bottom:1px solid #e0e0e0;
		font-size: 14px;
		margin-bottom:0.2rem;
		.dizhichil{
			width:94%;
			height:100%;
			margin:0 auto;		
			.left{
				width:75%;
				height:1.28rem;
				float:left;
				.p1{
					padding-top:0.06rem;
					font-weight: 800;
					img{
						width:0.28rem;
						height:0.36rem;
						vertical-align: center;
					}
				}
				.p2{
					color:#999;
					font-size: 14px;
				}
			}
			.right{
				width:25%;
				height:1.28rem;
				float:right;
				box-sizing: border-box;
				border-left:1px solid #e0e0e0;
				.p1{
					width:1.14rem;
					height:1rem;
					margin:0 auto;
					text-align: center;
					padding-top:0.3rem;
				}
			}
		}
	}

	.introduce{
		width:100%;
		.introchild{
			margin:0 auto;
			font-size: 14px;
			dl{
				width:100%;
				overflow: hidden;
				dt{
					width:100%;
					height:0.68rem;
					p{

						border-top:1px solid #e0e0e0;
						border-bottom:1px solid #e0e0e0;
						height:0.68rem;
						line-height: 0.68rem;
						color:#222;
						.s1{
							padding-left:0.2rem;
						}
						.s2{
							float:right;
							color:#F64744;
							padding-right:0.1rem;
							i{
								font-style: normal;
							}
						}
						.s3{
							text-decoration: line-through;
							float:right;
							i{
								font-style: normal;
							}
							padding-right:0.2rem;
						}
					}
				}
				.onlydata{
					width:100%;
					height:0.62rem;
					border-bottom: 1px solid #e0e0e0;
					line-height: 0.62rem;
					text-align: center;
					color:#666;
				}
				dd{
					width:98%;
					float:right;
					height:0.62rem;
					border-bottom: 1px solid #e0e0e0;
					.span1{
						display:block;
						width:50%;
						height:100%;
						float:left;
						line-height: 0.62rem;
						text-align: center;
						color:#999;
						box-sizing: border-box;
						border-right:1px solid #e0e0e0;
					}
					.span2{
						display:block;
						width:25%;
						height:100%;
						float:left;
						line-height: 0.62rem;
						text-align: center;
						color:#999;
						box-sizing: border-box;
						border-right:1px solid #e0e0e0;
					}
					.span3{
						display:block;
						width:25%;
						height:100%;
						float:left;
						line-height: 0.62rem;
						text-align: center;
						color:#999;
					}
				}

			}
			ul{
				width: 100%;
				border-bottom:1px solid #e0e0e0;
				li{
					width:94%;
					margin:0 auto;
					color:#999;
					line-height: 0.42rem;
				}
			}
		}
	}

	.detail{
		width:100%;
		height:0.8rem;
		border-bottom: 1px solid #e0e0e0;
		font-size: 14px;
		margin-bottom: 0.2rem;
		p{
			width:94%;
			height:100%;
			line-height: 0.8rem;
			text-align: center;

		}
	}

	.shop{
		width:100%;
		font-size: 14px;

		p{
			border-top:1px solid #e0e0e0;
			border-bottom:1px solid #e0e0e0;
			height:0.62rem;
			line-height: 0.62rem;
			padding-left:0.2rem;
			margin-bottom: 0.1rem;
		}
		.shopchild{
			width:94%;
			margin:0 auto;
			h3{
				font-size: 14px;
				line-height: 0.4rem;
				color:#333;
				font-weight: normal;
			}
			li{
				line-height: 0.62rem;
				color:#999;
			}
		}
	}

	.xiazai{
		width:100%;
		height:1.04rem;
		background-color: #e0e0e0;
		padding-top: 0.16rem;
		p{
			border-radius: 5px;
			width:94%;
			margin:0 auto;
			background-color:#F64744;
			font-size: 18px;
			color:#fff;
			line-height: 0.88rem;
			text-align: center; 
		}
	}
	.othershop{
		width:100%;
		font-size: 14px;
		margin-bottom: 0.2rem;
		.onlyp{
			border-top:1px solid #e0e0e0;
			border-bottom:1px solid #e0e0e0;
			height:0.68rem;
			line-height: 0.68rem;
			padding-left: 10px;
		}
		.otherp{
			width:94%;
			height:0.86rem;
			border-bottom: 1px solid #e0e0e0;
			margin:0 auto;
			line-height: 0.86rem;
			.leftspan{
				display:block;
				width:60%;
				float:left;
				overflow:hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			.rightspan{
				float:right;
				font-size: 16px;
				color:#F64744;
				i{
					font-style: normal;
				}
			}
		}
	}
</style>