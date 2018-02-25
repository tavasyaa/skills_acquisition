function sendchat() {
	document.getElementById("card-body").innerHTML = "Chris: " + document.getElementById("chat").value;
	document.getElementById("chat").value = "";
}

function search() {
	document.getElementById("secondlisting").innerHTML = document.getElementById("searchfield").value;
	document.getElementById("searchfield").value = "";

}