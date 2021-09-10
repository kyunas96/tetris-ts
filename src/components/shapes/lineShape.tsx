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
  orientation: ShapeOrientation;
  currentOrientationIdx: number

  constructor(){
    super();
    this.orientations = LineOrientations;
    this.currentOrientationIdx = 0;
    this.orientation = this.orientations[this.currentOrientationIdx];
  }

  
}

export default Line;