import Circle from "./modules/circles.js";
import Rectangle from "./modules/rectangles.js";
import Triangle from "./modules/triangles.js";

const canvas = <HTMLCanvasElement>document.querySelector("canvas");
const c = <CanvasRenderingContext2D>canvas.getContext("2d");

let select = <HTMLSelectElement>document.querySelector("select#figures");

select.addEventListener("change", function (e: Event) {
  clearCanvas(c, canvas);
  const index = select.selectedIndex;
  const option = select.options[index];

  switch ((<HTMLOptionElement>option).value) {
    default:
      clearCanvas(c, canvas);
      break;
    case "circle":
      let circle = new Circle(c, 0, 2, 150);
      circle.drawCircle();
      break;
    case "triangle":
      const height = 200;
      const base = 300;
      let triangle = new Triangle(c, base / 2, 5, 5, height, base + 5, height);
      triangle.drawTriangle();
      break;
    case "rectangle":    
      let rectangle = new Rectangle(c, 5, 5, 150, 100);
      rectangle.drawRectangle();
      break;
  }
});

function clearCanvas(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  let w = canvas.width;
  canvas.width = 1;
  canvas.width = w;
}
