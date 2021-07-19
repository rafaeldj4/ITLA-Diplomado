window.addEventListener('load', event => {
    const listado = document.getElementById('listado-gastos');
    const misGastos = obtenerListadoGastos();
    const renderizarGasto = gasto => {
        listado.innerHTML = listado.innerHTML +
            `
            <div class="col-12 col-md-4 col-lg-2">
                <div class="card shadow-sm">
                    <div class="card-body">
                    <h5 class="card-title">${gasto.categoria}</h5>
                    <p class="card-text">${gasto.descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">${gasto.moneda} ${gasto.monto}</small>
                    </div>
                    </div>
                </div>
            </div>
        `
    }

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

    for (let index = 0; misGastos.length > index; index = index + 1) {
        let gasto = misGastos[index]
        renderizarGasto(gasto)
    }

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


    // Eventos para filtrar la lista de gastos

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


})

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