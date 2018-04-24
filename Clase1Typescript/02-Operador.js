var arregloNumeros = [1, 2, 4, 5];
var sumaDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var totalEdades = function (arregloNumeros) {
    //codigo extra
};
var facultades = function (a) { return ['Facultad1', 'Facultad2']; };
//escribir normalemente
var facultadesDos = function (a) {
    return ['facultad1', 'Facultad2'];
};
var facultades = function (a) { return ['Facultad1', 'Facultad2']; };
arregloNumeros.forEach(function (valor, indice, arreglo) {
    console.log('valor', valor);
    console.log('indice', indice);
    console.log('arreglo', arreglo);
});
