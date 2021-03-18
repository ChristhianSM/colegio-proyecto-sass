const enlaces = document.getElementsByClassName("menu__enlaces")[0];
const hamburguesa = document.getElementsByClassName("menu__hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");
let abierto = false ;

const toggleMenu = () => {
    enlaces.classList.toggle("enlacesDos");
    enlaces.style.transition = "transform 0.5s ease-in-out";
}

hamburguesa.addEventListener("click", function(){
    toggleMenu();
})