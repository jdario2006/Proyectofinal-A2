function practica_1() {
    const respuesta = document.getElementById("respu1");
    let resultado = "";
    const numer = [];
    for (let i = 0;i < 10; i++) {
        numer[i] = Math.floor(Math.random() * 100);
    }
        numer.forEach((numer, index) => {
        resultado += `numero ${index + 1}: ${numer}\n`;
    });
    if (respuesta) {
        respuesta.value = resultado; // Mostramos el resultado
    } else {
        console.error("El elemento con ID 'respu1' no existe.");
    }
}
function practica_2() {
    const prome1 = document.getElementById("prome1").value;
    let respuesta = document.getElementById("respu2");
    // Validación de entrada
    if (!prome1.trim()) {
        respuesta.value = "Por favor, ingrese valores.";
        return;
    }
    const califi = prome1.split(",").map(Number);
    // Validación de números
    if (califi.some(isNaN)) {
        respuesta.value = "Ingrese únicamente números separados por comas.";
        return;
    }
    // Cálculo del promedio
    const resultado = califi.reduce((a, b) => a + b, 0) / califi.length;
    // Mostrar el resultado
    respuesta.value = `El promedio es: ${resultado.toFixed(2)}`;
}
function practica_3() {
    const maxi1 = document.getElementById("maxi1").value;
    let respuesta = document.getElementById("respu3");
    const may = maxi1.split(",").map(Number);
    // Validación de entrada
    if (!maxi1.trim()) {
        respuesta.value = "Por favor, ingrese valores.";
        return;
    }
    // Validación de números
    if (may.some(isNaN)) {
        respuesta.value = "Ingrese únicamente números separados por comas.";
        return;
    }
    // Encontrar el numero mas grande
    const resultado = Math.max(...may);
    //Mostrar el resultado
    respuesta.value = ` El numero mas grande es: ${resultado}`;
}
function practica_4() {
    const proma1 = document.getElementById("proma1").value;
    let mare1 = document.getElementById("mare1").value;
    let respuesta = document.getElementById("respu4");
    const doye = proma1.split(",").map(Number);
    // Validación de entrada
    if (!proma1.trim()) {
        respuesta.value = "Por favor, ingrese valores.";
        return;
    }
    // Validación de números
    if (doye.some(isNaN)) {
        respuesta.value = "Ingrese únicamente números separados por comas.";
        return;
    }
    // Calculo del promedio
    const resultado = doye.filter(numero => numero > mare1).reduce((a, b) => a + b, 0) / doye.filter(numero => numero > mare1).length;
    //Mostrar el resultado
    respuesta.value = ` El promedio de los numeros mayores del limite ingresado es: ${resultado.toFixed(2)}`;
}
function practica_5() {
    const meno1 = document.getElementById("meno1").value;
    let respuesta = document.getElementById("respu5");
    const men = meno1.split(",").map(Number);
    // Validación de entrada
    if (!meno1.trim()) {
        respuesta.value = "Por favor, ingrese valores.";
        return;
    }
    // Validación de números
    if (men.some(isNaN)) {
        respuesta.value = "Ingrese únicamente números separados por comas.";
        return;
    }
    // Encontrar el numero mas pequeño
    const resultado = Math.min(...men);
    //Mostrar el resultado
    respuesta.value = ` El numero mas pequeño es: ${resultado}`;
}
function practica_6() {
    const propa1 = document.getElementById("propa1").value;
    let respuesta = document.getElementById("respu6");
    const dopa = propa1.split(",").map(Number);
    // Validación de entrada
    if (!propa1.trim()) {
        respuesta.value = "Por favor, ingrese valores.";
        return;
    }
    // Validación de números
    if (dopa.some(isNaN)) {
        respuesta.value = "Ingrese únicamente números separados por comas.";
        return;
    }
    // Calculo el promedio de numeros pares
    const resultado = dopa.filter(numero => numero % 2 === 0).reduce((a, b) => a + b, 0) /dopa.filter(numero => numero % 2 === 0).length;
    //Mostrar el resultado
    respuesta.value = ` El promedio de los numeros pares es de: ${resultado.toFixed(2)}`;
}
function practica_7() {
    const asu1 = document.getElementById("asu1").value;
    let respuesta = document.getElementById("respu7");
    const posu = asu1.split("").map(Number);
    // Validación de entrada
    if (!asu1.trim()) {
        respuesta.value = "Por favor, ingrese valores.";
        return;
    }
    // Validación de números
    if (posu.some(isNaN)) {
        respuesta.value = "Ingrese únicamente números separados por comas.";
        return;
    }
    // Sumar los digitos de un numero
    const resultado = posu.reduce((a, b) => a + b, 0);
    //Mostrar el resultado
    respuesta.value = ` La suma de los digitos es de: ${resultado}`;
}
function practica_8() {
    const cosu1 = document.getElementById("cosu1").value.trim();
    let respuesta = document.getElementById("respu8");
    const posu = cosu1.split(",").map(Number);
    let contpo = 0;
    let contne = 0;
    // Validación de entrada
    if (!cosu1.trim()) {
        respuesta.value = "Por favor, ingrese valores.";
        return;
    }
    // Validación de números
    if (posu.some(isNaN)) {
        respuesta.value = "Ingrese únicamente números separados por comas.";
        return;
    }
    // Contar los numeros positivos y negativos
    for (let i = 0; i < posu.length; i++) {
        if (posu[i] > 0) {
            contpo = contpo + 1;
        }else{
            contne = contne + 1;
        }
    }
    //Sumar los numeros positivos y negativos
    const resultado = posu.reduce((a, b) => a + b, 0);
    //Mostrar el resultado
    respuesta.value = `La suma de los digitos es de: ${resultado}`+"\n"+`La cantidad de numeros positivos es de: ${contpo}`+"\n"+`La cantidad de numeros negativos es de: ${contne}`;
}
function practica_9() {
    const pria1 = document.getElementById("pria1").value;
    let respuesta = document.getElementById("respu9");
    const cuadrado = pria1.split(",").map(Number);
    // Validación de entrada
    if (!pria1.trim()) {
        respuesta.value = "Por favor, ingrese valores.";
        return;
    }
    // Validación de números
    if (cuadrado.some(isNaN)) {
        respuesta.value = "Ingrese únicamente números separados por comas.";
        return;
    }
    // Obtener el cuadrado de cada numero
    const resultado = cuadrado.map(numero => numero * numero);
    //Mostrar el resultado
    respuesta.value = ` El cuadrado de cada numero es de: [${resultado}]`;
}
function practica_10() {
    // Obtener valores de entrada
    const arregl1 = document.getElementById("arregl1").value.trim();
    const arregl2 = document.getElementById("arregl2").value.trim();
    let respuesta = document.getElementById("respu10");
    const cuadrado1 = arregl1.split(",").map(Number);
    const cuadrado2 = arregl2.split(",").map(Number);
    // Validación de entrada
    if (!arregl1 || !arregl2) {
        respuesta.value = "Por favor, ingrese valores en ambos arreglos.";
        return;
    }
    // Validación de números
    if (cuadrado1.some(isNaN) || cuadrado2.some(isNaN)) {
        respuesta.value = "Ingrese únicamente números separados por comas.";
        return;
    }
    // Validación de dimensiones
    if (cuadrado1.length !== cuadrado2.length) {
        respuesta.value = "Los arreglos deben tener la misma dimensión.";
        return;
    }
    // Sumar arreglos posición a posición
    const resultado = cuadrado1.map((numero, index) => numero + cuadrado2[index]);
    // Mostrar el resultado
    respuesta.value = `La suma de cada posición es: [${resultado.join(", ")}]`;
}


