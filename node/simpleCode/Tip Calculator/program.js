var a=0;
var b=0;
var tipAmount=0;
var totalAmount=0;
function Calculate(){
  a = document.getElementById("z").value;
  b = document.getElementById("y").value;
  tipAmount =(a * b)/100;
  totalAmount = (a *1)+ tipAmount;
  console.log(a,b)
  console.log(tipAmount , totalAmount)
  document.getElementById("x").innerHTML = "The tip amount is " + tipAmount + ". <br/> The total amount is " + totalAmount;
  
  
}
