<template>
	<div id="foot">
		<div class="login">
			<p class="p1">
				<router-link to="/login" tag="div" class="lelelogin">	
								登录
				</router-link>
				<router-link to="/register" tag="div" class="leleregister">	
								注册
				</router-link>
			</p>
			<p class="p2">
			城市：
				<router-link to="/search" tag="span" class="leleregister">	
						同城
						<i class="iconfont icon-moreunfold"></i>		
				</router-link>
				
			</p>
		</div>
		<div class="links">
			<a href="#">首页</a>|
			<a href="#">电脑版</a>|
			<a href="#">客户端</a>|
			<a href="#">关于我们</a>|
			<a href="#">信息反馈</a>|
			<a href="#">帮助</a>
			
		</div>
		<div class="foot">
			<p>嘉兴壹传网络科技有限公司</p>
		</div>
	</div>
</template>

<script>
export default {

  name: 'foot',

  data () {
    return {

    };
  }
};
</script>

<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
.login{
	width:100%;
	height:53px;
	display: flex;
	font-size: 14px;
	justify-content:space-between;
	border-top:1px solid #e0e0e0;
	border-bottom:1px solid #e0e0e0;
	.p1{
		display:flex;
		justify-content:space-between;
		.lelelogin{
			margin-left:10px;
			width:1.16rem;
			height:29px;
			border:1px solid #e0e0e0;
			border-radius: 4px;
			margin-right: 6px;
			text-align:center;
			line-height: 29px;
			margin-top:10px;
			color:#296da1;
		}
		.leleregister{
			margin-left:10px;
			width:1.16rem;
			height:29px;
			border:1px solid #e0e0e0;
			border-radius: 4px;
			text-align:center;
			line-height: 29px;
			margin-top:10px;
			color:#296da1;
		}
	}
	.p2{
		margin-top:10px;
		color:#296da1;
		span{
			padding:5px 12px 5px 5px;
			width:1.16rem;
			height:29px;
			border:1px solid #e0e0e0;
			border-radius: 4px;
			margin-right: 6px;
			text-align:center;
			line-height: 29px;
			margin-top:10px;
			color:#296da1;
			i{
				padding-left:9px;
			}
		}
	}
}

.links{
	
	font-size: 14px;
	color:#e0e0e0;
	margin-top:0.2rem;
	a{
		font-size: 12px;
		color:#296da1;
		text-decoration: none;
		padding-left:0.22rem;
		padding-right:0.17rem;
	}
}

.foot{
	
	padding-top:0.2rem;
	p{
		font-size: 14px;
		color:#296da1;
		text-align: center;
		
	}
}
</style>