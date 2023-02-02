 // search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
let button = document.querySelector(".btn");

menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
button.style.marginRight="-190px";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
button.style.display = "inline-block";
button.style.marginRight="-50px";
}
// sidebar submenu open close js code
let arrow = document.querySelector(".arrow");
arrow.onclick = function() {
 navLinks.classList.toggle("show");
}