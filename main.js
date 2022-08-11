const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("ul");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});