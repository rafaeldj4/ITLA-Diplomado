// ======================================================================================== 
// Programacion Web con JavaScript     PWJ-2021-T-2-GI          Julio J. Capellan           
// Proyecto Final                                                                           
// ----------------------------------------------------------------------------------------  
// Rafael Mejia Solano                                                                      
// Luis Carlos Garcia                                                                       
// Carlos Alberto Reynoso                                                                   
// Yohanny Peña                                                                             
// ======================================================================================== 

window.addEventListener('load', event => {


    const formularioGastos = document.getElementById("formulario-gastos")

// Valida Cuando Submit

    formularioGastos.addEventListener('submit', event => {
        event.preventDefault()

// Valida Descripcion

        let descripcion = event.target.elements['descripcion'].value;

        if (descripcion.length === 0) {
            setInvalid(
                event.target.elements['descripcion'],
                "Este campo es obligatorio"
            )

            return;
        }

        RemoveInvalid(event.target.elements['descripcion']) 

 // Valida Fecha

let fecha = event.target.elements['fecha'].value;

if (fecha.length === 0) {
    setInvalid(
        event.target.elements['fecha'],
        "Este campo es obligatorio"
    )

    return;
}


RemoveInvalid(event.target.elements['fecha'])

// Valida Monto

let monto = event.target.elements['monto'].value;

if (monto.length === 0) {
    setInvalid(
        event.target.elements['monto'],
        "Este campo es obligatorio"
    )

    return;
}

RemoveInvalid(event.target.elements['monto'])


// Presenta Billetera

        let gasto = {
            descripcion: event.target.elements['descripcion'].value,
            categoria: event.target.elements['categoria'].value,
            fecha: event.target.elements['fecha'].value,
            monto: event.target.elements['monto'].value,
            moneda: event.target.elements['moneda'].value,
        };

        guardarGastos(gasto)
        event.target.reset()

       
    })


})