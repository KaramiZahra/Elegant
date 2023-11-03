// animates logo in the header
const logo = document.querySelector(".logo");
const logoContainer = document.querySelector(".logo-container");

setTimeout(() => {
  logoContainer.style.backgroundColor = "grey";
  logo.style.color = "white";
}, 400);

setTimeout(() => {
  logoContainer.style.cssText = "background-color:white; height:1vh;";
  logo.style.cssText = "color:black; font-size:3rem; top:30%; padding-bottom:0rem;";
}, 1300);

// hamburger menu
const menu = document.querySelector(".header-icon");
const menuIcon = document.querySelector(".header-icon i");
const navBar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  if (menuIcon.classList.contains("fa-bars")) {
    navBar.style.left = "0rem";
    menuIcon.classList.replace("fa-bars", "fa-times");
  } else {
    navBar.style.left = "-24rem";
    menuIcon.classList.replace("fa-times", "fa-bars");
  }
});
