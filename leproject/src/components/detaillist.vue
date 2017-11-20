<template>
	<div id="list">
		<div class="heads">
			<span class="span1" @click="handelHome()"><i class="iconfont icon-back"></i></span>
			<h2>优惠详情</h2>
			<span class="span2" @click="handelHome()"><i class="iconfont icon-fangzi-copy"></i></span>
		</div>
		<div class="detail">
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
		<!-- 底部 -->
		<foot></foot>
	</div>
</template>
	
<script>
// 首先引入axios模块
import axios from "axios";
import router from "@/router";//他会自动找index文件
//引入子组件 
import foot from "@/components/comment/foot";

import { Indicator } from 'mint-ui';
export default {
  name: 'detaillist',

  data () {
    return {
    	datalist:[],

    };
  },
  mounted(){
  		Indicator.open('Loading...');
  	  	axios.get(`/list.html?cate=${this.$route.query.id}&ajax=1`).then(res=>{			
  	  		this.datalist=res.data.data;
  			Indicator.close();
  	  	})
  },
  methods:{
  	handelHome(){
  		router.push(`/home`);
  	},
  	handelClick(id){
  		router.push(`/detail?id=${id}`);
  	},
  },
  components:{
  	foot:foot,
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

	.detail{
		width:100%;
		padding-top:0.88rem;

		p{
			height:0.79rem;
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
				padding:0.2rem 0.16rem;
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
							font-size: 12px
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
							padding-right:5px;
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

</style>