import Shape from "./shape";
import ShapeOrientation from "../types/shapeOrientation";
import ShapeNames from "./shapeNames";

const SquareOrientations = [
  [1, 1],
  [1, 1]
]

class SquareShape extends Shape {
  orientations: Array<ShapeOrientation>
  orientation: ShapeOrientation
  currentOrientationIdx: number
  ID: string

  constructor(){
    super();
    this.ID = Shape.generateShapeID(ShapeNames.SQUARE);
    this.orientations = SquareOrientations;
    this.currentOrientationIdx = 0;
    this.orientation = SquareOrientations[this.currentOrientationIdx];
  }
}

export default SquareShape;