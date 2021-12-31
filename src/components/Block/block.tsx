import ShapeNames from "../shapes/shapeNames";
import "./Block.css";

export interface BlockProps {
  ID: number
}

const getColorClassFromID = (ID: number) => {
  const colorDigit = Math.floor(ID / 1000) - 1;

  switch (colorDigit) {
    case ShapeNames.J:
      return "blue";
    case ShapeNames.L:
      return "orange"; 
    case ShapeNames.I:
      return "cyan";
    case ShapeNames.O:
      return "yellow";
    case ShapeNames.S:
      return "green";
    case ShapeNames.Z:
      return "red";
    case ShapeNames.T:
      return "purple";
    default:
      return ""
  }
}

export const Block = (props: BlockProps) => {
  const classList = `block ${getColorClassFromID(props.ID)}`;
  return <div className={classList}></div>
}