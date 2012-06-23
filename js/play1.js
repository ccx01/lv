 var picname=new Array("shitou.png","jiandao.png","bu.png");
 var hp=new Array("hp1.png","hp2.png","hp3.png");

function guessit()
{
 	var p1_hp = document.getElementById("hp");
	var now_hp=p1_hp.value;	

 var cpuselect = getRandom();
 var cpu = document.getElementById("cpus");
 cpu.src = "images/" + picname[cpuselect];
  
 for(i=0;i<3;i++){
	 
	 if(document.f1.r1[i].checked){
	 var c="c"+i;
 	 var p1_select=card(i);
	 }
	 
 }
  
 if(comparevs(cpuselect,p1_select)==1)
 {
  alert("你赢了");
  cpu.src = "images/beimian.png";
 }
 if(comparevs(cpuselect,p1_select)==0)
 {
  alert("平局");
    cpu.src = "images/beimian.png";
 }
 if(comparevs(cpuselect,p1_select)==-1)
 {
  alert("你输了");
  now_hp=now_hp-1;
  p1_hp.src="images/"+hp[now_hp];
  p1_hp.value=now_hp;
    cpu.src = "images/beimian.png";
 }
  document.getElementById(c).style.display="none";
var cc="c"+c;
  document.getElementById(cc).style.display="";
  
}
  

function card(i)
{
	document.f1.r1[i].checked=true;
	 var p1_select=i;
  
 var p1 = document.getElementById("p1");
 p1.src="images/"+picname[p1_select];
 return p1_select;
}
function getcard(i)
{
	document.f1.r1[i].checked=true;
	 var p1_select=i;
	 var c="c"+i;
  
 var p1 = document.getElementById("p1");
 p1.src="images/"+picname[p1_select];
  document.getElementById(c).style.display="";
var cc="c"+c;
  document.getElementById(cc).style.display="none";
}
function comparevs( cpu, you)
{
 var win=0;//－1代表输,0代表不确定，1代表赢
 switch(you - cpu)
 {
  case 2: {win=1;break;}
  case 1: {win=-1;break;}
  case 0: {win=0;break;}
  case -1: {win=1;break;}
  case -2: {win=-1;break;}
 }
 return win;
 
}
function getRandom()
{
 
 var rand=Math.round(Math.random()*2);
 return rand; 
 
}