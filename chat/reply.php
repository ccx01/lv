<?php
$str = '<a id="top8" href="/song/A.htm?top8" class="p14" target="_top">�����б�</a>';
//����������ʽ����򵥵ģ������İ취��ż��ȥ�롣����
$pat = '/<a(.*?)href="(.*?)"(.*?)>(.*?)<\/a>/i';
preg_match_all($pat, $str, $m);
//���������
for($i=0;$i<count($m[2]) ;$i++ ){
    echo $m[2][$i];
}
?>