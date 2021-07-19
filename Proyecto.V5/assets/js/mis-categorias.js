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


    const formularioCategorias = document.getElementById("formulario-categorias")

// Valida Cuando Submit

    formularioCategorias.addEventListener('submit', event => {
        event.preventDefault()

// Valida Descripcion

let descripcion = event.target.elements['catdescripcion'].value;

if (descripcion.length === 0) {
    setInvalid(
    event.target.elements['catdescripcion'],
    "Este campo es obligatorio"
    )

    return;
 }
            
 RemoveInvalid(event.target.elements['catdescripcion'])

// Crea Objeto Categoria1 para ser guardado

       let categoria1 = {
           catdescripcion: event.target.elements['catdescripcion'].value,

       };

// Guarda Categorias en Local Storage

        guardarCategorias1(categoria1)
        event.target.reset()

       
    })


})