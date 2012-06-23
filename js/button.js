$(document).ready(function(){
	//主页留言按钮	
	
$(".flip").click(function(){
    $(".panel").slideToggle("slow");
  });
$(".flip").click(function () {
	$(".flip span").toggle();
  });
$(".lflip").click(function(){
    $(".lpanel").slideToggle();
  });
      //主页问号
$(".tp").hover(function() {
        $(this).fadeTo(500,1);
   }, function() {
        $(this).fadeTo(500,0.5);
   });
$(".bg").hover(function() {
        $(this).fadeTo(500,1);
   }, function() {
        $(this).fadeTo(500,0.5);
   });
   
    
function sq(){		
  $("#npcdb1").fadeOut();
  $("#npcdb2").fadeOut();
  $("#npcdb3").fadeOut();
  $("#str1").fadeOut();  
  $("#str2").fadeOut();
  $("#str3").fadeOut();
}
   
$("#npc1").click(function(){
  sq();
  
  $("#npcdb1").fadeIn("slow",function(){
	    $("#box").animate({width:"100%"},function(){
			$("#str1").fadeIn();
			/*setTimeout(function(){$(".bg").fadeIn()},1200);*/
	  });	    
	  });
  });
$("#npc2").click(function(){
  sq();
  $("#npcdb2").fadeIn("slow",function(){
	    $("#box").animate({width:"100%"},function(){
			$("#str2").fadeIn();
	  });	    
	  });
  });
$("#npc3").click(function(){
	sq();
  $("#npcdb3").fadeIn("slow",function(){
	    $("#box").animate({width:"100%"},function(){
			$("#str3").fadeIn();
	  });	    
	  });
  });

$('body').click( function(e){

    if (e.target == this ){  // or $(e.target).is('body')
  sq();
  $("#box").animate({width:0});
	}
});
/*$("#npc1").click(function(){ //修改鼠标一上去后的文字说明
	document.getElementById("tooltip0").innerHTML="<p>qwe</p>";
});*/ 
// Tweetable Konami code

});

