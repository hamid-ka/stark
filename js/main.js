const hideBars = document.querySelector(".fa-bars");
const showClose = document.querySelector(".fa-close");
const showMenu = document.querySelector(".min-navbar");
const showTextMainPage=document.querySelector(".text-main-page")


hideBars.addEventListener("click", function () {
  showMenu.classList.remove("min-navbar");
  hideBars.classList.add("fa-bars-hide");
  showClose.classList.add("fa-close-hide");
  showMenu.classList.add("min-navbar-show");
  showTextMainPage.classList.remove("text-main-page");
  showTextMainPage.classList.add("text-main-page-hide");
});

showClose.addEventListener("click", function () {
  hideBars.classList.remove("fa-bars-hide");
  showClose.classList.remove("fa-close-hide");
  showMenu.classList.remove("min-navbar-show");
  showMenu.classList.add("min-navbar");
  showTextMainPage.classList.remove("text-main-page-hide");
  showTextMainPage.classList.add("text-main-page");

});







