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
function c_room(){
	    var url = 'create_room.php';
		url =url+'?p1=p1';
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
				{
                   document.getElementById("playercard").innerHTML =   xmlHttp.responseText;
				   document.getElementById("tiaozhan").style.display="none";
				   document.getElementById("gameField").style.display="block";
				   document.getElementById("getp2").style.display="block";
				}
                }
        }

}
 
function p2login(room){
	    var url = 'create_room.php';
		url =url+'?p2=p2&room='+room;
        xmlHttp.open("get", url, true)
        xmlHttp.onreadystatechange = showP2;
        xmlHttp.send(null);
}
 
function showP2()
{ 
        if(xmlHttp.readyState==4)
        { 
                if(xmlHttp.status==200)
                { 
				if(xmlHttp.responseText.length==5)
				{
					alert("游戏已开始,选择其他游戏");
                    room();
				}else{
					document.getElementById("playercard").innerHTML =   xmlHttp.responseText;
					document.getElementById("tiaozhan").style.display="none";
					document.getElementById("gameField").style.display="block";
					document.getElementById("getp1").style.display="block";
					}
                }
        }

}

function room(){
	    var url = 'pk.php';
		url =url+'?operation=room';
        xmlHttp.open("get", url, true)
        xmlHttp.onreadystatechange = showRoom;
        xmlHttp.send(null);
}
function showRoom()
{ 
        if(xmlHttp.readyState==4)
        { 
                if(xmlHttp.status==200)
                { 
				if(xmlHttp.responseText)
				{
                   document.getElementById("nowroom").innerHTML =   xmlHttp.responseText;
				}
                }
        }

}

function getp1(){
	    var url = 'pk.php';
		url =url+'?operation=getp1';
        xmlHttp.open("get", url, true)
        xmlHttp.onreadystatechange = getP1;
        xmlHttp.send(null);
}
function getP1()
{ 
        if(xmlHttp.readyState==4)
        { 
                if(xmlHttp.status==200)
                { 
				if(xmlHttp.responseText)
				{
                   document.getElementById("duishoucard").innerHTML =   xmlHttp.responseText;
				}
                }
        }

}

function getp2(){
	    var url = 'pk.php';
		url =url+'?operation=getp2';
        xmlHttp.open("get", url, true)
        xmlHttp.onreadystatechange = getP2;
        xmlHttp.send(null);
}
function getP2()
{ 
        if(xmlHttp.readyState==4)
        { 
                if(xmlHttp.status==200)
                { 
				if(xmlHttp.responseText)
				{
                   document.getElementById("duishoucard").innerHTML =   xmlHttp.responseText;
				}
                }
        }

}

function skill(s){
	    var url = 'skill/'+s+'.php';
        xmlHttp.open("get", url, true)
        xmlHttp.onreadystatechange = showSkill;
        xmlHttp.send(null);
		alert("使用技能，目前技能没有特效，注意pk区结晶点的变化");
}
function showSkill()
{ 
        if(xmlHttp.readyState==4)
        { 
                if(xmlHttp.status==200)
                { 
					if(xmlHttp.responseText)
					{
						document.getElementById("p1hp").style.display="none";
						document.getElementById("skill").onclick=function(){alert("能量点不足"); };
					}else{
						alert("技能只能在读秒时间内使用");
					}
                }
        }

}


function checkInput(){
	var name = document.getElementById('user');
	//验证用户名：不能超过10个字符（5个汉字），不能输入非法字符，不能为空
	nameValue = name.value.replace(/\s+/g,"");
	var SPECIAL_STR = "~!%^&*();\"?><[]{}\\|,:/=+—";
	var nameflag=true;
	for(i=0;i<nameValue.lenght;i++){
		if (SPECIAL_STR.indexOf(nameValue.charAt(i)) !=-1)
		nameflag=false;
	}
	if(nameValue==''){
		alert('请填写用户名称！');	
		return false;
	}
	if(nameValue.length>10){
		alert('用户名称最多10个字符（5个汉字）！');
		return false;
	}
	
	if(nameflag===false){
		alert('用户名称不能包含非法字符请更改！');
		return false;
	}
}
