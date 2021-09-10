enum ShapeProperties {
  WIDTH = 3,
  HEIGHT = 3
}

abstract class Shape {
  abstract shapeArray: Array<number[]>
  // these functions will allow the arrays representing the shapes to be
  // transformed via rotations to update their orientation
  rotateLeft(): void {
    let transformedArray = new Array(3).fill([0, 0, 0]);

    for (let i = ShapeProperties.WIDTH; i >= 0; i--) {
      for (let j = ShapeProperties.HEIGHT; j >= 0; j--) {
        transformedArray[i][j] = this.shapeArray[j][i];
      }
    }

    this.shapeArray = transformedArray;
  }

  rotateRight(): void {
    let transformedArray = new Array(3).fill([0, 0, 0]);

    for (let i = 0; i < ShapeProperties.WIDTH; i++) {
      for (let j = 0; j < ShapeProperties.HEIGHT; j++) {
        transformedArray[i][j] = this.shapeArray[j][i];
      }
    }
    this.shapeArray = transformedArray;
  }
}

export default Shape;