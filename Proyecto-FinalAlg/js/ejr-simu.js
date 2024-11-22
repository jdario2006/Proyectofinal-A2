function Ejercicio_1() {
    const form = document.getElementById("quesForm");
    const resultado = document.getElementById("resultado1");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_2(){
    let tele = parseInt(document.getElementById("ctele").value) || 0;
    let ptele = parseInt(document.getElementById("pretele").value);
    let refri = parseInt(document.getElementById("crefri").value) || 0;
    let prefri = parseInt(document.getElementById("prerefri").value);
    let respuesta = document.getElementById("respu2");
    let destele= ptele;
    let desrefri=prefri;
    let utiltele=0;
    let utilrefri=0;
    let sumpre=ptele + prefri;
    let resultado=0;
    if ( tele >= 2){
        utiltele = ptele * 0.10;
        destele = ptele - utiltele;
    }
    if (refri >=3){
        utilrefri = prefri * 0.15;
        desrefri = prefri - utilrefri;
    }
    let descuento = destele + desrefri;
    if (sumpre > 2000){
        resultado = descuento * 0.95;
    }else{
        resultado = descuento;
    }
   respuesta.value = "Costo total: "+resultado.toFixed(2)+"\n"+"Descuento del televisor: "+utiltele+"%"+"\n"+"Descuento del refrigerador: "+utilrefri+"%";
}
function Ejercicio_3() {
    let num1 = parseInt(document.getElementById("num1").value) || 0;
    let num2 = parseInt(document.getElementById("num2").value) || 0;
    let respuesta = document.getElementById("respu3");
    let pos = 1;
    let cp = " ";
    let sumaPares = 0, sumaImpares = 0;
    while (pos <= 50) {
        if (pos % num1 === 0) {
            if (pos % num2 === 0) {
                cp += pos + ",";
            }
        }
        pos = pos + 1;
    }
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            sumaPares +=i;
        }else{
            sumaImpares +=i;
        }
    } 
    // Eliminar la última coma y espacio sobrante de `res` y `res2`
    cp = cp.slice(0, -1);
    respuesta.value = "Los divisores de "+num1+" y "+num2+" son: "+cp+"\n"+"La suma de los numeros pares son: "+sumaPares+"\n"+"La suma de los numeros impares son: "+sumaImpares+"\n";
}
function Ejercicio_4() {
    const form = document.getElementById("questionForm");
    const resultado = document.getElementById("respu4");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_5() {
    const form = document.getElementById("questForm");
    const resultado = document.getElementById("respu5");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_6() {
    const form = document.getElementById("quesForm6");
    const resultado = document.getElementById("respu6");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_7() {
    const form = document.getElementById("quesForm7");
    const resultado = document.getElementById("respu7");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_8() {
    const form = document.getElementById("quesForm8");
    const resultado = document.getElementById("respu8");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_9() {
    const form = document.getElementById("quesForm9");
    const resultado = document.getElementById("respu9");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_10() {
    const form = document.getElementById("quesForm10");
    const resultado = document.getElementById("respu10");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_11() {
    const form = document.getElementById("quesForm11");
    const resultado = document.getElementById("respu11");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_12() {
    const form = document.getElementById("quesForm12");
    const resultado = document.getElementById("respu12");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_13() {
    const form = document.getElementById("quesForm13");
    const resultado = document.getElementById("respu13");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_14() {
    const form = document.getElementById("quesForm14");
    const resultado = document.getElementById("respu14");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_15() {
    const form = document.getElementById("quesForm15");
    const resultado = document.getElementById("respu15");
    const respuestaCorrecta = "d"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la d.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_16() {
    const form = document.getElementById("quesForm16");
    const resultado = document.getElementById("respu16");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_17() {
    const form = document.getElementById("quesForm17");
    const resultado = document.getElementById("respu17");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_18() {
    const form = document.getElementById("quesForm18");
    const resultado = document.getElementById("respu18");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_19() {
    const form = document.getElementById("quesForm19");
    const resultado = document.getElementById("respu19");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_20() {
    const form = document.getElementById("quesForm20");
    const resultado = document.getElementById("respu20");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌ ";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_21() {
    const form = document.getElementById("quesForm21");
    const resultado = document.getElementById("respu21");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_22() {
    const form = document.getElementById("quesForm22");
    const resultado = document.getElementById("respu22");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_23() {
    const form = document.getElementById("quesForm23");
    const resultado = document.getElementById("respu23");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_24() {
    const form = document.getElementById("quesForm24");
    const resultado = document.getElementById("respu24");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_25() {
    const form = document.getElementById("quesForm25");
    const resultado = document.getElementById("respu25");
    const respuestaCorrecta = "d"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la d.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_26() {
    const form = document.getElementById("quesForm26");
    const resultado = document.getElementById("respu26");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_27() {
    const form = document.getElementById("quesForm27");
    const resultado = document.getElementById("respu27");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_28() {
    const form = document.getElementById("quesForm28");
    const resultado = document.getElementById("respu28");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_29() {
    const form = document.getElementById("quesForm29");
    const resultado = document.getElementById("respu29");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_30() {
    const form = document.getElementById("quesForm30");
    const resultado = document.getElementById("respu30");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_31() {
    const form = document.getElementById("quesForm31");
    const resultado = document.getElementById("respu31");
    const respuestaCorrecta = "d"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la d.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_32() {
    const form = document.getElementById("quesForm32");
    const resultado = document.getElementById("respu32");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_33() {
    const form = document.getElementById("quesForm33");
    const resultado = document.getElementById("respu33");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_34() {
    const form = document.getElementById("quesForm34");
    const resultado = document.getElementById("respu34");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_35() {
    const form = document.getElementById("quesForm35");
    const resultado = document.getElementById("respu35");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_36() {
    const form = document.getElementById("quesForm36");
    const resultado = document.getElementById("respu36");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_37() {
    const form = document.getElementById("quesForm37");
    const resultado = document.getElementById("respu37");
    const respuestaCorrecta = "d"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la d.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_38() {
    const form = document.getElementById("quesForm38");
    const resultado = document.getElementById("respu38");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_39() {
    const form = document.getElementById("quesForm39");
    const resultado = document.getElementById("respu39");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_40() {
    const form = document.getElementById("quesForm40");
    const resultado = document.getElementById("respu40");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_41() {
    const form = document.getElementById("quesForm41");
    const resultado = document.getElementById("respu41");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_42() {
    const form = document.getElementById("quesForm42");
    const resultado = document.getElementById("respu42");
    const respuestaCorrecta = "d"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la d.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_43() {
    const form = document.getElementById("quesForm43");
    const resultado = document.getElementById("respu43");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_44() {
    const form = document.getElementById("quesForm44");
    const resultado = document.getElementById("respu44");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_45() {
    const form = document.getElementById("quesForm45");
    const resultado = document.getElementById("respu45");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_46() {
    const form = document.getElementById("quesForm46");
    const resultado = document.getElementById("respu46");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_47() {
    const form = document.getElementById("quesForm47");
    const resultado = document.getElementById("respu47");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_48() {
    const form = document.getElementById("quesForm48");
    const resultado = document.getElementById("respu48");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_49() {
    const form = document.getElementById("quesForm49");
    const resultado = document.getElementById("respu49");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_50() {
    const form = document.getElementById("quesForm50");
    const resultado = document.getElementById("respu50");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_51() {
    const form = document.getElementById("quesForm51");
    const resultado = document.getElementById("respu51");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_52() {
    const form = document.getElementById("quesForm52");
    const resultado = document.getElementById("respu52");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_53() {
    const form = document.getElementById("quesForm53");
    const resultado = document.getElementById("respu53");
    const respuestaCorrecta = "d"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la d.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_54() {
    const form = document.getElementById("quesForm54");
    const resultado = document.getElementById("respu54");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_55() {
    const form = document.getElementById("quesForm55");
    const resultado = document.getElementById("respu55");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_56() {
    const form = document.getElementById("quesForm56");
    const resultado = document.getElementById("respu56");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_57() {
    const form = document.getElementById("quesForm57");
    const resultado = document.getElementById("respu57");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_58() {
    const form = document.getElementById("quesForm58");
    const resultado = document.getElementById("respu58");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_59() {
    const form = document.getElementById("quesForm59");
    const resultado = document.getElementById("respu59");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_60() {
    const form = document.getElementById("quesForm60");
    const resultado = document.getElementById("respu60");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_61() {
    const form = document.getElementById("quesForm61");
    const resultado = document.getElementById("respu61");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_62() {
    const form = document.getElementById("quesForm62");
    const resultado = document.getElementById("respu62");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_63() {
    const form = document.getElementById("quesForm63");
    const resultado = document.getElementById("respu63");
    const respuestaCorrecta = "b"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la b.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_64() {
    const form = document.getElementById("quesForm64");
    const resultado = document.getElementById("respu64");
    const respuestaCorrecta = "d"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la d.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_65() {
    const form = document.getElementById("quesForm65");
    const resultado = document.getElementById("respu65");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_66() {
    const form = document.getElementById("quesForm66");
    const resultado = document.getElementById("respu66");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_67() {
    const form = document.getElementById("quesForm67");
    const resultado = document.getElementById("respu67");
    const respuestaCorrecta = "c"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la c.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_68() {
    const form = document.getElementById("quesForm68");
    const resultado = document.getElementById("respu68");
    const respuestaCorrecta = "a"; // Respuesta correcta
    let seleccionada = ""; 
    // Buscar la opción seleccionada
    for (const opcion of form.elements["option"]) {
        if (opcion.checked) {
            seleccionada = opcion.value;
            break;
        }
    }
    // Verificar si la opción seleccionada es correcta
    if (seleccionada === "") {
        resultado.textContent = "Por favor, selecciona una opción.";
    } else if (seleccionada === respuestaCorrecta) {
        resultado.textContent = "😊¡Correcto! La respuesta correcta es la a.😊";
        resultado.style.color = "green"; // Cambia el color del texto a verde
    } else {
        resultado.textContent = "❌Incorrecto. Intenta de nuevo.❌";
        resultado.style.color = "red"; // Cambia el color del texto a rojo
    }
}
function Ejercicio_69(){
    let num = parseInt(document.getElementById("num").value) || 0;
    let respuesta = document.getElementById("respu69");
    let ac = 0;
    let cp = " "; 
    if (num <= 0) {
        respuesta.value = "Por favor, ingresa un número mayor que 0.";
        return;
    }
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
        ac = ac + i; 
        cp += i + ",";    
        }
    }
    if (ac === num) {
        cp = cp.slice(0, -1);
        respuesta.value = `El número ${num} es perfecto. Divisores: ${cp}`;   
    }else{
        cp = cp.slice(0, -1);
        respuesta.value =`El número ${num} no es perfecto. Divisores: ${cp}`;
    }
}
function Ejercicio_70() {
    const fare = document.getElementById("fare").value;
    let respuesta = document.getElementById("respu70");
    let contador = 0;
    const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ"
    let lon = fare.length;
    while (lon >= 0) {
        if (vocales.includes(fare[lon])) {
        contador = contador + 1;
        }
        lon = lon - 1; 
    }
    respuesta.value = `La frase tiene ${contador} vocales.`;
}
function Ejercicio_71() {
    const digisu = document.getElementById("digisu").value;
    let respuesta = document.getElementById("respu71");
    const sut = digisu.split("").map(Number);
    // Validación de entrada
    if (!digisu.trim()) {
        respuesta.value = "Por favor, ingrese valores.";
        return;
    }
    // Validación de números
    if (sut.some(isNaN)) {
        respuesta.value = "Ingrese únicamente números separados por comas.";
        return;
    }
    // Sumar los digitos de un numero
    const resultado = sut.reduce((a, b) => a + b, 0);
    //Mostrar el resultado
    respuesta.value = ` La suma de los digitos es de: ${resultado}`;
}


// function Ejercicio_3() {
//     let num1 = 3, num2 = 7, pos = 1;
//     let ac = 0; ac2 = 0, sumaPares = 0, sumaImpares = 0
//     let res = "", res2 = "" 
//     let respuesta = document.getElementById("respu3");
//     while (pos <= 50) {
//         if (pos % num1 === 0) {
//             res += pos + ",";
//             ac = ac + pos; 
//             if (pos % 2 === 0) {
//                 sumaPares = sumaPares + pos; 
//             } else {
//                 sumaImpares = sumaImpares + pos; 
//             }
//         }
//         if (pos % num2 === 0) {
//             res2 += pos + ",";
//             ac2 = ac2 + pos; 
//             if (pos % 2 === 0) {
//                 sumaPares = sumaPares + pos; 
//             } else {
//                 sumaImpares = sumaImpares + pos; 
//             }
//         }
//         pos = pos + 1;
//     }
//     // Eliminar la última coma y espacio sobrante de `res` y `res2`
//     res = res.slice(0, -1);
//     res2 = res2.slice(0, -1);
//     respuesta.value = "Los divisores de 3 son: "+res+"\n"+"Los divisores de 7 son:"+res2+"\n"+"La suma de los divisores pares de 3 y 7 son: "+sumaPares+"\n"+"La suma de los divisores impares de 3 y 7 son: "+sumaImpares+"\n";
// }





    
     

