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


function login(){
		var id= document.getElementById("plogin").value;
	    var url = 'getcard.php';
		url =url+'?id='+id;
        xmlHttp.open("get", url, true)
        xmlHttp.onreadystatechange = showData;
        xmlHttp.send(null);
}
 
function showData()
{ 
        if(xmlHttp.readyState==4)
        { 
                if(xmlHttp.status==200)
                { 
				if(xmlHttp.responseText)
                   document.getElementById("playercard").innerHTML =   xmlHttp.responseText;
                }
        }

}

function typewrite() {  
  var m = typ[current];  
  
    document.getElementById("person").src="/images/"+m.substring(0,m.indexOf(':'))+".png";   
  m = m.substring(m.indexOf(':') + 1);
  document.getElementById("name").innerHTML = m.substring(0,m.indexOf(':'))+ ":<br/>";   
  m = m.substring(m.indexOf(':') + 1);  
  document.getElementById("typewriter").style.color = m.substring(0,m.indexOf(':'));  
  m = m.substring(m.indexOf(':') + 1);  
  m = m.replace("&","and");  
  
  document.getElementById("typewriter").innerHTML = m.substring(0, x++);  
  if (x == m.length) {    
	document.getElementById("typewriter").innerHTML = m.substring(0, x);
    }  
  else {  
    setTimeout("typewrite()", speed);  
  }  
}  
  
