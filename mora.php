<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php
session_start();
$_SESSION['dis1'] =  rand(0,2);
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link type="text/css" rel="stylesheet" href="css.css">
</head>
<body>  

<div class="mora"> 
<?php      
   if($dis1==0){
	   $sq="石头";
   }else if($dis1==1){
	   $sq="剪刀";
   }else if($dis1==2){
	   $sq="布";
   }
   echo "电脑舍弃了<h2>".$sq."</h2>" ;
?>
<h3>选择你要出的牌</h3> 
<form action="mora1.php" method="post" name="post">
<?php  
   $discard = $_POST['discard'] ; 
   if($discard==0){
?>
<input type=image img src="/images/jiandao.png" width="200" height="300" alt="剪刀" name="pk" value="1" />   
<input type=image img src="/images/bu.png" width="200" height="300" alt="布" name="pk" value="2" />   
</form> 
<?php
   }else if($discard==1){
?>
<input type=image img src="/images/shitou.png" width="200" height="300" alt="石头" name="pk" value="0" />   
<input type=image img src="/images/bu.png" width="200" height="300" alt="布" name="pk" value="2" />   
</form> 
<?php
   }else if($discard==2){
?>
<input type=image img src="/images/shitou.png" width="200" height="300" alt="石头" name="pk" value="0" /> 
<input type=image img src="/images/jiandao.png" width="200" height="300" alt="剪刀" name="pk" value="1" /> 
</form> 
<?php
   }
?>
  
</div>
</body>
</html> 