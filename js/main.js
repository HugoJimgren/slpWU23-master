
/* MENY */

let layer = document.querySelector(".fade-layer");
layer.addEventListener("click",showMenu)

let button = document.querySelector(".menu-button");
button.addEventListener("click",showMenu)



function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}

/* UTRUSTNING */

let camButton = document.querySelector(".cam-button");
button.addEventListener("click",camImage)

let filmButton = document.querySelector(".film-button");
button.addEventListener("click",filmImage)

let lensButton = document.querySelector(".lens-button");
button.addEventListener("click",lensImage)


function camImage(){
    let next = document.querySelector("");
    menu.classList.toggle("show");
}

function filmImage(){
    let next = document.querySelector("");
    menu.classList.toggle("show");
}

function lensImage(){
    let next = document.querySelector("");
    menu.classList.toggle("show");
}