/*Ejercicio:
Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.
• Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.
• Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de
línea.*/

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    let campoTexto = document.getElementById('texto');
    let contadorCaracteres = document.getElementById('contadorCaracteres');
    let contadorPalabras = document.getElementById('contadorPalabras');

    // Verificar que todos los elementos existan
    if (!campoTexto || !contadorCaracteres || !contadorPalabras) {
        console.error('No se pudieron encontrar todos los elementos necesarios');
        return;
    }

    campoTexto.addEventListener('input', function() {
        let texto = campoTexto.value;
        // Contar caracteres sin espacios ni saltos de línea
        let numCaracteres = texto.replace(/[\s\n\r]/g, '').length; 
        // Contar palabras (texto separado por espacios)
        let numPalabras = texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;
        
        contadorCaracteres.textContent = `Número de caracteres: ${numCaracteres}`;
        contadorPalabras.textContent = `Número de palabras: ${numPalabras}`;
    });

    // Inicializar contadores al cargar la página
    contadorCaracteres.textContent = "Número de caracteres: 0";
    contadorPalabras.textContent = "Número de palabras: 0";
});