

function jia1(){
	    var url = 'skill/skill.php';
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

                }
        }

}
