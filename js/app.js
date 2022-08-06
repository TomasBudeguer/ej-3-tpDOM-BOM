let tareasNuevas = [];
function agregarTarea() {
  let tareaBuscada = document.querySelector("#tarea").value;
  console.log(tareaBuscada)
  tareasNuevas.push(tareaBuscada)
  console.log(tareasNuevas)
}

function eliminarTarea() {
    let tareaBuscada = document.querySelector("#tarea").value;
    console.log(tareaBuscada)
    let tareaBorro = tareasNuevas.indexOf(tareaBuscada)
    console.log(tareaBorro)
    if(tareaBorro > -1){
        tareasNuevas.splice(tareaBorro,1)
        console.log(tareasNuevas)
    }
}


