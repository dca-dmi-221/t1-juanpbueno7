class playlist{ 
    constructor(name,artist, duration, addition, xaddition) { 
        this.name = name;
        this.artist = artist;
        this.duration = duration;
        this.addition = addition;
        this.xaddition = xaddition;
        this.x = 520 + this.xaddition;
        this.y = 100 + this.addition;
    }   

    draw(images) {

        fill(255);
        rect(this.x, this.y, 295, 80, 10);
        fill(0);
        textSize(20);
        text(this.name, 600 + this.xaddition, 135 + this.addition)
        textSize(10);
        text(this.artist, 600 + this.xaddition, 150 + this.addition)
        textSize(10);
        text(this.duration, 600 + this.xaddition, 165 + this.addition);
        image(images, 530+ this.xaddition, 110 + this.addition, 60, 60);


        if (this.selected === true) {
            fill(0, 255, 0, 50);
            rect(495 + this.xaddition, 90 + this.addition, 350, 100, 10);
        }
    }

    setSelected(selected) { 
        this.selected = selected;
    }


     getX() { 
        return this.x + 40;
    }

     getY() { 
        return this.y + 40;
    }

}