/*Ejercicio:
Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.
● Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un
nuevo elemento de la lista.
● Añade un botón al lado de cada elemento para eliminarlo de la lista.

// Seleccionamos los elementos del DOM //*/

const textInput = document.getElementById('textInput');
const addButton = document.getElementById('ejercici03Btn');
const textList = document.getElementById('textList');

// Función para agregar un nuevo elemento a la lista
function addItem() {
    const text = textInput.value.trim();
    if (text !== '') {
        // Crear un nuevo elemento de lista
        const listItem = document.createElement('li');
        listItem.textContent = text;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            textList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);
        textList.appendChild(listItem);
        textInput.value = '';
    }
}

addButton.addEventListener('click', addItem);
