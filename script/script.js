let player = {
    x: 350,
    y: 430,
    width: 100,
    height: 30,
    speed: 6
};

let star = {
    x: Math.random() * 760,
    y: 0,
    size: 20,
    speed: 3
}

let punkte = 0;
let leben = 3;
let spielLaeuft = true;

const neustartButton = document.getElementById("neustartButton");
 
 
let links = false;
let rechts = false;
 
 
document.addEventListener("keydown", function(event) //speichert in einem Wert ob pfeiltasten gedrückt worden
{
 
    if (event.key === "ArrowLeft")
    {
        links = true;
    }
 
    if (event.key === "ArrowRight")
    {
        rechts = true;
    }
 
 
});
 
 
document.addEventListener("keyup", function(event)//speichert in einem Wert ob pfeiltasten nicht mehr gedrückt werden
{
 
    if (event.key === "ArrowLeft")
    {
        links = false;
    }
 
    if (event.key === "ArrowRight")
    {
        rechts = false;
    }
 
 
});
 
 
function update()
{
    if (spielLaeuft)
    {
        if (links)
        {
            player.x -= player.speed;
        }

        if (rechts)
        {
            player.x += player.speed; // nach rechts = x, nicht y
        }

        star.y += star.speed;

        // Treffer: Rechtecke überlappen auf X UND auf Y
        if (
            star.x + star.size > player.x &&          // rechte Sternkante rechts von linker Spielerkante
            star.x < player.x + player.width &&      // linke Sternkante links von rechter Spielerkante
            star.y + star.size > player.y &&          // untere Sternkante unter oberer Spielerkante
            star.y < player.y + player.height         // obere Sternkante über unterer Spielerkante
        ) {
            star.y = 0;
            star.x = Math.random() * (canvas.width - star.size);
            punkte += 10;
        }
        else if (star.y > canvas.height) { // verpasst: Stern unten raus
            star.y = 0;
            star.x = Math.random() * (canvas.width - star.size);
            leben -= 1;

            if (leben <= 0) {
                spielLaeuft = false;
                neustartButton.hidden = false;
            }
        }
    }

    zeichne(); // Zeichnen übernimmt canvas.js
    requestAnimationFrame(update); // nächsten Frame planen
}

function neustart()
{
    punkte = 0;
    leben = 3;
    spielLaeuft = true;
    player.x = 350;
    star.y = 0;
    star.x = Math.random() * (canvas.width - star.size);
    links = false;
    rechts = false;
    neustartButton.hidden = true;
}

neustartButton.addEventListener("click", neustart);

update(); // Loop einmal starten, sonst passiert nichts