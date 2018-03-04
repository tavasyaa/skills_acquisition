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