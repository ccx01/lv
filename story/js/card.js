var pk;
var sp;
var hit=0;
var t=0;
var enemy;

function shock(obj){
	obj.animate({top: '+=15'}, 25);
	obj.animate({top: '-=15'}, 50);
	obj.animate({top: '+=10'}, 25);
	obj.animate({top: '-=10'}, 50);
	}

	
function init(){	//初始化

	$(".kuang").off('click');
	$(".kuang").fadeOut();
	$(".duibai").html("");

	$(".p1").fadeIn();
	$(".p2").fadeIn();

	$(".p1 .pcard img").css({border:"0px"}).off('click').fadeIn();
	$(".pk .p1").off('click');
	$(".p1c").off('click').fadeOut();
	/*$(".p1c .ski").fadeOut();*/
	
$(".p1 .pcard img").on({  mouseenter: function() {
	  $(this).stop().animate({width:198});
  },
  mouseout: function() {
	  $(this).stop().animate({width:80});
  }
});	
		$.ajax({
       url:'init.php', //后台处理程序
       dataType:'json',     //接受数据格式
       success:function(data) {
		  	$(".p1 .face img").attr({src: 'images/player/'+data.player.ppic}); //自定头像
			
			for(i=0;i<data.player.card.length;i++){ 
    		$(".pic1").eq(i).attr({src: 'images/card/'+data.player.card[i][0]+'.png'});
			$(".pic1").eq(i).attr({alt: data.player.card[i][1]});
		  }			
		  
		  	for(i=0;i<data.another.length;i++){ 
			$(".player img").eq(i).attr({src: 'images/player/'+data.another[i].ppic});
    		$(".player").eq(i).attr({name: data.another[i].name});
		  }
  		} //回传函数(这里是函数名)
     });
	
}

function locking(){	 //选择攻击目标,多人时设个按钮可以重新选择
	$(".player").on({   //选择对方头像，确认进行攻击
  click: function() {
	enemy=$(this).attr("name");
	$(".target").removeClass('target');
	$(this).addClass('target'); //取得对方的id,并锁定目标
	/*alert(enemy);*/
	$(this).children(".locking").stop().fadeIn();
	$(this).off('click');
	$(this).off('mouseenter');
	$(this).off('mouseout');	

	call(); //召唤卡片	
  },
  mouseenter: function() {
	  $(this).children(".locking").stop().fadeIn();
	  //设个目标gif
  },
  mouseout: function() {
	  $(this).children(".locking").stop().fadeOut();
  }
});
}

function call(){	//召唤生物
	$(".tp div").stop().animate({width:"0"});
	$(".ncard").fadeOut();
	$(".p1 .pcard img").css({border:"3px solid #F90"}).on({   //召唤卡片
  click: function() {
	
	var cid=$(this).attr("alt"); //取得卡片cid
	$(".cskill").attr({alt: cid});
	$(".p1 .pcard img").off('click').css({border:"0px"});
	$(this).fadeOut();
	var ncard=$(this).attr("src");
	$(".ncard img").attr({src: ncard});
	$(".ncard").fadeIn();
	$(".tp div").stop().animate({width:"196"}, 3000);
	setTimeout(function(){
	 $.ajax({
       url:'call.php', //后台处理程序
       type:'post',         //数据发送方式
       dataType:'json',     //接受数据格式
       data:'cid='+cid,         //要传递的数据
       success:skill //回传函数(这里是函数名)
     });
	 },3000);
	 	
  }
}).fadeIn();
}

function skill(card){	

	$(".bio img").attr({src: 'images/bio/'+card.pic+'.png'});
	$(".bio").fadeIn(); //召唤物

	$(".cskill").on({   
  click: function() {
	  if(sp>=3){
	  var skill=$(this).attr("alt"); //取得卡片技能
	  		$.ajax({
       			url:'skill.php', //后台处理程序
				type:'post',
				data:({enemy : enemy,skill:skill,sp:3}),     
      			success:function() {
					/*$('.p1c .ski').fadeIn();
					setTimeout($(".p1c .ski").fadeOut(),3000);*/
					//技能动画，已召唤的生物特效
	   			}
			});
	  }else{
		$(".kuang").css({top:400,left:300}).fadeIn();
		shock($(".kuang"));
		$(".duibai").html("需要3点sp");
	  }
	//战斗形态，消耗1sp
  }
}).fadeIn();

}

function attack(){	//进攻
	//往数据库插入时间，进行攻击
	$.ajax({
       url:'pk.php',
       type:'post',         
       dataType:'json',     
       data:'enemy='+enemy
     });
	pk=setInterval(function(){
	 $.ajax({
       url:'pk.php',
       type:'post',         
       dataType:'json',     
       data:'enemy='+enemy,         
       success:pking 
     });
	 },3100);
	 
	 $(".tp1 div").animate({width:"200"}, 2700).animate({width:"0"});

}

function pking(result){
	//战斗效果
	if(result){
		if(result.end=='win'){
			/*$(".target .hit").fadeIn();*/ //攻击动画
			
			shock($(".target .info"));//震动
			/*setTimeout($(".target .hit").fadeOut(),3000);*/
		}else{
			$(".target .hit").fadeIn();
			$(".target .hit").sprite({
				fps: 12, 
    			no_of_frames: 6,
				play_frames: 24
			});
			 //攻击未遂,输出选择目标的提示
			 
		}
		/*$(".target").removeClass('target');*/
		clearInterval(pk);
		init();
		call();

	}
}

function status(){
	$.ajax({
       url:'status.php', //后台处理程序
       dataType:'json',     //接受数据格式
       success:function(data) {

    		$('.hp1 span').html(data.player.hp);
			$('.sp1 span').html(data.player.sp);
			sp=data.player.sp;
    		$('.vp1').html(data.player.val);
			
			if(data.player.hit>hit)
			   {
     				/*$(".player1 .hit").fadeIn();*/
					shock($("#gameField"));//震动
					/*setTimeout($(".player1 .hit").fadeOut(),1000);*///被攻击，只显示一次
					hit=data.player.hit;
   				}
			
		for(i=0;i<data.another.length;i++){ 
    		$('.hp span').eq(i).html(data.another[i].hp);
			$('.sp span').eq(i).html(data.another[i].sp);
    		$('.vp').eq(i).html(data.another[i].val);
			
			switch(data.another[i].atk)
			   {
   					case '1':
					$('.pk img').eq(i).attr({src: 'images/bio/'+data.another[i].bio+'.png'});
     				$('.pk').eq(i).fadeIn();//需要得到对手召唤物的图片
					$(".tp div").eq(i).animate({width:"200"}, 5500).animate({width:0});
     				break;
   					case '2':
					/*$('.pk .ski').eq(i).fadeIn();
					setTimeout($(".pk .ski").eq(i).fadeOut(),3000);*/
					break;
     				//对手使用技能
					/*case '3':*/
     				//被攻击，只显示一次，两人以上的游戏时有效
    	 			//break
   					default:
     				$('.pk').eq(i).fadeOut();
					$(".tp div").eq(i).animate({width:0}).stop();
   				}
/*			if(data.another[i].time==5){
					$('.pk').eq(i).fadeOut();
				}*/

		  }

  		} 
     });
	win();
}

function win(){
	$.ajax({
       url:'win.php', 
       dataType:'json',    
       success:function(data) {
			if(data.end==3){
				init();
				$(".kuang").on({
					  click: function() {
						location.href='card.php';
					  }
					});
				$(".player").off('click');
				$(".skill").fadeIn();
				$(".kuang").css({top:450,left:200}).fadeIn();
				$(".duibai").html("平局，想让我表扬你吗？小子。");
				clearInterval(t);
				
				/*location.href='room.php'; */
			}else if(data.end==2){
				init();
				$(".kuang").on({
					  click: function() {
						location.href='card.php';
					  }
					});
				$(".player").off('click');
				if(data.win==0){
				$(".skill").fadeIn();
				$(".kuang").css({top:450,left:200}).fadeIn();
				$(".duibai").html("干的不错啊，新来的！");
				}else{		
				$(".skill").fadeIn();
				$(".kuang").css({top:450,left:200}).fadeIn();
				$(".duibai").html("你太让我失望了。");
				}
				clearInterval(t);
				
				/*location.href='room.php';*/
			}else{
			$('.time').html(data.time);//战斗总时间data.time
			}
			
  		} 
     });
	
}
	

