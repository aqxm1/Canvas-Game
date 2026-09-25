// Canvas-Element aus dem HTML holen (id="gameCanvas")
const canvas = document.getElementById("gameCanvas");

// 2D-Zeichenkontext: damit zeichnen wir auf dem Canvas
const ctx = canvas.getContext("2d");


function zeichne() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Hintergrund, sonst ist weißer Text unsichtbar

   
    ctx.fillStyle = "blue";// spieler werte (kommen aus script.js)
    ctx.fillRect(player.x, player.y, player.width, player.height);

    
    ctx.beginPath();//kreise werte (kommen aus scipt.js)
    ctx.arc(star.x + star.size / 2, star.y + star.size / 2, star.size / 2, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();

    // Punkte und Leben (Werte kommen aus script.js)
    ctx.font = "24px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    ctx.fillText("Punkte: " + punkte, 20, 35);
    ctx.fillText("Leben: " + leben, 20, 70);

    // Game Over
    if (leben <= 0) {
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "50px Arial";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
        ctx.font = "24px Arial";
        ctx.fillText("Deine Punkte: " + punkte, canvas.width / 2, canvas.height / 2 + 45);
        ctx.textAlign = "left";
    }
}
