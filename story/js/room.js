var story=[
{ "people":"people/p02.png","des":"戴墨镜的光头：<br/>喂！新来的！" },
{ "des":"戴墨镜的光头：<br/>收好这张卡，要上了！" }
];
var n=0;
var enemy;

/*function shock(){
	$('#gameField').animate({top: '+=10'}, 200);
	$('#gameField').animate({top: '-=10'}, 300);
	$('#gameField').animate({top: '+=5'}, 100);
	$('#gameField').animate({top: '-=5'}, 200);
	}*/
function init(){	//初始化
	$(".skill").fadeOut();
	$(".kuang").fadeOut();
	$(".duibai").html("");
	
	$(".p1 .pcard img").off('click');
	$(".pk .p1").off('click');
	
}
function juqing(){	
	if(story[n]){
		$(".duibai").html("<p>"+story[n].des+"</p>");
		if(story[n].people){
			$(".skill img").attr('src', "images/"+story[n].people);
			$(".skill").fadeIn();
		}
	}else{
	init();
	}
   n++;
}

function attack(){	

	$(".player[name!=p1]").on({   //选择对方头像，确认进行攻击
  click: function() {
	enemy=$(this).attr("name"); //取得对方的id
	/*alert(enemy);*/
	$(this).off('click');
	$(this).off('mouseenter');
	$(this).off('mouseout');	
	
	call(); //召唤卡片	
  },
  mouseenter: function() {
	  $(this).children().css({width:110,height:110});
  },
  mouseout: function() {
	  $(this).children().css({width:100,height:100});
  }
});
}

function call(){	

	$(".p1 .pcard img").css({border:"1px solid #F90"}).on({   //召唤卡片
  click: function() {
	var cid=$(this).attr("name"); //取得卡片cid
	/*alert(card);*/
	$(this).off('click');
	
	 $.ajax({
       url:'call.php', //后台处理程序
       type:'post',         //数据发送方式
       dataType:'json',     //接受数据格式
       data:'cid='+cid,         //要传递的数据
       success:skill //回传函数(这里是函数名)
     });
	
	//往数据库插入时间，进行攻击
	var pk=setInterval(function(){
	 $.ajax({
       url:'pk.php', //后台处理程序
       type:'post',         //数据发送方式
       dataType:'json',     //接受数据格式
       data:'enemy='+enemy,         //要传递的数据
       success:pking //回传函数(这里是函数名)
     });
	 },1000);
	
  }
});
}

function pking(result){
	if(result.win==enemy){alert("分出胜负")}
	//战斗效果
	if(result.end){
		clearInterval(pk);
	}
}

function skill(card){	
	$(".p1c img").attr({src: card.pic});
	
	$(".p1 .pcard img").css({border:"1px solid #00F"});
	$(".p1 .pcard img").on({   //卡片形态技能
  click: function() {
	  alert("，消耗3sp");
	//卡片技能，消耗3sp
  }
});

	$(".p1c").on({   
  click: function() {
	  alert("，消耗1sp");
	//战斗形态，消耗1sp
  }
}).fadeIn();

}


function frs(){
	$.ajax({
       url:'status.php', //后台处理程序
       dataType:'json',     //接受数据格式
       success:function(data) {
		  for(i=0;i<data.player.length;i++){ 
    		$('.hp').eq(i).html("hp:"+data.player[i].hp);
			$('.sp').eq(i).html("sp:"+data.player[i].sp);
    		$('.vp').eq(i).html("结晶点:"+data.player[i].val);
		  }
  		} //回传函数(这里是函数名)
     });
	
}
	
$(document).ready(function(){
attack();
frs();
setInterval(frs,500);

$(".kuang").on({
  click: function() {
	juqing();
  }
});

});

