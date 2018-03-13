var modal = document.getElementById('modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//new Jquery Code 
var interestCount = 0;

$("#signUp-info-form").submit(function(){
	$(".signUp-step-interest_picker").show();
	$(".signUp-step-info").hide();
	
	event.stopPropagation();
	return false;
});

$("#signIn-form").submit(function(){
	var email = $("#keyIn-email");
	var psw = $("#keyIn-psw");
	var showInfo = $("#validation-info");
	if(email.val() !== "chris@gmail.com"){
		showInfo.text("Incorrect email address")
		return false;
	} else if(psw.val() !== "123456"){
		showInfo.text("Incorrect password")
		return false;
	}
	return true;
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


var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;