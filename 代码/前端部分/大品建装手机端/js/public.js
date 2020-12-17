
//菜单部分js
$(function(){


	// 侧滑导航
	var count = 0;
	$(".top_bg .nav_btn").click(function(){
		count++;
		if(count % 2 == 0){
			$(this).removeClass("on")
			$(".nav_content").removeClass("active")
			$(".contentbox").removeClass("clickbg")
		}else{
			$(".nav_btn").addClass("on")
			$(".nav_content").addClass("active")
			$(".contentbox").addClass("clickbg")
		}
	})
})


$(function() {
	window.onscroll = function() {
		var autoheight = document.body.scrollTop || document.documentElement.scrollTop;
		if(autoheight > 100) {
			$(".top_bg").css("box-shadow", "0 0px 5px #666")
		} else {
			$(".top_bg").css("box-shadow", "none")
		}
	}
})


