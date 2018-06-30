import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

const question_style = {
  textAlign: 'center',
  backgroundColor : 'yellow' 
};

const options_style = {
  textAlign: 'center',
  backgroundColor : 'blue'
};
class QuizQuestion extends Component {
  handleClick(buttonText) {
    if(buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
    }
  }
  render() {
      return (
        <main>
          <section>
            <p style = {question_style}>{this.props.quiz_question.instruction_text}</p><br />
          </section>
          <section style = {options_style}>
            <ul>
              {this.props.quiz_question.answer_options.map((answer_option, index) => {
                return (
                  <QuizQuestionButton key = {index} button_text = {answer_option} clickHandler = {this.handleClick.bind(this)}/>
                );
              })}
            </ul>
          </section>
        </main>
      );
  }
}

export default QuizQuestion;