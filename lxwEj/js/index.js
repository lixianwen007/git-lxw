$(function(){
	// 为导航添加事件
	$('.wrapper').load('./pages/zhuye.html');
	$("ul.left_nav").on("click","li",function(){
		var url = $(this).attr("url");
		$("ul.left_nav > li").removeClass("current");
		$(this).addClass("current");
		$(".wrapper").load(url);
	})
	$('#index').on("click",function(){
		var url = $(this).attr("url");
		$("#index").removeClass("current");
		$('.wrapper').load(url);
	})
});