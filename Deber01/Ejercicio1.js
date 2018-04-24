function validarNumeroDeStringsEnArreglo(arreglo) {
    let numeroStrings=0;
    var tipoVariable;
    var constanteDato="string";
    for (i=0;i<arreglo.length;i++)
    {
         tipoVariable=typeof arreglo[i];
        console.log("Es "+tipoVariable);
        if(tipoVariable.localeCompare(constanteDato))
        {
        numeroStrings++;
        }else {
            console.log("No es String =(");
        }
    }
    return numeroStrings;
}
console.log(validarNumeroDeStringsEnArreglo([1,2,'hola','j']));
