$(function(){

$(".nav ul li").hover(function(){
	$(this).css("background-color","#fff")
},function(){
	$(this).css("background-color","#bd282a")
})


	var i=0
	function run(){
i++
if(i==3){
	$(".pic").animate({"marginLeft":0},500)
	i=0
}else{
	$(".pic").animate({"marginLeft":-1920*i},500)
}
$(".q li").eq(i).addClass("dv").siblings("li").removeClass("dv")
}
var timer=setInterval(run,2000)
	
$(".q li").stop().mouseenter(function(){
	clearInterval(timer)
	var n=$(this).index()
	$(".pic").stop().animate({"marginLeft":-1920*n},500)
	$(".q li").eq(n).addClass("dv").siblings("li").removeClass("dv")
})
$(".q li").stop().mouseleave(function(){
	timer=setInterval(run,1000)
})


$(".div2").hover(function(){
	$(this).stop().animate({"marginTop":"-159px"},200)
},function(){
	$(this).stop().animate({"marginTop":"0"},200)
})


})