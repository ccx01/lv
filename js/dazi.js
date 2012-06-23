function createRequest(){
        if(typeof XMLHttpRequest!="undefined")        {
                return new XMLHttpRequest();
        }else if(typeof ActiveXObject!="undefined"){
                var xmlHttp_ver  = false;
                var xmlHttp_vers = ["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp","Microsoft.XmlHttp"];
                if(!xmlHttp_ver){
                        for(var i=0;i<xmlHttp_vers.length;i++){
                                try{
                                        new ActiveXObject(xmlHttp_vers[i]);
                                        xmlHttp_ver = xmlHttp_vers[i];
                                        break;
                                }catch(oError){;}
                        }
                }
                if(xmlHttp_ver){
                        return new ActiveXObject(xmlHttp_ver);
                }else{
                        throw new Error("无法建立 XML HTTP Request.");
                }
        }else{
                throw new Error("你的浏览器不支持 XML HTTP Request.");
        }
}

var xmlHttp;
xmlHttp = createRequest();

var current = 0  
var x = 0  
var speed = 50   

function initCurrent(){
		document.getElementById("next").style.display="none";
		current++;
		x=0;
	    var url = 'story.php';
		url =url+'?id='+current;
        xmlHttp.open("get", url, true)
        xmlHttp.onreadystatechange = showData;
        xmlHttp.send(null);
		clearTimeout(typewrite);
}
 
typ = new Array();  
typ[0]="npcdb3:尤古朵拉:#f90:点击“对话”按钮继续 ";  
/*typ[1]="03:Yggdra:#f90:目前还是以静态的前台为主 ";  
typ[2]="03:Yggdra:#f90:至少这个对白的部分其实是可以链接在后台的 ";
typ[3]="02:milanor:red:貌似会有点麻烦的样子 ";  
typ[4]="02:milanor:red:不过主页也终于是进入lv3阶段了 ";  
typ[5]="02:milanor:red:接下来还是重点制作一下游戏的部分了 ";  
typ[6]="03:Yggdra:#f90:下次更新时应该可以把游戏放出来了吧？ ";  
typ[7]="02:milanor:red:。。。也许。。。吧。。。？ ";  
typ[8]="01:Emilia:blue:依然在制作中。。。 ";  */

function showData()
{ 
        if(xmlHttp.readyState==4)
        { 
                if(xmlHttp.status==200)
                { 
				if(xmlHttp.responseText)
                   typ[current] =  xmlHttp.responseText;
				else current=0;
				typewrite();
                }
        }

}

function typewrite() {  
  var m = typ[current];  
  
    document.getElementById("npcdb1").src="/images/"+m.substring(0,m.indexOf(':'))+".png";   
  m = m.substring(m.indexOf(':') + 1);
  document.getElementById("name").innerHTML = m.substring(0,m.indexOf(':'))+ ":";   
  m = m.substring(m.indexOf(':') + 1);  
  document.getElementById("name").style.color = m.substring(0,m.indexOf(':'));  
  m = m.substring(m.indexOf(':') + 1);  
  m = m.replace("&","and");  
  
  document.getElementById("typewriter").innerHTML = m.substring(0, x++);
  
  if (x == m.length) {    
	document.getElementById("typewriter").innerHTML = m.substring(0, x)+"<br/><input id='next' type='button' onClick='initCurrent()' value='对话'>";
    }  
  else {  
    setTimeout("typewrite()", speed);  
  }  
}  
  
function tishi(evn){
	
	document.getElementById("evn").src="/images/event/"+evn;
	alert("已触发");
} 
