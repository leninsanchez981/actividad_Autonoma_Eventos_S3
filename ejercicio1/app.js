
const form = document.querySelector("#formComentario");
const campo = document.querySelector("#comentario");
const contador = document.querySelector("#contador");
const boton = document.querySelector("#btnPublicar");
const mensaje = document.querySelector("#mensaje");

const LIMITE = 280;

function actualizarContador() {
  const cantidad = campo.value.length;

  contador.textContent = `${cantidad}/${LIMITE}`;


  contador.classList.toggle(
    "naranja",
    cantidad >= 250 && cantidad < LIMITE
  );


  contador.classList.toggle(
    "rojo",
    cantidad === LIMITE
  );

  boton.disabled = cantidad === 0 || cantidad === LIMITE;

  mensaje.textContent = "";
}

campo.addEventListener("input", actualizarContador);

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (campo.value.trim().length > 0 &&
      campo.value.length < LIMITE) {
    mensaje.textContent = "Comentario publicado correctamente.";
    campo.value = "";
    actualizarContador();
  }
});

actualizarContador();
