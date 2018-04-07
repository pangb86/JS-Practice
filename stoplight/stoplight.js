let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

function cycleLight() {
  if (red.style.opacity == 1.0) {
    red.style.opacity = 0.3;
    yellow.style.opacity = 1.0;
  } else if (yellow.style.opacity == 1.0) {
    yellow.style.opacity = 0.3;
    green.style.opacity = 1.0;
  } else if (green.style.opacity == 1.0) {
    green.style.opacity = 0.3;
    red.style.opacity = 1.0;
  }
}

red.style.opacity = 1.0;
setInterval(cycleLight, 1000);
setInterval(cycleLight, 1000);
setInterval(cycleLight, 1000);
