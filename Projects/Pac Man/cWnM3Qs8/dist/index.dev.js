"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var width = 28;
var grid = document.querySelector('.grid');
var scoreDisplay = document.querySelector('#score');
var squares = [];
var score = 0;
var powerScore = 10; //28 * 28 = 784
// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty

var layout = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function createBoard() {
  for (var i = 0; i < layout.length; i++) {
    var square = document.createElement('div');
    grid.appendChild(square);
    squares.push(square);

    if (layout[i] === 0) {
      squares[i].classList.add('pac-dot');
    } else if (layout[i] === 1) {
      squares[i].classList.add('wall');
    } else if (layout[i] === 2) {
      squares[i].classList.add('ghost-lair');
    } else if (layout[i] === 3) {
      squares[i].classList.add('power-pellet');
    }
  }
}

createBoard(); // down - 40
// up key - 38
// left - 37
// right - 39

var pacmanCurrentIndex = 490;
squares[pacmanCurrentIndex].classList.add('pacman');

function control(e) {
  squares[pacmanCurrentIndex].classList.remove('pacman');

  switch (e.keyCode) {
    case 40:
      console.log('pressed down');
      if (!squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex + width].classList.contains('wall') && pacmanCurrentIndex + width < width * width) pacmanCurrentIndex += width;
      break;

    case 38:
      console.log('pressed up');
      if (!squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex - width].classList.contains('wall') && pacmanCurrentIndex - width >= 0) pacmanCurrentIndex -= width;
      break;

    case 37:
      console.log('pressed left');
      if (!squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex - 1].classList.contains('wall') && pacmanCurrentIndex % width !== 0) pacmanCurrentIndex -= 1;

      if (pacmanCurrentIndex === 364) {
        pacmanCurrentIndex = 391;
      }

      break;

    case 39:
      console.log('pressed right');
      if (!squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex + 1].classList.contains('wall') && pacmanCurrentIndex % width < width - 1) pacmanCurrentIndex += 1;

      if (pacmanCurrentIndex === 391) {
        pacmanCurrentIndex = 364;
      }

      break;
  }

  squares[pacmanCurrentIndex].classList.add('pacman');
  pacDotEat();
  powerPellet();
  checkForWin();
}

document.addEventListener('keyup', control);

function pacDotEat() {
  if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
    score++;
    scoreDisplay.innerHTML = score;
    squares[pacmanCurrentIndex].classList.remove('pac-dot');
  }
}

function powerPellet() {
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
    squares[pacmanCurrentIndex].classList.remove('power-pellet');
    score = score + powerScore;
    scoreDisplay.innerHTML = score;
    ghosts.forEach(function (ghost) {
      return ghost.isScared = true;
    });
    setTimeout(unScareGhosts, 10000);
  }
}

function unScareGhosts() {
  ghosts.forEach(function (ghost) {
    return ghost.isScared = false;
  });
}

var Ghost = function Ghost(className, startIndex, speed) {
  _classCallCheck(this, Ghost);

  this.className = className;
  this.startIndex = startIndex;
  this.speed = speed;
  this.currentIndex = startIndex;
  this.isScared = false;
  this.timerId = NaN;
};

var ghosts = [new Ghost('pinky', 348, 250), new Ghost('blinky', 376, 400), new Ghost('inky', 351, 300), new Ghost('clyde', 379, 500)];
ghosts.forEach(function (ghost) {
  squares[ghost.startIndex].classList.add(ghost.className);
  squares[ghost.startIndex].classList.add('ghost');
});
ghosts.forEach(function (ghost) {
  return moveGhost(ghost);
});

function moveGhost(ghost) {
  var directions = [-1, +1, -width, +width];
  var direction = directions[Math.floor(Math.random() * directions.length)];
  ghost.timerId = setInterval(function () {
    if (!squares[ghost.currentIndex + direction].classList.contains('wall') && !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
      squares[ghost.currentIndex].classList.remove(ghost.className);
      squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost');
      ghost.currentIndex += direction;
      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add('ghost');
    } else direction = directions[Math.floor(Math.random() * directions.length)];

    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add('scared-ghost');
    } //if the ghost is current scared AND pacman is on it
    //remove classnames - ghost.className, 'ghost', 'scared-ghost'
    // change ghosts currentIndex back to its startIndex
    //add a score of 100


    if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {
      squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost', ghost.className);
      ghost.currentIndex = ghost.startIndex;
      score += 100;
      scoreDisplay.innerHTML = score;
      squares[ghost.currentIndex].classList.add('ghost', ghost.className);
    }

    gameOver();
  }, ghost.speed);
}

function gameOver() {
  if (squares[pacmanCurrentIndex].classList.contains('ghost') && !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
    ghosts.forEach(function (ghost) {
      return clearInterval(ghost.timerId);
    });
    document.removeEventListener('keyup', control);
    scoreDisplay.textContent = 'Game Over';
  }
}

function checkForWin() {
  if (score === 274) {
    ghosts.forEach(function (ghost) {
      return clearInterval(ghost.timerId);
    });
    document.removeEventListener('keyup', control);
    scoreDisplay.innerHTML = 'you won';
  }
}
//# sourceMappingURL=index.dev.js.map
