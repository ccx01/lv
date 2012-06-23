
var current = 0  
var x = 0  
var speed = 70  
var speed2 = 300  
function initCurrent(){
	typewrite();
	current++;
}
function initArray(n) {  
  this.length = n;  
  for (var i =1; i <= n; i++) {  
    this[i] = ' '  
  }  
}  
typ = new initArray(3);  
typ[0]="dubai.html?TB_iframe=true&height=130&width=500:02.png";  
typ[1]="duibai.html?TB_iframe=true&height=130&width=500:02.png";  
typ[2]="似乎是个自言自语的家伙";  
function typewrite() {  
  var m = typ[current];
  //document.getElementById("npc").title=m;
  document.getElementById("npc").href=m.substring(0,m.indexOf(':'));
  m = m.substring(m.indexOf(':') + 1); 
  document.getElementById("npcimg").src="/images/"+m;    
}  
  
