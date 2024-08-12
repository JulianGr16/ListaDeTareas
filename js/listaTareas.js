const btnAgregar = document.getElementById("agregar");

const agregarTarea = (e) => {
  e.preventDefault();
  const padre = document.querySelector("form");
  let input = document.querySelector("input");
  let dato = input.value;

  if (dato) {
    let lugar = document.createElement("li");
    lugar.innerHTML += `${dato} <button type="button" class="btn btn-danger borrar">Eliminar Tarea</button>`;
    padre.appendChild(lugar);
    borrarTarea();
  } else {
    alert("usted no ingreso ninguna tarea");
  }
};

btnAgregar.addEventListener("click", agregarTarea);

const borrarTarea = () => {
  const tarea = document.querySelectorAll(".borrar");
  tarea.forEach((borrar) =>
    borrar.addEventListener("click", (tar) =>
      tar.target.parentElement.remove()
    )
  );
};