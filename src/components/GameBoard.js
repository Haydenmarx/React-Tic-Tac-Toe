import React, { Component } from 'react';
import Row from './Row';
import Game from '../gameLogic';
import './GameBoard.css';

class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      game: new Game('X', 'O'),
      // playerO:{name:'Hayden', games:[], Xwins:0, Owins: 0},
      // playerX:{name:'OtherHayden', games:[], Xwins:0, Owins: 0},
      piece: 'X',
      gameOver: false,
      rows: [0, 'divider', 3, 'divider', 6],
      display: 'visible',
    };
  }
  placePiece = (square) => {
   if (this.state.game.checkWinningMoves(square).length) {
     //update player Scores
     console.log(this.state.game.gameOver(false, square));
     this.setState({gameOver: true})
   } else {
    this.state.game.updateBoard(square);
    this.setState({piece: this.state.game.getPiece()});
   }
  }
  hide = () => {
    this.setState({display: 'invisible'})
  }
  render() {
    return (
      <div className={`Game ${this.state.display}`}>
        <div className='banner'>
          <h2>
            <span>{this.state.piece}'s </span>
            {!this.state.gameOver && <span>turn</span>}
            {this.state.gameOver && <span>Won</span>}
          </h2>
        </div>
        {this.state.rows.map( (row, i) => {
          if (row === 'divider') {
            return <Row key={`board${this.props.boardID}row${i}`} boardID={this.props.boardID} divider={true}></Row>
          } else {
            return (
              <Row
                key={`board${this.props.boardID}row${i}`}
                boardID={this.props.boardID}
                squares = {[row, 'left', row+1, 'right', row+2]}
                location='upper' 
                piece={this.state.piece} 
                placePiece={this.placePiece} 
                gameOver={this.state.gameOver}
              ></Row>
            )
          }
        })}
        <button onClick={this.hide} className="close">Close</button>
      </div>
    )
  }
}

export default GameBoard;
