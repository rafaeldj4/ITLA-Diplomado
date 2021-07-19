// ======================================================================================== 
// Programacion Web con JavaScript     PWJ-2021-T-2-GI          Julio J. Capellan           
// Proyecto Final                                                                           
// ----------------------------------------------------------------------------------------  
// Rafael Mejia Solano                                                                      
// Luis Carlos Garcia                                                                       
// Carlos Alberto Reynoso                                                                   
// Yohanny Peña                                                                             
// ======================================================================================== 


// Carga Billetera

window.addEventListener('load', event => {
    const listado = document.getElementById('listado-gastos');
    const misGastos = obtenerListadoGastos();
    const renderizarGasto = gasto => {
        listado.innerHTML = listado.innerHTML +
            `
            <div class="col-12 col-md-4 col-lg-2">
                <div class="card shadow-sm">
                    <div class="card-body">
                    <h4 class="card-title">${gasto.categoria}</h4>
                    <h5 class="card-text">${gasto.descripcion}</h5>
                    <h5 class="card-text">${gasto.fecha}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">${gasto.moneda} ${gasto.monto}</small>
                    </div>
                    </div>
                </div>
            </div>
        `
    }

    for (let index = 0; misGastos.length > index; index = index + 1) {
        let gasto = misGastos[index]
        renderizarGasto(gasto)
    }


    // Crea Categorias Constantes del filtro en local storage

    const crearCategorias = () => {
        let categorias = [
            'Personal',
            'Diversion',
            'Transporte',
            'Otros...',
        ];

        localStorage.setItem("categorias", JSON.stringify(categorias))
    }

    crearCategorias()
  

    const createOptionElement = (categoria) => {
        let selectCategorias = document.getElementById('categorias')
        let elementoOption = document.createElement('option');
        elementoOption.value = categoria;
        elementoOption.text = categoria;
        selectCategorias.append(elementoOption)
    }

    const renderizarCategorias = () => {
        let categorias = [];
        categorias = JSON.parse(localStorage.getItem('categorias'));
        categorias.forEach(createOptionElement)
    }


    renderizarCategorias()

   // ---------------------------------------
   // Eventos para filtrar la lista de gastos
   // ---------------------------------------

   // Categorias

    document
    .getElementById('categorias')
    .addEventListener('change', event => {
        let filtroCategoria = event.target.value
        let misGastos = obtenerListadoGastos();

        let misGastosFiltrados = misGastos.filter((gasto) => {

            // El motodo Filter espera el retorno de un valor booleano
            // los que sean true se incluiran el nuevo array
            // los que sena false no se tomaran en cuenta
            if (gasto.categoria == filtroCategoria) {
                return true
            } else {
                return false
            }
        })
        listado.innerHTML = ''
        misGastosFiltrados.forEach(renderizarGasto)
    })

    // Fecha

    document
    .getElementById('fecha')
    .addEventListener('change', event => {
        let filtroFecha = event.target.value
        let misGastos = obtenerListadoGastos();

        let misGastosFiltrados = misGastos.filter((gasto) => {

            // El motodo Filter espera el retorno de un valor booleano
            // los que sean true se incluiran el nuevo array
            // los que sena false no se tomaran en cuenta
            if (gasto.fecha == filtroFecha) {
                return true
            } else {
                return false
            }
        })
        listado.innerHTML = ''
        misGastosFiltrados.forEach(renderizarGasto)
    })

    // Monto
    
    document
    .getElementById('monto')
    .addEventListener('change', event => {
        let filtroMonto = event.target.value
        let misGastos = obtenerListadoGastos();

        let misGastosFiltrados = misGastos.filter((gasto) => {

            // El motodo Filter espera el retorno de un valor booleano
            // los que sean true se incluiran el nuevo array
            // los que sena false no se tomaran en cuenta
            if (gasto.monto == filtroMonto) {
                return true
            } else {
                return false
            }
        })

        listado.innerHTML = ''
        misGastosFiltrados.forEach(renderizarGasto)
    })



 // Moneda
     
    document
   .getElementById('moneda1')
   .addEventListener('focus', event => {
    let filtroMoneda1 = event.target.checked
    
     let misGastos = obtenerListadoGastos();

     let misGastosFiltrados = misGastos.filter((gasto) => {

         // El motodo Filter espera el retorno de un valor booleano
         // los que sean true se incluiran el nuevo array
         // los que sena false no se tomaran en cuenta

         if (gasto.moneda1 == filtroMoneda1) {
             return document.getElementById("moneda1").checked = true;
             
         } else {
             return document.getElementById("moneda1").checked = false;
             
         }
        

     })

     listado.innerHTML = ''
     misGastosFiltrados.forEach(renderizarGasto)
 })





})