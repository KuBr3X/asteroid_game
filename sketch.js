//Forskellige variabler til de diverse ting der skal kodes
var ship;
var asteroids = [];
var lasers = [];
var isRight = false;
var isLeft = false;
var isUp = false; 


function setup() { //Kode til canvasset som også bestemmer hvor mange asteroider der bliver tilføjet
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    for (var i = 0; i < 20; i++) { //Denne kode er den der bestemmer hvor mange asteroider der er 
    asteroids.push(new Asteroid());
} 
}

function draw(){
    background(0);
    

    for (var i = 0; i < asteroids.length; i++) { //Kode der renderer asteroider
        if (ship.hits(asteroids[i])) {
            console.log("ups");
        }
        asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();

    }

    for (var i = lasers.length-1; i >=0; i--) { //Kode der renderer laser skud 
        lasers[i].render();
        lasers[i].update();
        if (lasers[i].offscreen()) {
            lasers.splice(i, 1);
        } else {
        for (var j = asteroids.length-1; j >= 0; j--){ //Kode der ødelægger asteroiderne 
        if (lasers[i].hits(asteroids[j])) {
         if (asteroids[j].r > 20){
         var newasteroids = asteroids[j].breakup();
         asteroids = asteroids.concat(newasteroids);
         } 
         asteroids.splice(j, 1);
         lasers.splice(i, 1);
         break;
        }
    }
    }
}


        ship.render();
        ship.turn();
        ship.update(); 
        ship.edges();
        ship.movement();
}  
          //Koder til når man giver slip fra movement tasterne at den så skal stoppe op.
function keyReleased (){
    ship.setRotation (0);
    ship.boosting(false);

    if (keyCode == 68) {
        isRight = false
    } 
    if (keyCode == 65) {
        isLeft = false
    }
    if (keyCode == 87) {
        isUp = false
    }

 }
          //Koder til hvilke taster der skal bruges til laser og movements
function keyPressed () {
    if (keyCode == 32){ //Tasten "Space"
        lasers.push(new Laser(ship.pos, ship.heading));
    }  
    if (keyCode == 68) { //Tasten "D"
        isRight = true
    }
    if (keyCode == 65) { //Tasten "A"
        isLeft = true
    }
    if (keyCode == 87) { //Tasten "W"
        isUp = true
    }
    if (keyCode == 82) { //Tasten "R"
        window.location.reload(); //Reload af hjemmesiden
    }
}
