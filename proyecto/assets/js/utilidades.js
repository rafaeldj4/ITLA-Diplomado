function guardarGastos(gasto) {
    let listadoGastos = obtenerListadoGastos()
    listadoGastos.push(gasto)
    actulizarLista(listadoGastos)
}

function obtenerListadoGastos() {
    let listadoGastos = JSON.parse(localStorage.getItem("listado_gastos"))
    if (listadoGastos == null) {
        listadoGastos = [];
        actulizarLista(listadoGastos)
    }
    return listadoGastos;
}

function actulizarLista(listadoGastos) {
    localStorage.setItem("listado_gastos", JSON.stringify(listadoGastos))
}

function setInvalid(input, mensaje) {
    input.focus()
    input.classList.add("is-invalid");
    input.nextElementSibling.innerHTML = mensaje;
}