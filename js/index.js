function init(){
/*初始化头像的显示*/
for($i=1;$i<10;$i++){
$left=Math.round(Math.random()*80)+"%";
$top=Math.round(Math.random()*20)+"%";
$imgwidth=Math.round(Math.random()*120+50)+"px";
$(".npc"+$i).css({'left':$left,'top':$top});
$(".npc"+$i+" img").css({"width":$imgwidth});
onclick($i);

}

$(".npc").hover(function() {
        $(this).stop().fadeTo(500,1);
   }, function() {
        $(this).stop().fadeTo(500,0.2);
});
/*初始化头像的显示完成*/
}

/*初始化头像的点击功能*/
function onclick(i){							//因为使用
$(".npc"+$i).on({
	click:function(){
		$move = $(this).html();					//复制当前的头像
		var offset = $(this).offset();
		$("body").append("<div class='move'>"+$move+"</div>");
		$(".move").css({"left":offset.left,"top":offset.top}).stop()
		.animate({"left":"100px"},offset.left+700,"easeOutElastic",function(){
					$height=$(window).height();
					$(".newpage").stop().animate({"height":$height},1000,"easeOutBounce",function(){
						$(".show"+i).stop().fadeIn();
						$(".gradient").show();
						$(".mes").show();
						});

					});

		$("#contents").hide();
		$(".move").off('click').on({			//使当前头像具备"返回"功能
		click:function(){
			$(".show"+i).stop().fadeOut();
			$("#impress").remove();
			$(".newpage").animate({"height":"0px"});
			$(".move").stop().animate({"left":offset.left},offset.left*3,"easeOutQuart",function(){
						$(".move").stop().fadeOut();
						$("#contents").stop().fadeIn();
					});
		}
		});
	}
});
}
/*初始化头像的点击功能完成*/

$(document).ready(function(){
init();
page();
});

