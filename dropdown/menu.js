let dropButton = document.querySelector(".menu-button");
let dropMenu = document.querySelector(".menu-content");

dropButton.addEventListener("click", () => {
  dropMenu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".menu-button")) {
    if (dropMenu.classList.contains("show")) {
      dropMenu.classList.remove("show");
    }
  }
});
