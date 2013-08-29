$(function(){
	$("#loading").ajaxStart(function(){
		$(this).fadeIn();
	}).ajaxStop(function(){
		$(this).fadeOut();
	});

	$(".list").on("click",".item:not('.active')",function(){
		$(".item.active").removeClass('active');
		$(this).addClass("active");
		var pane=$(this).children('.pane').val();
		var content=$(this).children('.words').html()+"<br>"+$(this).children('.other').html();
		$(".wall"+pane+" .content").html(content);
	});

	$(".wall.left .content").on("click",".item",function(){
		var item=$(this).clone();
		$(".wall.left .content").append(item);
		item.addClass("popup");
	});

	/*****left pane*****/
	$(".left").hover(function(e){
		if(!$("#room").hasClass("locked")){
			$("#room").addClass('left');
			$("#tip").addClass('left').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(){
				$("#tip").children('.content').html("click=>game").slideDown();
			});
		}
	},function(){
		$("#room:not(.locked)").removeClass('left');
		$("#tip.left").removeClass('left').children('.content').html("");
	});
	$(".left").click(function(){
		if(!$("#room").hasClass('left')||!$("#room").hasClass('locked')){
			$("#room").removeClass().addClass("locked left");
			$("#menu").removeClass('expend');
			$(".list").html('<div class="message">游戏日志</div>');
			$.ajax({
				url:'mes/jsonData.php', 
				dataType:'json',
				type: "POST",
				data: ({sort:"game"}),
				success:function(data) {
					setTimeout(function(){
						$("#menu").addClass('expend');
					}, 1200);
					$(".wall.left .content").html("");
					var i;
					for( i in data){
						var item='<div class="item">'
						+'<div class="note'+Math.floor(Math.random()*4+1)+'">'
						+'<div class="time">'+data[i].time+'</div>'
						+'<div class="name">'+data[i].name+'</div>'
						+'<div class="words">'+data[i].words+'</div>'
						+'<div class="other">'+data[i].other+'</div>'
						+'<input class="pane" type="hidden" value=".left" />'
						+'</div>'
						+'</div>';
						$(".wall.left .content").append(item);
					}
				}
			});
		}
	});
	/*****right pane*****/
	$(".right").hover(function(){
		$("#room:not(.locked)").addClass('right');
	},function(){
		$("#room:not(.locked)").removeClass('right');			
	});
	$(".right").click(function(){
		if(!$("#room").hasClass('right')||!$("#room").hasClass('locked')){
			$("#room").removeClass().addClass("locked right");
			$("#menu").removeClass('expend');
			$.ajax({
				url:'mes/jsonData.php', 
				dataType:'json',
				type: "POST",
				data: ({sort:"video"}),
				success:function(data) {
					setTimeout(function(){
						$("#menu").addClass('expend');
					}, 1200);
					$(".list").html("");
					var i;
					for( i in data){
						var item='<div class="item">'
						+'<div class="time">'+data[i].time+'</div>'
						+'<div class="name">'+data[i].name+'</div>'
						+'<div class="words">'+data[i].words+'</div>'
						+'<div class="other">'+data[i].other+'</div>'
						+'<input class="pane" type="hidden" value=".right" />'
						+'</div>';
						$(".list").append(item);
					}
				}
			});
		}
	});
	/*****control pane*****/
	$(".top").click(function(){
		$("#room").removeClass().addClass("locked top");
		$("#menu").removeClass();
		$(".list").html('<div class="message">控制者视角（制作中）</div>');
	});
	$(".bottom").click(function(){
		$("#room").removeClass();
		$("#menu").removeClass();
		$(".list").html('<div class="message">剧情对话（制作中）</div>');
	});
});
