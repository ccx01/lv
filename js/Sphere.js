var Sphere = function (radius,sides,density){
	var n=0;
	for (var j = sides ; j >= 0; j--){

		var m=j>sides/2?sides-j+1:j+1;
		m=density*(m-1)+m;
		for (var i = m; i > 0; i--)
		{
		    var angle = i * Math.PI * 2 / m;
		    var angleB = j * Math.PI / sides;
			
	        var x =   Math.sin(angle) * Math.sin(angleB)*radius;
			var y =  Math.cos(angle) * Math.sin(angleB)*radius;
			var z =  Math.cos(angleB)* radius;
		   				        
	        this.pointsArray.push(this.make3DPoint(x,y,z));
	        n++;
		}
	
	};
	console.log(n);  //count
};

Sphere.prototype = new DisplayObject3D();

//reorder the html dom
function reorder(container){
container.each(function() {
    var $this = $(this);
    var $children = $this.children();
    var childCount = $children.length;
 
    if (childCount > 1) {
      $children.remove();
 
      var indices = new Array();
      for (i=0;i<childCount;i++) { indices[indices.length] = i; }
      var rand = function() {return Math.floor(Math.random()*34);}
      indices = indices.sort(rand);
      $.each(indices,function(j,k) { $this.append($children.eq(k)); });
 
    }
  });
}

function pop($this,e){     //pop up
	if($(".pop").size()>6){    //save cpu
		$(".pop").eq(0).children(".close").click();
	}
	$(".draggable").removeClass("draggable");

	/*create the message*/
	$("body").append('<div class="pop active draggable"></div>');
	$(".active").html('<div class="content">'+$this.html()+"</div>");
	$(".active").not(":animated").css({
		left:e.clientX,
		top:e.clientY
	}).fadeIn()
	.animate({
		maxWidth:"500px"
	})
	.animate({
		maxHeight:"1600px"
	},function(){
		$(this).removeClass("active").prepend('<a class="close"></a>');
		$(".close").click(function(){
			$(".pop").addClass("draggable");
			$(this).parent(".pop")
			// .css({"-webkit-filter": "none"})
			.animate({
				left:0,
				top:"300px",
				width:0,
				height:0				
			},function(){
				$(this).remove();
			});
		}).fadeIn();
	});
	/*function drag*/
	$(".pop .content").click(function(){
		$(".draggable").removeClass("draggable");
		$(this).parent(".pop").addClass("draggable");
	}).mousedown(function(e){     
		$pop = $(this).parent(".pop");
			// if($pop.hasClass("draggable")){
				var dx = e.clientX,dy = e.clientY;
				var left = $pop.offset().left,top = $pop.offset().top;
					dx=dx-left;
					dy=dy-top;
				$("body").mousemove(function(e){
					var lx = e.clientX,ly = e.clientY;
					$pop.css({left:lx-dx+"px",top:ly-dy+"px"});
				}).mouseup(function(){
					$("body").off("mousemove");
				});
			// }
		});	
	/*function drag end*/
	/*create the message end*/
}

function sphere(){

	var camera = new Camera3D();
	camera.init(0,0,0,300);
	
	var container = $("#item")
	
	var item = new Object3D(container);

	item.addChild(new Sphere(200,6,2));
	
	var scene = new Scene3D();
	scene.addToScene(item);
	// reorder(container);//reorder the <li>

	var mouseX,mouseY = 0;
	var offsetX = $("#item").offset().left;
	var offsetY = $("#item").offset().top;
	var speed = 20000;
	
	$(".mes_clouds").mousemove(function(e){
		mouseX = e.clientX - offsetX + (container.width() / 2);
		mouseY = e.clientY - offsetY + (container.height() / 2);
	});

	$("#item li").hover(function(){
		$(this).css({"border-color":"#f90"});
	},function(){
		$(this).css({"border-color":"#ccc"});
	}).click(function(e){		//show the message
		/*$(this).find("img").css({"-webkit-filter": "blur(2px)"})
		.animate({width:"101px"},200,function(){
			$(this).css({"-webkit-filter": "none","width":"100px"});
		});*/
		pop($(this),e);

	});		

	var animateIt = function(){
		if (mouseX != undefined&&mouseX != 0){
			axisRotation.x -= mouseX / speed;
			mouseX=mouseX>0?mouseX-1:mouseX+1;
			mouseX=mouseX<100&&mouseX>-100?0:mouseX;
		}
		if (mouseY != undefined&&mouseY != 0){
			axisRotation.y += mouseY / speed;
			mouseY=mouseY>0?mouseY-1:mouseY+1;
			mouseY=mouseY<100&&mouseY>-100?0:mouseY;
		}

		scene.renderCamera(camera);
		
	};
	setInterval(animateIt, 20);

};