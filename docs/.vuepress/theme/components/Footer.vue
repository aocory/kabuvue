<template>
<footer>
 <div class="footer-distributed">
		<div class="footer-left">
 
		<h3>CodeRecipe</h3>
		<div class="bio">
			<img src="https://image.flaticon.com/icons/svg/145/145859.svg"/>
			<p>コリ@米国株</p>
			<p>地方在住のサラリーマン。投資歴10年。米国株歴1年生。個別銘柄を分析したり、学習した事を発信するためにブログとYoutubeはじめました。</p>
			<a href="https://twitter.com/taida_python"><img class="social-icon"src="/img/twitter.svg"/></a>
			<a href="https://www.youtube.com/channel/UCQv17Fi9StcNwCcX_wj0G0g"><img class="social-icon"src="/img/youtube.svg"/></a>
		</div>
		
		<p class="footer-company-name">CodeRecipe &copy; 2019</p>
		</div>
 
		<div class="footer-center">

		</div>
 
		<div class="footer-right">
		</div>
 
		</div>
        </div>
		</footer>
</template>

<style>
footer{
    width: 100%;
    bottom: 0;
    color:white;
    text-align:center;
}
.copy{
    background-color: #2B2B2B;
    height: 2rem;
}
.footer-distributed{
	background-color: #2B2B2B;
	box-sizing: border-box;
	text-align: left;
}
.bio{
	background-color: #fcfcfc;
	text-align:center;
	border-radius: 16px;
	padding:1.2rem;
	width:80%;
}
.bio img{
	height:64px;
}
.bio p{
	color: #232323;
}
.social-icon{
	width: 32px;
}
footer li{
	list-style-type: none
}
footer a{
	color: #fff;
}
.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
	vertical-align: top;
	box-sizing: border-box;
}

.footer-distributed .footer-left{
	padding-left: 1.5rem;
	width: 30%;
}


.footer-distributed .footer-center{
	width: 30%;
}

.footer-distributed .footer-right{
	width: 30%;
}



@media (max-width: 880px) {

	.footer-distributed .footer-left,
	.footer-distributed .footer-center,
	.footer-distributed .footer-right{
		display: block;
		width: 100%;
		margin-bottom: 40px;
		text-align: center;
	}

	.footer-distributed .footer-center i{
		margin-left: 0;
	}

}
</style>
