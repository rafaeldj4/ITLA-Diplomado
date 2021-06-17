/*Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y a través de condicionales if realice las siguientes operaciones:

a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
*/

//EXtra
window.addEventListener("load", function () {
  let texto = document.createElement("h3");
  let contenedor = document.querySelector(".container");
  contenedor.appendChild(texto);

  // // Ejercicio A
  let diametro = prompt("Ingrese el diametro de la rueda:");

  if (diametro > 1.4) {
    // alert("La rueda es para un vehiculo grande");
    texto.innerHTML = `El diametro ingresado es ${diametro}, la rueda es para un vehiculo grande`;
  } else if (diametro <= 1.4 && diametro > 0.8) {
    texto.innerHTML = `El diametro ingresado es ${diametro}, la rueda es para un vehiculo mediano`;
  } else if (diametro == "" || diametro == null) {
    texto.innerHTML = "No se ingreso ningun valor";
  } else if (diametro == 0) {
    texto.innerHTML = "El 0 no es un valor valido";
  } else {
    texto.innerHTML = `El diametro ingresado es ${diametro}, la rueda es para un vehiculo pequeño`;
  }
});
