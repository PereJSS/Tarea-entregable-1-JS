/*Ejercicio:
Crea una aplicación de lista de tareas.
• Cada tarea debe incluir un texto y un checkbox para marcarla como completada.
• Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.
• Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage.*/

document.addEventListener('DOMContentLoaded', function() {
    const inputTarea = document.getElementById('nueva-tarea');
    const btnAgregar = document.getElementById('agregar-tarea');
    const listaTareas = document.getElementById('lista-tareas');
    const btnLimpiarCompletadas = document.getElementById('limpiar-completadas');
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    function guardarTareas() {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }
    
    function renderizarTareas() {
        listaTareas.innerHTML = '';
        tareas.forEach((tarea, index) => {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = tarea.completada;
            checkbox.addEventListener('change', function() {
                tareas[index].completada = this.checked;
                guardarTareas();
                renderizarTareas();
            });
            
            const label = document.createElement('label');
            label.textContent = tarea.texto;
            if (tarea.completada) {
                label.style.textDecoration = 'line-through';
            }
            
            li.appendChild(checkbox);
            li.appendChild(label);
            listaTareas.appendChild(li);
        });
    }

    btnAgregar.addEventListener('click', function() {
        const textoTarea = inputTarea.value.trim();
        if (textoTarea) {
            tareas.push({ texto: textoTarea, completada: false });
            guardarTareas();
            renderizarTareas();
            inputTarea.value = '';
        }
    });
    
    btnLimpiarCompletadas.addEventListener('click', function() {
        tareas = tareas.filter(tarea => !tarea.completada);
        guardarTareas();
        renderizarTareas();
    });
    
    renderizarTareas();
}); 
