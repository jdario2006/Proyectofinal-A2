function ejercicio_1() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let respuesta = document.getElementById("respu1");
    let resultado = "";
    if (num1 > num2) {
        respuesta.value = "El número inicial debe ser menor o igual al número final.";
        return;
    }
    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) {
            resultado += i + ",";
        }
    }
    resultado = resultado.slice(0, -1);
    respuesta.value = "Los numeros impares entre "+num1+" y "+num2+" son: "+resultado;
}
function ejercicio_2() {
    let numer1 = parseInt(document.getElementById("numer1").value);
    let numer2 = parseInt(document.getElementById("numer2").value);
    let respuesta = document.getElementById("respu2");
    let resultado = 0;
    if (numer1 > numer2) {
        respuesta.value = "El número inicial debe ser menor o igual al número final.";
        return;
    }
    for (let i = numer1; i <= numer2; i++) {
        resultado = resultado + i;
    }
    respuesta.value = "La suma de todos los numeros entre "+numer1+" y "+numer2+" es:"+resultado;
}
function ejercicio_3() {
    let par1 = parseInt(document.getElementById("par1").value);
    let par2 = parseInt(document.getElementById("par2").value);
    let respuesta = document.getElementById("respu3");
    let resultado = 0;
    if (par1 > par2) {
        respuesta.value = "El número inicial debe ser menor o igual al número final.";
        return;
    }
    for (let i = par1; i <= par2; i++) {
        if (i % 2 === 0) {
            resultado = resultado + i;
        }
    }
    respuesta.value = "Los suma de todos los numeros pares entre "+par1+" y "+par2+" es: "+resultado;
}
function ejercicio_4() { 
    let divi1 = parseInt(document.getElementById("divi1").value);
    let divi2 = parseInt(document.getElementById("divi2").value);
    let respuesta = document.getElementById("respu4");
    let pos = 1;
    let cp = " ";
    if (divi1 > divi2) {
        respuesta.value = "El número inicial debe ser menor o igual al número final.";
        return;
    }
    while (pos <= 100) {
        if (pos % divi1 === 0) {
            if (pos % divi2 === 0) {
                cp += pos + ",";
            }
        }
        pos = pos + 1;
    }
    cp = cp.slice(0, -1);
    respuesta.value = "Los numeros divisibles entre "+divi1+" y "+divi2+" son: "+cp;
}
function ejercicio_5() {
    let mul1 = parseInt(document.getElementById("mul1").value);
    let lim2 = parseInt(document.getElementById("lim2").value);
    let respuesta = document.getElementById("respu5");
    let resultado = "";
    for (let i = 1; i <= lim2; i++) {
        resultado += `${mul1} * ${i} = `+mul1 * i+"\n"; 
    }
    respuesta.value = resultado;
}
function ejercicio_6() {
    let n = parseInt(document.getElementById("n").value);
    let respuesta = document.getElementById("respu6");
    // Validación de entrada
    if (isNaN(n) || n <= 0) {
        resultado.value = "Por favor, ingrese un número entero positivo.";
        return;
    }
    // Generar la serie Fibonacci
    let fibonacci = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibonacci.push(0);
        } else if (i === 1) {
            fibonacci.push(1);
        } else {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
    }
    // Mostrar la serie
    respuesta.value = `Los primeros ${n} números de la serie Fibonacci son:\n${fibonacci.join(", ")}`;
}
function ejercicio_7() {
    let multi1 = parseInt(document.getElementById("multi1").value);
    let multi2 = parseInt(document.getElementById("multi2").value);
    let respuesta = document.getElementById("respu7");
    let resultado = 1;
    for (let i = multi1; i <= multi2; i++) {
        resultado = resultado * i;
    }
    respuesta.value = "La multiplicacion de todos los numeros entre "+multi1+" y "+multi2+" es:"+resultado;
}
function ejercicio_8() {
    let cal1 = parseInt(document.getElementById("cal1").value);
    let respuesta = document.getElementById("respu8");
    let resultado = 1;
    for (let i = cal1; i > 0; i--) {
        resultado = resultado * i;
    }
    respuesta.value = "El factorial de "+cal1+" es: "+resultado;
}
function ejercicio_9() { 
    let imp1 = parseInt(document.getElementById("imp1").value);
    let respuesta = document.getElementById("respu9");
    let pos = 1;
    let cp = " ";
    while (pos <= 20) {
        if (pos % imp1 === 0) {
            cp += pos + ",";   
        }
        pos = pos + 1;
    }
    cp = cp.slice(0, -1);
    respuesta.value = "Los numeros divisibles de "+imp1+" del 1 al 20 son: "+cp;
}
function ejercicio_10() { 
    let pro1 = parseInt(document.getElementById("pro1").value);
    let respuesta = document.getElementById("respu10");
    let pos = 1;
    let cp = " ";
    if (pro1 === 1) {
        respuesta.value = "El número debe ser distinto 1";
        return;
    }
    while (pos < pro1) {
        if (pro1 % pos === 0) {
            cp += pos + ",";   
        }
        pos = pos + 1;
    }
    cp = cp.slice(0, -1);
    respuesta.value = "Los numeros divisibles de "+pro1+" son: "+cp;
}
function ejercicio_11() {
    let per1 = parseInt(document.getElementById("per1").value);
    let respuesta = document.getElementById("respu11");
    let pos = 1;
    let cp = " ";
    let ac = 0 ;
    if (per1 === 1) {
        respuesta.value = "El número debe ser distinto 1";
        return;
    }
    while (pos < per1) {
        if (per1 % pos === 0) {
            cp += pos + ",";
            ac = ac + pos;   
        }
        pos = pos + 1;
    }
    if (ac === per1) {
        respuesta.value = "Es perfecto";
    }else{
        respuesta.value = "No es perfecto";
    }
}
function ejercicio_12() {
    let prim1 = parseInt(document.getElementById("prim1").value);
    let respuesta = document.getElementById("respu12");
    let pos = 2;
    let primo = 1;
    while (pos < prim1 && primo === 1) {
        if (prim1 % pos === 0) {
            primo = 0;
        }
        pos = pos + 1;
    }
    if (primo === 1) {
        respuesta.value = "Es primo";
    }else{
        respuesta.value = "No es primo";
    }
}
function ejercicio_13() {
    let inv1 = document.getElementById("inv1").value;
    let respuesta = document.getElementById("respu13");
    let ert = [];
    let msg = "";
    let lon = inv1.length - 1;
    while (lon >= 0) {
        ert.push(inv1[lon]);
        lon = lon - 1;
    }
    for (let i = 0; i < ert.length; i++) {
        msg = msg + ert[i];
    }
    respuesta.value = msg;
}
function ejercicio_14() {
    let cont1 = document.getElementById("cont1").value;
    let respuesta = document.getElementById("respu14");
    let contador = 0;
    let lon = cont1.length;
    while (lon > 0) {
        contador = contador + 1;
        lon = lon - 1;
    }
    respuesta.value = `El numero tiene ${contador} digitos.`;
}

function ejercicio_15() {
    let aste1 = document.getElementById("aste1").value;
    let respuesta = document.getElementById("respu15");
    let cp = "";
    let ac = "";
    for (let i = 1; i <= aste1; i++) {
        ac = ac + "*".repeat(i)+"\n";
        // cp = "*".repeat(i)+"\n";
    }
    respuesta.value = ac;
}