<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
</head>

<body>
<div style="position:relative; height:300px;">
<div style="width:200px; height:200px; border:1px solid #CCC;  position:absolute; overflow:hidden;" id="cc"></div>
</div>
<script type="text/javascript">
    var jelle=function(id){
        var elem=document.getElementById(id),//对象
            f=j=0,callback,_this={},//j动画总数
            tween=function(t,b,c,d){return -c*(t/=d)*(t-2) + b}
            //算子你可以改变他来让你的动画不一样
            _this.execution=function(key,val,t){
                    var s=(new Date()).getTime(),d=t || 500,
                        b=parseInt(elem.style[key]) || 0,
                        c=val-b,
                        a=function(){
                            var t=(new Date()).getTime()-s;
                            if(t>d){
                                t=d;
                                elem.style[key]=tween(t,b,c,d)+'px';
                                //if(++f==j && callback){callback.apply(elem)}
                                ++f==j&&callback&&callback.apply(elem);
                                //这句跟上面注释掉的一句是一个意思，我在google压缩的时候发现了这句
                                //感觉很不错。
                                return true;
                            }
                            elem.style[key]=tween(t,b,c,d)+'px';
                            setTimeout(a,10);
                            //我记得可以不要a这个变量，忘记怎么写了。
                        }
                    a();//我记得在javascript书上看到有可以调用匿名函数，但是忘记怎么写了。
                    //只能写一个这个了。
                }
            _this.animate=function(sty,t,fn){
                    callback=fn;
                    //多key 循环设置变化
                    for(var i in sty){
                            j++;//动画计数器用于判断是否所有动画都完成了。
                            _this.execution(i,parseInt(sty[i]),t);
                        }
                }
            return _this;
        }
</script>


<textarea id="test1" style="width:500px; height:100px;">
jelle('cc').animate({width:'300px',height:'250px'},500,function(){alert(1);this.style.backgroundColor='#333'});
</textarea>
<input type="button" onclick="eval(document.getElementById('test1').value)" value="运行代码" />
<br/>
<textarea id="test2" style="width:500px; height:100px;">
jelle('cc').animate({height:'300px'},500,function(){this.style.backgroundColor='#000'});
</textarea>
<input type="button" onclick="eval(document.getElementById('test2').value)" value="运行代码" />
<br/>
<textarea id="test3" style="width:500px; height:100px;">
jelle('cc').animate({width:'200px',height:'200px'},500,function(){this.style.backgroundColor=''});
</textarea>
<input type="button" onclick="eval(document.getElementById('test3').value)" value="运行代码" />




</body>
</html>