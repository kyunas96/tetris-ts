import Shape from "./shape";
import ShapeOrientation from "../types/shapeOrientation";

const SquareOrientations = [
  [1, 1],
  [1, 1]
]

class SquareShape extends Shape {
  orientations: Array<ShapeOrientation>
  orientation: ShapeOrientation
  currentOrientationIdx: number

  constructor(){
    super();
    this.orientations = SquareOrientations;
    this.currentOrientationIdx = 0;
    this.orientation = SquareOrientations[this.currentOrientationIdx];
  }
}

export default SquareShape;