import Shape from './shape';
import ShapeOrientation from '../types/shapeOrientation';

const LShapeOrientations: Array<ShapeOrientation> = [
  [
    [1, 0],
    [1, 0],
    [1, 1]
  ],
  [
    [1, 1, 1],
    [1, 0, 0]
  ],
  [
    [1, 1],
    [0, 1],
    [0, 1]
  ],
  [
    [0, 0, 1],
    [1, 1, 1]
  ]
]

class LShape extends Shape{
  orientations: Array<ShapeOrientation>
  orientation: ShapeOrientation
  currentOrientationIdx: number
  
  constructor(){
    super();
    this.orientations = LShapeOrientations;
    this.currentOrientationIdx = 0;
    this.orientation = this.orientations[this.currentOrientationIdx];
  }
}

export default LShape;