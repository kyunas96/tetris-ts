import Shape from "./shape";
import ShapeOrientation from "../types/shapeOrientation";
import ShapeNames from "./shapeNames";

const RevLShapeOrientations: Array<ShapeOrientation> = [
  [
    [0, 1],
    [0, 1],
    [1, 1]
  ],
  [
    [1, 0, 0],
    [1, 1, 1]
  ],
  [
    [1, 1],
    [1, 0],
    [1, 0]
  ],
  [
    [1, 1, 1],
    [0, 0, 1]
  ]
]

class RevLShape extends Shape {
  orientations: Array<ShapeOrientation>
  orientation: ShapeOrientation
  currentOrientationIdx: number
  ID: number

  constructor() {
    super();
    this.ID = Shape.generateShapeID(ShapeNames.REV_L)
    this.orientations = RevLShapeOrientations;
    this.currentOrientationIdx = 0;
    this.orientation = this.orientations[this.currentOrientationIdx];
  }
}

export default RevLShape;