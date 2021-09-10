import Shape from "./shape";
import ShapeOrientation from "../types/shapeOrientation";

const TShapeOrientations = [
  [
    [1, 0],
    [1, 1],
    [1, 0]
  ],
  [
    [1, 1, 1],
    [0, 1, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [0, 1]
  ],
  [
    [0, 1, 0],
    [1, 1, 1]
  ]
];

class TShape extends Shape {
  orientations: Array<ShapeOrientation>
  orientation: ShapeOrientation
  currentOrientationIdx: number

  constructor() {
    super();
    this.orientations = TShapeOrientations;
    this.currentOrientationIdx = 0;
    this.orientation = this.orientations[this.currentOrientationIdx];
  }
}

export default TShape;