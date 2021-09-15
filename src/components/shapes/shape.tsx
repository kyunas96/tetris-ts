import ShapeOrientation from '../types/shapeOrientation';
import ShapeNames from './shapeNames';

abstract class Shape {
  abstract orientations: Array<ShapeOrientation>
  abstract orientation: ShapeOrientation
  abstract currentOrientationIdx: number
  abstract ID: number

  static IDarray = new Set<number>()
  // these functions will allow the arrays representing the shapes to be
  // transformed via rotations to update their orientation


  static getUniqueID(){
    let randomNumber = Math.random() * 999;

    while(!Shape.IDarray.has(randomNumber)){
      randomNumber = Math.random() * 999;
    }
    Shape.IDarray.add(randomNumber);
    return randomNumber;
  }

  static generateShapeID(shapeName: number): number {
    switch (shapeName) {
      case ShapeNames.LINE:
        const LINE_PREFIX = 1000;
        return LINE_PREFIX + Shape.getUniqueID();
      case ShapeNames.L:
        const L_PREFIX = 2000;
        return L_PREFIX + Shape.getUniqueID();
      case ShapeNames.REV_L:
        const REV_L_PREFIX = 3000;
        return REV_L_PREFIX + Shape.getUniqueID();
      case ShapeNames.S:
        const S_PREFIX = 4000;
        return S_PREFIX + Shape.getUniqueID();
      case ShapeNames.Z:
        const Z_PREFIX = 5000;
        return Z_PREFIX + Shape.getUniqueID();
      case ShapeNames.T:
        const T_PREFIX = 6000;
        return T_PREFIX + Shape.getUniqueID();
      case ShapeNames.SQUARE:
        const SQUARE_PREFIX = 7000;
        return SQUARE_PREFIX + Shape.getUniqueID();
      default:
        return Infinity;
    }
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