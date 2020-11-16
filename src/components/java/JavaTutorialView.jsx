import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./java.css";
import java from "../../data/java.json";

class JavaTutorialView extends Component {
  render() {
    return (
      <>
        <div className="java">
          {java.map((data, id) => {
            if (this.props.match.params.name == data.name) {
              return (
                <div key={id}>
                  <h2>{data.subject}</h2>

                  <div className="java"> {data.details}</div>
                </div>
              );
            }
          })}
          <br /> <br />
          
        </div>
      </>
    );
  }
}

export default JavaTutorialView;
