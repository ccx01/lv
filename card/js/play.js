$(document).ready(function(){
	room();
	$('#nowroom').children().hover(function() {//故障
        $(this).siblings().stop().fadeTo(500,0.5);
    }, function() {
        $(this).siblings().stop().fadeTo(500,1);
    });
	
    $(".focus-pic").hover(function(){
            $(this).addClass('img-border');
    },function(){
            $(this).removeClass('img-border');
	});
});