// Tarea

// Como en la última clase ya vimos como trabajar con los formularios y más importante, vimos como interactuar con el DOM (Document Objet Model), en este ejercicio vamos a practicar lo aprendido.

// Vamos a crear en un formulario el cual tendrá 3 campos los cuales los usaremos para modificar las propiedades de un elemento HTML DIV, las propiedades serán el color de fondo, el tamaño de fuentes y cambiarle la propiedad Height(altura), Width(ancho) y el mensaje dentro del div.

const boton = document.querySelector("#boton");
const ancho = document.querySelector(".ancho");
const altura = document.querySelector(".altura");
const bcolor = document.querySelector(".b-color");
const contenedor = document.querySelector("#contenedor");
const texto = document.querySelector(".texto");
const textoDiv = document.querySelector(".texto-div");

boton.addEventListener("click", () => {
  contenedor.style.width = ancho.value;
  contenedor.style.height = altura.value;
  contenedor.style.backgroundColor = bcolor.value;
  contenedor.style.padding = "0 20px";
  contenedor.style.overflowY = "scroll";
  textoDiv.innerHTML = texto.value;
  contenedor.style.color = "white";
  contenedor.style.display = "block";
  contenedor.style.lineHeight = "1.5";
  contenedor.style.transition = "all 4s";

  if (contenedor.style.backgroundColor == "white") {
    contenedor.style.color = "black";
  } else if (contenedor.style.backgroundColor == "") {
    contenedor.style.color = "black";
  }
});
