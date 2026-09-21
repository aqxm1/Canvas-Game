// Canvas-Element aus dem HTML holen (id="gameCanvas")
const canvas = document.getElementById("gameCanvas");

// 2D-Zeichenkontext: damit zeichnen wir auf dem Canvas
const ctx = canvas.getContext("2d");

// --- Rechteck ---
ctx.fillStyle = "blue";           // Füllfarbe auf Blau setzen
ctx.fillRect(100, 100, 100, 50);  // Rechteck zeichnen: x, y, Breite, Höhe

// --- Kreis ---
ctx.beginPath();                            // neuen Zeichenpfad starten damit der nicht mit dem Rechteck verbunden ist
ctx.arc(300, 200, 30, 0, Math.PI * 2);      // Kreis: Mitte (300,200), Radius 30, voller Kreis (0 bis 2π)
ctx.fillStyle = "Yellow";                   // Füllfarbe auf Gelb setzen
ctx.fill();                                 // aktuellen Pfad (den Kreis) ausfüllen

// --- Text ---
ctx.font = "30px Arial";                    // Schriftgröße und Schriftart setzen
ctx.fillStyle = "white";                    // Textfarbe auf Weiß setzen
ctx.fillText("Hallo Canvas", 100, 50);      // Text an Position (x=100, y=50) zeichnen
