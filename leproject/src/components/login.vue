<template>
	<div id="login">
		<!-- 头部 -->
		<div class="heads">
			<span class="span1" @click="handelHome()"><i class="iconfont icon-back"></i></span>
			<h2>登录</h2>
			<span class="span2" @click="handelHome()"><i class="iconfont icon-fangzi-copy"></i></span>
		</div>
		<div class="change">
			<ul>
				<router-link to="/login/logintel" tag="li" activeClass="active">账号登录</router-link>

				<router-link to="/login/loginmove" tag="li" activeClass="active">手机短信登录</router-link>
				
			</ul>
		</div>

		<router-view></router-view>

	</div>
</template>

<script>
import router from "@/router";//他会自动找index文件

export default {

  name: 'login',

  data () {
    return {

    };
  },
  methods:{
  	handelHome(){
  		router.push(`/home`);
  	}
  },
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

	.change{
		padding-top:0.88rem;
		width:100%;
		height:40px;
		font-size: 16px;
		ul{
			width:100%;
			height:100%;
			display:flex;
			list-style: none;
			li{
				flex:1;
				width:50%;
				height:100%;
				box-sizing: border-box;
				text-align: center;
				line-height: 40px;
				background-color: #F5F5F5;
				border:1px solid #e0e0e0;
				color:#999;
			}
			.active{
				color:#F64744;
				background-color: #fff;
				border:0;
			}	
		}
	}

</style>