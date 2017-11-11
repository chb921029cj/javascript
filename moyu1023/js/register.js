(function(){
	var account = document.getElementById("account");
	var upwd = document.getElementById("upwd");
	account.onbluer = function(){
		ajax(type:"post",url:"data/routes/checkName.php",data:"account="+account.value.trim(),dataType:"text")
		.then(function(txt){if(txt=="true"){
			console.log("账户名可以注册")
		}else{alert("账户名被注册")}});
	}
	function checkName(){
		return new Promsie(function(callback){
		ajax(type:"post",url:"data/routes/checkName.php",data:"account="+account.value.trim(),dataType:"text")
		.then(function(txt){
				if(txt="true"){
					callback();
				}else(alert("用户名被注册"))
			})
		});}



	document.getElementById("register").onclick=function(){
		checkName()
			.then(function(){
			ajxs(type:"post",url:"data/routes/register.php",data:"account="+account.value.trim()+"&upwd="+upwd.value.trim(),dataType:"text")
			.then(function(txt){if(txt=="true"){location="login.html"}})
		})
	}
})();