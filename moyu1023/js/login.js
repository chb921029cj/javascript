(function(){
	var account = document.getElementById("account");
	var upwd = document.getElementById("upwd");
	document.getElementById("login").onclick=function(){  ajax(type:"post",url:"data/routes/login.php",
		data:"account="+account.value.trim()+"&upwd"+upwd.value.trim(),
		dataType:"text")
		.then(function(txt){if(txt=="true"){location="index.html"}else{alert("用户名或者密码错误")}})}  
})()
