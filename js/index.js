$(function(){

	/* drag function */
	var coreX,coreY;
	var operate;
	var region=["c1","c2","c3","video","game","words"]; //need to set

	$("#ball").mousedown(function(e){
		coreX=$(this).width()/2;  //padding: 20
		coreY=$(this).height()/2;
		$(this).addClass("dragging").css({"left":e.pageX-coreX,"top":e.pageY-coreY});
		$("#curtain").show();
		$(".tip").show();
	});
	$(document).mouseup(function(e){
		if($(".dragging").size()){
			switch(operate){ //operate
				case "c1":
					$("#ball").animate({
						left:"30%",
						width:"20px",
						height:"20px"						
					});
					sort("#list","random");	
				break;
				case "c2":
					$("#expand").animate({width:"0%"},function(){
						$("#ball").animate({
							left:"30%",
							width:"20px",
							height:"20px"						
						});						
					});
				break;
				case "c3":
					$(".search").animate({
						left:e.pageX,
						top:e.pageY,
						width:"0px",
						height:"0px"
					});
				break;
				case "video":
					$("#expand").animate({width:"50%"},function(){
						$("#ball").animate({
							left:"80%",
							width:"20px",
							height:"20px"						
						});
						sort("#expand","video");	
					});
				break;
				case "game":
					$("#expand").animate({width:"30%"},function(){
						$("#ball").animate({
							left:"60%",
							width:"20px",
							height:"20px"						
						});
						sort("#expand","game");					
					});
				break;
				case "words":
					$("#expand").animate({width:"30%"},function(){
						$("#ball").animate({
							left:"60%",
							width:"20px",
							height:"20px"						
						});
						sort("#expand","words");
					});
				break;
				default:
					$(".search").animate({
						left:e.pageX,
						top:e.pageY,
						width:"460px",
						height:"50px"
					},function(){
						$("#ball").animate({
							left:e.pageX-10,
							top:e.pageY-10,
							width:"20px",
							height:"20px"						
						});					
					});
			}
			/* restore */
			$(".dragging").removeClass("dragging");
			$(".drop").removeClass("drop");
			$(".tip").hide();
			$("#curtain").hide();
		}
	});
	$(document).mousemove(function(e){
		if($(".dragging").size()){
			/* restore */
			$(".drop").removeClass("drop");
			operate="";

			$(".dragging").css({"left":e.pageX-coreX,"top":e.pageY-coreY});
			//check the operate regions
			for(var i=0;i<region.length;i++){
				if(inbound($(".tip ."+region[i]),e.pageX,e.pageY)){
				$("."+region[i]).addClass("drop");
				operate=region[i];
				}
			}
		}
	});
	
	var inbound = function ($ele,x,y){
		if($ele.offset()){
			var l=$ele.offset().left;
			var ll=$ele.offset().left+$ele.width();
			var t=$ele.offset().top;
			var tt=$ele.offset().top+$ele.height();
			return x>l&&x<ll&&y>t&&y<tt;
		}
	}

	/* drag function end */
	$("#list").on("click",".more",function(){
		$("#expand").animate({width:"70%"},function(){
			$("#ball").css({"-webkit-transform":"rotate(0deg)"}).animate({
				left:"32%",
				top:"2%",
				width:"50px",
				height:"20px"
			});
		});
		$(this).parents("li").prependTo("#expand ul.content").hide().slideDown();
	});

	$("#expand").on("click",".more",function(){
		$("#ball").css({"-webkit-transform":"rotate(0deg)"}).animate({
			left:"32%",
			top:"2%",
			width:"50px",
			height:"20px"
		});
		$(this).next(".hide").slideToggle();
	});

	$("#expand").on("click",".to",function(){
		var _this=$(this);
		var tid = $(this).children("span").html()
		$.ajax({
	        url:'mes/sort.php', 
	        dataType:'html',
	        type: "POST",
	        data: ({tid:tid}),
	        success:function(data) {
				_this.parents("li").before(data.replace(/[\r\n]/g,""));
				_this.parents("li").prev().animate({"opacity":1});
	  		}
		});
	});

	$("#expand").on("click",".from",function(){
		var _this=$(this);
		var tid = $(this).children("span").html()
		$.ajax({
	        url:'mes/sort.php', 
	        dataType:'html',
	        type: "POST",
	        data: ({id:tid}),
	        success:function(data) {
				_this.parents("li").after(data.replace(/[\r\n]/g,""));
				_this.parents("li").nextAll().animate({"opacity":1});
	  		}
		});
	});		

	sort("#list","random");

});

function sort(pane,sort){
	$.ajax({
        url:'mes/sort.php', 
        dataType:'html',
        type: "POST",
        data: ({sort:sort}),
        success:function(data) {
			$(pane+" ul.content").html(data);
			aniList(pane);
  		}
	});
}

function aniList(item){
	var animateList=[];
	var $li=$(item+" ul.content li");
	for(var i=0;i<$li.size();i++){
		$li.eq(i).css({"margin-bottom":20*i})
		.animate({
			"marginBottom":0,
			"opacity":1
		},500*i);
	}
}