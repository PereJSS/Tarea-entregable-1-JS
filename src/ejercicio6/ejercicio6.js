/*Ejercicio:
Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: "Iniciar", "Pausar"
y "Reiniciar".
• Al hacer clic en "Iniciar", el temporizador debe comenzar a contar los segundos, minutos y horas.
• "Pausar" detiene el conteo pero mantiene el tiempo actual.
• "Reiniciar" pone el temporizador en 00:00:00.*/

let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo;

function iniciarTemporizador() {
    console.log('Función iniciarTemporizador llamada');
    if (!intervalo) {
        intervalo = setInterval(actualizarTemporizador, 1000);
        console.log('Temporizador iniciado');
    }
}

function pausarTemporizador() {
    console.log('Función pausarTemporizador llamada');
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciarTemporizador() {
    console.log('Función reiniciarTemporizador llamada');
    clearInterval(intervalo);
    intervalo = null;
    horas = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById('temporizador').textContent = "00:00:00";
}

function actualizarTemporizador() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }
    
    const tiempoFormateado = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    document.getElementById('temporizador').textContent = tiempoFormateado;
    console.log('Tiempo actualizado:', tiempoFormateado);
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, agregando event listeners');
    
    const btnIniciar = document.getElementById('iniciar');
    const btnPausar = document.getElementById('pausar');
    const btnReiniciar = document.getElementById('reiniciar');
    const temporizadorDisplay = document.getElementById('temporizador');
    
    console.log('Elementos encontrados:', {
        btnIniciar: !!btnIniciar,
        btnPausar: !!btnPausar,
        btnReiniciar: !!btnReiniciar,
        temporizadorDisplay: !!temporizadorDisplay
    });
    
    if (btnIniciar && btnPausar && btnReiniciar && temporizadorDisplay) {
        btnIniciar.addEventListener('click', iniciarTemporizador);
        btnPausar.addEventListener('click', pausarTemporizador);
        btnReiniciar.addEventListener('click', reiniciarTemporizador);
        console.log('Event listeners agregados correctamente');
    } else {
        console.error('No se pudieron encontrar todos los elementos necesarios');
    }
});