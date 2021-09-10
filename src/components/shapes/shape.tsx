import ShapeOrientation from '../types/shapeOrientation';

abstract class Shape {
  abstract orientations: Array<ShapeOrientation>
  abstract orientation: ShapeOrientation
  abstract currentOrientationIdx: number
  // these functions will allow the arrays representing the shapes to be
  // transformed via rotations to update their orientation


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