let ul$$ = document.querySelector("ul");

function agregarTarea(event) {
  event.preventDefault(); // Evita el envío del formulario
  let texInput$$ = document.querySelector("input").value;
  let li$$ = document.createElement("li");
  li$$.textContent = texInput$$;
  ul$$.appendChild(li$$);

  let boton$$ = document.createElement("button")
  li$$.appendChild(boton$$)
  boton$$.setAttribute("class", "estiloBnt")
  boton$$.textContent = "X"
  boton$$.addEventListener("click", borrado); // Asigna la función borrado al evento de clic del botón

  function borrado() {
    li$$.remove(); // Elimina el elemento li
    
  }
}
document.querySelector(".btn-add").addEventListener("click", agregarTarea);
let texInput$$ = document.querySelector("input");
texInput$$.textContent = " "
