const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");
let intervalId;
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    intervalId = setInterval(() => {
      let hours = Math.floor((seconds / 60 / 60) % 60);
      let minutes = Math.floor((seconds / 60) % 60);
      let second = seconds % 60;

      if (seconds <= 0) {
        clearInterval(intervalId);
        timerEl.innerHTML = "00:00:00";
      }

      let formatTimer = `${hours}:${minutes}:${second}`;
      timerEl.innerHTML = formatTimer;
      --seconds;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  const value = e.target.value;
  e.target.value = value.replace(/\D/g, '');
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  clearInterval(intervalId);
  animateTimer(seconds);
  inputEl.value = "";
});

