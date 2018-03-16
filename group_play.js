
var currentchat = 1;

function sendchat() {
	document.getElementById("chat-" + currentchat).innerHTML = "Chris: " + document.getElementById("chat").value;
	document.getElementById("chat").value = "";
	currentchat++;
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
	document.getElementById("chat0").innerHTML = "bob1324: Let's play this Saturday at 5?";
	document.getElementById("chat1").innerHTML = "mechwiz: Oh yea that works for me!";
	document.getElementById("concertprep").style.backgroundColor = '#AEEEEE';
	document.getElementById("groupplay").style.backgroundColor = 'white';
}

function savegroup(){
	document.getElementById("banginit").innerHTML = document.getElementById("namesave").value;
	document.getElementById("namesave").value = "";
}
