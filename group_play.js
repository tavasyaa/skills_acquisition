function sendchat() {
	document.getElementById("chat-1").innerHTML = "Chris: " + document.getElementById("chat").value;
	document.getElementById("chat").value = "";
}

function search() {
	document.getElementById("secondlisting").innerHTML = document.getElementById("searchfield").value;
	document.getElementById("searchfield").value = "";

}

function savegroup(){
	document.getElementById("lastvisiblegroup").innerHTML = document.getElementById("name").value;
	document.getElementById("name").value = "";
}

function joingroup(){
	document.getElementById("joingroup").innerHTML = "23274923";
	document.getElementById("chat0").innerHTML = "James02: Cool idea man!";
	document.getElementById("chat1").innerHTML = "alex305: Yeah, definitely think you should try out the violins.";
	document.getElementById("concertprep").style.backgroundColor = blue;
}