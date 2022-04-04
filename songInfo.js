class songInfo{ 
    constructor(name,artist, duration) { 
        this.name = name;
        this.artist = artist;
        this.duration = duration;
    }

    draw(images) {
        fill(255);
        textSize(20);
        text(this.name, 75, 480)
        textSize(10);
        text(this.artist, 75, 495)
        textSize(15);
        text(this.duration, 407, 517)
        image(images, 73, 75, 370, 370)
    }

}