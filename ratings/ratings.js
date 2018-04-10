let stars = document.querySelectorAll(".ratings > div");

const fillStars = (e) => {
  stars.forEach((star) => {star.style.background = "white";});
  let rating = parseInt(e.target.id);
  for (let i = 1; i <= rating; i++) {
    let star = document.getElementById(`${i}`);
    star.style.background = "yellow";
  }
};

stars.forEach((star) => star.addEventListener("click",fillStars));

// BLINK TAG
let blinkEl = document.querySelector(".blink");

function blink() {
  blinkEl.classList.toggle("blink-off");
}

setInterval(blink, 500);
