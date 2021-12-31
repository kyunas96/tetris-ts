import { Block } from "../Block/block";

const BoardRow = ({row} :{row: Array<number>}): JSX.Element => (
  <div className="board-row">
    {row.map(ID => <Block ID={ID} />)}
  </div>
)

export default BoardRow;