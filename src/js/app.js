import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

let bodyTag = document.querySelector("body");
let menuBlock = document.querySelector(".header__navbar-list");
let buttonMenu = document.querySelector(".header__navbar-list-button-menu-image");
let classNameActive = "header__navbar-list-button-menu-image-active";
let classNameNotActive = "header__navbar-list-button-menu-image";
let workingScreenExtension = window.matchMedia("(max-width: 480px)");

function screenExtension(workingScreenExtension) {

  if (workingScreenExtension.matches) {
    addListenerButton();
  } 
}

function addListenerButton() {
  bodyTag.addEventListener("click", function (event) {
    switch (event.target.className) {
      case classNameNotActive:
        buttonMenu.classList.toggle(`"${classNameActive}"`);
        buttonMenu.src = "@img/header/Menu_close2.png";
        menuBlock.style.display = "block";
        break;
      default:
        buttonMenu.src = "@img/header/Menu2.png";
        buttonMenu.classList.remove(`"${classNameActive}"`);
        menuBlock.style.display = "none";
    }
  });
}

screenExtension(workingScreenExtension);
workingScreenExtension.addListener(screenExtension);
