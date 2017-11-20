<template>
	<div id="register">
		<!-- 头部 -->
		<div class="heads">
			<span class="span1" @click="handelHome()"><i class="iconfont icon-back"></i></span>
			<h2>注册</h2>
			<span class="span2" @click="handelHome()"><i class="iconfont icon-fangzi-copy"></i></span>
		</div>

		<!-- 注册 -->
		<div class="zhuce">

			<form method="get" >
				<label class="label1">
					<input type="text" name="user" value="" placeholder="请输入是一位有效手机号码"> 
					<input type="button" name="" value="获取验证码" class="button1">
				</label>
				<label class="label2">
					<input type="text" name="code" placeholder="请输入验证码">
				</label>
				<label class="label3">
					<input type="text" name="password" placeholder="请输入密码">
					<input type="button" name="" value="显示" class="button2">
				</label>
				<label class="label4">
					<input type="submit" value="完成注册">
				</label>
				<label class="label5">
					<input type="checkbox" checked="">我已阅读并同意相关协议
				</label>
			</form>
			
		</div>

	</div>
</template>

<script>
import router from "@/router";//他会自动找index文件

export default {

  name: 'register',

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

	.zhuce{
		width:100%;
		padding-top:1.1rem;
		font-size: 14px;
		form{
			border-top: 1px solid #e0e0e0;
			label{
				display:block;
				width:94%;
				margin:10px auto 0;
				height:44px;
			}
			.label1{
				display:flex;
				justify-content:space-between;
				input{
					width:70%;
					height:100%;
					border:1px solid #e0e0e0;
					border-radius: 5px;
					padding-left:0.2rem;
				}	
				.button1{
					width:25%;
					height:100%;
					border:1px solid #e0e0e0;
					border-radius: 5px;
					background-color: #fff;
					color:red;
				}
			}
			.label2{
				
				input{
					width:97%;
					height:100%;
					border:1px solid #e0e0e0;
					border-radius: 5px;
					padding-left:10px;
				}	
				
			}
			.label3{
				position:relative;
				input{
					width:97%;
					height:100%;
					border:1px solid #e0e0e0;
					border-radius: 5px;
					padding-left:0.2rem;
				}
				.button2{
					position:absolute;
					top:0.16rem;
					right:0.1rem;
					width:0.88rem;
					height:0.6rem;
					background-color: #fff;
					border:1px solid #e0e0e0;
					border-radius: 3px;
				}
				padding-bottom: 0.4rem;
				border-bottom: 1px solid #e0e0e0;
			}
			.label4{
				input{
					width:100%;
					height:100%;
					border:1px solid #e0e0e0;
					border-radius: 5px;
					background-color: #F64744;
					font-size: 0.4rem;
					color:#fff;

				}		
			}
			.label5{
				text-align: center;
				margin-top:0.3rem;
				color:#F64744;
			}
		}
	}


</style>