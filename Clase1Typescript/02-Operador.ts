let arreglos=[1,2,3];
let valorSuma=(numero1:number,numero2:number)=>
{
    return numero1+numero2;
};
console.log(valorSuma(1,2));
//para transpilacompilar se usa tsc
//se compila con el comando node
let facultadesDos= function(a)
{
    return ['facultad1','Facultad2'];
};
console.log(facultadesDos(1));
let facultadesDos1= function(a?)
{
    return ['facultad1','Facultad2'];
};
console.log(facultadesDos1());
//operador for each
let facultades=(a:number)=>['Facultad1','Facultad2'];
console.log("Esta es la nueva manera de acortar una funcuion y poner sin el reurnt "+facultades(4));

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
    deuda?:number;
}




let usuariosConCincoAnioMenos=arregloUsuarios.map(
    (usuario:UsuarioArreglo)=>{
        usuario.edad=usuario.edad-5;
        usuario.deuda=arregloDeudas.reduce((totalAcumulado,deuda:number)=> {
        return totalAcumulado+((usuario.edad)/100*deuda)
            },0
        );
        return usuario;
    }
    );
//acomodamos el codigo
let usuariosConCincoAnioMenos=arregloUsuarios.map(
    (usuario:UsuarioArreglo)=>{
        usuario.edad=usuario.edad-5;
        usuario.deuda=arregloDeudas.reduce((totalAcumulado,deuda:number)=> {
                return totalAcumulado+((usuario.edad)/100*deuda)
            },0
        );
        return usuario;
    }
    .filter(()=>usuario:UsuarioArreglo)=>
{
    //true si la deuda es menor de 100 y false si la deuda es mayor
return (usuario.deuda<100)
}
).every{
    ((usuario:)=>
};
function calcularDeudaUsuario(edad:number) {
    return arregloDeudas.reduce((totalAcumulado,deuda:number)=> {
            return totalAcumulado+((usuario.edad)/100*deuda)
        },0
    );
}


let arregloDeudas=[73,123.32,23,43,50,11];

//operador filter
