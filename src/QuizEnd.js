import React, {Component} from 'react'

const quiz_end_style = {
  textAlign : 'center'
};
class QuizEnd extends Component {
    render() {
      return (
        <div style = {quiz_end_style}>
          <p>Thanks for playing!</p>
          <a href=''>Reset Quiz</a>
        </div>
      );
    }
}

export default QuizEnd;