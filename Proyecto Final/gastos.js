// Boton gastos Focus
const gastos = document.querySelector(".gastos");

if (window.location.href) {
    gastos.style.color = "#1554f0";
}

const agregar = document.getElementById("agregar");
const textgasto = document.getElementById("descripcion");


agregar.addEventListener("click", () => {
    if (textgasto.value == "") {
        textgasto.style.border = "red 1px solid"
    }
})

// textgasto.addEventListener("click", () => {
  
// })

