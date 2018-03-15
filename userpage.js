$("#posts-a").click(function(){
	inactiveAll();
	$("#posts-li").addClass("active");
	$(".posts-menu").show();
	event.stopPropagation();
});

$("#messages-a").click(function(){
	inactiveAll();
	$("#messages-li").addClass("active");
	$(".messages-menu").show();
	event.stopPropagation();
});

function inactiveAll(){
	$("#posts-li").removeClass("active");
	$("#messages-li").removeClass("active");
	$(".posts-menu").hide();
	$(".messages-menu").hide();
}
