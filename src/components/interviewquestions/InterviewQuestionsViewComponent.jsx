import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Interviews.css";
import interviews from "../../data/interviewquestions.json";

class InterviewQuestionsViewComponent extends Component {
  render() {
    return (
      <>
        <div className="interview">
          {interviews.map((data, id) => {
            if (this.props.match.params.name === data.name) {
              return (
                <div key={id}>
                  <h2>{data.subject}</h2>

                  <div className="interview"> {data.details}</div>
                </div>
              );
            }
          })}
          <br /> <br />
          <Link to="/interviews" className="backto">
            List of Interview questions
          </Link>
        </div>
      </>
    );
  }
}

export default InterviewQuestionsViewComponent;
