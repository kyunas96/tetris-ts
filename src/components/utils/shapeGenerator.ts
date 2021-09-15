import IShape from "../shapes/IShape";
import LShape from "../shapes/LShape";
import JShape from '../shapes/JShape';
import OShape from '../shapes/OShape';
import SShape from '../shapes/SShape';
import TShape from '../shapes/TShape';
import ZShape from '../shapes/ZShape';

import Shapes from '../shapes/shapes';

const ShapeGenerator = () => {
  const seed = Math.random() * 100;
    switch (true) {
      case (seed < 14):
        return new IShape();
      case (seed < 28):
        return new LShape();
      case (seed < 42):
        return new JShape();
      case (seed < 56):
        return new OShape();
      case (seed < 70):
        return new SShape();
      case (seed < 84):
        return new TShape();
      default:
        return new ZShape();
    }
}

export default ShapeGenerator;