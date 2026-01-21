// Ejercicio 4: Filtro de lista en tiempo real
// Crea una página con un campo de texto y una lista predefinida de elementos.
// Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para
// mostrar solo los elementos que contienen el texto escrito.

// Seleccionamos el campo de texto y la lista de elementos
const input = document.getElementById('filterInput');
const lista = document.getElementById('itemList');

// Añadimos un evento 'input' al campo de texto
input.addEventListener('input', function() {
    const filter = input.value.toLowerCase();
    const items = lista.querySelectorAll('li');
    items.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        item.style.display = itemText.includes(filter) ? '' : 'none';
    });
});
