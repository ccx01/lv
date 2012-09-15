<?php
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');

$sql="SELECT * FROM wtow ORDER BY rand() limit 34";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{
	echo '<li><img src="images/'.rand(1,11).'.jpg"/>
				<div class="hide">
					<div class="content">
					<h4>'.$row["words"].'</h4>
					<span>'.$row["name"].' '.$row["time"].'</span>
					<p>'.$row["other"].'</p>
					</div>
				</div>
			</li>';
}

mysql_close($con);
?>
