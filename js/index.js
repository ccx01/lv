function mes_cloud(box){
	$(".load_mes").html("js loading").fadeIn();
	var item = box.find("a"),
		len = item.length,
		speed = 0,
		offset = 0,
		t = box.offset().top,
		h = box.height(),
		m,a,x,y,size,left,c,r,stop;
	box.mouseenter(function(){
		r=setInterval(rotate,30);
	}).mousemove(function(e){
		speed = 0.1-(e.clientY - t) /  h * 0.2;
		speed = speed < 0.02 && speed > -0.02 ? 0 : speed;
	}).mouseleave(function(){
		stop=setInterval(leave,200);
	});
/*the content showed in the newpage*/
	item.each(function(){
		$(this).click(function(){
			$("#modal").children("h4").html($(this).find(".name").html());
			$("#modal").children("span").html($(this).find("span").html());
			$("#modal").children(".con").html($(this).find(".word").html());
			$("#modal").children(".newo").html($(this).find(".other").html());
			$("#modal").children(".reply").attr({"alt":$(this).attr("alt")});
		});
	});
/*end*/
	for (var i = len - 1; i >= 0; i--){
		item[i].angle = i * Math.PI * 2 / len - Math.PI / 2;
	}
/*mousemove animation*/
	function rotate(){
		for (var i = len - 1; i >= 0; i--){
			m = item[i];
			a = m.angle + offset;
			x = 100 + Math.sin(a);
			y = 45 + Math.cos(a) * 40;
			size = Math.round(10 - Math.sin(a) * 4);
			c = $(m).width() / 2;
			left = (box.width()/2) * x / 100 - c;
			$(m).css({
				"opacity":(size-6)/8,
				"z-index":size,
				"left":left,
				"top":y+"%"
			})
		}
		offset += speed;
	}
/*mouseleave*/
	function leave(){
		if(speed>0){
			speed-=0.01;
			if(speed<0){
				clearInterval(r);
				clearInterval(stop);
				speed=0;
			}
		}else if(speed<0){
			speed+=0.01;
			if(speed>0){
				speed=0;
				clearInterval(r);
				clearInterval(stop);
			}	
		}else{
			clearInterval(r);
			clearInterval(stop);	
		} 
	}
	rotate(); //init
	$(".load_mes").html("js loaded").fadeOut();
}
/*get messages*/
function mes(){
	$.ajax({
        url:'mes/mes.php', 
        dataType:'html',     
        success:function(data) {			
			$("#list").html(data);	
  		},
		complete:function(){
			$("#list").show();
  	    	mes_cloud($("#list"));
  	    	$(".second").pageslide({direction: "left",modal: true});

  	    } 
	});
}
/*sort messages*/
function sort(){
	$(".tab").children("div").hover(function(){
		$(this).stop().animate({height:"50px"});
	},function(){
		$(this).stop().animate({height:"10px"});
	})
	.click(function(){
		var sort=$(this).attr("class");
		if(sort!="all"){
			$.ajax({
		        url:'mes/sort.php', 
		        dataType:'html',
		        type: "POST",
		        data: ({sort:sort}),
		        success:function(data) {			
					$("#list").html(data);	
		  		},
				complete:function(){
		  	    	mes_cloud($("#list"));
		  	    	$(".second").pageslide({direction: "left",modal: true});
		  	    } 
			});
		}else mes();
	});
}

$(function(){
/*global loading*/
	$(".load_mes").ajaxStart(function(){
	   $(this).html("loading").fadeIn();
	}).ajaxStop(function(){
	   $(this).html(" loaded").fadeOut();
	});
/*the modified plugin*/ 
	pageslide();
/*get messages*/
	mes();
	sort();
/*send message*/
	$(".submit").click(function(){
		var name=prompt("你哪位？","name");
		if(name){
			var tid=$(".reply").attr("alt");
			var word=$("#pageslide textarea").val();
			$.ajax({
				url:'mes/save.php', 
				type: "POST",
				data: ({tid:tid,words:word,sort:"words",name:name}),
				success: function(){
					mes();
					alert( "已吐");
					$("#pageslide textarea").val("");
				} 
			});
		}
	});

});