var num = 1;

function picAi(index, judge) {
	$(".pic ul li").unbind().click(function() {
		picAi(this);
		num = $(this).index()
	});
	var progress = $(".progress .piece")
	var _li = $(".pic ul li").length;
	var _index = '';
	judge ? _index = index : _index = $(index).index();
	$(".pic ul li").eq(_index).addClass("curr").animate({
		width: 1200 - (_li - 1) * 140 + "px"
	}, 300);
	$(".pic ul li").eq(_index).siblings().removeClass("curr").animate({
		width: "140px"
	}, 300);
	progress.animate({
		"width": 100 / _li + "%",
		"left": 100 / _li * _index + "%"
	}, 200);
}

function lunbo() {
	picAi(num++, true);
	if (num == 5) num = 0;
}
var pictime = setInterval(lunbo, 3000);
$(".pic").hover(function() {
	clearInterval(pictime);
}, function() {
	pictime = setInterval(lunbo, 3000);
});
