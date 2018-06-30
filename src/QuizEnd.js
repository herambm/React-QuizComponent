import React, {Component} from 'react'

const quiz_end_style = {
  textAlign : 'center'
};

class QuizEnd extends Component {
  handleResetClick(){
    this.props.resetClickHandler();
  }
  render() {
      return (
        <div style = {quiz_end_style}>
          <p>Thanks for playing!</p>
          <a href='' onClick = {this.handleResetClick.bind(this)}>Reset Quiz</a>
        </div>
      );
    }
}

export default QuizEnd;