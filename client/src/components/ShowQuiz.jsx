import React from 'react';
import { Link } from 'react-router';
import ShowQuestion from './ShowQuestion.jsx';

class ShowQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz: {},
    };
  };

  componentDidMount() {
    fetch(`/api/quizzes/${this.props.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((quiz) => {
        this.setState({ quiz });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.props.params.id);
    const quiz = this.props.quizzes.find(quiz => quiz.id === Number(this.props.params.id));

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">

            <h2>{quiz && quiz.name}</h2>
            <h5>{quiz && quiz.description}</h5>

            <hr/>

            <h5>Enter your full name:</h5>
            <div className="quiz-take-name-input">
              <input type="text" className="form-control" placeholder="Full Name" />
            </div>

            <hr/>

            <ShowQuestion/>
            <ShowQuestion/>
            <ShowQuestion/>

          </div>
        </div>
      </div>
    );
  }
}

export default ShowQuiz;