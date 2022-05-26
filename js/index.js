//JS PARA EL MENÚ HAMBURGUESA

//  seleccionamos los dos elementos que serán clickables

const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");
const itemWrapper = document.getElementById("nav-links");

const items1 = document.getElementById("link-item-1");
items1.onclick = closeMenu;

const items2 = document.getElementById("link-item-2");
items2.onclick = closeMenu;

const items3 = document.getElementById("link-item-3");
items3.onclick = closeMenu;

const items4 = document.getElementById("link-item-4");
items4.onclick = closeMenu;

const items5 = document.getElementById("link-item-5");
items5.onclick = closeMenu;
    
function closeMenu(evento) {
    toggleButton.classList.toggle("close");
    navWrapper.classList.toggle("show");
}


/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
  

});