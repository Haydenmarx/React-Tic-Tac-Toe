import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
  }
};
  addGame = () => {
    //temporaryID
    const newGameID = this.state.games.length + 1;
    let addedGame = this.state.games.slice();
    addedGame.unshift(newGameID)
    this.setState({games: addedGame});
  }
  render() {
    return (
      <div className="App">
        <div className="games">
          <div className="new-game">
            <button onClick={this.addGame}>New Game?</button>
          </div>
          {this.state.games.map( game => <GameBoard key={game} boardID={game}></GameBoard>)}
        </div>
      </div>
    );
  }
}

export default App;
