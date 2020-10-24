function ColorChanger() {
	document.getElementById("x").innerHTML = "Click the button to change the backround color ";
}
function ChangeColor() {
	var x= Math.floor(Math.random())%3;
	if (x==0){
		return "a"
	}
	if (x==1) {
		return "b"
	}
	if (x==3) {
		return "c"
	}
}
