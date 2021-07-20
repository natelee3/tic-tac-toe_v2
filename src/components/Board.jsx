import React from 'react';
import Square from './Square';

class Board extends React.Component {
    renderSquare(i) {
      let extraClassName = 'square';
      if (this.props.winningSquares && this.props.winningSquares.indexOf(i) > -1) {
          let extraClassName = 'square highlighted';
      }

      return (
        <Square 
          extraClass={extraClassName}
          key={"square" + i}
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)} 
        />
      );
    }

    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div> 
        </div>
      );
    }
  }

  export default Board;