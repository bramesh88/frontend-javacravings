import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Articles.css";
import articles from "../../data/articles.json";

class ArticleViewComponent extends Component {
  render() {
    return (
      <>
        <div className="articles">
          {articles.map((data, id) => {
            if (this.props.match.params.name ===data.name) {
              return (
                <div key={id}>
                  <h2>{data.subject}</h2>

                  <div className="article"> {data.details}</div>
                </div>
              );
            }
          })}
          <br /> <br />
          <Link to="/articles" className="backto">
            List of articles
          </Link>
        </div>
      </>
    );
  }
}

export default ArticleViewComponent;
