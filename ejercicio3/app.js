const form = document.querySelector("#formTarea");
const campo = document.querySelector("#tarea");
const lista = document.querySelector("#listaTareas");
const mensaje = document.querySelector("#mensaje");


form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const texto = campo.value.trim();

    if (texto === "") {
        mensaje.textContent = "Escribe una tarea antes de agregarla.";
        return;
    }

    const item = document.createElement("li");

    const textoTarea = document.createElement("span");
    textoTarea.className = "texto-tarea";
    textoTarea.textContent = texto;

    const btnCompletar = document.createElement("button");
    btnCompletar.type = "button";
    btnCompletar.className = "completar";
    btnCompletar.textContent = "✓";
    btnCompletar.setAttribute("aria-label", "Completar tarea");

    const btnEliminar = document.createElement("button");
    btnEliminar.type = "button";
    btnEliminar.className = "eliminar";
    btnEliminar.textContent = "🗑";
    btnEliminar.setAttribute("aria-label", "Eliminar tarea");

    item.append(textoTarea, btnCompletar, btnEliminar);
    lista.appendChild(item);

    campo.value = "";
    campo.focus();

    mensaje.textContent = "Tarea agregada correctamente.";
});


lista.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");

    if (!boton || !lista.contains(boton)) {
        return;
    }

    const item = boton.closest("li");

    if (boton.classList.contains("completar")) {
        item.classList.toggle("completada");
    }

    if (boton.classList.contains("eliminar")) {
        item.remove();
        mensaje.textContent = "Tarea eliminada.";
    }
});


campo.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        campo.value = "";
        mensaje.textContent = "Campo limpiado.";
    }
});
