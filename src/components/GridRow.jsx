import React from "react";
import GridItem from "./GridItem";
class GridRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const arr = [0, 1, 2];
    return (
      <div className="grid-row">
        {arr.map((item) => {
          return (
            <GridItem
              colIndex={item}
              rowIndex={this.props.index}
              boardState={this.props.boardState}
              updateBoard={this.props.updateBoard}
            />
          );
        })}
      </div>
    );
  }
}
export default GridRow;
