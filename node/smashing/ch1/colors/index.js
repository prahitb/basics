require( "colors" );
console.log( "Smashing Prahit".rainbow );
console.log( "Smashing Guhan".rainbow );
console.log( "Smashing Prahit".green.bold );
console.log( "Smashing Guhan".red.bold );
//console.log( "Smashing Guhan".greenishyellow.bold );
try {
	console.log( "Smashing Guhan".greenishyellow.bold );
} catch ( err ) {
	console.log( "Smashing Guhan caught exception".yellow.bold );
}
