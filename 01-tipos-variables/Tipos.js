var nombre="Adrian";
var edad=28;
var fecha= new Date();
var casado=undefined;
var carro=null;
var arreglo=[];
console.log(casa? "Verdadero": "Falso")
console.log(fecha);

if(nombre!==edad){
    console.log("verdadero");
    else{
        console.log("false");
    }
}


//como escribir un archivo JSON
var usuario=(
    "nombre":"Gonzalo",
    apellido:"Proaño",
    cedula:'1723353403',
    imprimirEnConsola: sumarDosNumeros()
);
console.log("Usuario",usuario);

//crear funciones
function sumarDosNumeros(numeroUno,numeroDos) {
    return numeroDos+numeroDos;
}
//igualar funciones
var sumarDosNumerosVersionDos=function SumarDosNumeros(numeroUno,numeroDos)
{
    return numeroUno+numeroDos;
};
var usuario=(
    "nombre":"Gonzalo",
    apellido:"Proaño",
    cedula:'1723353403',
    imprimirEnConsola:function() {
        console.log(this.nombre+''+this.apellido+''+this.cedula)
},
imprimirEnConsola: sumarDosNumeros();
);
console.log(usuario.cedula);
console.log(usuario.apellido);
console.log(usuario.cedula);
console.log(sumarDosNumeros(1,2));
var arregloVector=[1,2,3,sumarDosNumeros(1,2),usuario,true,undefined,fecha,null];
console.log('arreglo',arregloVector);
//estructura for
for(var aux=0; aux<10;aux++)
{
    console.log('Aux: ',aux);
}

