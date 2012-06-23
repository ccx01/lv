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
function sendPostRequest()//read读取的是form.html的内容，实际上就是提示信息
{       
        var url = 'read.php';
        xmlHttp.open("get", url, true)
        xmlHttp.onreadystatechange = showData;
        xmlHttp.send(null);
}

function frs(){
sendPostRequest();
setTimeout('frs()',1000);
}

function showData()
{ 
        var msg=document.getElementById("words");
        if(xmlHttp.readyState==4)
        { 
                if(xmlHttp.status==200)
                { 
                        msg.innerHTML =  xmlHttp.responseText;
                }
        }

}

function from(from)//设置新的cookie from，以改变主页面
{    
        var url = "from.php";
        var queryString = "from" + "=" + from;
        //向服务端发送请求
        xmlHttp.open("post", url, true);
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
		xmlHttp.onreadystatechange = savepro;
        xmlHttp.send(queryString);
}

function qingchu()
{    
        var url = "clear.php";
        //向服务端发送请求
        xmlHttp.open("post", url, true);
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
		xmlHttp.onreadystatechange = savepro;
        xmlHttp.send(null);
}

function savepro()
{ 
        if(xmlHttp.readyState==4)
        { 
                if(xmlHttp.status==200)
                { 
						sendPostRequest();
                }
        }

}
