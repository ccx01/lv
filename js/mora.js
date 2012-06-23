$(document).ready(function() {
    $('.imgArea').children().hover(function() {
        $(this).siblings().stop().fadeTo(500,0.5);
    }, function() {
        $(this).siblings().stop().fadeTo(500,1);
    });

});