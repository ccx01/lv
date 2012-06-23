
var current = 0  
var x = 0  
var speed = 70  
var speed2 = 300  
function initCurrent(){
	current++;
	x=0;
}
function initArray(n) {  
  this.length = n;  
  for (var i =1; i <= n; i++) {  
    this[i] = ' '  
  }  
}  
typ = new initArray(9);  
typ[0]="00:xx:#f90:点击“对话”按钮继续 ";  
typ[1]="03:Yggdra:#f90:目前还是以静态的前台为主 ";  
typ[2]="03:Yggdra:#f90:至少这个对白的部分其实是可以链接在后台的 ";  
typ[3]="02:milanor:red:貌似会有点麻烦的样子 ";  
typ[4]="02:milanor:red:不过主页也终于是进入lv3阶段了 ";  
typ[5]="02:milanor:red:接下来还是重点制作一下游戏的部分了 ";  
typ[6]="03:Yggdra:#f90:下次更新时应该可以把游戏放出来了吧？ ";  
typ[7]="02:milanor:red:。。。也许。。。吧。。。？ ";  
typ[8]="01:Emilia:blue:依然在制作中。。。 ";  
function typewrite() {  
  var m = typ[current];
  document.getElementById("person").src="/images/"+m.substring(0,m.indexOf(':'))+".png";   
  m = m.substring(m.indexOf(':') + 1);
  document.getElementById("name").innerHTML = m.substring(0,m.indexOf(':'))+ ":<br/>";   
  m = m.substring(m.indexOf(':') + 1);  
  document.getElementById("typewriter").style.color = m.substring(0,m.indexOf(':'));  
  m = m.substring(m.indexOf(':') + 1);  
  m = m.replace("&","and");  
  document.getElementById("typewriter").innerHTML = m.substring(0, x++) + "_";  
  if (current > typ.length - 1){
      current=typ.length - 1;
  }
  if (x == m.length + 1) {  
    x = m.length-1;  
	document.getElementById("typewriter").innerHTML = m.substring(0, x) ;
    setTimeout("typewrite()", speed2);  
    }  
  else {  
    setTimeout("typewrite()", speed);  
  }  
}  
//document.getElementById("tickertitle").innerHTML = "Latest: ";  
/*document.getElementById("smHeadlines").style.padding = "10px";*/  
  
