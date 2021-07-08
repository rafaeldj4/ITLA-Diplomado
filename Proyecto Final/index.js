// Focus tablero
const tablero = document.querySelector(".tablero");
if (window.location.href) {
  tablero.style.color = "#1554f0";
}

// Fechas
let fecha = new Date();
let fechaCalendario = fecha.toLocaleDateString();
let horaActual = fecha.toLocaleTimeString();


// contenedor
const contenedor = document.querySelector(".dashboard");

const gastos = [
  {
    descripcion: "Compra del mes",
    monto: 4500,
    moneda: "RD $",
    categoria: "Casa",
    fecha: fechaCalendario,
    hora: horaActual
  },

  {
    descripcion: "Pasaje de la semana",
    monto: 2500,
    moneda: "RD $",
    categoria: "Transporte",
    fecha: fechaCalendario,
    hora: horaActual
  },

  {
    descripcion: "Salida de fin de semana",
    monto: 1500,
    moneda: "RD $",
    categoria: "Diversion",
    fecha: fechaCalendario,
    hora: horaActual
  },
];


const agregarGastos = (misGastos) => {
    contenedor.innerHTML = contenedor.innerHTML + 

    `  
    <div class="budget">
         <h4 class="budget__title">${misGastos.descripcion}</h4>
        <p class="budget__money">${misGastos.moneda} ${misGastos.monto}</p>
        
        <p class="budget__hora">Hora: ${misGastos.hora}</P>
        <p class="budget__date">Fecha: ${misGastos.fecha}</p>
        </div>`;
}


for (let index = 0; gastos.length > index; index++) {
  let misGastos = gastos[index];
    agregarGastos(misGastos)

//   contenedor.innerHTML =   
        //  <h4 class="budget__title">${misGastos.descripcion}</h4>
        // <p class="budget__money">${misGastos.moneda} ${misGastos.monto}</p>
        // <p class="budget__date">${misGastos.fecha}</p>;
}




// console.log(fecha.toLocaleString()); 6/7/2021 11:39:47
// console.log(fecha.toDateString()); Tue Jul 06 2021
// console.log(fecha.toLocaleDateString()); 6/7/2021
// console.log(fecha.toLocaleTimeString()); 11:29:51

