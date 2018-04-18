var nombre = "Adrian";
var edad = 28;
var fecha = new Date();
var casa=true;
var casado = undefined;
var carro = null;
var arreglo = [];
console.log(casa ? "Verdadero" : "Falso");
console.log('Esta es la fecha '+fecha);

if (nombre !== edad) {
    console.log("verdadero");
} else {
    console.log("falso");
}

//como escribir un archivo JSON

var usuario = {
    "Nombre": "Gonzalo",
    apellido: "Proaño",
    cedula: '1723353403',
    //imprimirEnConsola:sumarDosNumeros()
};

console.log("El apellido es:", usuario.apellido);

//crear funciones
function sumarDosNumeros(numeroUno, numeroDos) {
    return numeroDos + numeroDos;
}

//igualar funciones
var sumarDosNumerosVersionDos = function SumarDosNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var arregloVector = [1, 2, 3, sumarDosNumeros(1, 2),  true, undefined, fecha, null];
console.log('arreglo', arregloVector);
//Estructura for


//estructura for
for (var aux = 0; aux < 10; aux++) {
    console.log('Aux: ', aux);
}
console.log(usuario.cedula);
console.log(usuario.apellido);
console.log(usuario.cedula);
console.log(sumarDosNumeros(1, 2));


