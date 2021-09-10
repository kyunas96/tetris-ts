import Shape from "./shape";
import ShapeOrientation from "../types/shapeOrientation";

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

  constructor() {
    super();
    this.orientations = RevLShapeOrientations;
    this.currentOrientationIdx = 0;
    this.orientation = this.orientations[this.currentOrientationIdx];
  }
}

export default RevLShape;