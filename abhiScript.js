const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user img");
cpuResult = document.querySelector(".cpu img");
text = document.querySelector(".text");
optionImage = document.querySelectorAll(".option-image");


// add active class
const user =()=>{
optionImage.forEach((image, index) => {
  image.addEventListener("click", () => {
    optionImage.forEach((img)=>{
      img.classList.remove('active');
    });
    image.classList.add("active");
  });
});
}

// 0 rock 1 paper 3 scissor
// cpu choice
let cpuChoice;
const cpu = () => {
  cpuChoice = Math.floor(Math.random() * 2);
  if (cpuChoice === 0) {
    cpuResult.src = "./Images/rock.png";
  } else if (cpuChoice === 1) {
    cpuResult.src = "./Images/paper.png";
  } else {
    cpuResult.src = "./Images/scissors.png";
  }
   // calling check winner function 
  winner();
};

// user choice
let userChoice;
optionImage.forEach((image, index) => {
  image.addEventListener("click", () => {
    user();
    userResult.src = image.querySelector("img").src;
    userChoice = index;
    // add start class in container
    gameContainer.classList.add("start");
    // settimeOut to run cpu
    text.innerText ="Wait !!"
    let time = setTimeout (()=>{
      cpu()
    },2500)
  });
});
// check winner and shows
const winner = () => {
  // Match Draw
  if (cpuChoice === userChoice) {
    text.innerText = "Draw !!";
    // Check user winner
  } else if (
    (userChoice === 0 && cpuChoice === 2) ||
    (userChoice === 1 && cpuChoice === 0) ||
    (userChoice === 2 && cpuChoice === 1)
  ) {
    text.innerText = "you win !!";
  } else {
    text.innerText = "Computer Wins !!";
  }
  // Remove start class from container
  gameContainer.classList.remove('start')
  // Remove active class from option images
  optionImage.forEach((img)=>{
    img.classList.remove('active');
  });
};

const playGame = () => {};
