// Necessary DOM nodes
const grid = document.querySelector(".grid");
const startBtn = document.querySelector("#start");
const scoreEl = document.querySelector("#score");

// Necessary variables
const squares = [];
let snake = [2, 1, 0];
let direction = 1;
let timerId = undefined;
let score = 0;

// Event listeners
startBtn.addEventListener("click", startGame);

// Functions

// Display grid and snake
function createGrid() {
  for (let i = 0; i < 100; i++) {
    const element = document.createElement("div");
    squares.push(element);
    grid.appendChild(element);
  }
}
createGrid();
snake.forEach((index) => squares[index].classList.add("snake"));

// Make the snake move around the grid
function move() {
  if (
    (snake[0] % 10 === 0 && direction === -1) ||
    (snake[0] % 10 === 9 && direction === 1) ||
    (snake[0] - 10 < 0 && direction === -10) ||
    (snake[0] + 10 > 99 && direction === 10)
  ) {
    console.log("You hit a wall, and now lose!");
    return clearInterval(timerId);
  }

  const tail = snake.pop();
  squares[tail].classList.remove("snake");

  snake.unshift(snake[0] + direction);
  squares[snake[0]].classList.add("snake");

  eatApple(tail);
}

// Control snake movement
function control(event) {
  switch (event.key) {
    case "ArrowUp":
      direction = -10;
      break;

    case "ArrowRight":
      direction = 1;
      break;

    case "ArrowDown":
      direction = 10;
      break;

    case "ArrowLeft":
      direction = -1;
      break;

    default:
      break;
  }
}

function startGame() {
  clearInterval(timerId);
  snake.forEach((index) => squares[index].classList.remove("snake"));
  score = 0;

  snake = [2, 1, 0];
  direction = 1;
  scoreEl.innerText = 0;
  snake.forEach((index) => squares[index].classList.add("snake"));
  timerId = setInterval(move, 300);

  document.addEventListener("keydown", control);
}

function generateApple() {
  let appleIndex = 0;

  return () => {
    while (squares[appleIndex].classList.contains("snake")) {
      appleIndex = Math.floor(Math.random() * 100);
    }

    squares[appleIndex].classList.add("apple");
  };
}
generateApple = generateApple();
generateApple();

function eatApple(tail) {
  const head = snake[0];

  if (squares[head].classList.contains("apple")) {
    squares[head].classList.remove("apple");

    squares[tail].classList.add("snake");
    snake.push(tail);

    generateApple();

    score += 1;
    scoreEl.textContent = score;
  }
}
