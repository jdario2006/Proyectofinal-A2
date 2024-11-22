function practica_1() {
    let palab1 = document.getElementById("palab1").value;
    let palab2 = document.getElementById("palab2").value;
    let respuesta = document.getElementById("respu1");
    respuesta.value = palab1 + " " + palab2;
}
function practica_2() {
    let fras1 = document.getElementById("fras1").value;
    let fras2 = document.getElementById("fras2").value;
    let respuesta = document.getElementById("respu2");
    let resultado = "";
    if (fras1 === fras2) {
        resultado = "Las frases son iguales.";
    }else{
        if (fras1 > fras2) {
            resultado = "La primera frase es mayor que la segunda.";
        }else{
            resultado = "La primera frase es menor que la segunda.";
        }
    }
    respuesta.value = resultado;
}
function practica_3() {
    let carac1 = document.getElementById("carac1").value;
    let respuesta = document.getElementById("respu3");
    let palabra1 = carac1.split(``);
    let resultado = "";
    for (let i = 0; i < palabra1.length; i++) {
        resultado +=palabra1[i]+ " ";
    }
    respuesta.value = resultado.trim();
}
function practica_4() {
    let asci1 = document.getElementById("asci1").value; 
    let respuesta = document.getElementById("respu4");
    let resultado = "";
    // Validar si los elementos existen
    if (!respuesta) {
        console.error("El elemento con ID 'respuAscii' no existe.");
        return;
    }
    // Recorrer cada carácter de la frase y obtener su código ASCII
    for (let i = 0; i < asci1.length; i++) {
        let caracter = asci1[i];
        if (caracter !== " ") {
            let codigoAscii = caracter.charCodeAt(0); // Obtener el código ASCII del carácter
            resultado += `${caracter}:`+`${codigoAscii}`+"\n"; // Formatear el resultado
        }
    }
    respuesta.value = resultado.trim();
}
function practica_5() {
    let inver1 = document.getElementById("inver1").value;
    let respuesta = document.getElementById("respu5");
    let irt = [];
    let msg = "";
    let lon = inver1.length - 1;
    while (lon >= 0) {
        irt.push(inver1[lon]);
        lon = lon - 1;
    }
    for (let i = 0; i < irt.length; i++) {
        msg = msg + irt[i];
    }
    respuesta.value = msg;
}
function practica_6() {
    const voc = document.getElementById("voc").value;
    let respuesta = document.getElementById("respu6");
    let contador = 0;
    const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ"
    let lon = voc.length;
    while (lon >= 0) {
        if (vocales.includes(voc[lon])) {
        contador = contador + 1;
        }
        lon = lon - 1; 
    }
    respuesta.value = `La palabra tiene ${contador} vocales.`;
}
function practica_7() {
    const alf = document.getElementById("alf").value;
    let respuesta = document.getElementById("respu7");
    let contador = 0;
    const vocal = "áéíóúÁÉÍÓÚ"
    let lon = alf.length;
    while (lon >= 0) {
        if (alf[lon] >= "a" && alf[lon] <= "z" || alf[lon] >= "A" && alf[lon] <= "Z" || vocal.includes(alf[lon])) {
        contador = contador + 1;
        }
        lon = lon - 1; 
    }
    respuesta.value = `La palabra tiene ${contador} letras.`;
}
function practica_8() {
    const figa1 = document.getElementById("figa1").value;
    let respuesta = document.getElementById("respu8");
    let contador = 0;
    let lon = figa1.length - 1;
    while (lon >= 0) {
        if (figa1[lon] >= "0" && figa1[lon] <="9") {
            contador = contador + 1;
        }
    lon = lon - 1; 
    }
    respuesta.value = `La frase tiene ${contador} digitos.`;
}
function practica_9() {
    const punt = document.getElementById("punt").value;
    let respuesta = document.getElementById("respu9");
    let contador = 0;
    let lon = punt.length - 1;
    while (lon >= 0) {
        if (punt[lon] == "." || punt[lon] == "," || punt[lon] == ";" || punt[lon] == ":") {
            contador = contador + 1;
        }
    lon = lon - 1; 
    }
    if (contador > 0) {
        respuesta.value = `La frase tiene ${contador} signos de puntuacion.`;
    }else{
        respuesta.value = "La frase tiene 0 signos de puntuacion.";
    }
}
function practica_10() {
    const fara1 = document.getElementById("fara1").value;
    let respuesta = document.getElementById("respu10");
    let contador = 1;
    let lon = fara1.length - 1;
    while (lon >= 0) {
        if (fara1[lon] == " ") {
            contador = contador + 1;
        }
    lon = lon - 1; 
    }
    if (contador > 0) {
        respuesta.value = `La frase tiene ${contador} palabras.`;
    }else{
        respuesta.value = "No hay frase.";
    }
}




