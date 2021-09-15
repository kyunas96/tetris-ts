import { Block } from "./block";

const BoardRow = (row: Array<number>): Array<JSX.Element> => {
  return row.map(ID => <Block ID={ID} />);
}

export default BoardRow;