// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios innecesarios

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista de amigos
    amigos.push(nombre);

    // Actualizar la lista visible en la página
    actualizarListaAmigos();

    // Limpiar el campo de texto
    input.value = "";
    input.focus();

    // Restablecer el estilo del botón
    actualizarEstiloBoton();
}

// Función para actualizar la lista visible de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista

    // Crear un elemento <li> por cada amigo en la lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.setAttribute("role", "listitem");

        // Botón para eliminar un amigo de la lista
        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.className = "delete-button";
        eliminarBtn.onclick = () => eliminarAmigo(index);

        li.appendChild(eliminarBtn);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar el amigo de la lista
    actualizarListaAmigos(); // Actualizar la lista visible
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

    // Mostrar el botón para reiniciar
    const reiniciarBtn = document.createElement("button");
    reiniciarBtn.textContent = "Reiniciar Juego";
    reiniciarBtn.className = "reset-button";
    reiniciarBtn.onclick = reiniciarJuego;
    resultado.appendChild(reiniciarBtn);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vaciar la lista de amigos
    actualizarListaAmigos(); // Actualizar la lista visible

    // Limpiar el resultado del sorteo
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}

// Función para actualizar el estilo del botón "Añadir"
function actualizarEstiloBoton() {
    const input = document.getElementById("amigo");
    const boton = document.querySelector(".button-add");
    const nombre = input.value.trim();

    if (nombre !== "") {
        boton.style.backgroundColor = "#4CAF50"; // Cambiar a verde
        boton.style.color = "white";
    } else {
        boton.style.backgroundColor = ""; // Restaurar estilo por defecto
        boton.style.color = "";
    }
}

// Escuchar cambios en el campo de entrada
const inputAmigo = document.getElementById("amigo");
inputAmigo.addEventListener("input", actualizarEstiloBoton);
