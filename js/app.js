let tareasNuevas = [];
function agregarTarea() {
  let tareaBuscada = document.querySelector("#tarea").value;
  console.log(tareaBuscada);
  tareasNuevas.push(tareaBuscada);
  console.log(tareasNuevas);
  let sectionPadre = document.querySelector("#sectionPadre");
  let parrafoNuevoAgregar = document.createElement("p");
  parrafoNuevoAgregar.innerHTML = `Tareas: ${tareasNuevas} (se agrego: ${tareaBuscada})`;
  sectionPadre.appendChild(parrafoNuevoAgregar);
}

function eliminarTarea() {
  let tareaBuscada = document.querySelector("#tarea").value;
  console.log(tareaBuscada);
  let tareaBorro = tareasNuevas.indexOf(tareaBuscada);
  if (tareaBorro > -1) {
    tareasNuevas.splice(tareaBorro, 1);
    console.log(tareasNuevas);
    let sectionPadre = document.querySelector("#sectionPadre");
    let parrafoTareaBorrar = document.createElement("p");
    parrafoTareaBorrar.innerHTML = `Tareas: ${tareasNuevas} (se borro: ${tareaBuscada})`;
    sectionPadre.appendChild(parrafoTareaBorrar);
  }else{
    alert('No existe esa Tarea')
  }
}
