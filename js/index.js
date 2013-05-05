$(function(){
	sort("random");

	$("#filter>label").click(function(){
		var filter=$(this).attr("class");
		if(!$("#"+filter)[0].checked){				//strange
			$("#menu ."+filter).addClass("filterItem");
			
		}else{
			$("#menu ."+filter).removeClass("filterItem");
		}
	});
	$("#menu").on("click",".item",function(){
		$("#content").animate({width:"700px"});
		var id = $(this).children(".id").val();
		$.ajax({
	        url:'mes/sort.php', 
	        dataType:'html',
	        type: "POST",
	        data: ({id:id}),
	        success:function(data) {
	        	$("#content .close").after(data);
	  		}
		});

		
	});
	$("#content .close").click(function(){
		$("#content").html("").animate({width:"0px"});
	});

	$("#content").on("click",".submit",function(){
		var name=prompt("你哪位？","name");
		if(name&&name!="name"){
			var tid=$(this).next(".id").val();
			var word=$(this).prevAll("textarea").val();
			$.ajax({
				url:'mes/save.php', 
				type: "POST",
				data: ({tid:tid,words:word,sort:"words",name:name}),
				success: function(){
					sort("random");
					$("#content").html("").animate({width:"0px"});
					alert( "done");
				} 
			});
		}else{
			alert("name,please!");
		}
	});


});

function sort(sort){
	$.ajax({
        url:'mes/sort.php', 
        dataType:'html',
        type: "POST",
        data: ({sort:sort}),
        success:function(data) {
			$("#menu").html(data);
  		}
	});
}