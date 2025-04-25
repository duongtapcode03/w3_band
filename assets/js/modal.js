const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const btnClose = document.querySelector(".js-close-modal");
const modalContainer = document.querySelector(".js-modal-container");

buyBtns.forEach((buyBtn) => {
  buyBtn.addEventListener("click", () => {
    modal.classList.add("open");
  });
});

btnClose.addEventListener("click", () => {
  modal.classList.remove("open");
});

modal.addEventListener("click", () => {
  modal.classList.remove("open");
});

modalContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});
