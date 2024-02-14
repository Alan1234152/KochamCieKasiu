const hearts = [];
const pinks = ["#ff748c", "#ff8da1", "#ffa7b6", "#FF0000", "#FFB6C1", "#FF69B4", "#FF00FF", "#DC143C", "#FF4500", "#FFA500", "#FF7777", "#D9004E", "#800020", "#E75480"];

class Heart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.theta = Math.random() * Math.PI * 2;
        const heartEl = document.createElement("img");
        heartEl.classList.add("heart");
        heartEl.setAttribute('src', "./image/Untitled-2.png")
        document.body.append(heartEl);

        this.el = heartEl;

        setTimeout(() => {
            this.el.remove();
        }, 10000)
    }

    update() {
        this.x += Math.cos(this.theta) * 1;
        this.y += 1;
        this.theta += 0.01;
        this.el.style.left = `${this.x}px`;
        this.el.style.top = `${this.y}px`;
    }
}

setInterval(() => {
    const heart = new Heart(Math.random() * window.innerWidth, -100);
    hearts.push(heart);
}, 200);

setInterval(() => {
    hearts.forEach((heart) => heart.update());
}, 10);
