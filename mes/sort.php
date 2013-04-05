<?php
header('content-type:text/html;charset=utf-8');
include('../common.php');

$sort=$_POST['sort'];
if($sort=="all"){
	$sql="SELECT * FROM wtow ORDER BY id DESC limit 3";
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
	{
		echo '<div class="'.$row["sort"].'">
				<span>'.$row["time"].'</span>
				<p class="name">'.$row["name"].'</p>
				<p class="word">'.$row["words"].'</p>
				<div class="hide">
					<div>'.$row["other"]
					.'<textarea></textarea>
					<a class="submit" rel="'.$row["id"].'">吐槽<br/>kuso</a>
					</div>
				</div>
			  </div>';
	}

	$n=rand(1,4);
	for($i=0;$i<$n;$i++){
	$x=rand(0,3);
	switch ($x)
	{
	case 1:
	  $sort="article";
	  break;
	case 2:
	  $sort="game";
	  break;
	case 3:
	  $sort="video";
	  break;
	default:
	  $sort="words";
	}
	// the random record ,for the efficiency of MYSQL
	$sql="SELECT * FROM wtow where sort='".$sort."'";
	$result = mysql_query($sql);
	$max=mysql_num_rows($result)-1;
	$rand=rand(0,$max);
	$sql="SELECT * FROM wtow where sort='".$sort."' limit $rand,1";
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
	{
		echo '<div class="'.$row["sort"].'">
				<span>'.$row["time"].'</span>
				<p class="name">'.$row["name"].'</p>
				<p class="word">'.$row["words"].'</p>
				<div class="hide">
					<div>'.$row["other"]
					.'<textarea></textarea>
					<a class="submit" rel="'.$row["id"].'">吐槽<br/>kuso</a>
					</div>
				</div>
			  </div>';
	}
	}
}else{
	$sql="SELECT * FROM wtow WHERE sort='".$sort."' ORDER BY id DESC limit 7";
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
	{
		echo '<div class="'.$row["sort"].'">
				<span>'.$row["time"].'</span>
				<p class="name">'.$row["name"].'</p>
				<p class="word">'.$row["words"].'</p>
				<div class="hide">
					<div>'.$row["other"]
					.'<textarea></textarea>
					<a class="submit" rel="'.$row["tid"].'">吐槽<br/>kuso</a>
					</div>
				</div>
			  </div>';
	}
}
mysql_close($con);
?>
