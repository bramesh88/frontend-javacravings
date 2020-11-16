import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Articles.css";
import articles from "../../data/articles.json";

class ArticlesComponent extends Component {
  render() {
    return (
      <>
        <div className="articles">
          List of acticles...
          {articles.map((data, id) => {
            let url = `/javacravings/article/${data.name}`;
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

export default ArticlesComponent;
