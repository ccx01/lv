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
 
function showUser()
{ 
var url="getuser.php"
url=url+"?sid="+Math.random()
xmlHttp.onreadystatechange=stateChanged 
xmlHttp.open("GET",url,true)
xmlHttp.send(null)
}

function frs(){
showUser();
setTimeout('frs()',1000);
}

function stateChanged() 
{ 
if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
 { 
 document.getElementById("oluser").innerHTML=xmlHttp.responseText 
 } 
}

function to(user)//发送聊天邀请时的设置
{    
        var url = "to.php";
        var queryString = "touser" + "=" + user;
        //向服务端发送请求
        xmlHttp.open("post", url, true);
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
		xmlHttp.onreadystatechange = savepro();
        xmlHttp.send(queryString);
}

function goo()
{    
        var url = "to.php";
        var queryString = "goo" + "=" + "1";//只是为了消除cookie from，无意义
        xmlHttp.open("post", url, true);
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
		xmlHttp.onreadystatechange = savepro();
        xmlHttp.send(queryString);
}

function savepro()
{ 
        if(xmlHttp.readyState==4)
        { 
                if(xmlHttp.status==200)
                { 
						showUser();
                }
        }

}