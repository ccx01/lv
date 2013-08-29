$(document).ajaxStart(function() {
	$( ".loading" ).fadeIn();
}).ajaxComplete(function() {
	$( ".loading" ).fadeOut();
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

$(function(){
	sort("random");

	$("#filter>label").click(function(){
		var filter=$(this).attr("class");
		$("#menu ."+filter).toggleClass("filterItem");
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
	$("#content").on("click",".close",function(){
		$("#content").html('<a class="close"></a>').animate({width:"0px"});
	});
	$("#content").on("click",".save",function(){
		$(this).parent().next(".leavemessage").toggleClass("hide");
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
					$("#content").html('<a class="close"></a>').animate({width:"0px"});
				} 
			});
		}else{
			alert("name,please!");
		}
	});

	$("#search a").click(function(){
			var way=$("#search").find("select").val();
			var keyword=$("#search").find("input").val();
			if(keyword)
				$.ajax({
					url:'mes/sort.php', 
					dataType:'html',
					type: "POST",
					data: ({way:way,keyword:keyword}),
					success:function(data) {
						$("#menu").html(data);
						$("#menu>div").addClass("filterItem");
					}
				});
	});
});
