var num1 = 0, num2 = 0;
var op;
var ans;

var state = "getFirstNum"; 
// states of the calculator are:
// getFirstNum
// getSecondNum
// getAnswer

function getDigit( digit ) {

	if (state == "getFirstNum") {
		num1 = num1 * 10 + digit;
		document.getElementById("x").innerHTML = num1;	
	}
	if (state == "getSecondNum") {
		num2 = num2 * 10 + digit;
		document.getElementById("x").innerHTML = num1 + " " + op + " " + num2;
	}
	console.log("num1 : " + num1);
	console.log("num2 : " + num2);

}

function clearAll() {
	clearState();
	document.getElementById("x").innerHTML = ans;	
}

function clearState() {
	num1 = 0;
	num2 = 0;
	ans = 0;
	state = "getFirstNum";	
}

function getAns() {
	switch (op) {
		case "+":
			ans = num1 + num2;
			break;
		case "-":
			ans = num1 - num2;
			break;
		case "*":
			ans = num1 * num2;
			break;
		case "/":
			ans = num1 / num2;
			break;
	}
	console.log("ans: ", ans);
	document.getElementById("x").innerHTML = num1 + " " + op + " " + num2 + " = " + ans;
	clearState();
}

function getOp( operator ) {
	op = operator;
	state = "getSecondNum";
	document.getElementById("x").innerHTML = num1 + " " + op;
}


