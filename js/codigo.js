// tarjetas de los diseñadores: se cargan desde el json

let contenedor = document.querySelector("#lista-disenadores");

fetch("js/disenadores.json")
  .then(respuesta => respuesta.json())
  .then(disenadores => {
    disenadores.forEach(disenador => {
      contenedor.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="tarjeta h-100 d-flex flex-column border border-secondary rounded-3 p-4">
            <i class="bi ${disenador.icono} text-danger fs-2"></i>
            <span class="text-secondary mb-4">${disenador.numero}</span>
            <h3 class="mb-2">${disenador.nombre}</h3>
            <p class="text-secondary flex-grow-1">${disenador.descripcion}</p>
            <a href="${disenador.destino}" target="_blank" class="text-danger text-uppercase fw-bold text-decoration-none">
              Ver colección <i class="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
      `;
    });
  });

// formulario del modal: validacion de Bootstrap y mensaje de gracias

const formulario = document.querySelector("#miFormulario");
const mensajeGracias = document.querySelector("#mensajeGracias");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!formulario.checkValidity()) {
    event.stopPropagation();
    formulario.classList.add("was-validated");
    return;
  }

  formulario.classList.add("was-validated");

  formulario.classList.add("d-none");
  mensajeGracias.classList.remove("d-none");
});
