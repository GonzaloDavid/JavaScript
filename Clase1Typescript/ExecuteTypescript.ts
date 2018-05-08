let sumar=0;
let arregloNumeros=[1,2,3];
let resultadoDorEach=arregloNumeros.forEach((valor,indice, arregloNumeros)=>
{
    sumar=sumar+1;
    console.log('valor',valor);
    console.log('indice',indice);
    console.log('arreglo',arregloNumeros);
}); 