import Shape from "./shape";
import ShapeOrientation from "../types/shapeOrientation";
import ShapeNames from "./shapeNames";

const SShapeOrientations = [
  [
    [1, 0],
    [1, 1],
    [0, 1]
  ],
  [
    [0, 1, 1],
    [1, 1, 0]
  ]
]

class SShape extends Shape {
  orientations: Array<ShapeOrientation>
  orientation: ShapeOrientation
  currentOrientationIdx: number
  ID: number

  constructor(){
    super();
    this.ID = Shape.generateShapeID(ShapeNames.S);
    this.orientations = SShapeOrientations;
    this.currentOrientationIdx = 0;
    this.orientation = this.orientations[this.currentOrientationIdx];
  }
}

export default SShape;