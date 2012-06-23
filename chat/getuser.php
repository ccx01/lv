<?php
//生成online页
header('content-type:text/html;charset=utf-8');
include('common.php');

$sql="SELECT * FROM online";

$result = mysql_query($sql);

/*echo "<table border='0'><tr>";*/

while($row = mysql_fetch_array($result))
 {
	 $id =$row['id'];
	 $over =time()-$row['time'];
	 if($over>3600){
		 $sql="delete from online where id='$id';";
		$result = mysql_query($sql);
		 }
 echo "<li>";
 $pic="/images/".$row['pic'].".png";
 $click="to('".$row['user']."')";
echo <<<cur
<div><img src=$pic onclick=$click /></div>
cur;
 echo $row['user']."</li>";
 }

/*echo "</tr></table>";*/

mysql_close($con);
?>