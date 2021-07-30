// Necessary DOM nodes
const grid = document.querySelector(".grid");
const startBtn = document.querySelector("#start");
const score = document.querySelector("#score");

// Necessary variables
const squares = [];
const snake = [2, 1, 0];
let direction = 1;
const timerId = setInterval(move, 500);

// Event listeners
// startBtn.addEventListener("click", startGame);
document.addEventListener("keydown", control);

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
  console.log(snake);
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
// function startGame() {
//   document.addEventListener("keydown", control);
//   startBtn.removeEventListener("click", startGame);
// }
