// Login
const usuario = document.querySelector(".usuario");
const contrasena = document.querySelector(".contrasena");
// const ingresar__header = document.querySelector(".boton__header");
const ingresar__main = document.querySelector(".boton__main");




const ingreso = function () {
  if (usuario.value == "Admin" && contrasena.value == "Admin") {
    window.location.href = "./index.html";
  } else {
    
    let nodeText = document.createElement("p");
nodeText.innerHTML = `Usuario Invalido <i class="fas fa-times-circle"></i>`;
nodeText.classList.add ("usuario__invalido");

let node = document.querySelector(".node");
node.appendChild(nodeText);


setTimeout( function( ) {
  node.removeChild(nodeText);
},1200)

  }
};

// ingresar__header.addEventListener("click", ingreso);
ingresar__main.addEventListener("click", ingreso);


// Usuario invalido

// let nodeText = document.createElement("p");
// nodeText.innerHTML = `Usuario Invalido <i class="fas fa-times-circle"></i>`;
// nodeText.classList.add ("usuario__invalido");

// let node = document.querySelector(".node");
// node.appendChild(nodeText);



