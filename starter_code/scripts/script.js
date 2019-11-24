window.onload = function() {
  document.getElementById("start-button").onclick = function() {
      startGame();
  };

  function startGame() {
      const myGame = new Game();
      myGame.init();
  }
};

// const theCanvas = document.getElementById('example').getContext('2d');
// class Game {
//   constructor() {
//     this.theCar = new Car(180, 380, 40, 50);
//   }
// }

// class Car {
//   constructor(x, y, width, height) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//   }
// }

// const carImg = new Image();
// carImg.src = "./images/car.png"

// function drawSelf(theObject, Obstacle) {
//   if (Obstacle) {
//     theCanvas.fillStyle = 'tomato'
//     theCanvas.fillRect(theObject.x, theObject.y, theObject.width, theObject.height);
//   } else {
//     theCanvas.drawImage(carImg, theObject.x, theObject.y, theObject.width, theObject.height)
//   }
// }


// window.onload = function () {
//   document.getElementById("start-button").onclick = function () {
//     startGame();
//   };

//   function startGame() {
//     theGame = new Game;

//     drawSelf(theGame.theCar, false)
//   }
// };