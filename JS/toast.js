const toastBottom = document.querySelector(".toast-dir-bottom");
const toastTop = document.querySelector(".toast-dir-top");
const toastBottomCloseBtn = document.querySelector(".toast-bottom-close-btn");
const toastTopCloseBtn = document.querySelector(".toast-top-close-btn");

toastBottomCloseBtn.addEventListener("click", function () {
  toastBottom.classList.remove("show-toast");
});
toastTopCloseBtn.addEventListener("click", function () {
  toastTop.classList.remove("show-toast");
});
