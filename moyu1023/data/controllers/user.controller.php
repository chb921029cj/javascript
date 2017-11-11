<?php
	require ("../init.php");
//register注册
	function register(){
	global $conn;
	@$uaccount = $_REQUEST["uaccount"];
	@$upwd = $_REQUEST["upwd"];
	if($uaccount&&$upwd){
		$sql = "insert into my_user (uaccount,upwd) values('$uaccount','$upwd')";
		$result = mysqli_query($conn,$sql);
		$users = mysqli_fetch_all($result,1);
		if(count($users)!=0){return true;}else{return false;}
	}
	}
//登陆 login
	function login(){
		global $conn;
		@$account = $_REQUEST["account"];
		@$upwd = $_REQUEST["upwd"];
		if($account&&$upwd){
			$sql = "select * from my_user where account='$account' and binary upwd='$upwd'";
			$result = mysqli_query($conn,$sql);
			$users = mysqli_fetch_all($result,1);
				if(count($users)!=0){
					session_start();
					$_SESSION["uid"]=$users[0]["uid"];
					return true;
				}else { return false;}
		}
	}
//判断有户名是否存在 checkName
	function checkName(){
		global $conn;
	@$uaccount = $_REQUEST["uaccount"];
	if($uaccount){
			$sql = "select * from my_user where uaccount ='$uaccount'";
			$result = mysqli_query($conn,$sql);
			$users = mysqli_fetch_all($result,1);
			if(count($users)!=0){return false;}else{return true;}

		}
	}
//注销 logout
	function logout(){
		global $conn;
		session_start();
		$_SESSION["uid"]=null;
	}
//判断是否登陆 isLogin
	function isLogin(){
		global $conn;
		session_start();
		@$uid = $_SESSION["uid"];
		if($uid){
			$sql = "select * from my_user where uid = '$uid'";
			$result = mysqli_query($conn,$sql);
			$users = mysqli_fetch_all($result,1);
			return ["ok"=>1,"uaccount" =>$users[0]["uaccount"]];
		}else {return ["ok"=>0]}
	}

?>