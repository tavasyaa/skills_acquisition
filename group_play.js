function sendchat() {
	document.getElementById("card-body").innerHTML = "Chris: " + document.getElementById("chat").value;
	document.getElementById("chat").value = "";
}