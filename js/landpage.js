// 图片懒加载
$(function() {
	$("img.lazy").lazyload({
		threshold: 1200,
		effect: "fadeIn"
	});
});
		