import Shape from "./shape";
import ShapeOrientation from "../types/shapeOrientation";

const ZShapeOrientations = [
  [
    [0, 1],
    [1, 1],
    [1, 0]
  ],
  [
    [1, 1, 0],
    [0, 1, 1]
  ]
];

class ZShape extends Shape {
  orientations: Array<ShapeOrientation>
  orientation: ShapeOrientation
  currentOrientationIdx: number

  constructor(){
    super();
    this.orientations = ZShapeOrientations;
    this.currentOrientationIdx = 0;
    this.orientation = this.orientations[this.currentOrientationIdx];
  }
}

export default ZShape;
