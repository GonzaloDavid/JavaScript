var sumar = 0;
var arregloNumeros = [1, 2, 3];
var resultadoDorEach = arregloNumeros.forEach(function (valor, indice, arregloNumeros) {
    sumar = sumar + 1;
    console.log('valor', valor);
    console.log('indice', indice);
    console.log('arreglo', arregloNumeros);
});
