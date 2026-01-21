/*Ejercicio:
Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que
diga “Generar contraseña”.
• Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando
letras, números y caracteres especiales.
• Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la
longitud debe ser mayor o igual a 4.*/

let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";

let longitudContraseña = document.getElementById('longitud');
let btnGenerar = document.getElementById('generar');
let resultado = document.getElementById('contraseña');

// Agregar evento al botón para generar la contraseña

btnGenerar.addEventListener('click', function() {
    let longitud = parseInt(longitudContraseña.value);
    if (isNaN(longitud) || longitud < 4) {
        resultado.textContent = "Error: La longitud debe ser mayor o igual a 4.";
        return;
    }
    /*Generar la contraseña aleatoria*/
    let contraseña = Array.from({length: longitud}, () => 
        caracteres[Math.floor(Math.random() * caracteres.length)]
    ).join('');
    resultado.textContent = contraseña;
});
