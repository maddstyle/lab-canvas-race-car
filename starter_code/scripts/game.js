class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.car = new Player(this, 200, 450, 100, 150);
        this.obstacles = [];
        this.background = undefined;
        this.score = 0;
        this.backgroundImg = new Image();
        this.x = undefined;
        this.y = undefined;
        this.width = 500;
        this.height = 650;
    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.start();
        this.createObstacles();
    }

    start() {
        this.drawBackground();
        this.drawMainCharacters();
        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            this.car.move();
            for (let obstacle of this.obstacles) {
                obstacle.move();
                obstacle.draw();
            }
        }, 1000 / 60);
    }

    createObstacles() {
        console.log("creating obstacle >>>>> ", this.obstacles);
        if (Math.floor(Math.random() * 25) % 3 === 0) {
            this.obstacles.push(new Obstacle());
        }

        setTimeout(() => {
            this.createObstacles();
        }, 3000);
    }

    drawBackground() {
        this.backgroundImg.src = "./images/road.png";
        this.ctx.drawImage(
            this.backgroundImg,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawMainCharacters() {
        this.car.drawComponent("./images/car.png");
    }
}