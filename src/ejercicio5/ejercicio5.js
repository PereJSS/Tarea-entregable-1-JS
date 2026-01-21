/*Ejercicio:
Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar",
"Multiplicar", y "Dividir".
● Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un
área de texto o debajo de los botones.
● Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías */

document.getElementById("sumar").addEventListener("click", function() {
    realizarOperacion("sumar");
});

document.getElementById("restar").addEventListener("click", function() {
    realizarOperacion("restar");
});

document.getElementById("multiplicar").addEventListener("click", function() {
    realizarOperacion("multiplicar");
}); 

document.getElementById("dividir").addEventListener("click", function() {
    realizarOperacion("dividir");
});


function realizarOperacion(operacion) {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    let resultado; 
    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, ingrese ambos números.";
    } else {
        switch (operacion) {
            case "sumar":
                resultado = num1 + num2;
                break;
            case "restar":
                resultado = num1 - num2;
                break;
            case "multiplicar":
                resultado = num1 * num2;
                break;
            case "dividir":
                if (num2 === 0) {
                    resultado = "Error: División por cero no permitida.";
                } else {
                    resultado = num1 / num2;
                }
                break;
            default:
                resultado = "Operación no válida.";
        }
    }
    document.getElementById("resultado").innerText = "Resultado de " + operacion + ": " + resultado;
}


