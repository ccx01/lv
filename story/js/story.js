var story=[
{ "people":"people/p02.png","des":"戴墨镜的光头：<br/>喂！新来的！" },
{ "des":"戴墨镜的光头：<br/>我只解释一遍，仔细听好了。" },
{ "des":"戴墨镜的光头：<br/>战斗时，这个区域是你的状态区域。" },
{ "des":"戴墨镜的光头：<br/>首先，hp归零则立刻失败。" },
{ "des":"戴墨镜的光头：<br/>这3张是你所持有的卡片，鼠标停留可放大图片。" },
{ "des":"戴墨镜的光头：<br/>卡片左上角的数字是卡片的结晶点，卡片下方是卡片特效的介绍。" },
{ "des":"戴墨镜的光头：<br/>sp是召唤卡片及使用卡片特效所需要消耗<br/>的点数，称为‘链接碎片’，随着战斗的进行，每过<br/>一段时间都会产生一定量的链接碎片" },
{ "des":"戴墨镜的光头：<br/>接着是对手。" },
{ "des":"戴墨镜的光头：<br/>对手持有的卡片是不可见的，必须在战斗的过程中判断。" },
{ "des":"戴墨镜的光头：<br/>然后，战斗的操作。" },
{ "des":"戴墨镜的光头：<br/>战斗开始后，先确认要攻击的目标，点击目标的头像，这一步的原因是，这个卡片对战不仅限于2人对战，有时候可能会有1v3，1v4等的战斗。" },
{ "des":"戴墨镜的光头：<br/>点击后，己方的卡片则被激活，处于待召唤状态，点击则完成召唤。" },
{ "des":"戴墨镜的光头：<br/>召唤成功的卡片会实体化，实体化下方分别是该卡片的结晶点，以及结晶链接。" },
{ "des":"戴墨镜的光头：<br/>当链接的进度条读满后，卡片才会进行攻击。" },
{ "des":"戴墨镜的光头：<br/>在链接期间，可分别点击所持有的卡片，或者召唤成功的实体，触发对应的卡片特效。" },
{ "des":"戴墨镜的光头：<br/>当然，对手也会进行召唤链接。" },
{ "des":"戴墨镜的光头：<br/>这个游戏的攻击结算比较特别，在你的卡片链接完成，进行攻击的时候，如果对方也成功的召唤了卡片，无论他是否链接完成，你的攻击结晶将会被对方召唤的卡片结晶抵挡" },
{ "des":"戴墨镜的光头：<br/>此时，如果你的卡片结晶大于或等于对方，那么将对他造成一点伤害，否则攻击失败，对方和自己都没有任何变化" },
{ "des":"戴墨镜的光头：<br/>对了，卡片攻击结束后，会回到卡片状态，此时对面正在链接的卡片依然会在链接完成后进行攻击。" },
{ "des":"戴墨镜的光头：<br/>没有召唤卡片，则意味着你的结晶点为0。" },
{ "des":"戴墨镜的光头：<br/>最后，战斗有时间限制，60秒内没有使其他人的hp全归零，则自动判为平局，无论剩余的hp多少。" },
{ "des":"戴墨镜的光头：<br/>接下来就从实战中体验吧，点击后立刻开始。" },
];

var n=0;

function juqing(){	

  switch(n)
  {
	case 2: 
		$(".p1").fadeIn();
		$(".kuang").css({top:200,left:300});
  		break;
	case 3:	
		$(".kuang").css({top:100,left:100});
  		break;
	case 4: 
		$(".p1 .pcard img").on({
  mouseenter: function() {
	  $(this).animate({width:200});
  },
  mouseout: function() {
	  $(this).animate({width:80});
  }
});
		$(".kuang").css({top:200,left:200});
  		break;	
	case 6: 
		$(".kuang").css({top:100,left:100});
  		break;
	case 7: 
		$(".p2").fadeIn();
		$(".kuang").css({top:200,left:500});
  		break;
	case 10: 
	$(".player").on({   
  click: function() {
	$(".p1 .pcard img").css({border:"1px solid #F90"});
	juqing();
  },
  mouseenter: function() {
	  $(this).children().css({width:120,height:120});
  },
  mouseout: function() {
	  $(this).children().css({width:100,height:100});
  }
});  			
  		break;	
	case 11: 
	$(".player").off('click');
	$(".p1 .pcard img").css({border:"1px solid #F90"});
		$(".kuang").css({top:200,left:300});
		$(".p1 .pcard img").on({   //卡片形态技能
			  click: function() {
				  $(".p1 .pcard img").css({border:"0px"})
				  $(".p1c").fadeIn();
				  $(".p1 .pcard img").off('click');
				  $(".tp1 div").animate({width:"200"}, 5500,function(){
			/*$(".p2 .hit").fadeIn();*/ //攻击动画
			
			shock($(".p2"));//震动
			/*setTimeout($(".p2 .hit").fadeOut(),3000);*/
			$(".p1c").fadeOut();
					  }).animate({width:"0"});
			  }
		});
  		break;	
	case 12: 
		$(".kuang").css({top:200,left:300});
				  $(".p1c").fadeIn();
				  $(".tp1 div").animate({width:"200"}, 5500,function(){
			/*$(".p2 .hit").fadeIn();*/ //攻击动画
			
			shock($(".p2"));//震动
			/*setTimeout($(".p2 .hit").fadeOut(),3000);*/
			$(".p1c").fadeOut();
					  }).animate({width:"0"});

  		break;	
	case 14: 
		$(".kuang").css({top:450,left:200});
				  

  		break;		

  }

	if(story[n]){
		$(".duibai").html("<p>"+story[n].des+"</p>");
		if(story[n].people){
			$(".skill img").attr('src', "images/"+story[n].people);
			$(".skill").fadeIn();
		}
	}else{
	pc();
	t=setInterval(status,700);
	}
   n++;
}

function pc(){
	enemy=$(".player").eq(0).attr("name");
	$.ajax({
	url:'pc.php',
	success:function() {
			$(".skill").fadeOut();
			$(".kuang").fadeOut();
			$(".duibai").html("");
			
			//技能效果及被攻击效果要修改
			init();
			call();
			locking(); //更换目标时使用
			a=setInterval(ai,1000);
		}
	});
	
}
function ai(){
	$.ajax({url:'ai.php'});
}

$(document).ready(function(){
/*init();*/
pc();
/*t=setInterval(status,700);*/
$(".kuang").on({
  click: function() {
	juqing();
  }
});

});
