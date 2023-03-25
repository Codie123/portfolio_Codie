const menuBtn = document.querySelector(".menu");
const menu = document.querySelector(".menu-wrapper");

const heroBg = document.querySelector(".content");
menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("drop")) {
    menuBtn.innerHTML = "menu";
    menu.classList.remove("drop");
  } else {
    menuBtn.innerHTML = "close";
    menu.classList.add("drop");
  }
});

// heroBg.addEventListener("mousemove", (e) => {
//   let rect = e.target.getBoundingClientRect();
//   let x = e.clientX - rect.left;
//   let y = e.clientY - rect.top;
//   heroBg.style.setProperty("--x", x + "px");
//   heroBg.style.setProperty("--y", y + "px");
// });
