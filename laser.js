function Laser(spos, angle) {
this.pos = triangle(spos.x1, spos.y1, spos.x2, spos.y2, spos.x3, spos.y3) ;
this.vel = p5.Vector.fromAngle(angle);
this.vel.mult(10); //Kode som bestemmer hvor hurtig laser skudene bevæger sig 

this.update = function(){
    this.pos.add(this.vel);
}
this.render = function(){
    push();
    stroke(color = "yellow"); //En bestemt farve til skudene bliver anvendt her
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();
}

this.hits = function (asteroid) {
    var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    if (d < asteroid.r) {
        return true;
    } else {
        return false;
    }
}

this.offscreen = function() {
    if (this.pos.x > width || this.pos.x < 0) {    
        return true;
    } 
    if (this.pos.y > height || this.pos.y < 0) {
        return true;
    }
    return false;
    }
}