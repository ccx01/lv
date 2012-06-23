//主要用ajax调用页面
function page(){
	$(".mes").on({
			click:function(){
				$page=$(this).parent();
				$.ajax({
				   url:'ajax/mes.php', //后台处理程序
				   dataType:'html',     //接受数据格式
				   success:function(data) {
					   $(".mes").hide();
					   $page.children(".gradient").hide();
						$page.append(data);
					} 
				});
			}
	});
}