//sentencia while- for
function contadorA(cadena){
	var contA=0;//inicializacion
	var i=0;
	while(i<cadena.length){//permanencia
		if (cadena[i].toUpperCase()==="A") {//accion
			contA++;
		}
		i++;//incremento
	}
	return contA;
}
var cad= "Anastasia";
console.log("la cantidad de letras a, es :" + contadorA(cad));