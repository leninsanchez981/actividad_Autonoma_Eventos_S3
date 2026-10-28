const form = document.querySelector("#formRegistro");
const contrasena = document.querySelector("#contrasena");
const btnMostrar = document.querySelector("#btnMostrar");
const mensaje = document.querySelector("#mensaje");

const reqLongitud = document.querySelector("#reqLongitud");
const reqMayuscula = document.querySelector("#reqMayuscula");
const reqNumero = document.querySelector("#reqNumero");


function validarContrasena() {
    const valor = contrasena.value;

    const cumpleLongitud = valor.length >= 8;
    const cumpleMayuscula = /[A-Z]/.test(valor);
    const cumpleNumero = /[0-9]/.test(valor);

    reqLongitud.classList.toggle(
        "cumplido",
        cumpleLongitud
    );

    reqMayuscula.classList.toggle(
        "cumplido",
        cumpleMayuscula
    );

    reqNumero.classList.toggle(
        "cumplido",
        cumpleNumero
    );

    return cumpleLongitud &&
           cumpleMayuscula &&
           cumpleNumero;
}


btnMostrar.addEventListener("click", () => {
    const estaOculta = contrasena.type === "password";

    contrasena.type = estaOculta ? "text" : "password";

    btnMostrar.textContent = estaOculta
        ? "🙈 Ocultar"
        : "👁 Mostrar";
});


contrasena.addEventListener("input", () => {
    validarContrasena();

    mensaje.textContent = "";
    mensaje.classList.remove("error");
});


form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (validarContrasena()) {
        mensaje.textContent = "Cuenta creada";
        mensaje.classList.remove("error");
    } else {
        mensaje.textContent =
            "La contraseña no cumple los tres requisitos.";

        mensaje.classList.add("error");
    }
});
