class Player {
    constructor() {
        this.x = 350;
        this.y = 430;
        this.width = 100;
        this.height = 30;
        this.speed = 6;
    }

    move() {
        if (links) this.x -= this.speed;
        if (rechts) this.x += this.speed;
    }
}

const player = new Player();
let links = false;
let rechts = false;

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        links = true;
    }

    if (event.key === "ArrowRight") {
        rechts = true;
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "ArrowLeft") {
        links = false;
    }

    if (event.key === "ArrowRight") {
        rechts = false;
    }
});

function update() {
    if (links) {
        player.x -= player.speed;
    }

    if (rechts) {
        player.x += player.speed;
    }

    requestAnimationFrame(update);
}

update();

