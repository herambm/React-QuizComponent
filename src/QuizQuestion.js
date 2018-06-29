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
  render() {
      return (
        <main>
          <section>
            <p style = {question_style}>{this.props.quiz_question.instruction_text}</p><br />
          </section>
          <section style = {options_style}>
            <ul>
              <QuizQuestionButton button_text = {this.props.quiz_question.answer_options[0]} />
              <QuizQuestionButton button_text = {this.props.quiz_question.answer_options[1]} />
              <QuizQuestionButton button_text = {this.props.quiz_question.answer_options[2]} />
              <QuizQuestionButton button_text = {this.props.quiz_question.answer_options[3]} />
            </ul>
          </section>
        </main>
      );
  }
}

export default QuizQuestion;