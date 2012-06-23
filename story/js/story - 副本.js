var story=[
{ "des":"站住！" },
{ "des":"你跑不掉的！" },
{ "des":"抓住他了！" },
{ "pic":"stage/s01.gif","w":"304","h":"150" },
{ "des":"。。。"  },
{ "des":"（糟糕。。。）" },
{ "des":"（意识有点模糊了。。。）" },
{ "des":"。。。 。。。" },
{ "br":"","pic":"stage/01.gif","w":"800","h":"350" },
{ "des":"。。。 。。。" },
{ "des":"（我还活着。。。？）" },
{ "des":"喂，你没事吧？" },
{ "des":"（。。。？）" },
{ "people":"people/p00.png" },
{ "des":"（面前站着一个女孩，这女孩好像在哪见过。。。<br/>场景也是。。。）" },
{ "des":"（直觉告诉我，这家伙很危险）" },
{ "people":"people/p00.png","des":"最近误入黄泉的人越来越多了。。。" },
{ "des":"（嗯。。。?）" },
{ "des":"（。。。黄泉。。。?）" },
{ "des":"（哪尼！！！这家伙好像不经意间说了件很了不得的事情！）" },
{ "des":"那个，这里是。。。哪里？" },
{ "people":"people/p00.png","des":"黄泉啊" },
{ "des":"。。。" },
{ "des":"今天的天气真好啊。。。" },
{ "people":"people/p00.png","des":"不要逃避现实了！你已经死了。" },
{ "des":"（那家伙一脸微笑的说了句很出名的台词）" },
{ "des":"。。。 。。。" },
{ "people":"people/p00.png","des":"。。。 。。。" },
{ "des":"。。。 。。。" },
{ "des":"（这该死的省略句号是怎么回事？必须想点办法。。。）" },
{ "people":"people/p00.png","des":"前面就是奈何桥了。" },
{ "people":"people/p00.png","des":"过了那座桥就能回去了。" },
{ "des":"咦？" },
{ "des":"咦咦？回去？" },
{ "people":"people/p00.png","des":"这么想死吗？" },
{ "des":"不，不是。<br/>（难道不要我去拯救世界什么的吗？奇怪，我为什么会有这种想法？）" },
{ "people":"people/p00.png","des":"走吧" },
{ "pic":"stage/04.gif","w":"800","h":"350" },
{ "des":"。。。" },
{ "des":"我记得奈何桥是投胎的时候走的。。。" },
{ "people":"people/p00.png","des":"是啊" },
{ "des":"那我和死了有什么区别？！" },
{ "people":"people/p00.png","des":"你本来就已经死了" },
{ "des":"。。。" },
{ "des":"莫非" },
{ "des":"你就是孟婆？" },
{ "people":"people/p00.png","des":"孟婆？是指前面那个丑八怪吗？" },
{ "people":"people/p00.png","des":"告诉你个好消息，只要打败那个丑八怪，你就可以回到常世了" },
{ "enemy":"animation/fuwaidao.png","des":"告诉你个好消息，只要打败那个丑八怪，你就可以回到常世了" },

];
var n=0;


/*function shock(){
	$('#gameField').animate({top: '+=10'}, 200);
	$('#gameField').animate({top: '-=10'}, 300);
	$('#gameField').animate({top: '+=5'}, 100);
	$('#gameField').animate({top: '-=5'}, 200);
	}*/

function juqing(){	
	if(story[n].des){
		$(".duibai").html("<p>"+story[n].des+"</p>");
	}
	if(story[n].pic){
		$(".stage").hide();
		$(".skill").hide();
		$(".duibai").hide().html("");
		$(".duibai").css("top",function(index) {
  return story[n].h;
});
		$(".stage img").attr('src', "images/"+story[n].pic);
		$(".stage").width(story[n].w);
		$(".stage").fadeIn("slow");
	}
	if(story[n].people){
		$(".skill img").attr('src', "images/"+story[n].people);
		$(".skill").fadeIn();
		$(".duibai").css({"left":"170", "top":"480"});
	}else{
		$(".duibai").css({"left":"530"});
	}
	if(story[n].enemy){
		$(".enemy").fadeIn();
	}
   n++;
}
	
$(document).ready(function(){
	$('#fuwaidao').sprite({
		fps: 6,
		no_of_frames: 3
/*		start_at_frame: 1,*/
		/*play_frames: 5*/  //播放的帧数
	});
//	$('#fuwaidao').spRandom({ //只会随机到第4行
//	          top: 400,   //不能为0，否则会越界
//	          left: 700,
//	          right: 0,
//	          bottom: 0,
//	          speed: 2000, //速度不能过快，否则会越界
//	          pause: 0
//	     	 });
//	$('#gameField').flyToTap();//拖动动画位置
	$('#fuwaidao').click(function(){
				$(this).spState(3);//行数
			});	

$("#next").click(function(){
	$(".duibai").fadeTo(250, 0.7);
	juqing();
  });

});

