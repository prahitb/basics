var counter=0;
var num1=0;
var num2=0;
var op;
var ans
function ProblemGiver() {
	if (counter==0) {
		num1 = Math.floor(Math.random()*1000);
		num2 = Math.floor(Math.random()*1000);
		op='+';
		document.getElementById("x").innerHTML ="What is " + num1 + "+" + num2 ;
		ans = (num1*1)+(num2*1)
	}
	if (counter==1) {
		num1 = Math.floor(Math.random()*100);
		num2 = Math.floor(Math.random()*100);
		op='*';
		document.getElementById("x").innerHTML ="What is " + num1 + "*" + num2 ;
		ans = (num1*1)*(num2*1)
	}
	counter= (counter+1)%2

}	
function Check(){
	x = document.getElementById("a").value;
	console.log(ans)
	if (x==ans){
		alert("You are correct dubikas bakwas");
	}
	else{
		alert("You are wrong dubikas bakwas");
	}
	ProblemGiver()
}
