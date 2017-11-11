(()=>
	{ajax({type:"get",url:"header.html",dataType:"html"})
		.then((html)=>{
		var header=document.getElementById("header");
		header.innerHTML=html;
			})
})();
(function(){
	function isLogin(){
		var welcomeList = document.getElementById("welcome");
		var logoutList = document.getElementById("welcome");
		ajax({type:"get",url:"data/routes/isLogin.php"})
			.then(function(data){if(data.ok==1){
				welcome.style.dispiay="block";
				logout.style.display="none";
				wele.innerhtml= data.uname;
			}else{
				welcome.style.dispiay="none";
				logout.style.display="block";
			}})
	}
})();
(()=>
	{ajax({type:"get",url:"header.html",dataType:"html"})
		.then((html)=>{
			var header=document.getElementById("header");
			header.innerHTML=html;
			isLogin();
			document.getElementById("logout").onclick=function(){
				ajax({type:"get",url:"data/routes/logout.php"})	
					.then(function(){
						location.reload();
					})
			}
		})
})();

