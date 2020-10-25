
function getTime() {
		var d = new Date();
		var m = d.getMinutes();
		var h = d.getHours();
		var s = d.getSeconds();
		document.getElementById("x").innerHTML = h + " : " + m + ":" + s ;
		setTimeout( function() {
				getTime()
		}, 1000 );
}
