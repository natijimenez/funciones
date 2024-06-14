//EJERCICIO COLORES 4.1
const boxBlue = document.querySelector("#boxUno");
const boxRed = document.querySelector("#boxDos");
const boxGreen = document.querySelector("#boxTres");
const boxYellow = document.querySelector("#boxCuatro");

function cambiarColor(elementId) {
  ele = document.querySelector("#" + elementId);
  ele.style.backgroundColor = "black";
}

boxBlue.addEventListener("click", () => {
  cambiarColor("boxUno");
});

boxRed.addEventListener("click", () => {
  cambiarColor("boxDos");
});

boxGreen.addEventListener("click", () => {
  cambiarColor("boxTres");
});

boxYellow.addEventListener("click", () => {
  cambiarColor("boxCuatro");
});



//EJERCICIO COLORES 4.2
const box = document.querySelector("#key");

function pintar(color) {
  elemento = document.querySelector("#key");
  elemento.style.backgroundColor = color;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    pintar("pink");
  } else if (event.key === "s" || event.key === "S") {
    pintar("orange");
  } else if (event.key === "d" || event.key === "D") {
    pintar("SkyBlue");
  }
});



//EJERCICIO COLORES 4.3
function crearBox(color) {
  const crearDiv = document.createElement("div");
  crearDiv.className = "color-box";
  crearDiv.style.width = "200px";
  crearDiv.style.height = "200px";
  crearDiv.style.backgroundColor = color;
  crearDiv.style.margin = "15px auto";
  document.querySelector("#contenedor-3").appendChild(crearDiv);
}

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (e) {
    if (e.key === "q" || e.key === "Q") {
      crearBox("purple");
    } else if (e.key === "w" || e.key === "W") {
      crearBox("gray");
    } else if (e.key === "e" || e.key === "E") {
      crearBox("brown");
    }
  });
});
