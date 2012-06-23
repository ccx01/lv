
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
typ[0]=" ";  
typ[1]="00:406::喂。 ";  
typ[2]="02(1):red:The Insolvency Service last in UK Central Government (June 2008)";  
typ[3]="413:green:U.S. Immigration and Customs Enforcement highest climber in US Gov Federal Agencies  (up 188) - June 2008";  
typ[4]="371:green:Iowa 1st in US Gov State Governors Websites (April 2008)";  
typ[5]="373:green:Directgov Jobs and Skills 1st in UK Central Government (April 2008)";  
typ[6]="379:red:Birmingham last in UK Local Government (April 2008)";  
typ[7]="406:green:Utah highest climber in US Gov State Governors Websites (up 16) - June 2008";  
typ[8]="380:red:Kent Police greatest faller in Police Forces (down 31) - April 2008";  
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