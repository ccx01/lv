function mes(){
	$.ajax({
       url:'/layout/mes.php', //后台处理程序
       dataType:'json',     //接受数据格式
       success:function(data) {
			
			for(i=0;i<7;i++){ 
    		$(".tiny").eq(i).html(data[i].post);

		  }			
		  
  		} 
	});
}

function save(){

	$c=$("#msg").val();
	$c = $c.replace(/\s+/g,"");
		
	if($c==''){
		$("#its-in-3d p").html("... ...").fadeIn();
	}
	else if($c=='吐槽领域（这里不是用来写名字的）'){
		$("#its-in-3d p").html("你按到按钮了。。。").fadeIn();
	}
	else if($c.length>400){
		$("#its-in-3d p").html("骚年，不要这么鸡冻，慢慢说。").fadeIn();
	}
	else{
	$.ajax({
	   type: "POST",
       url:'/layout/save.php',   
	   data: ({content:$c}),  
       success:function() {
		   window.location.hash="step-2";
  		} 
    });
	mes();
	}
}

$(document).ready(function(){
	mes();

});