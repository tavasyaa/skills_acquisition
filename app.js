var modal = document.getElementById('modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//new Jquery Code 
var interestCount = 0;

$("#next_step").click(function(){
	$(".signUp-step-interest_picker").show();
	$(".signUp-step-info").hide();
	
	event.stopPropagation();
});

$("#previous_step").click(function(){
	$(".signUp-step-info").show();
	$(".signUp-step-interest_picker").hide();
	
	event.stopPropagation();
});


$(".subscribe-btn").click(function(){
	if($(this).text()=="subscribe"){
		interestCount++;
		$(this).text("subscribed");
		
	} else{
		interestCount--;
		$(this).text("subscribe");
	}

	$(this).toggleClass("btn-info");
	$(this).toggleClass("btn-default");
	updateCount();
});

function updateCount(){
	$("#count").text(interestCount);
	var percent = interestCount/5;
	var percentStr = (percent*100).toString() + "%";
	$(".progress-bar").css('width',percentStr);
}

$("#submit-btn").click(function(){
	location.href = "userpage.html"
});