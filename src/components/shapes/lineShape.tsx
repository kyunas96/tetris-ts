import Shape from "./shape";
import ShapeOrientation from "../types/shapeOrientation";

const LineOrientations = [
  // horizontal
  [1, 1, 1],
  // vertical
  [
    [1],
    [1],
    [1]
  ]
]

class Line extends Shape{
  orientations: Array<ShapeOrientation>

  constructor(){
    super();
    this.orientations = LineOrientations;
  }
}

export default Line;