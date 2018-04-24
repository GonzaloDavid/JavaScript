function valorGeneradorElectrico(pariedad) {
    let i = 1;
    var valorGeneradorPrimero4 = 62;
    var valorGenradorOtros = 124;
    let totalWts = 0;
    var pariedadPar = "par";
    var paredadImpar = "impar";
    var pariedadTodos = "todos";
    if (pariedad.localeCompare(paredadImpar)) {
        while (i < 5) {
            if (i % 2 === 0) {
                console.log("Generador #" + i + " esta apagado");
            } else {
                totalWts += valorGeneradorPrimero4;
                console.log("Generador #" + i + " está prendido, añadiendo " + valorGeneradorPrimero4 + " MW para un total de " + totalWts + " MW");
            }
            i++;
        }
        for (i = 5; i < 21; i++) {
            if (i % 2 === 0) {
                console.log("Generador #" + i + " esta apagado");
            } else {
                totalWts += valorGenradorOtros;
                console.log("Generador #" + i + " está prendido, añadiendo " + valorGenradorOtros + " MW para un total de " + totalWts + " MW");
            }
        }

    }
    if (pariedad.localeCompare(pariedadPar)) {
        while (i < 5) {
            if (i % 2 === 0) {
                totalWts += valorGeneradorPrimero4;
                console.log("Generador #" + i + " está prendido, añadiendo " + valorGeneradorPrimero4 + " MW para un total de " + totalWts + " MW");
            } else {
                console.log("Generador #" + i + " esta apagado");
            }
            i++;
        }
        for (i = 5; i < 21; i++) {
            if (i % 2 === 0) {
                totalWts += valorGenradorOtros;
                console.log("Generador #" + i + " está prendido, añadiendo " + valorGenradorOtros + " MW para un total de " + totalWts + " MW");
            } else {
                console.log("Generador #" + i + " esta apagado");
            }
        }

    }
    if (pariedad.localeCompare(pariedadTodos)) {
        while (i < 5) {

            totalWts += valorGeneradorPrimero4;
            console.log("Generador #" + i + " está prendido, añadiendo " + valorGeneradorPrimero4 + " MW para un total de " + totalWts + " MW");
            i++;
        }
        for (i = 5; i < 21; i++) {

            totalWts += valorGenradorOtros;
            console.log("Generador #" + i + " está prendido, añadiendo " + valorGenradorOtros + " MW para un total de " + totalWts + " MW");

        }

    }
}

console.log(valorGeneradorElectrico("todos"));