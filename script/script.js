let player = {
    x: 350,
    y: 430,
    width: 100,
    height: 30,
    speed: 6
};


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
    if (links)
    {
        player.x -=5
    }

    if (rechts)
    {
        player.y +=5
    }

    requestAnimationFrame(update);

}
update()