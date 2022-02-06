const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal-btn");
const openModalBtn = document.querySelector(".open-modal-btn");

closeModalBtn.addEventListener("click", function () {
  modal.classList.add("modal-disabled");
});

openModalBtn.addEventListener("click", function () {
  modal.classList.remove("modal-disabled");
});
