import ShapeOrientation from '../types/shapeOrientation';
import ShapeNames from './shapeNames';

abstract class Shape {
  abstract orientations: Array<ShapeOrientation>
  abstract orientation: ShapeOrientation
  abstract currentOrientationIdx: number
  abstract ID: string

  static IDarray = new Set<string>()
  // these functions will allow the arrays representing the shapes to be
  // transformed via rotations to update their orientation

  static generateShapeID(shapeName: number): string {
    switch (shapeName) {
      case ShapeNames.LINE:
        
      case ShapeNames.L:

      case ShapeNames.REV_L:

      case ShapeNames.S:

      case ShapeNames.Z:

      case ShapeNames.T:

      case ShapeNames.SQUARE:

    }

    return "";
  }

  rotateRight() {
    if (this.currentOrientationIdx === this.orientations.length) {
      this.currentOrientationIdx = 0;
    } else {
      this.currentOrientationIdx++;
    }
  }

  rotateLeft() {
    if (this.currentOrientationIdx === 0) {
      this.currentOrientationIdx = this.orientations.length - 1;
    } else {
      this.currentOrientationIdx--;
    }
  }
}

export default Shape;