const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector (".overlay");
const headerList = document.querySelector (".header__list");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("toggle");
    overlay.classList.toggle("overlay-display");
    headerList.classList.toggle("list-animation");
})