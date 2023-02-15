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
// Letter Generator Form
const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");
const steps = document.querySelectorAll(".form-step");
const form_steps = document.querySelectorAll(".step");
let active = 1;
nextButton.addEventListener("click",() => {
  active++;
  if (active > steps.length){
    active = steps.length;
  }
  updateProgress();
})
prevButton.addEventListener("click",() => {
  active--;
  if (active < 1){
    active = 1;
  }
  updateProgress();
})

const updateProgress =()=>{
  console.log("steps.length =>" + steps.length);
  console.log("active =>" + active);
  //toggle .active class for each list item
  steps.forEach((step, i)=>{
    if (i==(active-1)){
      step.classList.add("active");
      form_steps[i].classList.add("active");
      console.log("i=>" + i);
    }else{
      step.classList.remove("active");
      form_steps[i].classList.remove("active");
    }
  });
  //enable or disable prev and next buttons
  if (active===1){
    prevButton.disabled=true;
  }else if (active===steps.length){
    nextButton.disabled=true;
  }else{
    prevButton.disabled=false;
    nextButton.disabled=false;
  }
}