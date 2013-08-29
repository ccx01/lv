/*get messages*/
function mes(){
	$.ajax({
        url:'mes/sort.php', 
        dataType:'html',
        success:function(data) {
			$("#list ul.content").html(data).fadeIn();
  		}
	});
}
function sort(sort){
	$.ajax({
        url:'mes/sort.php', 
        dataType:'html',
        type: "POST",
        data: ({sort:sort}),
        success:function(data) {
			$("#pageslide #list").hide().html(data).fadeIn();	
			$("#pageslide #list").children("div").hover(function(){
				$(this).css({"-webkit-filter": "none"}).stop().animate({maxHeight:"500px"});
			},function(){
				$(this).stop().animate({maxHeight:"50px"}).css({"-webkit-filter": "blur(2px)"});
			}).click(function(e){
				pop($(this),e);
				save();
			});
  		}
	});
}
/*sort messages*/
function showsort(){
	$(".tab").find("div").hover(function(){
		$(this).stop().animate({width:"100px"});
	},function(){
		$(this).stop().animate({width:"15px"});
	})
	.click(function(){
		sort($(this).attr("class"));
	});
}

function save(){
	$(".submit").click(function(){
		var $close = $(this).parents(".pop").find(".close");
		var name=prompt("你哪位？","name");
		if(name)
		if(name!="name"&&name.trim()!=""){
			var tid=$(this).attr("rel");
			console.log(tid);
			var word=$(this).prev("textarea").val();
			$.ajax({
				url:'mes/save.php', 
				type: "POST",
				data: ({tid:tid,words:word,sort:"words",name:name}),
				success: function(){
					$close.click();
					sort("all");
					$(".alert_mes").html("已吐").fadeIn('fast', function(){
						setTimeout('$(".alert_mes").fadeOut()',2000);
					});
				} 
			});
		}else{
			alert("nothing happen for your name");
		}
	});	
}

$(function(){
	// $('body').on('contextmenu', function() { return false; });
/*global loading*/
	$(".load_mes").ajaxStart(function(){
	   $(this).html("loading").fadeIn();
	}).ajaxStop(function(){
	   $(this).html(" loaded").fadeOut();
	});
	var rgb="rgb("+Math.floor(Math.random()*255)+","
		+Math.floor(Math.random()*255)+","
		+Math.floor(Math.random()*255)+")";
	$(".all").css({"background":rgb,"border-color":rgb});
/*get messages*/
	mes();  //show in the ball
	showsort();   //show in the slide
/*send message*/
	save();
});