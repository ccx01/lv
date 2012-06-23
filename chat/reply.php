<?php
$str = '<a id="top8" href="/song/A.htm?top8" class="p14" target="_top">歌曲列表</a>';
//利用正则表达式是最简单的，其它的办法，偶米去想。。。
$pat = '/<a(.*?)href="(.*?)"(.*?)>(.*?)<\/a>/i';
preg_match_all($pat, $str, $m);
//输出方法：
for($i=0;$i<count($m[2]) ;$i++ ){
    echo $m[2][$i];
}
?>