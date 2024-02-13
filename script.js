const startMenu = document.querySelector(".start-menu");
const startGame = document.querySelector(".start-menu h2");
const button = document.querySelector(".bottom-row button");
const userScoreTally = document.querySelector(".bottom-row .user-score");
const compScoreTally = document.querySelector(".bottom-row .computer-score");
const form = document.querySelector(".form");
const versus = document.querySelector(".versus");
const user = document.querySelector(".versus .user");
const computer = document.querySelector(".versus .computer");
const resultBox = document.querySelector(".result");
const result = document.querySelector(".result h1");

startGame.addEventListener("click", () => {
  startMenu.style.display = "none";
  form.style.display = "block";
});

let userScore = 0;
let compScore = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const compChoice = ["rock", "paper", "scissors"][
    Math.floor(Math.random() * 3)
  ];
  const userChoice = document.querySelector(
    'input[name="radio"]:checked'
  ).className;
  compare(userChoice, compChoice);
  console.log(`User chose ${userChoice} v/s Computer chose ${compChoice}`);
  form.style.display = "none";
  versus.style.display = "flex";
  addPic(userChoice, compChoice);
  setTimeout(() => {
    form.style.display = "block";
    versus.style.display = "none";
  }, 1500);
  console.log(userScore + " : " + compScore);
});

function addPic(userSide, computerSide) {
  const img = document.createElement("img");
  let userImgUrl = "";
  let computerImgUrl = "";

  // Determine image URLs for user's choice
  if (userSide === "rock") {
    userImgUrl = "img/rock.avif";
  } else if (userSide === "paper") {
    userImgUrl = "img/paper.avif";
  } else if (userSide === "scissors") {
    userImgUrl = "img/scissors.avif";
  }

  // Determine image URLs for computer's choice
  if (computerSide === "rock") {
    computerImgUrl = "img/rock.avif";
  } else if (computerSide === "paper") {
    computerImgUrl = "img/paper.avif";
  } else if (computerSide === "scissors") {
    computerImgUrl = "img/scissors.avif";
  }

  // Append images to the DOM and remove after delay
  if (userImgUrl && computerImgUrl) {
    const userImg = img.cloneNode(true);
    userImg.src = userImgUrl;
    user.appendChild(userImg);

    const computerImg = img.cloneNode(true);
    computerImg.src = computerImgUrl;
    computer.appendChild(computerImg);

    setTimeout(() => {
      user.removeChild(userImg);
      computer.removeChild(computerImg);
    }, 1500);
  }
}

function compare(user, computer) {
  if (user === computer) {
    console.log("It's a tie!");
    result.innerHTML = `It's a tie!`;
    resultBox.style.display = "flex";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    console.log("You win!");
    result.innerHTML = `You win!`;
    resultBox.style.display = "flex";
    userScore++;
    userScoreTally.innerHTML = `User: ${userScore}`;
  } else {
    console.log("Computer wins!");
    result.innerHTML = `Computer wins!`;
    resultBox.style.display = "flex";
    compScore++;
    compScoreTally.innerHTML = `Computer: ${compScore}`;
  }
  setTimeout(() => {
    resultBox.style.display = "none";
  }, 1500);
}
