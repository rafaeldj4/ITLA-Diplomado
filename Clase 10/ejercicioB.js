/*Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y a través de condicionales if realice las siguientes operaciones:

b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”
*/

//EXtra
window.addEventListener("load", function () {
  let texto = document.createElement("h3");
  let contenedor = document.querySelector(".container");
  contenedor.appendChild(texto);

  //Ejercicio B
  let diametro = prompt("Ingrese el diametro de la rueda:");
  let grosor = prompt("Ingrese el grosor de la rueda:");

  if (diametro > 1.4 && grosor < 0.4) {
    texto.innerHTML = `Datos ingresados: <br> Diametro: ${diametro} | Grosor: ${grosor} <br> El grosor para esta rueda es inferior al recomendado.`;
  } else if (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25) {
    texto.innerHTML = `Datos ingresados: <br> Diametro: ${diametro} | Grosor: ${grosor} <br> El grosor para esta rueda es inferior al recomendado.`;
  } else if (diametro == null && grosor == null) {
    texto.innerHTML = "No se ingresaron datos.";
  } else if (diametro == "" && grosor == "") {
    texto.innerHTML = "No se ingresaron datos.";
  } else if (
    (diametro == "" && grosor == null) ||
    (diametro == null && grosor == "")
  ) {
    texto.innerHTML = "No se ingresaron datos.";
  } else {
    texto.innerHTML = `Datos ingresados: <br> Diametro: ${diametro} | Grosor: ${grosor} <br> Operacion no valida.`;
  }
});
