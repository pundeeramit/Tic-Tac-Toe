import React from "react";
import "./App.css";
import GridRow from "./components/GridRow";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      turn: "x"
    };
  }
  updateBoard = (row, col) => {
    const arr = this.state.boardState;
    arr[row][col] = this.state.turn;
    this.setState({
      turn: this.state.turn === "x" ? "0" : "x",
      boardState: arr
    });
  };
  render() {
    return (
      <>
        <h1 className="header">Tic Tac Toe</h1>
        <div className="container">
          {[0, 1, 2].map((row) => {
            return (
              <GridRow
                index={row}
                boardState={this.state.boardState}
                updateBoard={this.updateBoard}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default App;
