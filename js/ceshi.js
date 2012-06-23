var sum=0  //总分
var current = 0  //句数
var x = 0     //字数
function result(t){
	var s=document.getElementById("t").innerHTML;
	s=s.substring(s.indexOf(t)+1,s.indexOf(t)+2);
	var b=parseInt(s);
	sum+=b;
	current++;
	x=0;
}
function initArray(n) {  
  this.length = n;  
  for (var i =1; i <= n; i++) {  
    this[i] = ' '  
  }  
}  
typ = new initArray(11);  
typ[0]="你何时感觉最好？ A早晨 B下午及傍晚 C夜里 D:A2 B4 C6";  
typ[1]="你走路时是 A大步地快走 B小步地快走 C不快，仰着头面对着世界 D不快，低着头 E很慢 F:A6 B4 C7 D2 E1";  
typ[2]="和人说话时，你...？ A手臂交叠站着 B双手紧握着 C一只手或两手放在臀部 D碰着或推着与你说话的人 E玩着你的耳朵、摸着你的下巴或用手整理头发 F:A4 B2 C5 D7 E6";  
typ[3]="坐着休息时，你的脚是...？ A两膝盖并拢 B两腿交叉 C两腿伸直 D一腿蜷在身下 E:A4 B6 C2 D1";  
typ[4]="碰到你感到发笑的事时，你的反应是...？ A一个欣赏的大笑 B笑着，但不大声 C轻声地咯咯地笑 D羞怯的微笑 E:A6 B4 C3 D5";  
typ[5]="当你去一个派对或社交场合时，你…… A很大声地入场以引起注意 B安静地入场，找你认识的人 C非常安静地入场，尽量保持不被注意 D:A6 B4 C2";  
typ[6]="当你非常专心工作时，有人打断你，你会…… A欢迎他 B感到非常恼怒 C在上述两极端之间 D:A6 B2 C4";  
typ[7]="下列颜色中，你最喜欢哪一种颜色？ A红或橘色 B黑色 C黄色或浅蓝色 D绿色 E深蓝色或紫色 F白色 G棕色或灰色 H:A6 B7 C5 D4 E3 F2 G1";  
typ[8]="临入睡的前几分钟，你在床上的姿势是…… A仰躺，伸直 B俯躺，伸直 C侧躺，微蜷 D头睡在一手臂上 E被子盖过头 F:A7 B6 C4 D2 E1";  
typ[9]="你经常梦到自己在…… A落下 B打架或挣扎 C找东西或人 D飞或漂浮 E你平常不做梦 F你的梦都是愉快的 G:A4 B2 C3 D5 E6 F1";  
typ[10]="测试结果";
function typewrite() {  
  var m = typ[current];
  document.getElementById("typewriter").innerHTML = m.substring(0,m.indexOf('A'));  
  m = m.substring(m.indexOf('A'));
  document.getElementById("a").innerHTML = m.substring(0,m.indexOf('B')); 
  m = m.substring(m.indexOf('B'));
  document.getElementById("b").innerHTML = m.substring(0,m.indexOf('C')); 
  m = m.substring(m.indexOf('C'));
  document.getElementById("c").innerHTML = m.substring(0,m.indexOf('D')); 
  m = m.substring(m.indexOf('D'));
  document.getElementById("d").innerHTML = m.substring(0,m.indexOf('E')); 
  m = m.substring(m.indexOf('E'));
  document.getElementById("e").innerHTML = m.substring(0,m.indexOf('F')); 
  m = m.substring(m.indexOf('F'));
  document.getElementById("f").innerHTML = m.substring(0,m.indexOf('G')); 
  m = m.substring(m.indexOf('G'));
  document.getElementById("g").innerHTML = m.substring(0,m.indexOf('H')); 
  m = m.substring(m.indexOf('H'));
  document.getElementById("h").innerHTML = m.substring(0,m.indexOf(':')); 
  m = m.substring(m.indexOf(':')+1);
  document.getElementById("t").innerHTML = m.substring(0,x++); 
    
  if (current > typ.length - 2){
	current++;
	x=0;
	    if(sum<21){
			var r="【内向的悲观者】<br/>人们认为你是一个害羞的、神经质的、优柔寡断的，是须人照顾、永远要别人为你做决定、不想与任何事或任何人有关。他们认为你是一个杞人忧天者，一个永远看到不存在的问题的人。有些人认为你令人乏味，只有那些深知你的人知道你不是这样的人。"
			}
		else if(sum>=21&&sum<31){
			var r="【缺乏信心的挑剔者】<br/>你的朋友认为你勤勉刻苦、很挑剔。他们认为你是一个谨慎的、十分小心的人，一个缓慢而稳定辛勤工作的人。如果你做任何冲动的事或无准备的事，你会令他们大吃一惊。他们认为你会从各个角度仔细地检查一切之后仍经常决定不做。他们认为对你的这种反应一部分是因为你的小心的天性所引起的。"
			}
		else if(sum>=31&&sum<41){
			var r="【以牙还牙的自我保护者】<br/>别人认为你是一个明智、谨慎、注重实效的人。也认为你是一个伶俐、有天赋有才干且谦虚的人。你不会很快、很容易和人成为朋友，但是是一个对朋友非常忠诚的人，同时要求朋友对你也有忠诚的回报。那些真正有机会了解你的人会知道要动摇你对朋友的信任是很难的，但相等的，一旦这信任被破坏，会使你很难熬过。"
			}
		else if(sum>=41&&sum<51){
			var r="【平衡的中道】<br/>别人认为你是一个新鲜的、有活力的、有魅力的、好玩的、讲究实际的、而永远有趣的人；一个经常是群众注意力的焦点，但是你是一个足够平衡的人，不至於因此而昏了头。他们也认为你亲切、和蔼、体贴、能谅解人；一个永远会使人高兴起来并会帮助别人的人。"
			}
		else if(sum>=51&&sum<61){
			var r="【吸引人的冒险家】<br/>别人认为你是一个令人兴奋的、高度活泼的、相当易冲动的个性；你是一个天生的领袖、一个做决定会很快的人，虽然你的决定不总是对的。他们认为你是大胆的和冒险的，会愿意试做任何事至少一次；是一个愿意尝试机会而欣赏冒险的人。因为你散发的刺激，他们喜欢跟你在一起。"
			}
		else if(sum>=61){
			var r="【傲慢的孤独者】<br/>别人认为对你必须「小心处理」。在别人的眼中，你是自负的、自我中心的、是个极端有支配欲、统治欲的。别人可能钦佩你，希望能多像你一点，但不会永远相信你，会对与你更深入的来往有所踌躇及犹豫.世界本来就是层层嵌套，周而复始；不以任何的意志而改变。"
			}
			document.getElementById("typewriter").innerHTML=r;
  } 

    setTimeout("typewrite()");   
}  