export default class Triangle {
    constructor(canvas, x1, y1, x2, y2, x3, y3) {
        this.canvas = canvas;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
    }
    drawTriangle() {
        this.canvas.beginPath();
        this.canvas.moveTo(this.x1, this.y1);
        this.canvas.lineTo(this.x2, this.y2);
        this.canvas.lineTo(this.x3, this.y3);
        this.canvas.closePath();
        this.canvas.strokeStyle = "red";
        this.canvas.fillStyle = "yellow";
        this.canvas.fill();
        this.canvas.stroke();
    }
}
