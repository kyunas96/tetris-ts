import IShape from "../components/shapes/IShape";
import LShape from "../components/shapes/LShape";
import JShape from '../components/shapes/JShape';
import OShape from '../components/shapes/OShape';
import SShape from '../components/shapes/SShape';
import TShape from '../components/shapes/TShape';
import ZShape from '../components/shapes/ZShape';

import Shapes from '../components/shapes/shapes';

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