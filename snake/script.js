const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let snake, food, dx, dy, score;

function init() {
  snake = [{ x: Math.floor(columns / 2), y: Math.floor(rows / 2) }];
  dx = 1;
  dy = 0;
  score = 0;
  placeFood();
}

function placeFood() {
  food = {
    x: Math.floor(Math.random() * columns),
    y: Math.floor(Math.random() * rows)
  };
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // food
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * scale, food.y * scale, scale, scale);
  // snake
  ctx.fillStyle = 'green';
  snake.forEach(seg => ctx.fillRect(seg.x * scale, seg.y * scale, scale, scale));
  // score
  document.getElementById('score').textContent = score;
}

function update() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  if (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= columns ||
    head.y >= rows ||
    snake.some(seg => seg.x === head.x && seg.y === head.y)
  ) {
    init();
    return;
  }
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    score++;
    placeFood();
  } else {
    snake.pop();
  }
}

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      if (dy === 0) {
        dx = 0;
        dy = -1;
      }
      break;
    case 'ArrowDown':
      if (dy === 0) {
        dx = 0;
        dy = 1;
      }
      break;
    case 'ArrowLeft':
      if (dx === 0) {
        dx = -1;
        dy = 0;
      }
      break;
    case 'ArrowRight':
      if (dx === 0) {
        dx = 1;
        dy = 0;
      }
      break;
  }
});

function loop() {
  update();
  draw();
}

init();
setInterval(loop, 100);
