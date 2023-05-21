let randomNumber = Math.ceil(Math.random() * 10);
let attempt = 1;

let mainPage = document.querySelector(".section1");
let guessedPage = document.querySelector(".section2");
let guessedAttemps = document.querySelector("h2");

const animationError = () => {
  let animError = document.querySelector("#myform");
  animError.style.animation = "shaking 500ms linear 100ms infinite";
  animError.style.animationPlayState = "running";
  setTimeout(function () {
    animError.style.animationPlayState = "paused";
  }, 500);
  return animError;
};

const changeScreen = () => {
  if (guessedPage.classList.contains("hide")) {
    mainPage.classList.add("hide");
    guessedPage.classList.remove("hide");
  }
  return;
};

console.log(randomNumber);

document.querySelector("#myform").addEventListener("submit", function (event) {
  event.preventDefault();
  let inputNumber = document.querySelector("#mynumber");
  let numberValue = Number(inputNumber.value);

  if (numberValue != randomNumber) {
    attempt++;
    animationError();
  } else if (attempt > 1) {
    changeScreen();
    guessedAttemps.innerHTML = `Acertou em ${attempt} tentativas, o número era ${randomNumber}!`;
  } else {
    changeScreen();
    guessedAttemps.innerHTML = `Acertou em ${attempt} tentativa, o número era ${randomNumber}!`;
  }

  inputNumber.value = "";
});

let btnTryagain = document.querySelector(".btn-again").addEventListener("click", function () {
  location.reload();
});
