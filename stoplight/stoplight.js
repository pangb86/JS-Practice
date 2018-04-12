let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let lightOn = false;
let lightInterval;
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

// async/await solution
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

// setTimeout/setInterval solution
function runLight2() {
  redOn();
  setTimeout(greenOn, 2000);
  setTimeout(yellowOn, 4000);
  setTimeout(redOn, 5000);
}

function controlLight() {
  lightOn = !lightOn;
  if (lightOn) {
    runLight2();
    lightInterval = setInterval(runLight2, 7000);
  } else {
    clearInterval(lightInterval);
  }
}

lightButton.addEventListener("click", controlLight);
