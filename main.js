// Necessary DOM nodes
const grid = document.querySelector(".grid");
const startBtn = document.querySelector("#start");
const score = document.querySelector("#score");
const squares = [];
const snake = [18, 17, 16];
let direction = 1;

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
  const tail = snake.pop();
  squares[tail].classList.remove("snake");

  snake.unshift(snake[0] + direction);
  squares[snake[0]].classList.add("snake");
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

//
function startGame() {
  const timerId = setInterval(move, 250);

  document.addEventListener("keydown", control);
  startBtn.removeEventListener("click", startGame);
}
