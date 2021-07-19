// ======================================================================================== 
// Programacion Web con JavaScript     PWJ-2021-T-2-GI          Julio J. Capellan           
// Proyecto Final                                                                           
// ----------------------------------------------------------------------------------------  
// Rafael Mejia Solano                                                                      
// Luis Carlos Garcia                                                                       
// Carlos Alberto Reynoso                                                                   
// Yohanny Peña                                                                             
// ======================================================================================== 

// -------
// GASTOS
// -------

// Guardar Gastos

function guardarGastos(gasto) {
    let listadoGastos = obtenerListadoGastos()
    listadoGastos.push(gasto)
    actulizarLista(listadoGastos)
}

// Obtener Listado Gastos del Local Storage

function obtenerListadoGastos() {
    let listadoGastos = JSON.parse(localStorage.getItem("listado_gastos"))
    if (listadoGastos == null) {
        listadoGastos = [];
        actulizarLista(listadoGastos)
    }
    return listadoGastos;
}

// Actualizar Lista Gastos en el Local Storage

function actulizarLista(listadoGastos) {
    localStorage.setItem("listado_gastos", JSON.stringify(listadoGastos))
}

// ----------
// CATEGORIAS
// ----------
// Guardar Categorias

function guardarCategorias1(categorias1) {
    let listadoCategorias = obtenerListadoCategorias()
    listadoCategorias.push(categorias1)
    actulizarListaCategorias(listadoCategorias)
}

// Obtener Listado Gastos del Local Storage

function obtenerListadoCategorias() {
    let listadoCategorias = JSON.parse(localStorage.getItem("listado_categorias"))
    if (listadoCategorias == null) {
        listadoCategorias = [];
        actulizarListaCategorias(listadoCategorias)
    }
    return listadoCategorias;
}

// Actualizar Lista Gastos en el Local Storage

function actulizarListaCategorias(listadoCategorias) {
    localStorage.setItem("listado_categorias", JSON.stringify(listadoCategorias))
}

// --------------------
// Mensaje Validaciones
// --------------------

function setInvalid(input, mensaje) {
    input.focus()
    input.classList.add("is-invalid");
    input.nextElementSibling.innerHTML = mensaje;
}

function RemoveInvalid(input) {
    input.classList.remove("is-invalid");
    input.nextElementSibling.innerHTML = ' ';
}