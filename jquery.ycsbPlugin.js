


;//防止前面的js代码没有用;结尾造成报错
(function($){

	// 全局性的, 直接挂在jQuery对象上的, 调用$.nav();
	$.extend({
		// nav()
		'nav': function(){   // 调用$.nav()就会执行里面的...

			$(".nav").css({
				"list-style": "none",
				"margin": 0,
				"padding": 0,
				"display": "none",
			});
			$(".nav").parent().hover(function(){
				$(this).find(".nav").stop().slideDown();
			}, function(){
				$(this).find(".nav").stop().slideUp();
			});

			return this; //为了连缀调用
		}
	});

})(jQuery);

// 局部的
(function($){

	// 局部性的, 挂在jQuery DOM对象上的, 使用：$(".xxx").nav();
	$.fn.extend({
		// nav()
		'nav': function(){   // $(".xxx").nav()

			$(this).find(".nav").css({  // $(this)就等于调用时的$(".xxx").nav()的选择器部分的DOM
				"list-style": "none",
				"margin": 0,
				"padding": 0,
				"display": "none",
			});
			$(this).find(".nav").parent().hover(function(){
				$(this).find(".nav").stop().slideDown();
			}, function(){
				$(this).find(".nav").stop().slideUp();
			});

			return this;
		}
	});

})(jQuery);

