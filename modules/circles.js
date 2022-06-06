class Circle {
  constructor(canvas, xc, yc, radius) {
    this.canvas = canvas;
    this.xc = xc;
    this.yc = yc;
    this.radius = radius;
  }
  drawCircle() {
    let startingPoint = this.circleStartingPoint(this.radius);
    this.canvas.beginPath();
    this.canvas.arc(startingPoint, startingPoint, this.radius, this.xc, this.yc * Math.PI);
    this.canvas.strokeStyle = 'red';
    this.canvas.fillStyle = 'yellow';
    this.canvas.stroke();
    this.canvas.fill();
  }

  circleStartingPoint = (radius) => {
    return parseInt(radius + 5);
  }
}

export { Circle }