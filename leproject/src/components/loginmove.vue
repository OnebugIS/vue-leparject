<template>
	<div id="move">
		<div class="login">
			<form method="get" >
				<label class="label1">
					<input type="text" name="user" value="" placeholder="请输入十一位有效号码"> 
					<input type="button" name="" value="获取验证码" class="button1">
				</label>
				<label class="label2">
					<input type="text" name="code" placeholder="请输入收到的短信验证码">
				</label>
				
				<label class="label4">
					<input type="submit" value="登录">
				</label>
				
			</form>
		</div>

		<div class="tishi">
			<p>
				<router-link to="/register" tag="a" activeClass="active">免费注册</router-link>
				<router-link to="/login/logintel" tag="a" activeClass="active">忘记密码？</router-link>
			</p>
		</div>

		<div class="title">
		——————&nbsp;&nbsp;&nbsp;使用下列账号登录&nbsp;&nbsp;&nbsp;——————
		</div>

		<div class="qq">
			<p><img src="../assets/qq.png" alt=""><span>qq账号登录</span></p>
		</div>
	</div>
</template>

<script>
export default {

  name: 'loginmove',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
	.login{
		width:100%;
		font-size: 14px;
		form{
		
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
			
		}
	}

	.tishi{
		width:100%;
		height:36px;
		font-size: 12px;
		p{
			width:94%;
			height:100%;
			line-height:36px;
			border-bottom: 1px solid #e0e0e0;
			margin:0 auto;
			display:flex;
			justify-content:space-between;
			padding-bottom: 10px;
			a{
				text-decoration: none;
				color:#296da1;
			}
		}
	}

	.title{
		width:94%;
		height:33px;
		margin:0 auto;
		text-align: center;
		font-size: 14px;
		line-height:33px;
		margin-top:20px;
		color:#666;
	}

	.qq{
		width:100%;
		height:41px;
		font-size: 14px;
		margin-top:10px;
		p{
			width:94%;
			height:31px;
			border:1px solid #e0e0e0;
			border-radius: 3px;
			margin:0 auto;
			text-align: center;
			position:relative;
			line-height: 31px;
			img{
				position:absolute;
				top:2px;
				left:30%;
				width:22px;
				height:24px;
			}
		}
	}
</style>