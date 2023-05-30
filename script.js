let randomNumber = Math.ceil(Math.random() * 10);
let attempt = 1;

const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const guessedAttemps = document.querySelector("h2");
const btnCheck = document.querySelector("#check");
const btnRestart = document.querySelector(".btn-again");

const form = document.querySelector("#myform");

btnCheck.addEventListener("click", validateNumber);
btnRestart.addEventListener("click", restartGame);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && section1.classList.contains("hide")) {
    restartGame();
  }
});

function validateNumber(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#mynumber");

  if (Number(inputNumber.value) == randomNumber) {
    changeScreen();
    guessedAttemps.innerHTML = `Acertou em ${attempt} tentativas, o número era ${randomNumber}!`;
  } else if (inputNumber.value < 1 || inputNumber.value > 10 || inputNumber.value == "") {
    alert("Insira um número válido.");
    inputNumber.value = "";
    animationError();
  } else {
    inputNumber.value = "";
    animationError();
    attempt++;
  }
  inputNumber.value = "";
}

const animationError = () => {
  let animError = section1;
  animError.style.animation = "shaking 500ms linear 100ms infinite";
  animError.style.animationPlayState = "running";
  setTimeout(function () {
    animError.style.animationPlayState = "paused";
  }, 500);
  return animError;
};

function restartGame() {
  changeScreen();
  attempt = 1;
  randomNumber = Math.ceil(Math.random() * 10);
}

const changeScreen = () => {
  section1.classList.toggle("hide");
  section2.classList.toggle("hide");
};
