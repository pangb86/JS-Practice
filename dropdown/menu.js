let dropButton = document.querySelector(".menu-button");
let dropMenu = document.querySelector(".menu-content");

// event listener on button for toggling the dropdown
dropButton.addEventListener("click", () => {
  dropMenu.classList.toggle("show");
});

// closes the dropdown if anywhere outside the button is clicked
document.addEventListener("click", (e) => {
  if (!e.target.matches(".menu-button")) {
    if (dropMenu.classList.contains("show")) {
      dropMenu.classList.remove("show");
    }
  }
});
