"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(canvas, x1, y1, x2, y2) {
        this.canvas = canvas;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    drawRectangle() {
        this.canvas.strokeStyle = "red";
        this.canvas.fillStyle = "yellow";
        this.canvas.rect(this.x1, this.y1, this.x2, this.y2);
        this.canvas.stroke();
        this.canvas.fill();
    }
}
exports.Rectangle = Rectangle;
