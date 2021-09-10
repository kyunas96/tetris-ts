import Shape from "./shape";

class Line extends Shape{
  shapeArray: Array<number[]>

  constructor(){
    super();
    this.shapeArray =  [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ]
  }
}

export default Line;