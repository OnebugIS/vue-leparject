<template>
	<div id="search">

		<div class="heads">
			<span class="span1" v-if="isShow" @click="handelHome()"><i class="iconfont icon-back"></i></span>
			<span class="span2" v-else @click="firstpage">取消</span>
			<input type="text" name="" value="" placeholder="请输入你想找的优惠" @click="handelBlue">
			<span class="span3" v-if="!isShow" @click="shousuo"></span>

		</div>
		

		<div class="menu">
			<ul>
				<li>全部分类</li>|
				<li>商圈</li>|
				<li>默认分类</li>
			</ul>
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

		
		<!-- 分页 -->
		<div class="change" v-if="changes">
			<p>
				<span class="shangyi" @click="countReduce">上一页</span>
			</p>
			<p>
				<span @click="countAdd">下一页</span>
			</p>
			
		</div>
		<!-- 显示 -->
		<div class="show" v-if="haha">
			<p>第一页了哦</p>
		</div>

		<!-- 引入子组件 -->
		<foot></foot>
	</div>
</template>

<script>
// 首先引入axios模块
import axios from "axios";
import router from "@/router";//他会自动找index文件
//引入子组件 
import foot from "@/components/comment/foot";

// 引用框架
import { Indicator } from 'mint-ui';

export default {
  name: 'search',
  data () {
    return {
    	isShow:true,	
    	datalist:[],
    	count:1,
    	haha:false,
    	changes:true,
    };
  },
  // 渲染页面获得数据
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
  	axios.get(`/list.html?curpage=${this.count}&ajax=1`).then(res=>{
  		
		this.datalist=res.data.data;
		Indicator.close();	
  	})
  },
  methods:{
  	handelHome(){
  		router.push(`/home`);
  	},
  	handelBlue(ev){
  		ev.target.style.background="#fff";
  		ev.target.style.paddingLeft="0px";
  		ev.target.style.width="85%";
  		this.isShow=false;
  	},
  	handelClick(id){
  		router.push(`/detail?id=${id}`);
  	},
  	countAdd(ev){
  		var scrollToTop = window.setInterval(function() {
  		    var pos = window.pageYOffset;
  		    if ( pos > 0 ) {
  		        window.scrollTo( 0, pos - 1000 ); // how far to scroll on each step
  		    } else {
  		        window.clearInterval( scrollToTop );
  		    }
  		}, 16);
  		if(this.count>=0){
  			this.haha=false;
  		}

  		ev.path[2].children[0].children[0].style.background="#fff";
  		this.count++;
	  	Indicator.open('Loading...');
	  	axios.get(`/list.html?curpage=${this.count}&ajax=1`).then(res=>{
			this.datalist=res.data.data;
			Indicator.close();		
	  	})
	  	
  	},
  	countReduce(ev){

  		this.count--;
  		if(this.count==1){
  			ev.path[2].children[0].children[0].style.background="#999";
  		}
  		if(this.count<=0){
  			this.haha=true;
  			return;
  			
  		}else{
  			var scrollToTop = window.setInterval(function() {
  			    var pos = window.pageYOffset;
  			    if ( pos > 0 ) {
  			        window.scrollTo( 0, pos - 1000 ); // how far to scroll on each step
  			    } else {
  			        window.clearInterval( scrollToTop );
  			    }
  			}, 16);
  			Indicator.open('Loading...');
	  		axios.get(`/list.html?curpage=${this.count}&ajax=1`).then(res=>{
				this.datalist=res.data.data;
				Indicator.close();		
	  		})
  		}
  	},

  	//搜索 
  	shousuo(ev){
  		var scrollToTop = window.setInterval(function() {
  		    var pos = window.pageYOffset;
  		    if ( pos > 0 ) {
  		        window.scrollTo( 0, pos - 1000 ); // how far to scroll on each step
  		    } else {
  		        window.clearInterval( scrollToTop );
  		    }
  		}, 16);
  		var text=ev.path[1].children[1].value;
  		this.changes=false;
  		Indicator.open('Loading...');
  		axios.get(`/list.html?u=1&k=${encodeURIComponent(text)}&ajax=1`).then(res=>{
			this.datalist=res.data.data;
			

			Indicator.close();		
  		})
  	},
  	
  	firstpage(ev){
  			this.isShow=true;
  			ev.path[1].children[1].value="";
  		  	var scrollToTop = window.setInterval(function() {
  		  	    var pos = window.pageYOffset;
  		  	    if ( pos > 0 ) {
  		  	        window.scrollTo( 0, pos - 1000 ); // how far to scroll on each step
  		  	    } else {
  		  	        window.clearInterval( scrollToTop );
  		  	    }
  		  	}, 16);
  		  	this.changes=true;
  		  	Indicator.open('Loading...');
  		  	axios.get(`/list.html?curpage=${this.count}&ajax=1`).then(res=>{
  		  		
  				this.datalist=res.data.data;
  				Indicator.close();	
  		  	})
  	}

  },
  components:{
  	foot:foot,
  }
};
</script>
<style src="@/assets/iconfont1/iconfont.css"></style>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>

	.show{
		height:30px;
		p{
			width:94%;
			margin:0 auto;
			font-size: 16px;
			text-align: center;
			line-height:30px;
			color:#F64744;
		}
	}

	.change{
		width:100%;
		height:47px;
		background-color: #e0e0e0;
		border-bottom:1px solid #e0e0e0;
		display:flex;
		font-size: 14px;
		justify-content:space-between;

		p{
			width:50%;
			text-align: center;
			align-items:center;
			span{
				display:block;
				width:70px;
				height:30px;
				border:1px solid #e0e0e0;
				margin-top:0.14rem;
				line-height: 0.6rem;
				
				border-radius: 3px;
				background-color: #fff
			}
			.shangyi{
				float:right;
				margin-right:0.2rem;
				background-color: #999;
			}
		}
	}


	.heads{
		width:100%;
		height:0.88rem;
		background:#F64744;
		position:fixed;
		top:0;
		display:flex;
		justify-content:space-between;
		input{
			margin-top:0.14rem;
			width:80%;
			height:0.6rem;
			border:0;
			margin-right:0.2rem;
			padding-left:0.4rem;
			background:#fff url("../assets/homesearch.png") no-repeat 0px 5px;
			background-size: 0.4rem 0.4rem;
		}
		
		.span1{font-size: 14px;color:#fff;line-height: 0.88rem;
			i{padding-left:0.1rem;padding-top:0.1rem;font-size: 35px}
		}
		
		.span2{
			font-size: 16px;
			color:#fff;
			line-height:0.88rem;
			
		}
		
		.span3{
			
			position:absolute;
			right:0.2rem;
			top:0.14rem;
			width:0.84rem;
			height:0.6rem;
			background:#d9d9d9 url("../assets/homesearch.png") no-repeat 7px 5px;
			background-size: 0.5rem auto;
		}
	}

	.menu{
		width:100%;
		height:0.76rem;
		position:fixed;
		top:0.88rem;
		font-size: 14px;
		background:#fff;
		ul{
			list-style: none;
			line-height: 0.76rem;
			width:100%;
			height:100%;
			display:flex;
			justify-content:space-between;
			border-bottom: 1px solid #e0e0e0;
			color:#999;
			li{
				width:32%;
				text-align: center;
			}
		}
	}


	.detail{
		width:100%;
		padding-top:1.64rem;

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