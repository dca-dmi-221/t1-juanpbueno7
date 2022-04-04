class Button { 
    constructor(x, y, text, xAdjust, yAdjust) { 
        this.x = x;
        this.y = y;
        this.text = text;
        this.xAdjust = xAdjust;
        this.yAdjust = yAdjust;
        this.large = 50;
        this.tall = 50;
    }

    draw() { 
        fill(255, 0, 0);
        rect(this.x, this.y, this.large, this.tall, 30)
        fill(255);
        textSize(20);
        text(this.text, this.x + this.xAdjust, this.y + this.yAdjust);
    }

    getX() { 
        return this.x + (this.large/2)
    }

    getY() {
        return this.y + (this.tall/2)
    }
}