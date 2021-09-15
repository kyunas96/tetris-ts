import Shape from "./shape";
import ShapeOrientation from "../types/shapeOrientation";
import ShapeNames from "./shapeNames";


const LineOrientations = [
  // horizontal
  [1, 1, 1, 1],
  // vertical
  [
    [1],
    [1],
    [1],
    [1]
  ]
]

class LineShape extends Shape{
  orientations: Array<ShapeOrientation>
  orientation: ShapeOrientation;
  currentOrientationIdx: number
  ID: number

  constructor(){
    super();
    this.ID = Shape.generateShapeID(ShapeNames.I);
    this.orientations = LineOrientations;
    this.currentOrientationIdx = 0;
    this.orientation = this.orientations[this.currentOrientationIdx];
  }
}

export default LineShape;