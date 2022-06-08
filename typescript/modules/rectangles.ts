export default class Rectangle {
  canvas: CanvasRenderingContext2D;
  x1: number;
  y1: number;
  x2: number;
  y2: number;

  constructor(
    canvas: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) {
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
