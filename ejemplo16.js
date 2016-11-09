//sentencia for
function contarA(cadena,letra){
	for (var i = 0 , contA=0 ; i<cadena.length ; i++) {
		if (cadena[i]==letra) {
			contA++;
		}
	}
	return contA;
}
var cad ="Romero";
var letra ="m";

console.log("la cantidad de letra de, "+ letra +" es : "+ contarA(cad,letra));


//generar la tabla de multiplicar utilizando una funicion que reciba como parametros
//numer , operacion , limite

//function