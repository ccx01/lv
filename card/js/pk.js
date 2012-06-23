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
function frs(){
sendPostRequest();
/*setTimeout('frs()',1000);*/
setInterval('sendPostRequest()',1000);

}
function winfrs(){
win();
/*setTimeout('frs()',1000);*/
setInterval('win()',1000);

}

function sendPostRequest()
{       
        var url = 'pk.php';
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
                        var m =   xmlHttp.responseText;
						document.getElementById("p1c").innerHTML = m.substring(0,m.indexOf(':'));   
 				 		m = m.substring(m.indexOf(':') + 1);
						document.getElementById("p2c").innerHTML = m;
						
                }
        }

}


function start(){ //开始按钮，只有p1有
	    var url = 'pk.php';
		url =url+'?operation=start';
        xmlHttp.open("get", url, true)
        xmlHttp.onreadystatechange = showS;
        xmlHttp.send(null);
}
function showS()
{ 
        if(xmlHttp.readyState==4)
        { 
                if(xmlHttp.status==200)
                { 
				if(xmlHttp.responseText)
				{
                   document.getElementById("start").style.display="none";
				}
                }
        }

}
function win()
{       
        var url = 'win.php';
        xmlHttp.open("get", url, true)
        xmlHttp.onreadystatechange = showWin;
        xmlHttp.send(null);
}

function showWin()
{ 
        if(xmlHttp.readyState==4)
        { 
                if(xmlHttp.status==200)
                { 
						document.getElementById("win").innerHTML = xmlHttp.responseText;   
                }
        }

}