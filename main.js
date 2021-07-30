// Necessary DOM nodes
const grid = document.querySelector(".grid");
const startBtn = document.querySelector("#start");
const score = document.querySelector("#score");
const squares = [];
const snake = [2, 1, 0];

for (let i = 0; i < 100; i++) {
  const element = document.createElement("div");
  squares.push(element);
  grid.appendChild(element);
}
snake.forEach((index) => squares[index].classList.add("snake"));

function move() {
  const tail = snake.pop();
  squares[tail].classList.remove("snake");

  const head = tail + snake.length + 1;
  snake.unshift(head);
  squares[head].classList.add("snake");
}
