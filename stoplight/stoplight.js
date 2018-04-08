let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let lightOn = false;
let lightButton = document.querySelector("button");

function redOn() {
  red.style.opacity = 1.0;
  yellow.style.opacity = 0.3;
  green.style.opacity = 0.3;
}

function yellowOn() {
  red.style.opacity = 0.3;
  yellow.style.opacity = 1.0;
  green.style.opacity = 0.3;
}

function greenOn() {
  red.style.opacity = 0.3;
  yellow.style.opacity = 0.3;
  green.style.opacity = 1.0;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runLight() {
  lightOn = !lightOn;
  while (lightOn) {
    redOn();
    await sleep(2000);
    greenOn();
    await sleep(2000);
    yellowOn();
    await sleep(1000);
  }
}

lightButton.addEventListener("click", runLight);
