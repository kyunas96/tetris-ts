import ShapeOrientation from '../types/shapeOrientation';

abstract class Shape {
  abstract orientations: Array<ShapeOrientation>
  // these functions will allow the arrays representing the shapes to be
  // transformed via rotations to update their orientation
}

export default Shape;