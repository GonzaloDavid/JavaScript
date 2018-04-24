let arregloNumeros=[1,2,4,5];
let sumaDosNumeros=(numeroUno :number,numeroDos:number)  =>{//fat arrow funct flecha gorda
  return numeroUno+numeroDos;
};
let totalEdades=arregloNumeros=>
{
  //codigo extra
};
let facultades=a=>['Facultad1','Facultad2'];
//escribir normalemente
let facultadesDos= function(a)
{
    return ['facultad1','Facultad2'];
};
let facultadesDos1= function(a?)
{
    return ['facultad1','Facultad2'];
};
facultadesDos1();
//operador for each
let facultades=(a:number)=>['Facultad1','Facultad2'];
let sumar=0;
let resultadoDorEach=arregloNumeros.forEach((valor,indice,arreglo)=>
    {
        sumar=sumar+1;
        console.log('valor',valor);
        console.log('indice',indice);
        console.log('arreglo',arreglo);
});
let resultadoDeLaSuma=arregloNumeros.reduce((totalAcumulado,valorArreglo)=>{
    return totalAcumulado-valorArreglo;
},20);
console.log(resultadoDeLaSuma);
let arregloUsuarios=[
    {nombre:'Gonzalo',edad:28},
    {nombre:'Vicente',edad:10},
    {nombre:'wendy',edad:70},
    {nombre:'Carolina',edad:32},
    {nombre:'Katy',edad:25}
    ];
let resultadoDeLaSuma=arregloNumeros.reduce((totalAcumulado,valorArreglo)=>{
    return totalAcumulado-valorArreglo;
},20);
let arregloUsuarios:UsuarioArreglo[]=[
    {
        nombre:'Adrian',
        edad:28,
    }
];
let resultadoDeLasEdades=arregloUsuarios.reduce(totalEdadesAcumulado,usuarioArreglo:UsuarioArreglo)
=>
{
    return totalEdadAcumulador + usuarioArreglo.edad;
},0
};
interface UsuarioArreglo{
    nombre:'Gonzalo';
    edad:28;
}




let usuariosConCincoAnioMenos=arregloUsuarios.map(
    (usuario:UsuarioArreglo)=>{
        usuario.edad=usuario.edad-5;
        return usuario;
    }
    );