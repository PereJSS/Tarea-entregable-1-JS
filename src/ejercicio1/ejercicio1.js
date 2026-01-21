//Ejercicio:
//Crea una página web con un botón que diga "Cambiar color". Cada vez que el usuario haga clic en el
//botón, el color de fondo de la página debe cambiar a un color aleatorio.

//Función para generar un color aleatorio en formato hexadecimal

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const button = document.querySelector('button');
button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});