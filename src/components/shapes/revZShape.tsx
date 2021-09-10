import Shape from "./shape";
import ShapeOrientation from "../types/shapeOrientation";

const RevZShapeOrientations = [
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

class RevZShape extends Shape {
  orientations: Array<ShapeOrientation>
  orientation: ShapeOrientation
  currentOrientationIdx: number

  constructor(){
    super();
    this.orientations = RevZShapeOrientations;
    this.currentOrientationIdx = 0;
    this.orientation = this.orientations[this.currentOrientationIdx];
  }
}

export default RevZShape;