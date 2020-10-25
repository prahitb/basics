
function Send(){
  x = document.getElementById("a").value;
  y = document.getElementById("b").value;
  z = document.getElementById("c").value;
  localStorage.setItem("name",x)
  localStorage.setItem("email",y)
  localStorage.setItem("message",z)
  
}

function Reset(){
  document.getElementById("a").value='';
  document.getElementById("b").value='';
  document.getElementById("c").value='';
}