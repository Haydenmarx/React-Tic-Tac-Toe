import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor() {
    super();
    this.state = {
      taken: false,
      preview: false,
      piece: null
    };
  }
  togglePreview = () => {
    if (!this.state.taken && !this.props.gameOver) this.setState({preview: !this.state.preview})
  }
  setDisplay = () => {
    if (!this.state.taken && !this.props.gameOver) {
      this.setState({preview: false, taken: true, piece: this.props.piece});
      this.props.placePiece(this.props.square);
    }
  }

  render() {
    return (
      <div className={`Square square${this.props.square}`}>
        <button
          onClick={this.setDisplay}
          onSubmit={this.setDisplay}
          onFocus={this.togglePreview}
          onMouseEnter={this.togglePreview}
          onBlur={this.togglePreview}
          onMouseLeave={this.togglePreview}
        >
          {this.state.preview && this.props.piece}
          {this.state.taken && this.state.piece}
        </button>
      </div>
    )
  }
}

export default Square;
