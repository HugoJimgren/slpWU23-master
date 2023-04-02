
/* MENY */

let layer = document.querySelector(".fade-layer");
layer.addEventListener("click",showMenu)

let button = document.querySelector(".menu-button");
if (button){
    button.addEventListener("click",showMenu)
}

let button2 = document.querySelector(".menu-button2");
if (button2){
    button2.addEventListener("click",showMenu)
}


function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")

}

/* FOTO */

let imgButton = document.querySelector("#foto1")
if (imgButton){
    imgButton.addEventListener("click",enlarge)
}

function enlarge(){
    let enlarged = document.querySelector(".foto1_enlarged")
    enlarged.classList.toggle(".foto_enlarged")
    console.log('a')
}


/* UTRUSTNING */

let camButton = document.querySelector(".cam_button");
if (camButton){
    camButton.addEventListener("click",camImage)
}

let filmButton = document.querySelector(".film_button");
if (filmButton){
    filmButton.addEventListener("click",filmImage)
}

let lensButton = document.querySelector(".lens_button");
if (lensButton){
    lensButton.addEventListener("click",lensImage)
}



function camImage(){
    let camImg = document.querySelector(".gear_img1");
    camImg.classList.toggle("img_show");
    let lensImg = document.querySelector(".gear_img3");
    lensImg.classList.remove("img_show");
    let filmImg = document.querySelector(".gear_img2");
    filmImg.classList.remove("img_show");
}

function filmImage(){
    let camImg = document.querySelector(".gear_img1");
    camImg.classList.remove("img_show");
    let lensImg = document.querySelector(".gear_img3");
    lensImg.classList.remove("img_show");
    let filmImg = document.querySelector(".gear_img2");
    filmImg.classList.toggle("img_show");
}

function lensImage(){
    let camImg = document.querySelector(".gear_img1");
    camImg.classList.remove("img_show");
    let lensImg = document.querySelector(".gear_img3");
    lensImg.classList.toggle("img_show");
    let filmImg = document.querySelector(".gear_img2");
    filmImg.classList.remove("img_show");
}