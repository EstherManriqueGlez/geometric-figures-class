import { Circle } from './modules/circles';
import { Rectangle } from './modules/rectangles.js';
import { Triangle } from './modules/triangles.js';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

let select = document.querySelector('select#figures');
select.addEventListener('change', (e) => {
  clearCanvas(c, canvas);
  switch (e.target.value) {
    case 'none':
      clearCanvas(c, canvas);
      break;
    case 'circle':
      let circle = new Circle(c, 0, 2, 150);
      circle.drawCircle();
      break;
    case 'triangle':
      const height = 200;
      const base = 300;
      let triangle = new Triangle(c, base / 2, 5, 5, height, base + 5, height);
      triangle.drawTriangle();
      break;
    case 'rectangle':
    default:
      let rectangle = new Rectangle(c, 5, 5, 150, 100)
      rectangle.drawRectangle();
      break;
  }
})

function clearCanvas(context, canvas) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  let w = canvas.width;
  canvas.width = 1;
  canvas.width = w;
}