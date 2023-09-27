const count = document.querySelector(".count");
const btn = document.querySelector(".btn");
let startTime = 30;
let elapsedPausedTime = 0;
let countActive = true;

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    countActive = false;
    elapsedPausedTime = performance.now() - startTime;
  } else {
    countActive = true;
    startTime = performance.now() - elapsedPausedTime;
    updateCountdown();
  }
});

function updateCountdown() {
  if (!countActive) {
    return;
  }

  const currentTime = performance.now();
  const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
  const remainingSeconds = Math.max(30 - elapsedSeconds, 0);

  count.textContent = remainingSeconds;

  if (remainingSeconds === 0) {
    btn.removeAttribute("disabled");
  } else {
    requestAnimationFrame(updateCountdown);
  }
}

updateCountdown();

btn.addEventListener("click", function () {
  window.location.href = "https://fullstack.edu.vn/";
});
