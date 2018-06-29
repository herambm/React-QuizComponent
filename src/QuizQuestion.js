import React, {Component} from 'react'

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
              <li>{this.props.quiz_question.answer_options[0]}</li>
              <li>{this.props.quiz_question.answer_options[1]}</li>
              <li>{this.props.quiz_question.answer_options[2]}</li>
              <li>{this.props.quiz_question.answer_options[3]}</li>
            </ul>
          </section>
        </main>
      );
  }
}

export default QuizQuestion;