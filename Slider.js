class Slider { 
    constructor() { 
        this.moving = true;
        this.x = 73;
    }

    draw(timer) { 
        fill(255, 166, 90);
        noStroke();
        circle(this.x, 512, 20);
        this.move(timer);
    }

    move(timer) { 
        
        if (this.x < 386) { 
           this.x =+ this.x + timer/1500  
        }
    }

    setX() { 
        this.x = 73;
    }

}