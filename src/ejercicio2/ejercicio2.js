/*Ejercicio:
Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". Cada
vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics
realizados.
*/

let clickCount = 0;
const button = document.getElementById('clickCounterBtn');
const display = document.getElementById('clickCountText');
button.addEventListener('click', () => {
    clickCount++;
    display.textContent = `Clics: ${clickCount}`;
});
