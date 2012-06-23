<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php
session_start();
$dis1=$_SESSION['dis1'];
if(isset($_SESSION['views']))
  $_SESSION['views']=$_SESSION['views']+1;

else
  $_SESSION['views']=1;
echo "<h2>第". $_SESSION['views']."回合</h2>";
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link type="text/css" rel="stylesheet" href="css.css">
</head>
<body>  
<div class="mora">
<h3>选择一张牌丢弃</h3> 
<form action="mora.php" method="post" name="post">
<input type=image img src="/images/shitou.png" width="200" height="300" alt="石头" name="discard" value="0" /> 
<input type=image img src="/images/jiandao.png" width="200" height="300" alt="剪刀" name="discard" value="1" />   
<input type=image img src="/images/bu.png" width="200" height="300" alt="布" name="discard" value="2" />   
</form> 
<?php     
   $pk = $_POST['pk'] ;  
   $ww = rand(0,2);   
   $win = '<h1>赢了，真不容易</h1>' ;   
   $los = '<h1>啧啧</h1>' ;   
   $pin = '<h1>平局。。。 </h1>';
   $pking = array ("石头","剪子","布") ; 
echo "<h2>";
if($_SESSION['views']!=1)
	if($ww==$dis1)
	echo"电脑放弃这一局了。。。";
	else{ 
   if ($pk - $ww == -1 || $pk - $ww == 2)   
     {   
        echo  $pking[$pk] . 'vs' .  $pking[$ww] . ' ' .$win ;     
     }   
    elseif ($pk - $ww == 1 || $pk - $ww == -2)   
     {   
         echo  $pking[$pk] . 'vs' .  $pking[$ww] .' ' . $los ;     
     }   
     else     
     {   
        echo  $pking[$pk]. 'vs' .  $pking[$ww] . ' ' .$pin ;     
     } 
}
echo "</h2>";
?>  
</div>
</body>
</html> 