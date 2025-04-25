const header = document.getElementById("header");
const menuBtn = document.querySelector(".mobile-menu-btn");
let headerHeight = header.clientHeight;
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');

menuBtn.addEventListener("click", () => {
  let isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
});

console.log(menuItems);

menuItems.forEach((menuItem) => {
  menuItem.onclick = (event) => {
    let isParent =
      menuItem.nextElementSibling &&
      menuItem.nextElementSibling.classList.contains("subnav");
    if (isParent) {
      event.preventDefault();
    } else {
      header.style.height = `${headerHeight}px`;
    }
  };
});

const moreBtn = document.querySelector(".js-more-btn");
const subNav = document.querySelector(".js-subnav");

moreBtn.onclick = () => {
  subNav.classList.toggle("active");
};
