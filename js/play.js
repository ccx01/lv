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

$(document).ready(function(){
  $("#playercard").click(function(){
	  var p1=$("#playercard").html();
	  	    var url = 'pk.php';
		url =url+'?id='+id;
        xmlHttp.open("get", url, true)
        xmlHttp.onreadystatechange = showData;
        xmlHttp.send(null);
	  $("#playerc").html($("#playercard").html());
	  $("#duishouc").html($("#duishoucard").html());
  });
  $("#pk").click(function(){
	  var p1c=$("#playerc").children().val();
	  var p2c=$("#duishouc").children().val();

	  var result=comparevs( p1c, p2c);
	  switch(result)
 {
  case 1: {alert("你赢了");break;}
  case 0: {alert("平手");break;}
  case -1: {alert("你输了");break;}
 }
	  
  });
});

function comparevs( p1, p2)
{
 var win=0;//－1代表输,0代表不确定，1代表赢
 var pk=p1-p2;
 if(pk>0){
	 win=1;
 }else if(pk<0){
	 win=-1;
 }else{
	 win=0;
 }
 return win;
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