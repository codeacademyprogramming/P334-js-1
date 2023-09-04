const btn = document.querySelector('button');
const cvr = document.querySelector("#cover");
const icon = document.querySelector("i");
let isRunning = false;

btn.addEventListener("click", () => {
  if (isRunning) {
    cvr.style.animationPlayState = "paused";
    icon.classList.remove("fa-pause")
    icon.classList.add("fa-play")

  } else {
    cvr.style.animationPlayState = "running";
    icon.classList.add("fa-pause")
    icon.classList.remove("fa-play")
  }

  isRunning = !isRunning;
});