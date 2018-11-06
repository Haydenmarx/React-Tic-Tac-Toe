class TicTacToe {
  constructor(playerX, playerO) {
    this.piece = 'X';
    this.board = [
      null,null,null,
      null,null,null,
      null,null,null
    ];
    this.gameover = false;
    this.playerO=playerO;
    this.playerX=playerX;
  }
  getPiece() {
    return this.piece;
  }
  updateBoard(square) {
    this.setPiece(square);
    this.piece === 'X' ? this.piece = 'O' : this.piece = 'X';
  }
  getPlayers(){
    return [this.playerO, this.playerX];
  }
  setPiece(square) {
    this.board[square] = this.piece;
  }
  checkWinningMoves(currentPiece) {
    let board = this.board.slice();
    let winning = [];
    if (currentPiece !== undefined) {
      board[currentPiece] = this.piece;
    }
    if (board[4] === this.piece) {
      if (board[1] === this.piece && board[7] === this.piece) {
        winning.push([1,4,7]);
      }
      if (board[3] === this.piece && board[5] === this.piece) {
        winning.push([3,4,5]);
      }
      if (board[0] === this.piece && board[8] === this.piece) {
        winning.push([0,4,8]);
      }
      if (board[2] === this.piece && board[6] === this.piece) {
        winning.push([2,4,6]);
      }
    }
    if(board[0] === this.piece) {
      if (board[1] === this.piece && board[2] === this.piece) {
        winning.push([0,1,2]);
      }
      if (board[3] === this.piece && board[6] === this.piece) {
        winning.push([0,3,6]);
      }
    }
    if (board[8] === this.piece) {
      if (board[6] === this.piece && board[7] === this.piece) {
        winning.push([6,7,8]);
      }
      if (board[2] === this.piece && board[5] === this.piece) {
        winning.push([2,5,8]);
      }
    }
    return winning;
  }
  gameOver(forfeit, square) {
    if (!forfeit) this.setPiece(square);
    this.gameover = !this.gameover;
    return this.getWinner();
  }
  getWinner(square) {
    let winning = {};
    winning.player = this.piece === 'O' ? this.playerO : this.playerX;
    winning.piece = this.piece;
    winning.board = this.board;
    return winning;
  }
}

export default TicTacToe;
