"use strict";
/*--------
Aufgabe 3
---------*/
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
// sky
context.fillStyle = "blue";
context.fillRect(0, 0, 800, 600);
// ground
context.fillStyle = "green";
context.fillRect(0, 300, 800, 200);
// cloud
context.beginPath();
context.moveTo(170, 80);
context.bezierCurveTo(130, 100, 130, 150, 230, 150);
context.bezierCurveTo(250, 180, 320, 180, 340, 150);
context.bezierCurveTo(420, 150, 420, 120, 390, 100);
context.bezierCurveTo(430, 40, 370, 30, 340, 50);
context.bezierCurveTo(320, 5, 250, 20, 250, 50);
context.bezierCurveTo(200, 5, 150, 20, 170, 80);
context.fillStyle = "#8ED6FF";
context.fill();
context.closePath();
// tree
context.fillStyle = "brown";
context.fillRect(175, 100, 50, 300);
context.beginPath();
context.fillStyle = "lightgreen";
context.arc(200, 150, 75, 0, 2 * Math.PI, false);
context.fill();
context.closePath();
// building
context.fillStyle = "yellow";
context.fillRect(500, 250, 200, 200);
context.beginPath();
context.fillStyle = "red";
context.moveTo(470, 250);
context.lineTo(730, 250);
context.lineTo(600, 50);
context.fill();
context.closePath();
class VierEck {
    constructor() {
        this.maxWidth = 750;
        this.maxHeight = 450;
        this.x1 = this.getRandomInt(0, this.maxWidth);
        this.x2 = this.getRandomInt(this.x1, this.maxWidth);
        this.y1 = this.getRandomInt(0, this.maxHeight);
        this.y2 = this.getRandomInt(this.y1, this.maxHeight);
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    drawRect() {
        context.beginPath();
        context.fillStyle = "plum";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2, this.y1);
        context.lineTo(this.x2, this.y2);
        context.lineTo(this.x1, this.y2);
        context.closePath();
        context.stroke();
        context.fill();
        context.closePath();
    }
}
let rechtArray = [new VierEck(), new VierEck(), new VierEck()];
for (const recht of rechtArray) {
    recht.drawRect();
}
//# sourceMappingURL=script.js.map