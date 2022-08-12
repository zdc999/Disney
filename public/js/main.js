// ! work items (1°)--> elementos a ocultar
// ! details-container items(2°)-->> elementos a mostrar dsps de transicion

// Selectores
const workItems = document.querySelectorAll(".work .item");
const workItemsCount = workItems.length;
let currentIndex = 0; //conteo de id de items
const closeButton = document.querySelector("#close-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const openCloseButton = document.querySelector("#buttonOpenCloseMenu");
const menuMobileItems = document.querySelector("#menu-mobile-items");
const navMenu = document.querySelector(".menus");

openCloseButton.addEventListener("click", (e) => {
  menuMobileItems.classList.toggle("menu-mobile-closed");
});

// Ejecuta la transicion de pantalla cuando selecciono un item(1°)
workItems.forEach((item) => {
  //evento de click en el item (1°)
  item.addEventListener("click", (e) => {
    e.preventDefault(); // previene el href

    // obtiene el número de id item (1°)
    currentIndex = parseInt(item.getAttribute("data-id"));

    // guarda los items (2°)
    const contentArr = document.querySelectorAll("#details-container .item");

    // recorre los items (2°) y le agrego la clase para ocultarlos (?)
    document.querySelectorAll("#details-container .item").forEach((item) => {
      item.classList.add("item-hide");
    });

    // selecciona los items (2°) y los muestra -> oculta
    document
      .querySelectorAll("#details-container .item")
      [currentIndex].classList.toggle("item-hide");

    // oculta la navegacion principal
    navMenu.style.display = "none";

    // agrega la animacion de transicion
    document.querySelector("#screen").style["animation-name"] = "fade-in";

    // quita el scroll cdo ocurre la transicion
    document.querySelector("body").style["overflow"] = "hidden";

    // espera 1s y muestra el item (2°)
    setTimeout(() => {
      document.querySelector("#details-container").style.display = "block";
    }, 1000);

    // espera 2s y le quita el display a la transicion
    setTimeout(() => {
      document.querySelector("#screen").style["animation-name"] = "";
    }, 2000);
  });
});

// boton de cerrar galeria
closeButton.addEventListener("click", (e) => {
  e.preventDefault();

  // agrega la animacion de transicion
  document.querySelector("#screen").style["animation-name"] = "fade-in";

  // agrega el scroll, muestra la nav y oculta los items (2°)
  setTimeout(() => {
    document.querySelector("body").style["overflow"] = "auto";
    navMenu.style.display = "";
    document.querySelector("#details-container").style.display = "";
  }, 1000);

  // espera 2s y le quita el display a la transicion
  setTimeout(() => {
    document.querySelector("#screen").style["animation-name"] = "";
  }, 2000);
});

// boton de avanzar y retroceder galeria
prevButton.addEventListener("click", () => {
  if (currentIndex - 1 < 0) {
    return;
  }
  currentIndex--;
  loadGalleryItem(currentIndex);
});

nextButton.addEventListener("click", () => {
  if (currentIndex + 1 == workItemsCount) {
    return;
  }
  currentIndex++;
  loadGalleryItem(currentIndex);
});

function loadGalleryItem(index) {
  const items = document.querySelectorAll("#details-container .item");

  items.forEach((item) => {
    item.classList.add("item-hide");
  });
  items[index].classList.toggle("item-hide");
}
