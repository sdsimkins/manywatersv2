const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li");
const contactBtn = document.querySelector(".book-button-contact");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    menu.classList.toggle("open");
    burger.classList.toggle("burger-open");
    nav.classList.toggle("open");
});

contactBtn.addEventListener("click", () => {
    menu.classList.remove("open");
    burger.classList.toggle("burger-open");
    nav.classList.toggle("open");
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-bar").style.top = "0";
  } else {
    document.querySelector(".nav-bar").style.top = "-12vh";
  }
  prevScrollpos = currentScrollPos;
}

