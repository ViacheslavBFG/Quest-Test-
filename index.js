"use strict";
const modal = document.querySelector(".modal");
const openModal = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const closeModalFunc = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

closeModal.addEventListener("click", closeModalFunc);

overlay.addEventListener("click", closeModalFunc);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalFunc();
  }
});
