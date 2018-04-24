function CalcularOsosAnteojos(PoblacionOsos,NumeroMeses) {
    var PoblacionTotalOsos;
    PoblacionTotalOsos=PoblacionOsos*4*NumeroMeses;
    if(PoblacionTotalOsos>10000)
    {
        PoblacionTotalOsos=PoblacionTotalOsos/2;
        console.log("Removiendo "+PoblacionTotalOsos+" osos de anteojos de la poblacion");
        console.log("Van a existir "+PoblacionTotalOsos+" osos despues del mes "+NumeroMeses);
    }else
    {
        console.log("Van a existir "+PoblacionTotalOsos+" osos de anteojos despues de "+NumeroMeses+" meses");
    }
}
console.log(CalcularOsosAnteojos(8000,2));