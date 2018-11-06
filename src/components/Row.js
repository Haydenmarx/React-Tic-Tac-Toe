import React from 'react';
import Square from './Square';
import './Row.css';

const Row = ({boardID, divider, squares, square1, square2, square3, location, piece, placePiece, gameOver}) => {
  if (divider) return <div className="divider-row"></div>;
  return (
    <div className="row">
      {squares.map( (location, i) => {
        if (typeof location !== 'string') {
          return (
            <Square 
              key={`board${boardID}square${location}`} 
              square={location} 
              piece={piece} 
              placePiece={placePiece}
              gameOver={gameOver}
            >
            </Square>
          )
        } else {
          return (
            <div 
              key={`board${boardID}divider${location}`}
              className={`upright-divider ${location}-divider`}
            >
            </div>
          )
        }
      })} 
    </div>
    );
}

export default Row;