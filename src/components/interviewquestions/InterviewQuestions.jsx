import React, { Component } from "react";
import "../todoapp/TodoApp.css";
import interview from "../../data/interviewquestions.json";

class InterviewQuestions extends Component {
  render() {
    return (
      <>
        <div className="interview">
          List of Interview questions...
          {interview.map((data, id) => {
            let url = `/javacravings/interview/${data.name}`;
            return (
              <div key={id}>
                <a href={url}>{data.name}</a>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default InterviewQuestions;
